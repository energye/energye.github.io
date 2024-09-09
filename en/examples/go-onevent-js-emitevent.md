### 效果图
![go-on-event-js-emit-event](/imgs/examples/go-on-event-js-emit-event.gif)

### Go监听事件JS触发事件

``` go
package main

import (
	"bytes"
	"embed"
	"fmt"
	"github.com/energye/energy/v2/cef"
	"github.com/energye/energy/v2/cef/ipc"
	"github.com/energye/energy/v2/cef/ipc/context"
	"github.com/energye/energy/v2/pkgs/assetserve"
	"strings"
)

//go:embed resources
var resources embed.FS

func main() {
	//全局初始化 每个应用都必须调用的
	cef.GlobalInit(nil, &resources)
	//创建应用
	cefApp := cef.NewApplication()
	//指定一个URL地址，或本地html文件目录
	cef.BrowserWindow.Config.Url = "http://localhost:22022/go-to-js.html"
	cef.BrowserWindow.Config.Title = "Energy - go on event - js emit event"
	cef.BrowserWindow.Config.IconFS = "resources/icon.ico"

	//在go中监听一个事件, 不带返回值
	//使用上下文获取参数
	ipc.On("go-on-event-demo", func(context context.IContext) {
		fmt.Println("go-on-event-demo event run")
		//js 中传递的数据
		//虽然 Arguments 结构支持多个数据类型，但在js和go的对应中，只保留了 string, integer, double, boolean 的对应关系，其它类型在 go 和 js数据传递时不支持
		arguments := context.ArgumentList()
		fmt.Println("参数个数:", arguments.Size())
		//参数是以js调用时传递的参数下标位置开始计算，从0开始表示第1个参数
		p1 := arguments.GetStringByIndex(0)
		fmt.Println("参数1:", p1)
	})

	//带有返回值的事件
	//使用上下文获取参数
	ipc.On("go-on-event-demo-return", func(context context.IContext) {
		fmt.Println("go-on-event-demo-return event run")
		//js 中传递的数据
		//虽然 Arguments 结构支持多个数据类型，但在js和go的对应中，只保留了 string, integer, double, boolean 的对应关系，其它类型在 go 和 js数据传递时不支持
		arguments := context.ArgumentList()
		fmt.Println("参数个数:", arguments.Size())
		//参数是以js调用时传递的参数下标位置开始计算，从0开始表示第1个参数
		p1 := arguments.GetStringByIndex(0)
		p2 := arguments.GetIntByIndex(1)
		p3 := arguments.GetBoolByIndex(2)
		p4 := arguments.GetFloatByIndex(3)
		p5 := arguments.GetStringByIndex(4)
		fmt.Println("\t参数1-length:", len(p1), p1)
		//fmt.Println("\t参数1:", p1)
		fmt.Println("\t参数2:", p2)
		fmt.Println("\t参数3:", p3)
		fmt.Println("\t参数4:", p4)
		fmt.Println("\t参数5:", p5)
		//返回给JS数据, 通过 context.Result()
		var buf = bytes.Buffer{}
		for i := 0; i < 100000; i++ {
			buf.WriteString(fmt.Sprintf("[%d]-", i))
		}
		var data = "这是在GO中监听事件返回给JS的数据:" + buf.String()
		fmt.Println("返回给JS数据 - length:", strings.Count(data, "")-1)
		context.Result(data)
	})

	// 在Go中监听一个事件, 不带返回值
	// 使用形参接收参数
	// 在JS中入参类型必须相同
	ipc.On("go-on-event-demo-argument", func(param1 int, param2 string, param3 float64, param4 bool, param5 string) {
		fmt.Println("param1:", param1)
		fmt.Println("param2:", param2)
		fmt.Println("param3:", param3)
		fmt.Println("param4:", param4)
		fmt.Println("param5:", param5)
	})

	// 在Go中监听一个事件, 带返回值
	// 使用形参接收参数
	// 在JS中入参类型必须相同
	// 返回参数可以同时返回多个, 在JS接收时同样使用回调函数方式以多个入参形式接收
	ipc.On("go-on-event-demo-argument-return", func(param1 int, param2 string, param3 float64, param4 bool, param5 string) string {
		fmt.Println("param1:", param1)
		fmt.Println("param2:", param2)
		fmt.Println("param3:", param3)
		fmt.Println("param4:", param4)
		fmt.Println("param5:", param5)
		return fmt.Sprintf("%d-%v-%v-%v-%v", param1, param2, param3, param4, param5)
	})

	//内置http服务链接安全配置
	cef.SetBrowserProcessStartAfterCallback(func(b bool) {
		fmt.Println("主进程启动 创建一个内置http服务")
		//通过内置http服务加载资源
		server := assetserve.NewAssetsHttpServer()
		server.PORT = 22022
		server.AssetsFSName = "resources" //必须设置目录名
		server.Assets = &resources
		go server.StartHttpServer()
	})
	//运行应用
	cef.Run(cefApp)
}

```

### html示例代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>go-to-js</title>
    <script type="application/javascript">
        function clearMessage() {
            document.getElementById("message").innerHTML = "";
        }

        function writeMessage(data) {
            let message = document.getElementById("message");
            message.innerHTML = message.innerHTML + data + "<br>"
        }

        //ipc.emit函数有3个参数
        //参数1 事件名        必填    string类型
        //参数2 参数          非必填  array类型,传递到Go中的数据,
        //                          参数只保留了 string, integer, double, boolean 的对应关系，其它类型在 go和 js数据传递时不支持
        //                          参数是以js调用时传递的参数下标位置开始计算，从0开始表示第1个参数
        //参数3 回调函数      非必填   function类型, go返回的结果

        //调用Go中监听的事件
        function goOnEventDemo() {
            clearMessage()
            //参数传递,从下标0开始表示第1个参数
            ipc.emit('go-on-event-demo', ['传递的数据'])
        }

        //带有返回值的事件
        function goOnEventDemoReturn() {
            clearMessage()
            //参数传递,从下标0开始表示第1个参数
            var strData = ""
            for (var i = 0; i < 100000; i++) {
                strData += "[" + i + "]";
            }
            ipc.emit('go-on-event-demo-return', ['传递的数据:' + strData, 99999, false, 9999.999, "这是第五个参数"], function (data) {
                writeMessage("data-length: " + data.length)
                writeMessage("data: " + data)
            })
        }

        // 在Go中监听一个事件, 不带返回值
        // 使用形参接收参数
        // 在JS中入参类型必须相同
        function goOnEventDemoArgument() {
            ipc.emit('go-on-event-demo-argument', [100, '字符串-Energy', 1000.001, true, "字符串"]);
        }

        // 在Go中监听一个事件, 带返回值
        // 使用形参接收参数
        // 在JS中入参类型必须相同
        function goOnEventDemoArgumentReturn() {
            ipc.emit('go-on-event-demo-argument-return', [100, '字符串-Energy', 1000.001, true, "字符串"], function (result) {
                writeMessage("result: " + result)
            });
        }
    </script>
</head>
<body style="margin: 0px;padding: 0px;">
Go中监听事件，JS中调用<br>
<button onclick="goOnEventDemo()">go-on-event-demo</button>
<button onclick="goOnEventDemoReturn()">go-on-event-demo-return</button>
<button onclick="goOnEventDemoArgument()">go-on-event-demo-argument</button>
<button onclick="goOnEventDemoArgumentReturn()">go-on-event-demo-argument-return</button>
<div id="message"></div>
</body>
</html>
```

### 说明
#### Go监听事件
```go
ipc.On("事件名", [callback func])
```
- 事件名: 在Go里监听事件名
- callback func: 事件回调函数，用于接收JS触发该事件时传递的参数

#### JS调用(触发)事件
```js
ipc.emit("事件名", [[参数列表], callback function])
```

- 事件名: JS触发Go监听的事件名
- 参数列表: 数组类型，触发事件时传递的参数
- callback function: 回调函数，如果Go有返回值则应在此函数中接收
