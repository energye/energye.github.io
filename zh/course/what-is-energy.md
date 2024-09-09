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
> energy 是 Go 基于 [CEF](https://github.com/chromiumembedded/cef)(Chromium Embedded Framework) 开发的框架, 底层使用动态链接库 [liblcl](https://github.com/energye/liblcl) 基于 [CEF4Delphi](https://github.com/salvadordf/CEF4Delphi) 开发
>
> 使用 Go 和 Web 端技术 ( HTML + CSS + JavaScript ) 构建支持Windows, Linux, MacOS跨平台桌面应用
>
> 目前实现了大约85%~90%常用CEF API, 其它持续增加

### 特性

> - 具有丰富的CEF API 和 LCL 系统原生小部件
> - 开发环境简单,编译速度快,仅需Go和Energy依赖的CEF二进制框架
> - 跨平台: 一套代码可以打包成 Windows, 国产UOS、Deepin、Kylin, MacOS, Linux
> - 职责
>> - Go: Go负责窗口创建、CEF配置和功能实现、各种UI组件创建、系统低层调用和JS处理不了的功能，如: 文件流、安全加密、高性能处理等
>> - Web: HTML + CSS + JavaScript 负责客户端界面的功能, 做出任意你想要的界面
> - 前端技术: 支持主流前端框架。例如：Vue、React、Angular 和 原生HTML+CSS+JS等
> - 事件驱动: 高性能事件驱动, 基于IPC通信，实现Go和Web端迅捷调用及数据交互
> - 资源加载: 可无需http服务支撑，直接读取本地资源或内置到执行文件的资源, 也支持http服务加载资源

### 使用
> energy: 不仅仅只做网页内嵌应用，因CEF支持Webkit & Chrome中实现的HTML5的特性，并且在性能上面，也比较接近Chrome。
自定义插件、自定义协议、自定义JavaScript对象和扩展，可控制的resource loading、navigation, context menus, response filter, cookie manager等等
lcl: 系统原生UI小部件, 跨平台，lcl结合cef可以做出不同界面的应用。


### 欢迎加入
energy扔处于建设的过程中，有很多的事情无法独自完成，如果有感兴趣的同学想参与energy的实现或学习，可通过微信或QQ联系我。
