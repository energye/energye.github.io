import{_ as s}from"./chunks/simple.W92IQrHa.js";import{_ as i,c as a,o as n,a4 as e}from"./chunks/framework.D5tr8Gic.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en/examples/simple-create1.md","filePath":"en/examples/simple-create1.md","lastUpdated":1725890410000}'),t={name:"en/examples/simple-create1.md"},l=e('<h3 id="效果图" tabindex="-1">效果图 <a class="header-anchor" href="#效果图" aria-label="Permalink to &quot;效果图&quot;">​</a></h3><p><img src="'+s+`" alt="simple"></p><hr><h3 id="开发环境安装" tabindex="-1">开发环境安装 <a class="header-anchor" href="#开发环境安装" aria-label="Permalink to &quot;开发环境安装&quot;">​</a></h3><blockquote><p><a href="/course/install-env">开发环境安装</a></p></blockquote><h3 id="简单示例" tabindex="-1">简单示例 <a class="header-anchor" href="#简单示例" aria-label="Permalink to &quot;简单示例&quot;">​</a></h3><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">github.com/energye/energy/v2/cef</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	//全局初始化 每个应用都必须调用的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	cef.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GlobalInit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	//创建应用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	cefApp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cef.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NewApplication</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	//主窗口的配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	//指定一个URL地址，或本地html文件目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	cef.BrowserWindow.Config.Url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://www.baidu.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	//运行应用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	cef.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cefApp)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>第一次需要更新go.mod依赖</li></ul><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">go </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">mod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tidy</span></span></code></pre></div><h3 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h3><blockquote><p>cef.GlobalCEFInit(nil, nil) 全局初始化 每个energy应用都必须调用</p><p>cef.NewApplication(nil) 创建应用</p><p>cef.BrowserWindow.Config.DefaultUrl = &quot;<a href="https://www.baidu.com" target="_blank" rel="noreferrer">https://www.baidu.com</a>&quot; 指定一个URL地址，或本地html文件目录, energy内置了一个http服务</p><p>cef.Run(cefApp) 运行应用，启动主进程和子进程</p></blockquote>`,11),p=[l];function h(k,r,o,d,c,E){return n(),a("div",null,p)}const m=i(t,[["render",h]]);export{u as __pageData,m as default};