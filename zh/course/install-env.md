# 环境安装

> 视频教程 [链接](https://www.bilibili.com/video/BV1MN411Q7a2/)

## 开发环境依赖
开发环境依赖Golang和CEF构建好的二进制框架。
如果开发完到生产包后，此时除了Golang编译好的二进制执行程序，还需要捆绑CEF和liblcl。

下面列表是开发环境安装选项

| 名称          | 平台             | 是否必须 | 说明             |
|-------------|----------------|------|----------------|
| Golang      | ALL            | 是    | Go语言开发环境       |
| CEF, liblcl | ALL            | 是    | CEF框架          |
| NSIS        | Windows        | 否    | Windows安装包制作工具 |
| UPX         | ALL            | 否    | 执行文件压缩工具       |
| 7z          | Windows, Linux | 否    | CEF框架压缩工具      |

## 开发环境安装的3种方式

### 1、自动安装完整开发环境 - <span style="color: #2ba9f1;">在线 推荐</span>
#### 说明
使用energy命令行工具安装开发环境, 它通过网络下载CEF和liblcl, CEF二进制包在CEF官方构建仓库, 因此在国外可能下载失败, 如果失败请参考离线安装.

#### 获取 energy 命令行工具
- 获取方式 一 预编译命令行工具 [下载地址](/course/cli-download)
>
> 该方式不需要手动安装Golang环境,  energy 命令行工具自动安装Golang.
> 该方式可跳过方式二
>
- 获取方式 二 自行编译命令行工具
>
> 需要你自己安装[Golang](https://golang.google.cn/dl/)环境
>> 1. 克隆项目
      >> `git clone https://github.com/energye/energy.git`
>> 2. 下载依赖
      >> `go mod tidy`
>> 3. 进入energy/cmd/energy目录
      >> `cd energy/cmd/energy`
>>
>> 执行命令 "go install" 安装命令行工具
>>
>> `go install`


#### 安装开发环境
执行命令
```cmd
energy install
```
直接在（windows -> cmd）(linux or macosx -> terminal) 中执行
> linux 需要安装gtk, 默认energy依赖是GTK3.
> GTK安装命令
- GTK3 `sudo apt-get install libgtk-3-dev`
- GTK2 `sudo apt-get install libgtk2.0-dev`

[关于 energy cli 使用](/course/cli-use-instructions)

---

### 2、自动安装开发环境 - <span style="color: #2ba9f1;">离线</span>
#### 说明
> 提供给无网络或在线安装下载失败的用户
#### 工具获取
> 参考: <span style="color: #2ba9f1;">方式1-在线安装</span>
> 使用命令行工具自动安装Energy框架的所有依赖，适用: Window、Linux、MacOSX
#### 手动下载二进制框架
> 获取最新版本CEF和对应liblcl动态库 [下载链接](/course/download-version)
> 1. 在energy命令行执行目录(同级)创建框架下载目录`EnergyFrameworkDownloadCache`
> 2. 将下载的CEF和liblcl压缩包复制到`EnergyFrameworkDownloadCache`目录中
>>  <span style="color: red;">注意</span>: 将CEF压缩包文件名里的`+`加号改为` `空格, 除此之外不能修改CEF和liblcl压缩包文件名
> 3. 执行安装命令
```cmd
energy install
```

---
### 3、手动安装开发环境
#### 说明
> 该方式完全手动安装开发环境，把命令行工具安装开发环境做的事情我们用手动操作一遍。
``` text
使用压缩包文件
CEF
   1. Windows和Linux只用到CEF的Release和Resources目录内的文件
   2. MacOSX只用到了Release目录内文件
Energy
   liblcl.xx文件
ENERGY_HOME 
   开发环境变量
   ENERGY_HOME=/to/path/CEFFramework
```

---

#### [版本下载](/course/download-version)

---

#### Windows和Linux
> 下载<font color="red">CEF和Energy</font>对应版本的动态链接库压缩包
>
> 1. 新建文件夹ChromiumDemo(文件夹名称自己随意取)
> 2. CEF 提取Release和Resources目录‘内’文件到ChromiumDemo文件夹
> 3. Energy 提取动态链接库到ChromiumDemo文件夹
> 4. 最终的目录结构
>>   ChromiumDemo文件夹目录
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
> 下载CEF和Energy对应版本的动态链接库压缩包
> 1. 新建文件夹ChromiumDemo(文件夹名称自己随意取)
> 2. CEF 提取Release目录‘内’文件到ChromiumDemo文件夹
> 3. Energy 提取动态链接库到ChromiumDemo文件夹
> 4. 最终的目录结构
>> ChromiumDemo文件夹目录
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

#### Linux 
> Linux 可能需要额外安装一些共享支持库
> 
> gtk3, libharfbuzz-gobject0

#### 环境配置
> ENERGY_HOME 环境变量
>> ENERGY_HOME 是 Energy 的开发环境变量, 开发时运行应用会从环境变量查找框架目录
>> 也可不配置环境变量, 通过Go代码手动指定框架目录 `app.SetFrameworkDirPath`

## 命令行自动安装效果图
### Windows
![Description](/imgs/assets/cmd-install.gif)
