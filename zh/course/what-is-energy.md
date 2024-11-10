# 什么是 energy?

<p align="center">
    <img src="/imgs/assets/energy-icon.png">
</p>

<p align="center" style="font-size: 24px;">
    <strong>
        Energy是Go基于CEF构建桌面应用的框架
    </strong>
</p>


### 介绍
> energy 是 Go 基于 [LCL](https://gitlab.com/freepascal.org/lazarus/lazarus) 和 [CEF](https://github.com/chromiumembedded/cef)(Chromium Embedded Framework) 开发的框架
>
> 使用 Go 和 Web 端技术 ( HTML + CSS + JavaScript ) 构建支持Windows, Linux, MacOS跨平台桌面应用

### 特性

> - 具有丰富的CEF API 和 LCL 系统原生控件
> - 开发环境简单, 编译速度快, 使用`Golang`和`energy`依赖的CEF二进制框架
> - 跨平台: 一套代码可以打包成 Windows, 国产UOS、Deepin、Kylin, MacOS, Linux
>> - Go: Go负责窗口创建、CEF配置和功能实现、各种UI组件创建
>> - Web: HTML + CSS + JavaScript 负责客户端界面的功能, 做出任意你想要的界面
> - 前端技术: 任意的前端技术和框架。例如：Vue、React、Angular 和 原生HTML+CSS+JS等
> - 事件驱动: 事件驱动, 基于 IPC(Inter-Process Communication) 通信，实现 Go 和 Web 端迅捷调用及数据交互
> - 资源加载: 可无需http服务支撑，直接读取本地资源或内置到执行文件的资源, 也支持http服务加载资源

### 使用
energy 不仅仅只做网页内嵌应用，因CEF支持Webkit & Chrome中实现的HTML5的特性，并且在性能上面，也比较接近Chrome。

自定义插件、自定义协议、自定义JavaScript对象和扩展，可控制的resource loading、navigation, context menus, response filter, cookie manager等等

LCL (Lazarus Component Library) 系统原生UI控件集合, 跨平台，LCL 结合 CEF 可以做出功能丰富且不同的应用
