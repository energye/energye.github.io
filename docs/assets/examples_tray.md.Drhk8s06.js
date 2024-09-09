import{_ as e,c as a,o as t,a4 as r}from"./chunks/framework.D5tr8Gic.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"examples/tray.md","filePath":"zh/examples/tray.md","lastUpdated":1725890410000}'),o={name:"examples/tray.md"},l=r('<h2 id="关于系统托盘" tabindex="-1">关于系统托盘 <a class="header-anchor" href="#关于系统托盘" aria-label="Permalink to &quot;关于系统托盘&quot;">​</a></h2><blockquote><p>energy提供了四种系统托盘</p><ol><li>LCL 原生系统托盘, LCLTray</li></ol><blockquote><p>适用于windows, macosx, 因linux窗口组件使用VF, 所以无法使用LCL原生组件和托盘</p></blockquote><ol start="2"><li>LCL + CEF, CEFTray 该托盘使用LCL组件和CEF实现，托盘内容使用web端技术自定义</li></ol><blockquote><p>适用于windows, 窗口组件为LCL时</p></blockquote><ol start="3"><li>LCL + VF 组件托盘, ViewsFrameTray ，该托盘使用CEF提供的views framework组件实现，托盘内容使用web端技术自定义</li></ol><blockquote><p>适用于windows, 窗口组件为VF时</p></blockquote><ol start="4"><li>SysTray 系统原生, SysTray</li></ol><blockquote><p>适用于windows, macosx，linux, 推荐linux使用，因linux默认使用VF窗口组件无法使用LCL组件</p></blockquote></blockquote><h2 id="系统托盘示例-example-tray" tabindex="-1">系统托盘示例 example/tray <a class="header-anchor" href="#系统托盘示例-example-tray" aria-label="Permalink to &quot;系统托盘示例 example/tray&quot;">​</a></h2><p><a href="https://gitee.com/energye/energy//tree/main/example/tray" target="_blank" rel="noreferrer">tray-Gitee</a></p><p><a href="https://github.com/energye/energy/tree/main/example/tray" target="_blank" rel="noreferrer">tray-Github</a></p>',5),i=[l];function s(n,c,p,_,m,d){return t(),a("div",null,i)}const h=e(o,[["render",s]]);export{y as __pageData,h as default};