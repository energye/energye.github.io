# 使用 SDK 安装环境

### 环境集成 SDK 下载地址

- [sourceforge](https://sourceforge.net/projects/energye/files/sdk/)
- [百度网盘](https://pan.baidu.com/s/1XdtfMxmM5YciLWFyC90l3Q?pwd=8b3y) 提取码: 8b3y
- [移动云盘](https://caiyun.139.com/m/i?2jexCZksHP4od) 提取码: caea
- [天翼云盘](http://cloud.189.cn/t/MreEzeuY7fue) 提取码: wtk0

### 说明

现有 energy [发行版本](https://github.com/energye/energy/releases) 开发环境离线安装包

一搬只在发布 LibLCL 新版本才发布 SDK

- 目录 sdk/vx.x.x : 对应的发行版本号目录
- 安装程序 sdk/vx.x.x/ENERGY-SDK_* : SDK 安装程序
- 安装程序文件名: `ENERGY-SDK_[VER]_[CEF]_[OS][ARCH]`

`[VER]` energy 发行版本号

`[CEF]` CEF 版本号

`[OS]` 操作系统

`[ARCH]` 系统架构

- 示例, 例如我想使用 v2.5.1 发行版本, CEF 109 版本, Windows 32 位的

对应的是 `ENERGY-SDK_v2.5.1_109_windows32.exe`

### 安装和使用

#### Windows Linux
1. 下载
2. 双击打开
3. 点击安装图标按钮
4. 选择安装目录

#### MacOS
1. 下载
2. 双击打开, 会自动生成`当前执行文件名 .app 包`
3. 点击安装图标按钮
4. 选择安装目录

注意: `MacOS 可能有程序未知、不安全、等提示，需要在系统偏好里允许其运行`

#### 其它说明: 安装目录
使用 sdk 或 cli 安装开发环境时，安装目录是一个根目录
- sdk 安装时选择的目录
- cli 安装时默认是在当前目录. 如果想修改它, 先初始化环境配置 `energy env` 然后修改 `energy env -w root:E:/app` 

在安装时，会在根目录生成一个固定文件夹 "energy" 它是实际存放安装的 CEF Framework 和其它工具的目录

例如安装目录: `E:/app` or `/home/xxx/app` > 安装后 `E:/app/energy/xxx` or `/home/xxx/app/energy/xxx`

在当前系统用户目录生成 `.energy` 开发环境配置文件


### 安装界面

![install-SDK](/imgs/course/install-sdk.png)
