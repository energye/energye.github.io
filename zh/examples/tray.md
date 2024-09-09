## 关于系统托盘
> energy提供了四种系统托盘
> 1. LCL 原生系统托盘, LCLTray
>> 适用于windows, macosx, 因linux窗口组件使用VF, 所以无法使用LCL原生组件和托盘
> 2. LCL + CEF, CEFTray 该托盘使用LCL组件和CEF实现，托盘内容使用web端技术自定义
>> 适用于windows, 窗口组件为LCL时
> 3. LCL + VF 组件托盘, ViewsFrameTray ，该托盘使用CEF提供的views framework组件实现，托盘内容使用web端技术自定义
>> 适用于windows, 窗口组件为VF时
> 4. SysTray 系统原生, SysTray
>> 适用于windows, macosx，linux, 推荐linux使用，因linux默认使用VF窗口组件无法使用LCL组件

## 系统托盘示例 example/tray
[tray-Gitee](https://gitee.com/energye/energy//tree/main/example/tray)

[tray-Github](https://github.com/energye/energy/tree/main/example/tray)
