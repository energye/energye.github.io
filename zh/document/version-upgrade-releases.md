# 版本升级

energy 提供了版本更新检查配置策略
- 基础模块配置
- 模块配置
- 最新版本
- 发布版本列表

### 基础模块配置
[model-base-config.json](/data/model-base-config.json)

升级版本、下载 liblcl 和 cef 提供的下载源

在升级energy版本时使用这里的模块配置

详见: [model-base-config.json](/data/model-base-config.json) 提供下载源、和需要释放文件匹配规则

- downloadSourceItem: 下载源列表集合
- extract: 释放文件匹配规则

#### downloadSourceItem
配置了 energy 框架依赖 `CEF` 二进制框架, `liblcl` 底层动态链接库和其它3方软件包下载源

字段
- label: 显示标签
- url: 下载源地址, 其中使用了占位符 `{version}` `{module}` `{OSARCH}`, 最终变成一个完整的下载URL

`https://www.xxx.xxx/xxx/releases/download/{version}/{module}.{OSARCH}.zip`

- md5: md5.txt 地址

### 模块配置
- [model-liblcl.json](/data/model-liblcl.json)
- [model-cef.json](/data/model-cef.json)

#### model-liblcl.json
它提供发行版本`liblcl`模块下载配置.

模块名为 liblcl 或 liblcl-[ver], 特定版本支持以 `CEF` 大版本号结尾

例如: `liblcl-87` 特定最后一个支持 `flash` 版本, `liblcl-109` 特定支持最后一个支持 `windows7` 的版本
```text
{
    "liblcl": {
        "2.3.1": {
            "downloadSource": 2,
            "downloadSourceList": [
                1,
                2,
                3
            ],
            "supportOSArch": "Windows64,Windows32,MacOSX64,MacOSARM64,LinuxARM64,Linux64"
        },
        "2.3.3": {
            "identical": "2.3.1"
        },
        "2.3.4": {
            "identical": "2.3.1"
        },
        "2.3.5": {
            "identical": "2.3.1"
        },
        "2.3.6": {
            "identical": "2.3.1"
        },
        "2.3.7": {
            "identical": "2.3.1"
        }
    },
    ...
}

字段说明:
模块名: liblcl, liblcl-87
  版本号: x.x.x => 2.3.1 , 不可重复一
     downloadSource: 默认下载源选择, 配合基础配置的 downloadSourceItem 字段
     downloadSourceList: 可使用选择下载源
     supportOSArch: 支持系统架构
     identical: 相同配置版本, 不为""(空)时优先于上面3个字段, 如果设置了版本号则表示和被设置版本号配置完全相同
```


#### model-cef.json
它提供发行版本`CEF`模块下载配置.

模块名为 `cef-[版本号]`

内容与 `model-liblcl.json` 模块配置文件格式完全一样, 但它每个版本模块一搬不会有多个，除非CEF对不同的系统架构有不同的版本支持.
```text
字段说明:
  字段和 `model-liblcl.json` 模块配置含义完全一样
```

#### 版本匹配

[model-liblcl.json](/data/model-liblcl.json) 和 [model-cef.json](/data/model-cef.json) 配置包含`energy`每一个发行版的配套配置

例如: liblcl-87 和 cef-87 是一套匹配版本, 其中以 `xxx-[版本号]` 来区分

### 最新版本
- [latest-version.json](/data/latest-version.json) 当前 `energy` 最新版本号
- [command-line-tools.json](/data/command-line-tools.json) 当前 `energy cli` 最新版本号


### 发布版本列表

[versions-upgrade.json](/data/versions-upgrade.json)

该文件用于发布版本的模块版本依赖
1. 在下载页面提供下载链接
2. `energy cli` 工具安装开发环境时提供自动下载正确且对应的模块依赖

#### 文件说明
升级版本配置列表，迭代增加。

```text
JSON 格式:
{
  "2.3.1": {
    "enable": 1,
    "dependenceModule": {
      "lcl": {
        "liblcl": "2.3.1",
        "liblcl-87": "2.3.1",
        "liblcl-106": "2.3.1",
        "liblcl-109": "2.3.1"
      },
      "cef": {
        "cef-87": "87.1.14+ga29e9a3+chromium-87.0.4280.141",
        "cef-106": "106.1.1+g5891c70+chromium-106.0.5249.119",
        "cef-109": "109.1.18+gf1c41e4+chromium-109.0.5414.120",
        "cef-118": "118.7.1+g99817d2+chromium-118.0.5993.119"
      }
    }
  },
  "2.3.3": {
    "enable": 1,
    "identical": "2.3.1"
  },
  ...
}

字段说明:
x.x.x: 版本号, 发行升级版本号, 不可重复
  enable: 是否启用版本, 当值是 1 时启用
  dependenceModule: 依赖模块, 针对不同系统架构或特定版本，从而支持的模块
    liblcl: 当前最新版本，和当前`energy`支持`cef`的最大版本号匹配
    liblcl-[ver]: 特定匹配版本
  identical: 相同配置版本, 不为""(空)时优先于上面3个字段, 如果设置了版本号则表示和被设置版本号配置完全相同
```
