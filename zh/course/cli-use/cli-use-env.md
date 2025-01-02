# 开发环境管理命令 env

---

### energy env

开发环境管理命令, 在使用 `env` 或 `install` 后会在当前用户目录创建 `.energy` 配置文件，内容如下

使用 `energy env` 创建和输出配置信息

```cmd
┌──────────────────────────────────────┐
| Name      | Value                    |
| ------------------------------------ |
| Golang    |                          |
| Version   | v2.5.1                   |
| Root      | E:\app                   |
| Framework | CEF-109_WINDOWS_64       |
| NSIS      | E:\app\energy\nsis       |
| 7z        | E:\app\energy\7z         |
| UPX       | E:\app\energy\upx        |
| Registry  | https://energy.yanghy.cn |
| Proxy     |                          |
└──────────────────────────────────────┘
```

使用 `energy env -h` 列出命令参数说明

```cmd
Usage:
  energy [OPTIONS] env [env-OPTIONS]

Help Options:
  /?               Show this help message
  /h, /help        Show this help message

[env command options]
      /w, /write:  Set the configuration environment. set=key:value
      /g, /get:    Get the configuration environment value. name
      /l, /list    Lists the CEF Framework installed
          /use:    Use the installed CEF Framework Version. ver:arch
```

### 配置字段说明

- golang : Go的安装根目录, 如果设置了，在编译时使用该配置
- version : 全局默认 energy 版本号, 用于每次初始化项目时使用
- root : Framework 和其它工具安装根目录，在此目录自动创建固定“energy”目录做为 Framework 管理目录
- framework: 当前正在使用的 CEF 框架目录"名" 
- NSIS: Windows 安装包制作工具
- 7z: 压缩 CEF 工具，只支持特定系统
- UPX: 压缩执行文件，只支持特定系统
- registry: 源配置，用于 energy cli 获取配置信息，例如基础配置、版本号、升级列表等等，在失败时可切换其它支持的源
- proxy : 代理配置，用于 energy cli 获取配置信息，或安装下载时失败

### 功能说明
- 多版本控制
```text
energy env --use 109:32
or
energy env -w framework:CEF-109_WINDOWS_32
```
- 修改配置信息
```text
energy env -w name:value
```
- 获取当前环境信息
- 编译时根据环境配置
```text
例如
 当前系统环境 windows 64, 使用的框架 CEF-109_WINDOWS_32
 energy build
 编译出的二进制文件是 windows 32 位
```
