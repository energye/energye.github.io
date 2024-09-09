# What is energy？

<p align="center">
    <img src="/imgs/assets/energy-icon.png">
</p>

<p align="center" style="font-size: 24px;">
    <strong>
        Energy is Go's framework for building desktop applications based on CEF
    </strong>
</p>


### Introduce
> energy is Go based [CEF](https://github.com/chromiumembedded/cef)(Chromium Embedded Framework) Developed framework, the underlying use of dynamic link library [liblcl](https://github.com/energye/liblcl) based [CEF4Delphi](https://github.com/salvadordf/CEF4Delphi) develop
>
> Build cross platform desktop applications that support Windows, Linux, and MacOS using Go and web technologies (HTML+CSS+JavaScript)
>
> Currently, approximately 85% to 90% of commonly used CEF APIs have been implemented, while others continue to increase

### Peculiarity

> - Rich CEF API and native widgets for LCL system
> - The development environment is simple, the compilation speed is fast, and only Go and Energy rely on the CEF binary framework
> - Cross platform: One set of code can be packaged into Windows, domestic UOS Deepin、Kylin, MacOS, Linux
> - responsibility
>> - Go: Go is responsible for window creation, CEF configuration and function implementation, creation of various UI components, low-level system calls, and functions that JS cannot handle, such as file streaming, secure encryption, high-performance processing, etc
>> - Web: HTML + CSS + JavaScript Responsible for the function of the client interface, make any interface you want
> - Front-end technology: Supports mainstream front-end frameworks. For example: Vue, React, Angular and native HTML+CSS+JS
> - Event driven: high-performance event driven, based on IPC communication, to achieve Go and Web quick call and data interaction
> - Resource loading: can directly read local resources or resources built into execution files without http service support, and also support http service loading resources

### Use
> energy: CEF supports not just web-based applications, as it has capabilities beyond embedding web pages. It leverages the Webkit engine and takes advantage of HTML5 features implemented in Chrome, and in terms of performance, it also closely resembles Chrome.
Custom plugins, custom protocols, custom JavaScript objects and extensions, and controlled operations like resource loading, navigation, context menus, response filtering, cookie management, and more are also feasible.
LCL (Lazarus Component Library) provides native system UI widgets and facilitates cross-platform development. By combining LCL with CEF, applications with diverse interfaces can be created.


### Welcome to join
The development of Energy is still underway, and there are many tasks that cannot be accomplished alone. If there are any interested students who wish to participate in the implementation or learn about Energy, please contact me via WeChat or QQ.
