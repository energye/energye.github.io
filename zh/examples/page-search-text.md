
### 在页面上搜索文本
``` go
package main

import (
	"embed"
	"fmt"
	"github.com/energye/energy/v2/cef"
	"github.com/energye/energy/v2/cef/ipc"
	"github.com/energye/energy/v2/cef/ipc/context"
	"github.com/energye/energy/v2/pkgs/assetserve"
	"github.com/energye/golcl/lcl"
)

//go:embed resources
var resources embed.FS

func main() {
	//全局初始化 每个应用都必须调用的
	cef.GlobalInit(nil, &resources)
	//创建应用
	cefApp := cef.NewApplication()
	//指定一个URL地址，或本地html文件目录
	cef.BrowserWindow.Config.Url = "http://localhost:22022/index.html"
	cef.BrowserWindow.Config.IconFS = "resources/icon.ico"
	cef.BrowserWindow.Config.Title = "Energy 搜索页面中文本"
	cef.SetBrowserProcessStartAfterCallback(func(b bool) {
		fmt.Println("主进程启动 创建一个内置http服务")
		//通过内置http服务加载资源
		server := assetserve.NewAssetsHttpServer()
		server.PORT = 22022
		server.AssetsFSName = "resources" //必须设置目录名
		server.Assets = &resources
		go server.StartHttpServer()
	})
	cef.BrowserWindow.SetBrowserInit(func(event *cef.BrowserEvent, window cef.IBrowserWindow) {
		//搜索的结果在这个函数中返回
		event.SetOnFindResult(func(sender lcl.IObject, browser *cef.ICefBrowser, identifier, count int32, selectionRect *cef.TCefRect, activeMatchOrdinal int32, finalUpdate bool) {
			fmt.Println("OnFindResult:", identifier, count, selectionRect, activeMatchOrdinal, finalUpdate)
		})
	})
	//监听事件
	ipc.On("search-text", func(context context.IContext) {
		bw := cef.BrowserWindow.GetWindowInfo(context.BrowserId())
		fmt.Println("搜索文本", bw)
		text := context.ArgumentList().GetStringByIndex(0)
		fmt.Println("搜索内容", text)
		bw.Browser().Find(text, false, false, true)
	})
	//运行应用
	cef.Run(cefApp)
}


```

### html示例代码
``` 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>browser-search-text</title>
    <style>
        button {
            height: 80px;
            width: 100px;
            margin: 10px;
        }
    </style>
    <script type="application/javascript">
        function searchText() {
            var text = document.getElementById("text").value;
            //ipc函数，把要搜索的文本当做参数传递到go中
            ipc.emit("search-text",[text]);
        }
    </script>
</head>
<body style="overflow: hidden;margin: 0px;padding: 0px;width: 100%;text-align: center;">
<input id="text">
<button onclick="searchText()">搜索当前页面文本内容</button>
<br>
<div>
    这里放的搜索文本内容, Search text content here<br>
    这里放的搜索文本内容, Search text content here<br>
    这里放的搜索文本内容, Search text content here<br>
    这里放的搜索文本内容, Search text content here<br>
    这里放的搜索文本内容, Search text content here<br>
    这里放的搜索文本内容, Search text content here<br>
    这里放的搜索文本内容, Search text content here<br>
    这里放的搜索文本内容, Search text content here<br>
    这里放的搜索文本内容, Search text content here<br>
</div>
</body>
</html>
```
