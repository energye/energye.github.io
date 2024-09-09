### 效果图
![Description](/imgs/examples/man-sub-process.png)

### CEF(helper)独立子进程
#### 主进程 sub-process/main-process
``` go
package main

import (
	"embed"
	"fmt"
	"github.com/energye/energy/v2/cef"
	"github.com/energye/energy/v2/cef/process"
	"github.com/energye/energy/v2/common"
	"github.com/energye/energy/v2/example/sub-process/main-process/src"
	"github.com/energye/energy/v2/logger"
	"github.com/energye/energy/v2/pkgs/assetserve"
	"github.com/energye/golcl/pkgs/macapp"
	"os"
	"path"
)

//go:embed resources
var resources embed.FS

/*
主进程
这个示例演示了 主进程和 子进程相互独立出来，
步骤
 1. 先编译好子进程程序
    cd sub-process
    go build
    sub-process.exe
 2. 将子进程执行文件（sub-process.exe）在主进程SetBrowseSubprocessPath配置，如果在 FrameworkDirPath 可以直接写文件名
 3. 运行主程序
*/
func main() {
	logger.SetEnable(true)
	logger.SetLevel(logger.CefLog_Debug)
	//MacOS通过指定 IsCEF ，在开发环境中自动生成可运行的程序包
	//MacOS配置要在 GlobalInit 它之前
	//特别说明MacOS：子进程不需要配置
	wd, _ := os.Getwd()
	if common.IsDarwin() {
		//主进程中 主子进程方式，在这里指定子进程的执行文件
		subExePath := path.Join(wd, "example", "sub-process", "sub-process", "sub-process")
		macapp.MacApp.SetBrowseSubprocessPath(subExePath)
	}
	process.Args.ProcessType()
	//CEF全局初始化
	cef.GlobalInit(nil, &resources)
	//Cef应用的配置 执行程序如果在 chromium 目录中可不配置
	//子进程执行程序如果在 chromium 目录中可不配置
	var subExePath string
	if common.IsWindows() {
		subExePath = path.Join(wd, "example", "sub-process", "sub-process", "sub-process.exe")
	} else if common.IsLinux() {
		subExePath = path.Join(wd, "example", "sub-process", "sub-process", "sub-process")
	} else if common.IsDarwin() {
		//MacOS SetBrowseSubprocessPath 将不起任何作用。
		//独立的子程序包需要在 macapp.MacApp.SetBrowseSubprocessPath 配置
	}
	//subExePath = path.Join(wd, "sub-process.exe")
	println("subExePath", subExePath)
	//创建Cef应用
	cefApp := cef.NewApplication()
	//cefApp.SetSingleProcess(false) //单进程 或 多进程 ,单进程上面的子进程配置就不起作用了
	cefApp.SetBrowserSubprocessPath(subExePath)
	//主进程初始化
	src.MainBrowserInit()
	cef.SetBrowserProcessStartAfterCallback(func(b bool) {
		fmt.Println("主进程启动 创建一个内置http服务")
		//通过内置http服务加载资源
		server := assetserve.NewAssetsHttpServer()
		server.PORT = 22022
		server.AssetsFSName = "resources" //必须设置目录名
		server.Assets = &resources
		go server.StartHttpServer()
	})
	cef.Run(cefApp)
}
```

#### (Helper)子进程 sub-process/sub-process
```go
package main

import (
	"fmt"
	"github.com/energye/energy/v2/cef"
	"github.com/energye/energy/v2/cef/ipc"
	"github.com/energye/energy/v2/cef/ipc/context"
	"github.com/energye/energy/v2/logger"
)

/*
子进程
这个示例演示了 主进程和 子进程相互独立出来，
子进程需要先编译好,提供给主进程(SetBrowseSubprocessPath)配置
*/
func main() {
	logger.SetEnable(true)
	logger.SetLevel(logger.CefLog_Debug)
	//全局配置初始化
	cef.GlobalInit(nil, nil)
	//创建Cef应用
	cefApp := cef.NewApplication()
	//主进程和子进程的变量绑定函数定义
	//cef.VariableBind.VariableCreateCallback(vars.VariableBind)
	//IPC通信
	IPCInit()
	//启动子进程
	cefApp.StartSubProcess()
	cefApp.Free()
}

// 渲染进程 IPC事件
func IPCInit() {
	fmt.Println("渲染进程IPC事件注册")
	//渲染进程监听的事件
	ipc.On("sub-process-on-event", func(context context.IContext) {
		fmt.Println("sub-process-on-event")
		//渲染进程处理程序....
		context.Result("返回结果")
	})
}

```

#### 说明

###### (Helper)子进程启动
通过 `app.SetBrowseSubprocessPath` 设置子进程执行文件路径让CEF自动启动子进程

###### 场景
大多数应用都应采用该方式

CEF是多进程模型，CEF启动时会同时启动多个子进程，CEF默认会重复执行主应用执行文件。
如果我们使用指定有效子进程执行文件通过 `app.SetBrowseSubprocessPath` 设置，此时CEF不会重复执行主应用执行文件。

在子进程中，它实际没有关于业务功能代码，并更好的管理主进程代码。
