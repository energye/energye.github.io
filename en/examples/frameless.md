# 无边框窗口

使用快捷配置属性 `EnableHideCaption`, 它可以改变窗口样式，去除窗口标题栏。
``` go
// 1
cef.BrowserWindow.Config.EnableHideCaption = true
// 2
window.WindowProperty().EnableHideCaption = true
```
要在窗口创建后显示之前设置

运行应用后它是一个没有标题栏的窗口。此时我们想拖拽或控制"窗口行为"就需要额外的东西了。

### 控制窗口行为

- 最小化、最大化、关闭、全屏和拖拽窗口
- 使用 `cef.BrowserWindow.GetWindowInfo(browserId int32) IBrowserWindow` 获得要控制的窗口

最小化: `window.Minimize()`

最大化: `window.Maximize()`

关闭: `window.CloseBrowserWindow()`

全屏: `window.FullScreen()` 和 `window.ExitFullScreen()`

拖拽窗口: 
拖拽窗口用到了html 的 css属性，给指定属性赋予可拖拽功能
```css
-webkit-app-region: drag;
-webkit-app-region: no-drag;
-webkit-user-select: none;
```

- -webkit-app-region:drag; 设置拖拽区域
- -webkit-app-region:no-drag; 设置非拖拽区域, 当html拖拽元素内非拖拽区域时
- -webkit-user-select: none; 设置不选择文本，当拖拽区域内有可选择对象时。

