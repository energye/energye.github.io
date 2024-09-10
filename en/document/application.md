# CEF Application

### Application
全局单例，主类用于简化CEF的初始化和销毁。对于Chromium常规需要在进程设置参数在这里直接通过函数设置，也可通过事件回调绑定自定义设置进程参数。

使用 `app := cef.NewApplication()` 创建。对于Helper进程，一搬保持其实功能函数与事件和主进程一致。

在energy中，对于应用来说，框架内默认封装好了一些复杂逻辑，如果你想自定义使用，可直接使用 `cef.CreateApplication()` 来创建,
但你需要对它有一定的了解。

使用 `cef.Run(app)` 运行应用

