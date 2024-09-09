### 页面缩放
``` go
package main

import (
	"embed"
	"fmt"
	"github.com/energye/energy/v2/cef"
	"github.com/energye/energy/v2/cef/ipc"
	"github.com/energye/energy/v2/cef/ipc/context"
	"github.com/energye/energy/v2/consts"
	"github.com/energye/energy/v2/pkgs/assetserve"
)

//go:embed resources
var resources embed.FS

func main() {
	//全局初始化 每个应用都必须调用的
	cef.GlobalInit(nil, &resources)
	//创建应用
	cefApp := cef.NewApplication()
	//主窗口的配置
	//指定一个URL地址，或本地html文件目录
	cef.BrowserWindow.Config.Url = "http://localhost:22022/index.html"
	cef.BrowserWindow.Config.IconFS = "resources/icon.ico"
	cef.SetBrowserProcessStartAfterCallback(func(b bool) {
		fmt.Println("主进程启动 创建一个内置http服务")
		//通过内置http服务加载资源
		server := assetserve.NewAssetsHttpServer()
		server.PORT = 22022
		server.AssetsFSName = "resources" //必须设置目录名
		server.Assets = &resources
		go server.StartHttpServer()
	})
	ipc.On("zoom-inc", func(context context.IContext) {
		bw := cef.BrowserWindow.GetWindowInfo(context.BrowserId())
		bw.Chromium().BrowserZoom(consts.ZOOM_INC)
		fmt.Println("zoom-inc")
	})
	ipc.On("zoom-dec", func(context context.IContext) {
		bw := cef.BrowserWindow.GetWindowInfo(context.BrowserId())
		bw.Chromium().BrowserZoom(consts.ZOOM_DEC)
		fmt.Println("zoom-dec")
	})
	ipc.On("zoom-reset", func(context context.IContext) {
		bw := cef.BrowserWindow.GetWindowInfo(context.BrowserId())
		bw.Chromium().BrowserZoom(consts.ZOOM_RESET)
		fmt.Println("zoom-reset")
	})
	//运行应用
	cef.Run(cefApp)
}

```

### html示例代码
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>browser-zoom</title>
    <style>
        button {
            height: 50px;
            width: 100px;
            margin: 10px;
        }
    </style>
    <script type="application/javascript">
        function reset() {
            ipc.emit("zoom-reset");
        }
        function dec() {
            ipc.emit("zoom-dec");
        }
        function inc() {
            ipc.emit("zoom-inc");
        }
    </script>
</head>
<body style="overflow: hidden;margin: 0px;padding: 0px;width: 100%;text-align: center;">
<button onclick="inc()">放大</button>
<button onclick="dec()">缩小</button>
<button onclick="reset()">重置</button>
<div>
    文字文字文字文字文字文字文字文字文字文字文字
</div>
<div>
    文字文字文字文字文字文字文字文字文字文字文字
</div>
<div>
    文字文字文字文字文字文字文字文字文字文字文字
</div>
<div>
    文字文字文字文字文字文字文字文字文字文字文字
</div>
</body>
</html>
```
