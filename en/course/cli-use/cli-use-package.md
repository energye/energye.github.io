# 安装包制作命令 package

---

### energy package

将energy应用制作成安装包程序

根据环境配置 `env` 配置， 将 Framework 和构建好的程序一起打包进安装包

使用应用目录内 `config/energy_[os].json` 配置制作安装包属性

#### 工具
- windows : energy 提供的 nsis
- linux : 系统工具 dpkg
- macos : 系统工具 pkgbuild

#### 步骤
首先要初始化创建好 energy 应用
1. `energy build` 
2. `energy package`

安装包生成目录: 项目目录/build/[os]/

使用 `energy package -h` 列出命令参数说明

```cmd
Usage:
  energy [OPTIONS] package [package-OPTIONS]

Help Options:
  /?                 Show this help message
  /h, /help          Show this help message

[package command options]
      /p, /path:     Project path, default current path. Can be configured in energy.json
      /c, /clean     Clear configuration and regenerate the default configuration
      /f, /file:     Execution file name
      /o, /outfile:  Installation package file name
          /pkg       MacOS Using pkgbuild to create pkg development installation packages
```

### 功能说明

- 根据环境配置 `env` 制作安装包程序
```text
例如
 当前系统环境 windows 64, 使用的框架 CEF-109_WINDOWS_32
 energy package
 自动将 CEF-109_WINDOWS_32 内所有文件和构建好的程序一起制作成安装包
```
- 根据命令参数指定一些行为, 例如执行文件名, 输出目录
- MacOS, 默认生成 `xxx.app` 包, 如想 `xxx.pkg`, 需要指定 `--pkg` 参数
```cmd
energy package --pkg
```
