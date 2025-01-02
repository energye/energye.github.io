# 应用初始化命令 init

---

### energy init

应用创建, 默认在当前目录生成一个 energy 应用项目

根据当前 `env` 配置创建应用

如果明确应用目录，指定 `-p` 参数

使用 `energy init -h` 列出命令参数说明

```cmd
Usage:
  energy [OPTIONS] init [init-OPTIONS]

Help Options:
  /?                 Show this help message
  /h, /help          Show this help message

[init command options]
      /n, /name:     Initialized project name
      /r, /resload:  Resource loading method, 1: HTTP, 2: Local Load, default 1 HTTP
      /v, /version:  Specify the use of the energy release version. example: vx.x.x
```

### 功能说明

- 根据环境配置 `env` 创建 energy 项目应用
```text
版本默认使用 env version, 如果为空则获取最新版本, 否则要求输入 energy 发行版本号
```
- 使用内置模板创建一个基础代码项目结构
- config/energy_[os].json 项目配置文件, 用于构建和制作应用安装包
- energy_windows.json

```json
{
  "name": "demo",
  "projectPath": "@",
  "frameworkPath": "",
  "assetsDir": "assets",
  "outputFilename": "demo",
  "libemfs": "libs",
  "info": {
    "manifest": "@/demo.manifest",
    "icon": "@/resources/icon.ico",
    "companyName": "demo",
    "productName": "demo",
    "fileVersion": "1.0.0",
    "productVersion": "1.0.0",
    "copyright": "Copyright.....",
    "comments": "Built using ENERGY (https://github.com/energye/energy)",
    "fileDescription": "Built using ENERGY (https://github.com/energye/energy)"
  },
  "nsis": {
    "include": [],
    "exclude": ["cache"],
    "shortCutName": "demo",
    "icon": "@/resources/icon.ico",
    "unIcon": "@/resources/icon.ico",
    "license": "",
    "language": "english",
    "requestExecutionLevel": "admin",
    "compress": "7za",
    "compressName": "framework.7z"
  },
  "author": {
    "name": "yanghy",
    "email": "snxamdf@126.com"
  }
}
```

- energy_linux.json

```json
{
  "name": "demo",
  "projectPath": "@",
  "frameworkPath": "",
  "assetsDir": "assets",
  "outputFilename": "demo",
  "libemfs": "libs",
  "info": {
    "title": "demo",
    "wmClass": "demo",
    "icon": "@/resources/icon.png",
    "companyName": "demo",
    "productName": "demo",
    "productVersion": "1.0.0",
    "comments": "Built using ENERGY (https://github.com/energye/energy)"
  },
  "dpkg": {
    "include": [],
    "exclude": ["cache"],
    "package": "com.demo.demo",
    "homepage": "https://github.com/energye/energy",
    "compress": "7zz",
    "compressName": "framework.7z"
  },
  "author": {
    "name": "yanghy",
    "email": "snxamdf@126.com"
  }
}
```

- energy_darwin.json (macos) 

```json
{
  "name": "demo",
  "projectPath": "@",
  "frameworkPath": "",
  "assetsDir": "assets",
  "outputFilename": "demo",
  "helperFilePath": "",
  "plist": {
    "icon": "@/resources/icon.png",
    "bundleName": "demo",
    "bundleDisplayName": "demo",
    "bundleIdentifier": "demo",
    "locals": [
      "zh_CN",
      "en"
    ],
    "bundleVersion": "1.0.0",
    "bundleShortVersionString": "1.0.0",
    "copyright": "Copyright.....",
    "comments": "Built using ENERGY (https://github.com/energye/energy)",
    "include": [],
    "exclude": ["cache"]
  },
  "author": {
    "name": "yanghy",
    "email": "snxamdf@126.com"
  }
}
```
