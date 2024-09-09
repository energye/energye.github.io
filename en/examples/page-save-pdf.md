### 页面保存PDF
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
	"os"
	"path"
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
	cef.BrowserWindow.Config.Title = "Energy 打印PFD预览"
	cef.SetBrowserProcessStartAfterCallback(func(b bool) {
		fmt.Println("主进程启动 创建一个内置http服务")
		//通过内置http服务加载资源
		server := assetserve.NewAssetsHttpServer()
		server.PORT = 22022
		server.AssetsFSName = "resources" //必须设置目录名
		server.Assets = &resources
		go server.StartHttpServer()
	})
	wd, _ := os.Getwd()
	//监听事件
	ipc.On("print-pdf", func(context context.IContext) {
		bw := cef.BrowserWindow.GetWindowInfo(context.BrowserId())
		savePath := path.Join(wd, "example", "browser-print-pdf", "test.pdf")
		fmt.Println("当前页面保存为PDF", savePath)
		bw.Chromium().PrintToPDF(savePath)
	})
	cef.BrowserWindow.SetBrowserInit(func(event *cef.BrowserEvent, window cef.IBrowserWindow) {
		window.Chromium().SetOnPdfPrintFinished(func(sender lcl.IObject, ok bool) {
			fmt.Println("OnPdfPrintFinished:", ok)
		})
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
    <title>browser-print-pdf</title>
    <style>
        button {
            height: 80px;
            width: 100px;
            margin: 10px;
        }
    </style>
    <script type="application/javascript">
        function printPDF() {
            ipc.emit("print-pdf");
        }
    </script>
</head>
<body style="overflow: hidden;margin: 0px;padding: 0px;width: 100%;text-align: center;">
<button onclick="printPDF()">当前页面打印PDF</button>
</body>
</html>
```
