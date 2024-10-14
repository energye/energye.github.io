# 编译liblcl

## 自己编译energy依赖的liblcl动态链接库
我的编译环境有限，无法编译出所有CEF支持的系统架构，如何自己编译liblcl动态链接库
目前energy提供了 Windows(32,64), Linux (AMD64, ARM64), MacOSX AMD64, MacOS (M1,M2) 平台liblcl动态链接库，除此之外你需要自己编译CEF所支持的平台

## 正文

liblcl 是使用 lazarus 开发的基于 CEF4Delphi 开源软件包，使用FPC(Free Pascal Compiler)编译器, 在编译liblcl之前需要成功安装或构建出lazbuild

### 使用 git clone liblcl
```
git clone https://github.com/energye/liblcl.git 
```
- main分枝: 是liblcl最新版本, 目前落后CEF版本
- 其它分枝: 一搬是CEF最后支持特定情况的版本

### 方式一 安装lazarus-ide
以下是<span style="color:red">直接安装</span>lazarus-ide的方式编译liblcl
当前lazarus-ide最新稳定版本是2.2.6

#### lazarus-ide 官网
[https://www.lazarus-ide.org](https://www.lazarus-ide.org)
#### lazarus 相关下载
- Lazarus [https://sourceforge.net/projects/lazarus/files](https://sourceforge.net/projects/lazarus/files)
- FPC [https://sourceforge.net/projects/freepascal/files](https://sourceforge.net/projects/freepascal/files)

#### Windows
##### 1. 下载lazarus windows安装包, 需要注意386和amd64
##### 2. 安装到你想安装的目录
##### 3. 配置lazarus安装目录到PATH环境变量, 以使用lazbuild命令编译liblcl
##### 4. 进入liblcl目录，注意: 你想使用的CEF版本分枝
##### 5. 编译liblcl

```
打开 CMD 并进入 liblcl 目录
1. 执行以下命令添加软件包

lazbuild.exe --add-package-link .\src\3rd-party\richmemo\richmemopackage.lpk
lazbuild.exe .\src\3rd-party\richmemo\richmemopackage.lpk
lazbuild.exe --add-package .\src\3rd-party\richmemo\ide\richmemo_design.lpk
lazbuild.exe .\src\3rd-party\richmemo\ide\richmemo_design.lpk

lazbuild.exe --add-package .\src\3rd-party\ATFlatControls\atflatcontrols\atflatcontrols_package.lpk
lazbuild.exe .\src\3rd-party\ATFlatControls\atflatcontrols\atflatcontrols_package.lpk

lazbuild.exe --add-package-link .\src\3rd-party\DCPcrypt\dcpcrypt.lpk
lazbuild.exe .\src\3rd-party\DCPcrypt\dcpcrypt.lpk
lazbuild.exe --add-package .\src\3rd-party\DCPcrypt\dcpcrypt_laz.lpk
lazbuild.exe .\src\3rd-party\DCPcrypt\dcpcrypt_laz.lpk

lazbuild.exe --add-package .\src\3rd-party\CEF4Delphi\packages\cef4delphi_lazarus.lpk
lazbuild.exe .\src\3rd-party\CEF4Delphi\packages\cef4delphi_lazarus.lpk

提示: 如果出现错误，请检查lazarus环境变量是否配置正确，检查当前运行命令是否在liblcl目录

2. 构建liblcl动态链接库

lazbuild.exe -B --bm=Win64 "src/liblcl.lpi"

参数说明: 
    --bm 指定编译模式, Windows提供了2种, 分别是 Win64, Win32
编译模式用于区分编译出的liblcl.dll是32位还是64位，也同时需要安装对应的lazarus-ide
```

##### 6. 最后编译出的 liblcl.dll 在当前 系统登录用户\golcl\liblcl.dll 目录
   例如: C:\Users\Administrator\golcl\liblcl.dll

#### Linux
##### 1. 下载lazarus deb安装包, 需要注意386和amd64
##### 2. 我们使用deb安装包, 提供了3个deb安装包, 全部下载
   分别是
   lazarus-ide: lazarus-project_2.2.6-0_amd64.deb
   fpc命令工具: fpc-laz_3.2.2-210709_amd64.deb
   fpc源码: fpc-src_3.2.2-210709_amd64.deb
##### 3. 安装
   双击安装或使用dpkg命令安装
   安装顺序
    1. fpc-laz
    2. fpc-src
    3. lazarus-project
##### 4. 配置lazarus安装目录到PATH环境变量, 以使用lazbuild命令编译liblcl
##### 5. 进入liblcl目录，注意: 你想使用的CEF版本分枝
##### 6. 编译liblcl

```
打开 terminal 并进入 liblcl 目录
1. 执行以下命令添加软件包

lazbuild --add-package-link ./src/3rd-party/richmemo/richmemopackage.lpk
lazbuild ./src/3rd-party/richmemo/richmemopackage.lpk
lazbuild --add-package ./src/3rd-party/richmemo/ide/richmemo_design.lpk
lazbuild ./src/3rd-party/richmemo/ide/richmemo_design.lpk

lazbuild --add-package ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk
lazbuild ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk

lazbuild --add-package-link ./src/3rd-party/DCPcrypt/dcpcrypt.lpk
lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt.lpk
lazbuild --add-package ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk
lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk

lazbuild --add-package ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk
lazbuild ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk

提示: 如果出现错误，请检查lazarus环境变量是否配置正确，检查当前运行命令是否在liblcl目录

2. 构建liblcl动态链接库

lazbuild -B --bm=Linux64 --ws=gtk3 --lazarusdir=/lazarus-ide/install/path "src/liblcl.lpi"

参数说明: 
    --bm 指定编译模式, Linux提供了2种, 分别是 Linux64, Linux32
    --ws 指定LCLWidgetType, Linux提供了2种，分别是 gtk2, gtk3
    --lazarusdir 指定lazarus-ide的安装目录
编译模式用于区分编译出的liblcl.so是32位还是64位，也同时需要安装对应的lazarus-ide
LCLWidgetType: 是因为CEF不同版本在linux下对gtk支持不同, CEF106是最后一个支持gtk2的版本, 以后默认都是gtk3
```

##### 7. 最后编译出的 liblcl.so 在当前 系统登录用户/golcl/liblcl.so 目录
   例如: ~/golcl/liblcl.so

#### MacOSX

##### 1. 下载lazarus安装包, 需要注意386和64, energy仅支持64位
##### 2. 提供了3个安装包, 全部下载
   分别是
   lazarus-ide: Lazarus-2.2.6-0-x86_64-macosx.pkg
   fpc命令工具: fpc-3.2.2.intelarm64-macosx.dmg
   fpc源码: fpc-src-3.2.2-20210709-macosx.dmg
##### 3. 安装
   双击安装或使用命令安装
   安装顺序
    1. fpc
    2. fpc-src
    3. lazarus-project
##### 4. 进入liblcl目录，注意: 你想使用的CEF版本分枝
##### 5. 编译liblcl

```
打开 terminal 并进入 liblcl 目录
1. 执行以下命令添加软件包

lazbuild --add-package-link ./src/3rd-party/richmemo/richmemopackage.lpk
lazbuild ./src/3rd-party/richmemo/richmemopackage.lpk
lazbuild --add-package ./src/3rd-party/richmemo/ide/richmemo_design.lpk
lazbuild ./src/3rd-party/richmemo/ide/richmemo_design.lpk

lazbuild --add-package ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk
lazbuild ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk

lazbuild --add-package-link ./src/3rd-party/DCPcrypt/dcpcrypt.lpk
lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt.lpk
lazbuild --add-package ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk
lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk

lazbuild --add-package ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk
lazbuild ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk

提示: 如果出现错误，请检查lazarus是否正确安装，检查当前运行命令是否在liblcl目录

2. 构建liblcl动态链接库

编译AMD64
lazbuild -B --bm="MacOS64(cocoa)" --ws=cocoa "src/liblcl.lpi"
编译ARM64(M1 M2)平台
lazbuild -B --bm="MacOS64(cocoa)ARM64" --ws=cocoa "src/liblcl.lpi"

参数说明: 
    --bm 指定编译模式, MacOS提供了2种, 分别是 MacOS64(cocoa)ARM64, MacOS64(cocoa)
    --ws 指定LCLWidgetType = cocoa
    --lazarusdir 指定lazarus-ide的安装目录
编译模式 分别为AMD64和ARM64, 可在同一平台交叉编译
LCLWidgetType: 固定值 cocoa
```
##### 6. 最后编译出的 liblcl.so 在当前 系统登录用户/golcl/liblcl.dylib 目录
   例如: ~/golcl/liblcl.dylib


### 方式二 自己编译lazarus-ide
因lazarus有些平台未提供安装包，我们使用 源码+FPC工具 自己编译，这里使用linux-aarch64，其它平台照搬，基本差不多
我使用的是 lazarus-2.2.6-0.tar.gz， fpc-3.2.2.aarch64-linux.tar，fpc-3.2.2.source.tar.gz

先安装一些必备软件工具包
```
apt-get update -q -y
apt-get install -q -y git
apt-get install -q -y make binutils build-essential gdb subversion zip unzip libx11-dev libgtk2.0-dev libgdk-pixbuf2.0-dev libcairo2-dev libpango1.0-dev libgtk-3-dev
```

#### 1. 下载源码 注意版本匹配, 目前lazarus (2.2.2, 2.2.4, 2.2.6) 使用 FPC 3.2.2
  - Lazarus源码: [https://sourceforge.net/projects/lazarus/files/Lazarus%20Zip%20_%20GZip/](https://sourceforge.net/projects/lazarus/files/Lazarus%20Zip%20_%20GZip)
  - FPC工具: [https://sourceforge.net/projects/freepascal/files/Linux](https://sourceforge.net/projects/freepascal/files/Linux)
  - FPC源码: [https://sourceforge.net/projects/freepascal/files/Source](https://sourceforge.net/projects/freepascal/files/Source)
#### 2. 将压缩包内容解压出来
   `tar -xvf lazarus-2.2.6-0.tar.gz -C ~/app`
   `tar -xvf fpc-3.2.2.aarch64-linux.tar -C ~/app/lazarus`
   `tar -xvf fpc-3.2.2.source.tar.gz -C ~/app/lazarus`
```
先解压 lazarus
接着解压 FPC工具 和 FPC源码 到 lazarus 目录
~/app/lazarus 
  lazarus-2.2.6-0 // lazarus源码
  fpc-3.2.2.aarch64-linux // FPC工具
  fpc-3.2.2 // FPC源码
```
#### 3. 开始安装
    - 进入 ~/app/lazarus/fpc-3.2.2.aarch64-linux 目录
    - 执行 ./install.sh 脚本, 会提示输入，直接一路回车即可
    - 返回到上级目录 cd ../
    - 执行 make clean all
      如果有错误根据提示自己修改，应该不会出现错误，我是没遇到错误。
#### 4. 配置lazarus安装目录到PATH环境变量, 以使用lazbuild命令编译liblcl
#### 5. 进入liblcl目录，注意: 你想使用的CEF版本分枝
#### 6. 编译liblcl

```
打开 terminal 并进入 liblcl 目录
1. 执行以下命令添加软件包

lazbuild --add-package-link ./src/3rd-party/richmemo/richmemopackage.lpk
lazbuild ./src/3rd-party/richmemo/richmemopackage.lpk
lazbuild --add-package ./src/3rd-party/richmemo/ide/richmemo_design.lpk
lazbuild ./src/3rd-party/richmemo/ide/richmemo_design.lpk

lazbuild --add-package ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk
lazbuild ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk

lazbuild --add-package-link ./src/3rd-party/DCPcrypt/dcpcrypt.lpk
lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt.lpk
lazbuild --add-package ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk
lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk

lazbuild --add-package ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk
lazbuild ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk

提示: 如果出现错误，请检查lazarus环境变量是否配置正确，检查当前运行命令是否在liblcl目录

2. 构建liblcl动态链接库

lazbuild -B --bm=Linux64 --ws=gtk3 --lazarusdir=/lazarus-ide/install/path "src/liblcl.lpi"

参数说明: 
    --bm 指定编译模式, Linux提供了2种, 分别是 Linux64, Linux32
    --ws 指定LCLWidgetType, Linux提供了2种，分别是 gtk2, gtk3
    --lazarusdir 指定lazarus-ide的安装目录
编译模式用于区分编译出的liblcl.so是32位还是64位，也同时需要安装对应的lazarus-ide
LCLWidgetType: 是因为CEF不同版本在linux下对gtk支持不同, CEF106是最后一个支持gtk2的版本, 以后默认都是gtk3
```

#### 7. 最后编译出的 liblcl.so 在当前 系统登录用户/golcl/liblcl.so 目录
   例如: ~/golcl/liblcl.so

---

## Loongnix 龙芯
我没有Loongnix(龙芯)机器无法测试，龙芯工程师对lazarus做了支持, 理论上可以编译出liblcl。


### 安装lazarus
相关链接
```
龙芯CEF: http://www.loongnix.cn/zh/api/CEF/  CEF 109 或 与energy有对应的版本
龙芯Go:  http://www.loongnix.cn/zh/toolchain/Golang/

方式一 在线安装 fpcupdeluxe - 支持各种平台在线安装lazarus-ide
   https://github.com/LongDirtyAnimAlf/fpcupdeluxe/releases  
   下载 fpcupdeluxe-loongarch64-linux

方式二 龙芯在线仓库 - 有能力自己编译
   仓库: http://pkg.loongnix.cn/
   fpc:  http://pkg.loongnix.cn/loongnix/pool/main/f/fpc/
   lazarus: http://pkg.loongnix.cn/loongnix/pool/main/l/lazarus/

方式三 龙芯lazarus绿色安装包和教程 - 推荐
   https://www.cnblogs.com/qiufeng2014/p/17197981.html

```

### 编译liblcl

编译步骤，除了lazarus安装方式不同，构建liblcl时命令和上面的教程一样, 如果你已尝试或有问题可以与我沟通。
```
打开 terminal 并进入 liblcl 目录
1. 执行以下命令添加软件包

lazbuild --add-package-link ./src/3rd-party/richmemo/richmemopackage.lpk
lazbuild ./src/3rd-party/richmemo/richmemopackage.lpk
lazbuild --add-package ./src/3rd-party/richmemo/ide/richmemo_design.lpk
lazbuild ./src/3rd-party/richmemo/ide/richmemo_design.lpk

lazbuild --add-package ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk
lazbuild ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk

lazbuild --add-package-link ./src/3rd-party/DCPcrypt/dcpcrypt.lpk
lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt.lpk
lazbuild --add-package ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk
lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk

lazbuild --add-package ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk
lazbuild ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk

提示: 如果出现错误，请检查lazarus环境变量是否配置正确，检查当前运行命令是否在liblcl目录

2. 构建liblcl动态链接库

lazbuild -B --bm=Linux64 --ws=gtk3 --lazarusdir=/lazarus-ide/install/path "src/liblcl.lpi"

```

最后编译出的 liblcl.so 在当前 系统登录用户/golcl/liblcl.so 目录
例如: ~/golcl/liblcl.so
