### 效果图
![Description](/imgs/examples/cookie-rw.gif)

### Cookie读写
``` go
package main

import (
	"embed"
	"encoding/json"
	"fmt"
	"github.com/energye/energy/v2/cef"
	"github.com/energye/energy/v2/cef/ipc"
	"github.com/energye/energy/v2/cef/ipc/context"
	"github.com/energye/energy/v2/common"
	"github.com/energye/energy/v2/consts"
	"github.com/energye/energy/v2/pkgs/assetserve"
	"github.com/energye/golcl/lcl"
	"time"
)

//资源目录，内置到执行程序中
//go:embed resources
var resources embed.FS

//这个示例使用了几个事件来演示下载文件
func main() {
	//全局初始化 每个应用都必须调用的
	cef.GlobalInit(nil, &resources)
	//创建应用
	cefApp := cef.NewApplication()
	//主窗口的配置
	//指定一个URL地址，或本地html文件目录
	cef.BrowserWindow.Config.Url = "http://localhost:22022/cookie.html"
	if common.IsLinux() {
		cef.BrowserWindow.Config.IconFS = "resources/icon.png"
	} else {
		cef.BrowserWindow.Config.IconFS = "resources/icon.ico"
	}

	//监听获取cookie事件
	ipc.On("VisitCookie", func(context context.IContext) {
		fmt.Println("VisitCookie")
		info := cef.BrowserWindow.GetWindowInfo(context.BrowserId())
		info.Chromium().VisitURLCookies("https://www.baidu.com", true, 1)
		info.Chromium().VisitAllCookies(1)
		context.Result("执行成功，结果将在 SetOnCookiesVisited 事件中获得")
	})
	//监听删除cookie
	ipc.On("DeleteCookie", func(context context.IContext) {
		info := cef.BrowserWindow.GetWindowInfo(context.BrowserId())
		info.Chromium().DeleteCookies("", "", false)
		context.Result("执行成功，结果将在 SetOnCookiesDeleted 事件中获得")
	})
	//监听设置cookie
	ipc.On("SetCookie", func(context context.IContext) {
		info := cef.BrowserWindow.GetWindowInfo(context.BrowserId())
		info.Chromium().SetCookie("https://www.example.com", "example_cookie_name", "1234", "", "/", true, true, false, time.Now(), time.Now(), time.Now(), consts.Ccss_CEF_COOKIE_SAME_SITE_UNSPECIFIED, consts.CEF_COOKIE_PRIORITY_MEDIUM, false, 0)
		info.Chromium().SetCookie("https://www.example.com", "example_cookie_name2", "123422", "", "/", true, true, false, time.Now(), time.Now(), time.Now(), consts.Ccss_CEF_COOKIE_SAME_SITE_UNSPECIFIED, consts.CEF_COOKIE_PRIORITY_MEDIUM, false, 0)
		info.Chromium().SetCookie("https://www.baidu.com", "demo_name", "4321", "", "/", true, true, false, time.Now(), time.Now(), time.Now(), consts.Ccss_CEF_COOKIE_SAME_SITE_NO_RESTRICTION, consts.CEF_COOKIE_PRIORITY_MEDIUM, false, 1)
		context.Result("执行成功，结果将在 SetOnCookieSet 事件中获得")
	})

	//在SetBrowserInit中设置cookie事件,这些事件将返回操作后的结果
	cef.BrowserWindow.SetBrowserInit(func(event *cef.BrowserEvent, browserWindow cef.IBrowserWindow) {
		//获取cookie时触发
		event.SetOnCookiesVisited(func(sender lcl.IObject, cookie *cef.ICefCookie) {
			fmt.Printf("SetOnCookiesVisited: %+v\n", cookie)
			//将结果返回到html中
			data, _ := json.Marshal(cookie)
			ipc.Emit("VisitCookieResult", string(data))
		})
		//删除cookie时触发
		event.SetOnCookiesDeleted(func(sender lcl.IObject, numDeleted int32) {
			fmt.Printf("SetOnCookiesDeleted: %+v\n", numDeleted)
		})
		//设置cookie时触发
		event.SetOnCookieSet(func(sender lcl.IObject, success bool, ID int32) {
			fmt.Println("SetOnCookieSet: ", success, ID)
		})
		event.SetOnCookiesFlushed(func(sender lcl.IObject) {
			fmt.Println("OnCookiesFlushed")
		})
		event.SetOnCookieVisitorDestroyed(func(sender lcl.IObject, ID int32) {
			fmt.Println("OnCookieVisitorDestroyed")
		})
	})
	//在主进程启动成功之后执行
	//在这里启动内置http服务
	//内置http服务需要使用 go:embed resources 内置资源到执行程序中
	cef.SetBrowserProcessStartAfterCallback(func(b bool) {
		fmt.Println("主进程启动 创建一个内置http服务")
		//通过内置http服务加载资源
		server := assetserve.NewAssetsHttpServer()
		server.PORT = 22022               //服务端口号
		server.AssetsFSName = "resources" //必须设置目录名和资源文件夹同名
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
    <title>cookie</title>
    <style type="text/css">
        button {
            margin: 10px;
        }
    </style>
    <script type="application/javascript">
        function message() {
            return document.getElementById("message");
        }
        //显示cookie
        function VisitCookie() {
            message().innerHTML = "";
            //触发go中监听的事件
            ipc.emit("VisitCookie", function (data) {
                message().innerHTML = data;
            });
        }
        //显示cookie的结果，从go中返回到html
        ipc.on("VisitCookieResult", function (data) {
            message().innerHTML = message().innerHTML + data + "<br><br>";
        });

        //删除cookie
        function DeleteCookie() {
            message().innerHTML = "";
            //触发go中监听的事件
            ipc.emit("DeleteCookie", function (data) {
                message().innerHTML = data;
            });
        }

        //设置cookie
        function SetCookie() {
            message().innerHTML = "";
            //触发go中监听的事件
            ipc.emit("SetCookie", function (data) {
                message().innerHTML = data;
            });
        }
    </script>
</head>
<body style="overflow: hidden;margin: 0px;padding: 0px;">
<button onclick="VisitCookie()">查看cookie</button>
<button onclick="DeleteCookie()">删除cookie</button>
<button onclick="SetCookie()">设置cookie</button>
<br>
<div id="message">

</div>
</body>
</html>
```

### 说明
> 在主进程中，使用事件机制监听
>> ipc.IPC.Browser().SetOnEvent
>
> 事件监听在Go中监听的事件, 用于在Go的其它进程或渲染(Render)进程(web html)中调用
>> event.On
>
> 获取主窗口信息
>> 在主窗口对象中获得chromium对象
>> var info = cef.BrowserWindow.GetWindowInfo(context.BrowserId())
>
> 获取cookie，将触发OnCookiesVisited事件
>> info.Chromium().VisitURLCookies
>> info.Chromium().VisitAllCookies
>
> 删除cookie，将触发OnCookiesDeleted事件
>> info.Chromium().DeleteCookies
>
> 设置cookie，将触发OnCookieSet事件
>> info.Chromium().SetCookie
>
---
> 在回调函数BrowserWindow.SetBrowserInit设置事件监听
>> cef.BrowserWindow.SetBrowserInit
>
> 获取cookie时触发事件
>> event.SetOnCookiesVisited
>
> 删除cookie时触发事件
>> event.SetOnCookiesDeleted
>
> 设置cookie时触发事件
>> event.SetOnCookieSet
>
---
> html中js事件触发
>> ipc.emit
>
---
> 进程启动后执行回调
>> cef.SetBrowserProcessStartAfterCallback
>> 在这里创建了内置http服务
