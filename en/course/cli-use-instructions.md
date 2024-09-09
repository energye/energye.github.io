# 使用命令行工具

---
### energy

### 命令参数
`energy [options]`
|参数名|说明|
|-|-|
|install|环境安装|
|init|应用初始化|
|build|编译&构建应用|
|package|制作应用安装包|
|version|查看所有已发行版本|
|env|查看开发环境变量|
|setenv|设置开发环境变量|
|v|查看当前cli版本|
|gen|windows生成ico和syso|
|bindata|小于go1.16版本内置资源到exe|

详细的参数说明请在命令行执行时不添加`.`输出

---
### 命令参数详情
#### install - 环境安装
`energy install`

自动检查当前系统环境，并安装和配置完整的开发环境
如未指定`-p`在当前命令执行目录创建框架安装目录, 目录名: energy
- 开发环境依赖模块
- 以下模块根据不同平台提供安装选项, 并自动安装和配置

|平台|软件模块|描述|
|-|-|-|
|Windows|Golang、CEF,liblcl、UPX、NSIS、7z|Windows AMD， 安装选项|
|Linux|Golang、CEF,liblcl、UPX、7z|Linux64 AMD,ARM， 安装选项|
|MacOS|Golang、CEF,liblcl|MacOS AMD,ARM， 安装选项|

- 软件模块说明

|软件模块|说明|
|-|-|
|Golang|Go语言开发环境|
|CEF,liblcl|energy依赖底层框架|
|UPX|二进制文件压缩工具|
|NSIS|Windows软件安装包制作程序工具|
|7z|配合NSIS压缩CEF|


##### 默认CEF,liblcl安装当前系统架构
CEF,liblcl根据当前系统环境安装

|平台|CEF,liblcl|
|-|-|
|Windows 32|Windows 32|
|Windows 64|Windows 64|
|Linux 64|Linux 64|
|Linux ARM 64|Linux ARM 64|
|MacOSX 64|Darwin 64|
|MacOS ARM 64|Darwin M1 M2|


##### 指定安装CEF,liblcl架构和系统位数
我们也可以使用命令参数自定义安装的软件模块架构和位数

例如: 当前 windows64 平台, 我们可以使用下面命令安装32位架构, 但不会配置到环境变量

`energy install -os windows -arch 386`


---
#### init- 应用初始化

`energy init .`

执行命令在当前目录初始化并创建一个Golang的energy应用项目

- 提供两种资源加载模式选项

|加载模式|说明|
|-|-|
|HTTP|常用http服务支撑资源加载, 通过网络请求|
|Local Load|本地资源加载 1. 支持本地读取 2. 支持内置二进制执行文件中读取|

##### 目录结构
> resources
>> 本地或内置资源存放目录, 可自定义目录名, 非固定.
>
>  build
>> 该目录自动生成: 用于编译、构建、生成安装包

##### 文件说明
> energy.json 项目配置文件, 用于构建和生成安装程序, 文件名不可更改.
>
> go.mod 模块依赖管理, 文件名不可更改.
>
> go.sum 自动生成
>
> main.go energy 应用启动入口程序

---
#### build - 构建&编译应用
`energy build`
在应用目录main函数位置执行
energy 默认会去除调试信息和符号, 和压缩
- 不同平台区别

|平台|描述|
|-|-|
|Windows|去除调试信息和符号,  生成执行文件图标|
|Linux|去除调试信息和符号|
|MacOS|去除调试信息和符号|

##### 参数

|名称|描述|平台|
|-|-|-|
|-p, --path|编译的应用根目录, 默认当前目录|all|
|-u, --upx|如果安装了upx同时设置了该参数, 二进制文件将使用upx压缩, 默认未启用|all|
|--upxFlag|upx参数, 默认空|all|
|-d, --dll|内置dll, 编译时将(liblcl)内置到二进制文件中, 二进制文件会变大，同时不使用框架内的独立liblcl文件, 默认未启用|all|


```cmd
完整参数示例使用
energy build -p /to/app/path -u --upxFlag="--best --no-color" -d
```

---
#### package - 制作安装包
`energy package`
在应用根目录执行
- 条件
1. 构建&编译应用, 得到二进制执行文件
2. 开发环境和energy.json须配置正确
- 已安装

|平台|安装包制作程序|
|-|-|
|Windows|NSIS|
|Linux|dpkg|
|MacOS|pkgbuild|

- 附加条件

|平台|软件包|
|-|-|
|Windows|7z, nsis7z|
|Linux|7z|
|MacOS|upx|

##### 配置

energy.json 应用配置,主要用于构建和制作安装包

```json
{
  "name": "{{.Name}}",
  "projectPath": "{{.ProjectPath}}",
  "frameworkPath": "{{.FrameworkPath}}",
  "assetsDir": "assets",
  "outputFilename": "{{.OutputFilename}}",
  "info": {...},
  "nsis": {...},
  "dpkg": {...},
  "author": {
    "name": "yanghy",
    "email": "snxamdf@126.com"
  }
}

windows:
  info: {
    "icon": "{{.ProjectPath}}/resources/icon.ico",
    "companyName": "{{.CompanyName}}",
    "productName": "{{.ProductName}}",
    "fileVersion": "1.0.0",
    "productVersion": "1.0.0",
    "copyright": "Copyright.....",
    "comments": "Built using ENERGY (https://github.com/energye/energy)",
    "fileDescription": "Built using ENERGY (https://github.com/energye/energy)"
  }
 nsis: {
    "include": [],
    "exclude": ["cache"],
    "icon": "{{.ProjectPath}}/resources/icon.ico",
    "unIcon": "{{.ProjectPath}}/resources/icon.ico",
    "license": "",
    "language": "english",
    "requestExecutionLevel": "admin",
    "compress": "7za"
  }


linux: 
  info: {
    "icon": "{{.ProjectPath}}/resources/icon.png",
    "companyName": "{{.CompanyName}}",
    "productName": "{{.ProductName}}",
    "productVersion": "1.0.0",
    "comments": "Built using ENERGY (https://github.com/energye/energy)"
  }
 dpkg: {
    "include": [],
    "exclude": ["cache"],
    "package": "com.{{.CompanyName}}.{{.CompanyName}}",
    "homepage": "https://github.com/energye/energy",
    "compress": "7zz"
  }
```
##### 配置字段说明
- project
  应用根对象

|字段名|描述|
|-|-|
|name|自动生成, 应用项目名|
|projectPath|自动生成, 完整项目路径|
|frameworkPath|自动生成, 完整CEF路径|
|assetsDir|项目构建和安装包制作模板资源目录, 默认assets，如自定义须自己配置模板|
|outputFilename|编译&构建时生成的二进制执行文件名|

- windows - info
  windows 应用信息

|字段名|描述|
|-|-|
|icon|应用图标, windows:构建时自动加上该图标, 如是png格式会自动转换ico, linux, mac应用图标|
|companyName|公司名称|
|productName|产品名称|
|fileVersion|文件版本|
|productVersion|产品版本|
|copyright|版本信息|
|comments|描述|
|fileDescription|文件描述|

- windows - nsis
  windows 应用安装包生成配置

|字段名|描述|
|-|-|
|icon|NSIS 安装程序图标 windows|
|unIcon|NSIS 卸载程序图标 windows|
|include|自定义打包资源|
|exclude|排除打包资源|
|license|NSIS 授权描述界面，txt文本格式, 全路径名|
|language|NSIS 安装程序语言, 默认:english, 中文:SimpChinese, 参考: nsis\Contrib\Language files|
|requestExecutionLevel|NSIS 执行等级, 默认: admin, 空: 当前用户|
|compress|CEF压缩, 目前仅支持7z|

- 关于nsis
  energy安装nsis时已经集成7z插件, 如果你自己安装可能没有7z, 制作安装包时可能报错.
  你可以通过自己下载安装和相关插件[nsis](https://nsis.sourceforge.io/Download)或重新使用energy安装nsis


- linux -info
  linux 应用信息

|字段名|描述|
|-|-|
|icon|应用图标, windows:构建时自动加上该图标, 如是png格式会自动转换ico, linux, mac应用图标|
|companyName|公司名称|
|productName|产品名称|
|productVersion|产品版本|
|comments|描述|

- linux - dpkg
  linux 应用安装包生成配置

|字段名|描述|
|-|-|
|include|自定义打包资源|
|exclude|排除打包资源|
|package|包名 com.companyName.productName|
|homepage|首页|
|compress|CEF压缩, 目前仅支持7z|

---
#### version - 查看所有已发行版本
`energy version`
列出所有已发行的版本

---
#### env - 查看开发环境变量
`energy env`
列出energy开发依赖当前环境变量配置

---
#### setenv - 设置开发环境变量
`energy setenv`
设置energy开发环境变量配置


#### v - 查看当前cli版本
`energy v`

#### gen - windows 生成ico和syso

`energy gen --icon`
`energy gen --syso`

#### bindata - 内嵌资源到exe中

`//go:generate energy bindata --fs --o=assets/assets.go --pkg=assets --paths=./assets`

执行Go生成命令
`go generate`