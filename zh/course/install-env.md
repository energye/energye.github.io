# 环境安装

视频教程
- [开发环境安装](https://www.bilibili.com/video/BV1MN411Q7a2/)
- [应用创建、构建、安装包制作](https://www.bilibili.com/video/BV1gv6mYdE5J/)

## 开发环境依赖
开发环境依赖Golang和CEF构建好的二进制框架。
如果开发完到生产包后，此时除了Golang编译好的二进制执行程序，同时CEF和liblcl一起打包。

下面列表是开发环境安装选项

| 名称          | 平台             | 是否必须 | 说明             |
|-------------|----------------|------|----------------|
| Golang      | ALL            | 是    | Go语言开发环境       |
| CEF, LibLCL | ALL            | 是    | CEF框架          |
| NSIS        | Windows        | 否    | Windows安装包制作工具 |
| UPX         | ALL            | 否    | 执行文件压缩工具       |
| 7z          | Windows, Linux | 否    | CEF框架压缩工具      |

## 开发环境安装的3种方式

### 1、自动安装完整开发环境 - <span style="color: #2ba9f1;">在线 推荐</span>
#### 说明
使用energy命令行工具安装开发环境, 它通过网络下载CEF和liblcl, CEF二进制包在CEF官方构建仓库, 因此存在下载失败可能, 如果失败请参考离线安装.

#### 获取 energy cli 命令行工具
- 获取方式 一 预编译命令行工具 [下载 CLI](/course/cli-download)
>
> 该方式可跳过方式二
>
- 获取方式 二 自行编译命令行工具
>
> 需要你自己安装[Golang](https://golang.google.cn/dl/)环境
>> 1. 克隆项目
      >> `git clone https://github.com/energye/energy.git`
>> 2. 下载依赖
      >> `go mod tidy`
>> 3. 进入 energy/cmd/energy 目录
      >> `cd energy/cmd/energy`
>>
>> 执行命令 "go install" 安装命令行工具
>>
>> `go install`


#### 安装开发环境

执行命令
1. 在此前初始化环境

`energy env` 查看环境, 会显示类似下面的列表

```cmd
┌───────────────────────────────────────┐
| Name      | Value                     |
| ------------------------------------- |
| Golang    |                           |
| Root      | /Users/yanghy             |
| Framework |                           |
| NSIS      |                           |
| 7z        |                           |
| UPX       |                           |
| Registry  | https://energye.github.io |
| Proxy     |                           |
└───────────────────────────────────────┘
```
`energy env -w root:/Users/yanghy/app` 修改 framework 安装根目录, `root:替换成你的目录`

2. 执行安装命令
```cmd
energy install
```

直接在（windows -> cmd）(linux or macosx -> terminal) 中执行
> linux 需要安装 gtk, 默认 energy 依赖是GTK3.

安装命令
- GTK3 `sudo apt-get install libgtk-3-dev`
- GTK2 `sudo apt-get install libgtk2.0-dev`
- OPENGL `sudo apt-get install libharfbuzz-gobject0`

[关于 energy cli 使用](/course/)

---

### 2、自动安装开发环境 - <span style="color: #2ba9f1;">离线</span>
#### 说明
> 提供给无网络或在线安装下载失败的用户

#### 工具获取
> 参考: <span style="color: #2ba9f1;">方式1-在线安装</span>
> 使用 energy cli 自动安装配置开发环境，适用: Window、Linux、MacOS

#### 手动下载二进制框架
> 获取CEF和对应LibLCL动态库 [下载链接](/course/download-version)
> 1. 在你希望安装的位置, 例如: `/app` , 在 `/app` 新建目录名为 `energy` 和 `EnergyFrameworkDownloadCache`
> 2. 修改环境-安装根目录: `energy env -w root:/app`
> 3. 将下载的 CEF 和 LibLCL 对应压缩包移动到 `EnergyFrameworkDownloadCache` 目录
> 4. 安装
>> `energy install` 注意: 如果不是最新版本, 例如带有版本号的 liblcl-109.xxx.zip `energy install --cef 109`


---
### 3、手动安装开发环境
#### 说明和准备

```
该方式完全手动安装开发环境，把 cli 安装开发环境做的事情我们用手动操作一遍
获取 CEF 和 LibLCL
CEF 压缩包
   1. Windows和Linux只用到CEF的Release和Resources目录内的文件
   2. MacOSX只用到了Release目录内文件
LibLCL 压缩包
   liblcl.xx 文件
.energy 环境配置
   使用 energy env 命令修改环境参数
   `energy env -w root:/framework/root/path 修改框架安装根目录
```


#### 开始

> [CEF 和 LibLCL 版本下载](/course/download-version) 
> 1. 下载好后，例如是`CEF 109 Windows64`版本. 在你希望安装的位置, 例如: `D:/app` , 在 `D:/app` 新建目录名为 `energy`
> 2. 进入 `energy` 目录, 新建 framework 目录 `CEF-109_WINDOWS_64`, 规则: `CEF-[VER]_[OS]_[ARCH]`
> 3. 将下载的 `cef_xxx.tar.bz2` 压缩包中提取`Release`和`Resources`目录`内`文件到`CEF-109_WINDOWS_64`文件夹
> 4. 将下载的 `liblcl-xx.[OS][ARCH].zip` 内容提取到 `CEF-109_WINDOWS_64`文件夹
> 5. 配置环境-框架根目录: `energy env -w root:D:/app`
> 6. 配置环境-框架版本: `energy env -w framework:CEF-109_WINDOWS_64`

>>  最终 CEF-109_WINDOWS_64 目录结构
>>>  locales - 文件夹
>>>
>>>  cef_sandbox.lib - 文件
>>>
>>>  chrome_100_percent.pak - 文件
>>>
>>>  chrome_200_percent.pak - 文件
>>>
>>>  chrome_elf.dll - 文件
>>>
>>>  d3dcompiler_47.dll - 文件
>>>
>>>  icudtl.dat - 文件
>>>
>>>  libcef.dll - 文件
>>>
>>>  libcef.lib - 文件
>>>
>>>  libEGL.dll - 文件
>>>
>>>  libGLESv2.dll - 文件
>>>
>>>  liblcl.dll - 文件
>>>
>>>  resources.pak - 文件
>>>
>>>  snapshot_blob.bin - 文件
>>>
>>>  v8_context_snapshot.bin - 文件
>>>
>>>  vk_swiftshader.dll - 文件
>>>
>>>  vk_swiftshader_icd.json - 文件
>>>
>>>  vulkan-1.dll - 文件

#### MacOS X

> [CEF 和 LibLCL 版本下载](/course/download-version)
> 
> 和 Windows 步骤完全一样
> 
> 不同的是提取 CEF 文件稍有不同, 和 framework 目录名不同 `CEF-109_DARWIN_64`
>>  只提取 Release 到 `CEF-109_DARWIN_64`
>> 
>>  最终 CEF-109_DARWIN_64 目录结构
>> 
>>> Chromium Embedded Framework.framework - 文件夹
>>>
>>> cef_sandbox.a - 文件
>>>
>>> liblcl.dylib - 文件


##### Mac M系列
> 对于 Mac ARM架构, 开发环境和 Mac x86 一样
> 
> 可使用 x86 架构包兼容运行，也可使用 ARM 专有架构
> 
> 在Mac ARM Go需要使用交叉编译, 设置Go的编译环境为 amd64, 和CGO支持
> 通过 Rosetta2 兼容运行AMD架构应用
> 需要额外安装
> 1. GCC工具链 `brew install gcc`, 还可能需要安装`xcode-select --install`
> 2. Rosetta2 [参考链接](https://support.apple.com/zh-cn/HT211861)
>
> 编译环境设置
> - 交叉环境: `GOARCH=amd64`
> - 开启CGO: `CGO_ENABLED=1`

## 其它依赖

### Linux 
> Linux 需要额外安装一些共享支持库

安装命令
- GTK3 `sudo apt-get install libgtk-3-dev`
- GTK2 `sudo apt-get install libgtk2.0-dev`
- OPENGL `sudo apt-get install libharfbuzz-gobject0`

### 环境配置

> [CEF 和 LibLCL 版本下载](/course/download-version)
> 
> 和 Windows 步骤完全一样
> 不同，使用 Linux 版本即可


### 环境安装失败
在线安装，由于网络因素或其它限制，获取远程服务资源时可能会失败, 导致开发环境安装失败。

配置 proxy: `energy env -w proxy:http://ip:port`
