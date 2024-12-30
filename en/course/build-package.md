# 构建打包

### 说明

- energy cli 目前仅支持在当前系统制作安装包程序
- 如果你想制作其它系统安装包，参考使用 `github actions` 方式 [demo-actions](https://github.com/energye/demo-actions)

### energy cli

| 平台     | 介绍                       | 描述               |
|--------|--------------------------|------------------|
| window | NSIS安装包制作工具              | 通过 energy cli 安装 |
| linux  | dpkg 命令                  | 系统自带             |
| macos  | energy xxx.app 和 xxx.pkg | 系统自带             |

---

### 安装包制作
`config/energy_[os].json`是自动生成应用配置文件，在编译和制作应用安装包时使用

### Windows
- info: 应用的二进制执行程序配置
- nsis: 安装包程序配置

#### config/energy_windows.json
```json
{
  "name": "{{.Name}}",    // 应用名
  "projectPath": "@",     // 项目目录, @: 当前命令执行目录
  "frameworkPath": "$ENERGY_HOME", // CEF 二进制框架目录, $ENERGY_HOME: 取环境变量
  "assetsDir": "assets",
  "outputFilename": "{{.OutputFilename}}", // 编译二进制执行文件名
  "libemfs": "libs",
  "info": {
    "manifest": "@/{{.Name}}.manifest", // app.manifest 配置应用属性
    "icon": "@/resources/icon.ico",     // 应用图标
    "companyName": "{{.CompanyName}}",  // 文件属性信息
    "productName": "{{.ProductName}}",  // 文件属性信息
    "fileVersion": "1.0.0",             // 文件属性信息
    "productVersion": "1.0.0",          // 文件属性信息
    "copyright": "Copyright.....",      // 文件属性信息
    "comments": "Built using ENERGY (https://github.com/energye/energy)",
    "fileDescription": "Built using ENERGY (https://github.com/energye/energy)"
  },
  "nsis": {
    "include": [],                  // 额外要打包的资源, 绝对路径
    "exclude": ["cache"],           // 忽略
    "icon": "@/resources/icon.ico", // 安装程序图标
    "unIcon": "@/resources/icon.ico",// 安装程序卸载图标
    "license": "",                  // 安装包授权信息界面, xxx.txt 绝对路径，不为空时
    "language": "english",          // 安装包界面语言，默认英文: english，中文: SimpChinese
    "requestExecutionLevel": "admin",// 执行等级, 空""当前用户
    "compress": "7za",              // 空时不启用7za压缩
    "compressName": "framework.7z"  // 7z 压缩包名称
  },
  "author": {
    "name": "yanghy",
    "email": "snxamdf@126.com"
  }
}
```

#### 构建二进制执行文件
- 进入项目根目录执行编译命令

`energy build` 构建生产执行程序, 需要 package 或 放置到 Framework 目录可运行

<img src="/imgs/assets/energy-windows-build.gif"/>

#### 生成安装包程序
- 进入项目根目录执行打包命令

`energy package`

- 安装包输出目录
  approotpath/build/windows/[appname]-xxxx.exe

<img src="/imgs/assets/energy-windows-package.gif"/>

#### 关于NSIS脚本
```
approotpath/build/windows
installer-nsis.nsi
installer-tools.nsh
你可以自己配置nsis脚本, 自定义安装程序界面.
```

---------------------------

### Linux
- info: 应用的二进制执行程序配置
- dpkg: 安装包程序配置

#### config/energy_linux.json
```json
{
  "name": "{{.Name}}",      // 应用名
  "projectPath": "@",       // 项目目录, @: 当前命令执行目录
  "frameworkPath": "$ENERGY_HOME", // CEF 二进制框架目录, $ENERGY_HOME: 取环境变量
  "assetsDir": "assets",
  "outputFilename": "{{.OutputFilename}}",// 编译二进制执行文件名
  "libemfs": "libs",
  "info": {
    "icon": "@/resources/icon.png",     // 安装后的应用图标，建议修改
    "companyName": "{{.CompanyName}}",  // 文件属性信息
    "productName": "{{.ProductName}}",  // 文件属性信息
    "productVersion": "1.0.0",          // 文件属性信息
    "comments": "Built using ENERGY (https://github.com/energye/energy)"
  },
  "dpkg": {
    "include": [],
    "exclude": ["cache"],
    "package": "com.{{.CompanyName}}.{{.CompanyName}}",
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

#### 构建二进制执行文件
- 进入项目根目录执行编译命令

`energy build` 构建生产执行程序, 需要 package 或 放置到 Framework 目录可运行


#### 生成安装包程序
- 进入项目根目录执行打包命令

`energy package`

- 安装包输出目录
  approotpath/build/linux/[appname]-xxxx.deb


### MacOS
- plist: 配置 xxx.app 的 Info.plist

#### config/energy_darwin.json
```json
{
  "name": "{{.Name}}",    // 应用名
  "projectPath": "@",     // 项目目录, @: 当前命令执行目录
  "frameworkPath": "$ENERGY_HOME", // CEF 二进制框架目录, $ENERGY_HOME: 取环境变量
  "assetsDir": "assets",
  "outputFilename": "{{.OutputFilename}}", // 编译二进制执行文件名
  "helperFilePath": "",                    // Helper 子进程执行文件完全文件路径, 不为空时有效
  "plist": {
    "icon": "@/resources/icon.png",        // 安装后的应用图标，建议修改
    "companyName": "{{.CompanyName}}",     // 文件属性信息
    "productName": "{{.ProductName}}",     // 文件属性信息
    "locals": [                            // 文件属性信息
      "zh_CN",
      "en"
    ],
    "cfBundleVersion": "1.0.0",            // 文件属性信息
    "cfBundleShortVersionString": "1.0.0", // 文件属性信息
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

#### 构建二进制执行文件
- 进入项目根目录执行编译命令

`energy build`  构建生产执行程序, 需要 package 可运行


#### 生成安装包程序
- 进入项目根目录执行打包命令

`energy package` 仅生成 xxx.app 包

`energy package --pkg` 生成 xxx.pkg 包

- 安装包输出目录
  approotpath/build/darwin/[appname]-xxxx.app
