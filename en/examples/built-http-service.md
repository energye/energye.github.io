### 效果图

#### 应用内访问
![built-http-service1](/imgs/examples/built-http-service1.png)

#### 应用外访问
![built-http-service2](/imgs/examples/built-http-service2.png)

### 介绍
> energy提供了内置http资源访问服务，可以将web静态资源内置到执行程序中，也在一定程度上保证资源的安全
>> 你也可以自己增加内置http服务或增加安全性。

> 使用go的embed内置资源方式实现资源内嵌
> 
> 除此之外也可使用本地资源加载方式，该方式不走网络(网卡), 而是直接读取本地资源或内置资源

### 内置http服务
```go
package main

import (
	"embed"
	"fmt"
	"github.com/energye/energy/v2/cef"
	"github.com/energye/energy/v2/pkgs/assetserve"
)

// 资源目录，内置到执行程序中
//
//go:embed resources
var resources embed.FS

func main() {
	//全局初始化 每个应用都必须调用的
	cef.GlobalInit(nil, &resources)
	//创建应用
	cefApp := cef.NewApplication()
	//主窗口的配置
	cef.BrowserWindow.Config.Title = "Energy - 内置资源和内置服务示例"
	cef.BrowserWindow.Config.IconFS = "resources/icon.ico"
	//指定一个URL地址，或本地html文件目录
	cef.BrowserWindow.Config.Url = "http://localhost:22022/internal-http-server.html"
	//内置静态资源服务的安全key和value设置
	//通过设置AssetsServerHeaderKeyName和AssetsServerHeaderKeyValue在一定程度上保证资源只能在应用内访问，即使在应用外使用正确的IP和端口号也无法访问到资源
	assetserve.AssetsServerHeaderKeyName = "energy"
	assetserve.AssetsServerHeaderKeyValue = "energy"
	//在主进程启动成功之后执行
	//在这里启动内置http服务
	//内置http服务需要使用 go:embed resources 内置资源到执行程序中
	cef.SetBrowserProcessStartAfterCallback(func(b bool) {
		fmt.Println("主进程启动 创建一个内置http服务")
		//通过内置http服务加载资源
		server := assetserve.NewAssetsHttpServer()
		server.PORT = 22022               //服务端口号
		server.AssetsFSName = "resources" //必须设置目录名和资源文件夹同名
		//LocalAssets 指定本地资源支持热更新 - 适用开发或web端源码可以查看
		//server.LocalAssets = fmt.Sprintf("%s/example/browser-internal-http-server/resources", consts.ExePath)
		//Assets 内置资源不支持热更新 - 适用应用发布
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
    <title>内置资源和内置服务示例</title>
    <script type="application/javascript">

    </script>
</head>
<body style="overflow: hidden;margin: 0px;padding: 0px;">
内置资源和内置服务示例<br>
地址为：http://localhost:22022/internal-http-server.html 该地址无法在应用以外正常访问<br>
Assets 内置资源不支持热更新 - 适用应用发布<br>
LocalAssets 指定本地资源支持热更新 - 适用开发或web端源码可以查看<br>
通过设置AssetsServerHeaderKeyName和AssetsServerHeaderKeyValue在一定程度上保证资源只能在应用内访问，即使在应用外使用正确的IP和端口号也无法访问到资源<br>
assetserve.AssetsServerHeaderKeyName = "自定义KeyName"<br>
assetserve.AssetsServerHeaderKeyValue = "自定义KeyValue"<br>
<img src="icon.ico">
<img src="energy-icon.png"><br><br>
<a href="https://energy.yanghy.cn">ENERGY</a>
</body>
</html>
```

### 说明
> 参考代码注释
>
注意点
> 内置http服务启动时一定在主进程启动之后且只启动一次
>
> `cef.SetBrowserProcessStartAfterCallback` 回调函数主进程启动成功之后，窗口初始化之前执行一次
>
> 在 main.go 同级目录中新建 resources 目录，该目录存放http内置服务访问的资源
> 通过 main.go 代码中 embed.FS 编译到执行程序中
> 在回调函数 SetBrowserProcessStartAfterCallback 中启动http服务
> server.Assets 或 server.LocalAssets 设置http内置服务访问资源的方式
>> server.Assets 内置
>> server.LocalAssets 本地
