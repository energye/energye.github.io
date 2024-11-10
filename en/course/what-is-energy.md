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
> energy is Go based [LCL](https://gitlab.com/freepascal.org/lazarus/lazarus) and [CEF](https://github.com/chromiumembedded/cef)(Chromium Embedded Framework) Developed framework
>
> Build cross platform desktop applications that support Windows, Linux, and MacOS using Go and web technologies (HTML+CSS+JavaScript)


> - Rich CEF API and native widgets for LCL system
> - The development environment is simple, the compilation speed is fast, and only Go and Energy rely on the CEF binary framework
> - Cross platform: One set of code can be packaged into Windows, domestic UOS Deepin、Kylin, MacOS, Linux
> - responsibility
>> - Go: Go is responsible for window creation, CEF configuration and functionality implementation, as well as the creation of various UI components.
>> - Web: HTML + CSS + JavaScript are responsible for the functionality of the client-side interface, allowing you to create any interface you desire.
> - Front-end technology: Any front-end technologies and frameworks, such as Vue, React, Angular, as well as native HTML + CSS + JS, can be utilized.
> - Event driven: Event-driven and based on IPC (Inter-Process Communication), it achieves swift invocation and data interaction between Go and the web end.
> - Resource loading: can directly read local resources or resources built into execution files without http service support, and also support http service loading resources

### Use
energy CEF supports not just web-based applications, as it has capabilities beyond embedding web pages. It leverages the Webkit engine and takes advantage of HTML5 features implemented in Chrome, and in terms of performance, it also closely resembles Chrome.

Custom plugins, custom protocols, custom JavaScript objects and extensions, and controlled operations like resource loading, navigation, context menus, response filtering, cookie management, and more are also feasible.

LCL (Lazarus Component Library) provides native system UI widgets and facilitates cross-platform development. By combining LCL with CEF, applications with diverse interfaces can be created.
