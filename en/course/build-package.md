# 构建打包

### energy 命令行工具, 制作安装包

|平台 |介绍 |描述 |
|-|-|-|
|window |NSIS安装包制作工具 |可通过 energy cli 安装|
|linux|dpkg 命令|系统自带 |
|macos|energy 仅生成 xxx.app|系统自带 |

---

### Windows 安装包制作

#### 应用配置文件 energy.json
- energy.json是自动生成应用配置文件，在编译执行程序和应用安装包制作使用
- info: 应用的二进制执行程序配置
- nsis: 安装包程序配置
```json
{
  "name": "{{.Name}}", // 自动填充
  "projectPath": "{{.ProjectPath}}", // 自动填充
  "frameworkPath": "{{.FrameworkPath}}", // 自动填充
  "assetsDir": "assets",// 一搬不修改
  "outputFilename": "{{.OutputFilename}}", // 自动填充
  "info": {
    "icon": "{{.ProjectPath}}/resources/icon.ico", // 自动填充, 应用图标，建议修改
    "companyName": "{{.CompanyName}}", // 自动填充，建议修改
    "productName": "{{.ProductName}}", // 自动填充，建议修改
    "fileVersion": "1.0.0", // 建议修改
    "productVersion": "1.0.0", // 建议修改
    "copyright": "Copyright.....", // 建议修改
    "comments": "Built using ENERGY (https://github.com/energye/energy)", // 建议修改
    "fileDescription": "Built using ENERGY (https://github.com/energye/energy)" // 建议修改
  },
  "nsis": {
    "include": [], // 额外要打包的资源, 绝对路径
    "exclude": ["cache"], // 忽略
    "icon": "{{.ProjectPath}}/resources/icon.ico", // 自动填充，安装程序图标，建议修改
    "unIcon": "{{.ProjectPath}}/resources/icon.ico", // 自动填充，安装程序卸载图标，建议修改
    "license": "",// 安装包授权信息界面, xxx.txt 绝对路径，不为空时
    "language": "english", // 安装包界面语言，默认英文: english，中文: SimpChinese
    "requestExecutionLevel": "admin",// 执行等级, 空""当前用户
    "compress": "7za", // 空时不启用7za压缩
    "compressName": "framework.7z" // 7z 压缩包名称
  },
  "author": {
    "name": "youname",// 忽略
    "email": "demo@email.com"// 忽略
  }
}

```

#### 构建二进制执行文件
- 进入项目根目录执行编译命令
  `energy build`
- 根据 energy.json 配置文件 info 生成二进制文件

<img src="/imgs/assets/energy-windows-build.gif"/>

#### 生成安装包程序
- 进入项目根目录执行打包命令
  `energy package`
- 根据 energy.json 配置文件 nsis 生成安装包
- 安装包输出目录
  approotpath/build/windows/appname-install.exe

<img src="/imgs/assets/energy-windows-package.gif"/>

#### 关于NSIS脚本
approotpath/build/windows
installer-nsis.nsi
installer-tools.nsh
你可以自己配置nsis脚本, 自定义安装程序界面.

---------------------------

### Linux 安装包制作

#### 应用配置文件 energy.json
- energy.json是自动生成应用配置文件，在编译执行程序和应用安装包制作使用
- info: 应用的二进制执行程序配置
- dpkg: 安装包程序配置
```json
{
  "name": "{{.Name}}",// 自动填充
  "projectPath": "{{.ProjectPath}}",// 自动填充
  "frameworkPath": "{{.FrameworkPath}}",// 自动填充
  "assetsDir": "assets",// 一搬不修改
  "outputFilename": "{{.OutputFilename}}",// 自动填充
  "info": {
    "icon": "{{.ProjectPath}}/resources/icon.png",// 自动填充, 安装后的应用图标，建议修改
    "companyName": "{{.CompanyName}}",// 自动填充，建议修改
    "productName": "{{.ProductName}}",// 自动填充，建议修改
    "productVersion": "1.0.0",// 建议修改
    "comments": "Built using ENERGY (https://github.com/energye/energy)"// 建议修改
  },
  "dpkg": {
    "include": [],// 忽略
    "exclude": ["cache"],// 忽略
    "package": "com.{{.CompanyName}}.{{.CompanyName}}",// 自动填充, 建议修改
    "homepage": "https://github.com/energye/energy",// 建议修改
    "compress": "7zz", // 忽略
    "compressName": "framework.7z" // 忽略
  },
  "author": {
    "name": "yanghy",// 建议修改
    "email": "snxamdf@126.com"// 建议修改
  }
}
```

#### 构建二进制执行文件
- 进入项目根目录执行编译命令
  `energy build`


#### 生成安装包程序
- 进入项目根目录执行打包命令
  `energy package`
- 根据 energy.json 配置文件 info 和 dpkg 生成安装包
- 安装包输出目录
  approotpath/build/linux/appname-install.deb


### MacOS 应用包制作

#### 应用配置文件 energy.json
- energy.json是自动生成应用配置文件，在编译执行程序和应用安装包制作使用
- plist: xxx.app Info.plist 文件配置

```json
{
  "name": "{{.Name}}",
  "projectPath": "{{.ProjectPath}}",
  "frameworkPath": "{{.FrameworkPath}}",
  "assetsDir": "assets",
  "outputFilename": "{{.OutputFilename}}",
  "plist": {
    "icon": "{{.ProjectPath}}/resources/icon.png",
    "companyName": "{{.CompanyName}}",
    "productName": "{{.ProductName}}",
    "locals": [
      "zh_CN",
      "en"
    ],
    "cfBundleVersion": "1.0.0",
    "cfBundleShortVersionString": "1.0.0",
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
  `energy build`


#### 生成安装包程序
- 进入项目根目录执行打包命令
  `energy package`
- 根据 energy.json 配置文件 plist 生成安装包
- 安装包输出目录
  approotpath/build/darwin/appname-install.app
