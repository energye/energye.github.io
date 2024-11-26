

#### Q: 开发环境都需要什么?
- A1: energy开发环境自动安装
  -- 1. Go开发环境
  -- 2. Energy依赖的CEF二进制框架

1. 安装Go环境, 在[Go官网](https://golang.google.cn/dl/)下载Go语言安装包
   -- 下载指定系统平台的版本
   -- 以window为例:
   --- 方式一 : 下载 gox.xx.x.windows-amd64.msi 一键安装
   --- 方式二 : 解压Go的压缩包, 然后配置环境变量
```go
GOROOT="/to/path/go"                 # go 的安装位置
GOPATH="/to/path/gopath"             # go 的开发目录，如果开启mod模式则不需要该变量
PATH="%GOROOT%/bin"                  # 将环境变量加入路径

#开启mod模块管理
go env -w GO111MODULE=on
#配置代理
go env -w GOPROXY=https://goproxy.cn,direct
```
2. 安装energy开发环境
   <a>说明</a>：energy开发环境依赖，CEF,liblcl, Golang
   <a>注意</a>：energy打包后要和CEF必要文件在同一个目录，或者在开发时动态指定CEF目录.
   开发环境使用energy命令行工具自动配置energy环境. 开发环境安装教程 -> [传送门](/en/course/install-env)

3. Linux系统依赖于GTK3，有些系统可能未安装，我们需要手动安装.
```
sudo apt-get install libgtk-3-dev
```

#### Q: 是否支持制作安装包？
- A: 支持. [安装包制作教程](/en/course/build-package)

---

#### Q: 怎么看是不是最新版本？
- A: 在 [Github Releases](https://github.com/energye/energy/releases) 版本号查看, 数字越大版本越新, 如有新版本发布建议更新最新版本.

---

#### Q: 程序运行不起来？
- A1: 检查是否使用最新版本，在mod中默认下载的依赖可能不是最新的。需要手动指定，
```go
修改文件
go.mod

require github.com/energye/energy/v2 [最新的发行版本号]
```
- A2: 开发环境是否正确配置, 参考 [环境安装](/en/course/install-env)
- A3: MacOSX 需要在命令行参数中增加 env=dev, 例如使用Goland开发工具，编译main程序配置,在Program arguments中添加env=dev
- A4: Linux比较特殊， 需要注意默认使用的VF(views framework)窗口组件，即无法使用LCL的任何组件，如果创建了LCL组件则程序启动失败。
- A5: Linux ARM 需要预加载libcef.so库
```go
运行程序之前，在命令行中增加该环境变量
export LD_PRELOAD=/to/path/libcef.so
```
- A6: Linux ARM
  <span style="color:red;">undefined symbol: gbm_bo_map</span>
```go
sudo apt-get install libgbm-dev
```

---

#### Q: 是否使用module模块管理?
- A: 是, energy使用mod依赖管理, 如果不使用mod依赖管理，第三方包需要你自己动手下载导入.

---

#### Q: energy为什么在Linux不支持LCL组件
- A1: energy在Linux提供了2种支持，GTK2、GTK3 默认支持的GTK3，Energy 支持LCL组件，但需要使用GTK2，但由于CEF在Linux中`无法输入中文`。
- 2个问题
  1. Linux GTK2 无法输入中文，可以使用LCL组件
  2. Linux GTK3 可以输入中文，但无法使用LCL组件
```
目前尚未解决GTK2不能输入中文问题。如果不介意可以直接使用GTK2
```
- A2: GTK3开发环境安装
```
sudo apt-get install libgtk-3-dev
```

---

#### Q: Linux & Linux-AArch64
- liblcl.so

- GTK3

  Linux 和 Linux-AArch64 默认使用 GTK3, 依赖 `sudo apt-get install libgtk-3-dev`

  openGL 控件依赖 `sudo apt-get install libharfbuzz-gobject0`

- Linux-AArch64 运行程序之前，在命令行中增加该环境变量

`export LD_PRELOAD=/to/path/libcef.so`
