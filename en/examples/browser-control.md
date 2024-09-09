### 效果图
![Description](/imgs/examples/control.gif)

### 浏览器控制
```go
package main

import (
	"embed"
	"github.com/energye/energy/v2/cef"
	"github.com/energye/energy/v2/example/browser-control/src"
)

//go:embed resources
var resources embed.FS

//go:embed libs
var libs embed.FS

func main() {
	//开发环境中 MacOSX平台必须在"GlobalInit"之前设置CEF
	//设置使用CEF 和 CEF框架目录，生成开发执行应用程序包
	//环境变量 ENERGY_HOME="/app/cefframework" 配置框架所在目录
	//全局初始化 每个应用都必须调用的
	cef.GlobalInit(&libs, &resources)
	//创建应用
	cefApp := cef.NewApplication()
	cefApp.SetEnableGPU(true)
	//主进程窗口
	src.MainBrowserWindow()

	//运行应用
	cef.Run(cefApp)
}

```

### 使用了什么？
- 该示例使用系统原生UI控件和CEF控件

其中窗口上方按钮和下拉框使用原生控件，下面展示网页部分使用CEF控件

### 初始化主进程窗口

```go
package src

import (
	"fmt"
	"github.com/energye/energy/v2/cef"
	"github.com/energye/energy/v2/cef/process"
	"github.com/energye/energy/v2/common"
	"github.com/energye/golcl/lcl"
	"github.com/energye/golcl/lcl/types"
)

//主浏览器窗口
func MainBrowserWindow() {
	//只有启动主进程才会继续执行
	if !process.Args.IsMain() {
		return
	}
	//主窗口的配置
	//指定一个URL地址，或本地html文件目录
	cef.BrowserWindow.Config.Url = "https://energy.yanghy.cn/"
	//窗口的标题
	cef.BrowserWindow.Config.Title = "Energy - 浏览器控制"
	//窗口宽高
	cef.BrowserWindow.Config.Width = 1024
	cef.BrowserWindow.Config.Height = 768
	if common.IsLinux() {
		cef.BrowserWindow.Config.IconFS = "resources/icon.png"
	} else {
		cef.BrowserWindow.Config.IconFS = "resources/icon.ico"
	}
	//chromium配置
	config := cef.NewChromiumConfig()
	config.SetEnableMenu(true)
	config.SetEnableDevTools(true)
	cef.BrowserWindow.Config.SetChromiumConfig(config)
	//创建窗口时的回调函数 对浏览器事件设置，和窗口属性组件等创建和修改
	cef.BrowserWindow.SetBrowserInit(func(event *cef.BrowserEvent, window cef.IBrowserWindow) {
		if window.IsLCL() {
			//在窗体初始化时创建窗口内的组件
			back, forward, stop, refresh, progressLabel, addr := controlUI(window.AsLCLBrowserWindow().BrowserWindow())
			//页面加载处理进度
			event.SetOnLoadingProgressChange(func(sender lcl.IObject, browser *cef.ICefBrowser, progress float64) {
				//linux 更新UI组件必须使用 QueueAsyncCall 主线程异步同步
				cef.QueueAsyncCall(func(id int) {
					//参数-进度
					progressLabel.SetCaption(fmt.Sprintf("%v", progress*100))
				})
			})
			//页面加载状态，根据状态判断是否加载完成，和是否可前进后退
			event.SetOnLoadingStateChange(func(sender lcl.IObject, browser *cef.ICefBrowser, isLoading, canGoBack, canGoForward bool) {
				//linux 更新UI组件必须使用 QueueAsyncCall 主线程异步同步
				cef.QueueAsyncCall(func(id int) {
					//控制按钮状态
					stop.SetEnabled(isLoading)
					refresh.SetEnabled(!isLoading)
					back.SetEnabled(canGoBack)
					forward.SetEnabled(canGoForward)
				})
			})
			event.SetOnAddressChange(func(sender lcl.IObject, browser *cef.ICefBrowser, frame *cef.ICefFrame, url string) {
				cef.QueueAsyncCall(func(id int) {
					addr.SetText(url)
				})
			})
		}
	})
}

//控制组件UI
//地址栏和控制按钮创建
func controlUI(browserWindow *cef.LCLBrowserWindow) (goBack *lcl.TButton, goForward *lcl.TButton, stop *lcl.TButton, refresh *lcl.TButton, progressLabel *lcl.TLabel, addrBox *lcl.TComboBox) {
	window := browserWindow
	//这里使用系统UI组件
	//创建panel做为地址栏的父组件
	addrPanel := lcl.NewPanel(window) //设置父组件
	addrPanel.SetParent(window)
	addrPanel.SetAnchors(types.NewSet(types.AkLeft, types.AkTop, types.AkRight)) //设置锚点定位，让宽高自动根据窗口调整大小
	addrPanel.SetHeight(30)
	addrPanel.SetWidth(window.Width())
	//创建 按钮-后退
	goBack = lcl.NewButton(addrPanel) //设置父组件
	goBack.SetParent(addrPanel)
	goBack.SetCaption("后退")
	goBack.SetBounds(5, 3, 35, 25)
	goForward = lcl.NewButton(addrPanel) //设置父组件
	goForward.SetParent(addrPanel)
	goForward.SetCaption("前进")
	goForward.SetBounds(45, 3, 35, 25)
	stop = lcl.NewButton(addrPanel) //设置父组件
	stop.SetParent(addrPanel)
	stop.SetCaption("停止")
	stop.SetBounds(90, 3, 35, 25)
	refresh = lcl.NewButton(addrPanel) //设置父组件
	refresh.SetParent(addrPanel)
	refresh.SetCaption("刷新")
	refresh.SetBounds(135, 3, 35, 25)

	//创建下拉框
	addrBox = lcl.NewComboBox(addrPanel)
	addrBox.SetParent(addrPanel)
	addrBox.SetLeft(180)                                                       //这里是设置左边距 上面按钮的宽度
	addrBox.SetTop(3)                                                          //
	addrBox.SetWidth(window.Width() - (245))                                   //宽度 减按钮的宽度
	addrBox.SetAnchors(types.NewSet(types.AkLeft, types.AkTop, types.AkRight)) //设置锚点定位，让宽高自动根据窗口调整大小
	addrBox.Items().Add("https://www.csdn.net")
	addrBox.Items().Add("https://energy.yanghy.cn")
	addrBox.Items().Add("https://www.baidu.com")

	//显示加载进度
	progressLabel = lcl.NewLabel(addrPanel) //设置父组件
	progressLabel.SetParent(addrPanel)
	progressLabel.SetCaption("0")
	progressLabel.SetBounds(window.Width()-75, 5, 35, 25)
	progressLabel.SetAnchors(types.NewSet(types.AkTop, types.AkRight)) //设置锚点定位，让宽高自动根据窗口调整大小

	goUrl := lcl.NewButton(addrPanel) //设置父组件
	goUrl.SetParent(addrPanel)
	goUrl.SetCaption("GO")
	goUrl.SetBounds(window.Width()-35, 3, 35, 25)
	goUrl.SetAnchors(types.NewSet(types.AkTop, types.AkRight)) //设置锚点定位，让宽高自动根据窗口调整大小

	//重新调整browser窗口的Parent属性
	//重新设置了上边距，宽，高
	window.WindowParent().SetAlign(types.AlCustom) //重置对齐,默认是整个客户端
	window.WindowParent().SetTop(30)
	window.WindowParent().SetHeight(window.WindowProperty().Height - 25)
	window.WindowParent().SetWidth(window.WindowProperty().Width)
	//设置锚点定位，让宽高自动根据窗口调整大小
	//因为窗口大小已调整，这里不能使用 SetAlign 了
	window.WindowParent().SetAnchors(types.NewSet(types.AkTop, types.AkLeft, types.AkRight, types.AkBottom))

	//给按钮增加事件
	goBack.SetOnClick(func(sender lcl.IObject) {
		browserWindow.Chromium().GoBack()
	})
	goForward.SetOnClick(func(sender lcl.IObject) {
		browserWindow.Chromium().GoForward()
	})
	stop.SetOnClick(func(sender lcl.IObject) {
		browserWindow.Chromium().StopLoad()
	})
	refresh.SetOnClick(func(sender lcl.IObject) {
		browserWindow.Chromium().Reload()
	})
	goUrl.SetOnClick(func(sender lcl.IObject) {
		var url = addrBox.Text()
		if url != "" {
			browserWindow.Chromium().LoadUrl(url)
		}
	})
	return
}

```

---
### 运行&编译
> 运行命令: `go run main.go`
>
> 编译命令: `go build`
>
> 编译命令-隐藏cmd黑窗口: `go build -ldflags "-H windowsgui -s -w"`

### 说明
> 使用 energy cli 安装开发环境，参考[开发环境安装](/zh/course/install-env)
> 这里面用到了系统UI组件
> 1. 创建应用: 应用创建不管主进程还是渲染进程（子进程）都要执行的代码, 通过NewApplicationConfig配置应用参数, 需要你使用(SetFrameworkDirPath)指定框架目录, 如果执行文件在框架目录中, 则不需要指定
> 2. 创建主窗口: 在CEF中主窗口是主进程, 也是 browser 主进程, 大多数业务逻辑都要在该进程中实现
> 3. 创建控件: 按钮控制组件, 事件监听, 窗口属性设置等等

### 控制事件
```go
// 在回调函数BrowserWindow.SetBrowserInit设置事件监听
cef.BrowserWindow.SetBrowserInit(func(event *cef.BrowserEvent, window cef.IBrowserWindow)
// 设置加载进度改变事件
event.SetOnLoadingProgressChange(func(sender lcl.IObject, browser *cef.ICefBrowser, progress float64)
// 设置页面加载状态事件
event.SetOnLoadingStateChange(func(sender lcl.IObject, browser *cef.ICefBrowser, isLoading, canGoBack, canGoForward bool)
```
