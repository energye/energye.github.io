## 效果图
![Description](/imgs/examples/simple.gif)

---

## 开发环境安装
> [开发环境安装](/course/install-env)

## 创建应用-简单示例
### 这是一个非常简单的程序
``` go
package main

import (
	"embed"
	"fmt"
	"github.com/energye/energy/v2/cef"
	"github.com/energye/golcl/lcl"
)

//go:embed resources
var resources embed.FS

//这是一个简单的窗口创建示例
func main() {
	//全局初始化 每个应用都必须调用的
	cef.GlobalInit(nil, &resources)
	//创建应用
	cefApp := cef.NewApplication()
	//主窗口的配置
	cef.BrowserWindow.Config.IconFS = "resources/icon.ico"
	//指定一个URL地址，或本地html文件目录
	cef.BrowserWindow.Config.Url = "https://www.baidu.com"
	//窗口的标题
	cef.BrowserWindow.Config.Title = "energy - 这是一个简单的窗口示例"
	//窗口宽高
	cef.BrowserWindow.Config.Width = 1024
	cef.BrowserWindow.Config.Height = 768
	//创建窗口时的回调函数 对浏览器事件设置，和窗口属性组件等创建和修改
	cef.BrowserWindow.SetBrowserInit(func(event *cef.BrowserEvent, browserWindow cef.IBrowserWindow) {
		fmt.Println("SetBrowserInit")
	})
	//运行应用
	cef.Run(cefApp)
}

```

- 第一次需要更新go.mod依赖
```cmd
go mod tidy
```

---
> 运行命令: `go run main.go`
> 
> 编译命令: `go build`
> 
> 编译命令-隐藏cmd黑窗口: `go build -ldflags "-H windowsgui -s -w"`

