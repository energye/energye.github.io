### 效果图
![simple](/imgs/examples/simple.gif)

---
### 开发环境安装
> [开发环境安装](/course/install-env)

### 简单示例

```go
package main

import (
	"github.com/energye/energy/v2/cef"
)

func main() {
	//全局初始化 每个应用都必须调用的
	cef.GlobalInit(nil, nil)
	//创建应用
	cefApp := cef.NewApplication()
	//主窗口的配置
	//指定一个URL地址，或本地html文件目录
	cef.BrowserWindow.Config.Url = "https://www.baidu.com"
	//运行应用
	cef.Run(cefApp)
}

```

- 第一次需要更新go.mod依赖
```cmd
go mod tidy
```

### 说明
> cef.GlobalCEFInit(nil, nil) 全局初始化 每个energy应用都必须调用
>
> cef.NewApplication(nil) 创建应用
>
> cef.BrowserWindow.Config.DefaultUrl = "https://www.baidu.com" 指定一个URL地址，或本地html文件目录, energy内置了一个http服务
>
> cef.Run(cefApp) 运行应用，启动主进程和子进程
