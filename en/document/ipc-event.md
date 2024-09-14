# IPC 事件驱动

### IPC 事件
它是基于`CEF进程消息`和`Go自定义协议`组合实现

- CEF进程消息: Application 和 Chromium 的 `OnProcessMessageReceived` 事件
- Application 处理渲染进程消息
- Chromium 处理主进程消息

- Go自定义协议: 在Go与Go代码之间消息传递时使用

在 Application `OnContextCreated` 事件执行时注入 `ipc` JavaScript 对象到浏览器, 它绑定了 `on` 和 `emit` 函数, 在每一个浏览器创建后都会注入`ipc`

### 使用方式

#### 在Go中定义事件
使用 `ipc.On(name string, fn interface{}, options ...types.OnOptions)` 注册监听一个事件
- name: 事件名
- fn: 回调函数, 该事件被触发时执行的函数
- options: 监听选项, 它提供了2种监听模式，和3种监听类型


##### fn 回调函数
它可以接收参数和返回数据. 提供了几种自动识别的参数类型。
1. context.IContext: 当前事件被执行时原始的事件上下文，在这里可以直接取事件信息
```go
// IContext
//	Inter process IPC communication callback context
type IContext interface {
	ArgumentList() json.JSONArray //ArgumentList
	BrowserId() int32             //Event ownership: browser id
	FrameId() int64               //Event ownership: frame id
	Replay() IReplay              //Replay, When the trigger event returns IContext, this field is nil
	Result(data ...interface{})   //callback function return Result
} 
```
2. callback.IChannel: 当前事件被执行时, 该参数类型可自动识别当前事件是从哪一个浏览器触发, 它可以拿到指定的`BrowserId`和`ChannelId`
```go
// IChannel
//
//	The channel ID of the parameter type callback function
//	Used for listening to events and receiving parameters from the event channel source
type IChannel interface {
	BrowserId() int32 //Receive Browser Window ID
	ChannelId() int64 //Receive Channel ID
}
```
3. Go和JS的基础和复合类型对应
   常用的基础类型和结构

##### options 监听选项
```go
// OnOptions Listening options
type OnOptions struct {
	OnType OnType // Listening type, default main process
	Mode   Mode   // IPC emit mode of the browser process
}
```

##### 监听选项-监听类型
```go
// OnType listening type
type OnType int8

const (
	OtMain OnType = iota // Only the main process
	OtSub                // Only the sub process
	OtAll                // All process
)
```

##### 监听选项-监听模式
```go
// Mode IPC mode of the browser process
type Mode = int8

const (
	// MSync Synchronization, the default way CEF is used
	//  In JS, ipc.emit triggers the Go event and processes long-term tasks. The window will remain frozen until the task processing is completed.
	MSync Mode = iota
	// MAsync
	//  Asynchronous, using coroutines, coroutines (within the event) cannot be debugged, there are no other unforeseen problems found so far.
	//  异步 (Asynchronous): Refers to an approach where operations can continue without waiting for the previous operations' completion.
	//  使用协程 (using coroutines): Indicates the implementation or employment of coroutines, which are a way to manage the execution flow in a non-preemptive manner.
	//  协程(事件内)无法Debug (coroutines (within the event) cannot be debugged): Points out the inability to debug coroutines when they are inside an event.
	//  暂未发现其它无法预料的问题 (there are no other unforeseen problems found so far): Indicates that, at the time of the statement, no other unforeseen issues have been encountered or identified.
	//
	// 使用场景 (Usage scenarios):
	//
	//  Only applicable when using JS ipc.emit to trigger events.
	//  Recommended for use in the Go UI main thread when performing long-duration tasks, otherwise it will freeze the UI window.
	MAsync
)
```



#### 在JS中定义事件
使用 `ipc.on(name: string, fn: function)` 注册监听一个事件

- name: 事件名
- fn: 回调函数, 该事件被触发时执行的函数

##### fn 回调函数
它可以接收参数和返回数据. 参数类型为常用的基础类型和复合类型(JSON or Array)


#### 在Go中触发JS事件
在Go有4种触发方式, 都是异步执行, 默认触发主浏览器
- `ipc.Emit(name string, argument ...interface{}) bool`
- `ipc.EmitAndCallback(name string, argument []interface{}, callback interface{}) bool`
- `ipc.EmitTarget(name string, target target.ITarget, argument ...interface{}) bool`
- `ipc.EmitTargetAndCallback(name string, target target.ITarget, argument []interface{}, callback interface{}) bool`

##### 参数
- name: JS监听的事件名
- argument: JS监听的回调函数参数，需要注意参数类型
- callback: 触发回调函数，在JS里如果有返回值可通过该函数获取, 该函数没有返回值
- target: 触发事件接收目标, 接口类型, 当事件触发目标不是主浏览器时，通过该参数将事件触发给指定浏览器

###### ITarget
```go
// ITarget
//
// ipc.NewTarget() *Target
type ITarget interface {
	BrowserId() int32 // Browser Window ID
	ChannelId() int64 // IPC channelID, frameId or GO IPC channelID
	TargetType() Type // Target type default 0: Trigger JS event
	Window() IWindow  // Send IPC Chromium
}
```
它有几个已实现接口结构
-. LCLBrowserWindow
-. ViewsFrameworkBrowserWindow
-. TCEFChromium
-. ICefFrame
   除此之外还可以通过已实现的结构 `Target(targetType ...target.Type)` 函数定义接收类型.

ITarget 它可以控制事件消息发送位置
```go
// Type
//
//	0: Trigger the JS event of the specified target process
//	1: Trigger TgGoSub events for the specified target sub process
//	2: Trigger TgGoMain events for the specified target main process
type Type int8

const (
	TgJs     Type = iota //JS Event
	TgGoSub              //GO Event sub
	TgGoMain             //GO Event main
)
```

```go

```

#### 在JS中触发Go事件
有2种方式
- `ipc.emit(name, argument: array, callback: function)`
- `ipc.emit({name:string, arguments: array, callback: function, mode: int, target: int})`

##### 参数
- name: 被触发事件名
- argument: 可选，要传递的参数
- callback: 可选，触发后回调函数，它可接收Go的返回值
- mode: 可选，触发模式
```const
0: 异步 
1: 同步
default 0
```
- target: 可选，触发接收目标，需要和Go的监听配合使用，默认是主进程
```const
0: 主进程 
1: 当前进程
2: 其它进程(需要主进程)
default 0
```

```js
let userData = {"key1":{"Name":"张三1","Age":66,"Income":99988.0009,"Sex":true,"UserInfo":{"Addr":"addr","HeadPicture":"https://www.demo.com/head.png","Height":800,"Weight":800,"Phone":"888-999-000"}},"zhangsan-2":{"Sex":true,"UserInfo":{"HeadPicture":"https://www.demo.com/head.png","Height":800,"Weight":800,"Phone":"888-999-000","Addr":"银河系-猎户座旋臂(离中心远,离边缘近)-太阳系第三环总体位置,离银棒(中心)"},"Name":"张三2","Age":66,"Income":99988.0009},"zhangsan-3":{"Sex":true,"UserInfo":{"Addr":"银河系-猎户座旋臂(离中心远,离边缘近)-太阳系第三环总体位置,离银棒(中心)","HeadPicture":"https://www.demo.com/head.png","Height":800,"Weight":800,"Phone":"888-999-000"},"Name":"张三3","Age":66,"Income":99988.0009}}
ipc.emit('setUserInfo', [userData], function (data) {
   
})

ipc.emit({
    name: "name",
    arguments: ["energy"], 
    callback: function (data) { 
       
    },
    mode: 0, 
    target: 0
})
```
