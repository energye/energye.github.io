
### 自定义窗口属性
除了 `cef.BrowserWindow.Config` 设置窗口默认行为和属性以外，我们还可以通过获得窗口对象来操作更多的窗口功能

我们在 SetBrowserInit 函数中获得窗口对象，窗口底层有两种实现，取决于你使用的是哪种窗口，分别为 VF(ViewsFramework) 和 LCL 窗口

- LCL: 原生控件库，它是框架默认使用的方式
- VF: 是CEF的窗口显示组件，它是框架在Linux系统中采用Gtk3时默认使用的方式

``` go
cef.BrowserWindow.SetBrowserInit(func(event *cef.BrowserEvent, window cef.IBrowserWindow)
```


两者区别, 如果使用VF窗口模式，将无法使用LCL控件库. LCL窗口模式则没有限制，但LCL在Linux当前需要在Gtk2下才可以使用控件库.

#### 获得窗口对象

直接使用 window 对象即可获得对应的功能函数，例如设置窗口宽高(Width, Height), 边框样式、显示位置等等。


```go
// 窗口宽
window.SetWidth(int32)
window.GetWidth() int32

// 窗口高
window.SetHeight(int32)
window.GetHeight() int32

// 窗口位置
window.SetPoint(x, y int32)
window.Point() *cef.TCefPoint

// 窗口边框
LCL: 如果非Linux Gtk3，可以使用以下方式获得LCL窗口实现
if window.IsLCL() {
    lclWindow := window.AsLCLBrowserWindow().BrowserWindow()
    lclWindow.SetBorderStyle(types.BsSizeable)
    lclWindow.SetOnXXX() // 窗口事件行为, 通过 .SetOn[XXX] 方式设置对应事件行为
}
```

不限于以上，还有更多窗口属性和事件行为，可以参考对象实例。
