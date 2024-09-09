# 模块配置文件

### 基础模块配置文件说明

模块配置是给升级版本并下载 liblcl 和 cef 提供的配置参数

应当属于基础配置，在升级energy版本时使用这里的模块配置

### 文件说明

#### 基础配置文件: model-base-config.json 
```text
内容 JSON 格式， 它提供下载源和支持系统架构配置
1. 下载源 downloadSource, 只配置下载源域名, 配合具体模块配置里的 downloadURL 格式. 
2. 支持系统架构 supportArch, 根据依赖模块 liblcl 和 cef 配置不同的支持系统架构区分, 配合具体模块配置里的 downloadURL 和 supportOSArch
``` 

#### liblcl模块配置文件: model-liblcl.json
```text
内容 JSON 格式， 它提供不同 liblcl 版本模块下载配置.
模块名为 liblcl, 特定版本支持以 cef 大版本号结尾
  例如: liblcl-87 特定最后一个支持 flash 版本, liblcl-109 特定支持最后一个支持 windows7 的版本, 以后有其它的也可以这样增加
JSON 格式:
{
  "模块名": {
    "版本号": {
      "downloadSourceSelect": 2,
      "downloadURL": "https://{source}/energye/energy/releases/download/{version}/{OSARCH}.zip", 
      "supportOSArch": "Windows64,Windows32,MacOSX64,MacOSARM64,LinuxARM64GTK2,LinuxARM64,Linux64GTK2,Linux64" 
    },
    "不同的版本号": {
      "identical": "2.3.1"
    },
    ...
  },
  ...
}
字段说明:
模块名: liblcl, liblcl-87
  版本号: x.x.x => 2.3.1 , 不可重复一
     downloadSourceSelect: 下载源选择, 配合基础配置的 downloadSource 字段
     downloadURL: 下载地址，配合基础配置 supportArch 字段和模块配置的支持系统架构 supportOSArch 字段
     supportOSArch: 支持系统架构
     identical: 相同配置版本, 不为""(空)时优先于上面3个字段, 如果设置了版本号则表示和被设置版本号配置完全相同
```

#### CEF模块配置文件: model-cef.json
```text
内容 JSON 格式， 它提供不同 CEF 版本下载配置.
模块名为 cef-[版本号]
  其内容与 liblcl 模块配置文件格式完全一样, 但它每个版本模块一搬不会有多个，除非CEF对不同的系统架构有不同的版本支持.
JSON 格式:
{
  "cef-87": {
    "87.1.14+ga29e9a3+chromium-87.0.4280.141": {
      "downloadSourceSelect": 0,
      "downloadURL": "https://{source}/cef_binary_{version}_{OSARCH}_minimal.tar.bz2",
      "supportOSArch": "Windows64,Windows32,MacOSX64,MacOSARM64,LinuxARM64,Linux64",
      "identical": ""
    }
  },
  ...
}
字段说明:
  字段和 liblcl 模块配置含义完全一样
```
