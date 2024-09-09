### 效果图
![Description](/imgs/examples/execute-javascript.gif)

### Go执行JS代码
``` go
package main

import (
	"embed"
	"fmt"
	"github.com/energye/energy/v2/cef"
	"github.com/energye/energy/v2/cef/ipc"
	"github.com/energye/energy/v2/pkgs/assetserve"
	"time"
)

//go:embed resources
var resources embed.FS

func main() {
	//全局初始化 每个应用都必须调用的
	cef.GlobalInit(nil, &resources)
	//创建应用
	cefApp := cef.NewApplication()
	//指定一个URL地址，或本地html文件目录
	cef.BrowserWindow.Config.Url = "http://localhost:22022/js-to-go.html"
	cef.BrowserWindow.Config.Title = "Energy - js on event - go emit event"
	cef.BrowserWindow.Config.IconFS = "resources/icon.ico"

	//内置http服务链接安全配置
	cef.SetBrowserProcessStartAfterCallback(func(b bool) {
		fmt.Println("主进程启动 创建一个内置http服务")
		//通过内置http服务加载资源
		server := assetserve.NewAssetsHttpServer()
		server.PORT = 22022
		server.AssetsFSName = "resources" //必须设置目录名
		server.Assets = &resources
		go server.StartHttpServer()
		// 在这里模拟传递参数在主进程触发JS监听的事件
		// 定时执行web js
		go timeTask()
	})
	//运行应用
	cef.Run(cefApp)
}

//定时执行web js
func timeTask() {
	//这里模拟go中触发js监听的事件
	var param0 = 0
	for {
		//每1秒钟执行一次
		time.Sleep(time.Second)
		fmt.Println("timeTask", param0)
		param0++
		//将数据发送出去
		ipc.Emit("js-on-event-demo", fmt.Sprintf("Go发送的数据: %d", param0), float64(param0+10))
		// 如果JS返回结果, 需要通过回调函数入参方式接收返回值
		ipc.EmitAndCallback("js-on-event-demo-return", []any{fmt.Sprintf("Go发送的数据: %d", param0), float64(param0 + 10)}, func(r1 string) {
			//需要正确的获取类型，否则会失败
			fmt.Println("JS返回数据:", r1)
		})
	}
}

```

### html示例代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>execute-javascript</title>
    <script type="application/javascript">
        function GoExecuteJSFunc(param, param1) {
            let message = document.getElementById("message");
            message.innerHTML = message.innerHTML + "param0: " + param + "  param1: " + param1 + "<br>"
            if (param % 2 === 0) {
                message.style.color = "red"
            } else {
                message.style.color = "blue"
            }
        }
    </script>
</head>
<body style="overflow: hidden;margin: 0px;padding: 0px;">
execute-javascript:<br>
<div id="message">

</div>
</body>
</html>
```

### 说明
> 这个示例启用一个单独的协程执行js函数
> 获得主窗口
>> info := cef.BrowserWindow.MainWindow()
>
> 调用Chromium.ExecuteJavaScript执行js函数
>
>> info.Chromium().ExecuteJavaScript
>> 可传递参数, 无返回值
---
> web html代码定义函数 GoExecuteJSFunc
---
> 进程启动后执行回调
>> cef.SetBrowserProcessStartAfterCallback
>> 在这里创建了内置http服务
