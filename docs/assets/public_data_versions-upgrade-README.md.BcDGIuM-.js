import{_ as a,c as s,o as n,a4 as p}from"./chunks/framework.D5tr8Gic.js";const _=JSON.parse('{"title":"版本升级配置文件","description":"","frontmatter":{},"headers":[],"relativePath":"public/data/versions-upgrade-README.md","filePath":"public/data/versions-upgrade-README.md","lastUpdated":1725890410000}'),e={name:"public/data/versions-upgrade-README.md"},l=p(`<h1 id="版本升级配置文件" tabindex="-1">版本升级配置文件 <a class="header-anchor" href="#版本升级配置文件" aria-label="Permalink to &quot;版本升级配置文件&quot;">​</a></h1><h3 id="版本升级配置文件说明" tabindex="-1">版本升级配置文件说明 <a class="header-anchor" href="#版本升级配置文件说明" aria-label="Permalink to &quot;版本升级配置文件说明&quot;">​</a></h3><p>当发布版本前后需要配置该文件</p><p>该文件作用于记录发布版本的模块版本依赖</p><ol><li>在下载页面提供下载链接</li><li>energy cli工具安装开发环境时提供自动下载正确且对应的模块依赖</li></ol><h3 id="文件说明" tabindex="-1">文件说明 <a class="header-anchor" href="#文件说明" aria-label="Permalink to &quot;文件说明&quot;">​</a></h3><h4 id="升级配置文件-versions-upgrade-json" tabindex="-1">升级配置文件: versions-upgrade.json <a class="header-anchor" href="#升级配置文件-versions-upgrade-json" aria-label="Permalink to &quot;升级配置文件: versions-upgrade.json&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>内容 JSON 格式</span></span>
<span class="line"><span>  配置多个升级版本，迭代增加</span></span>
<span class="line"><span>JSON 格式:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;2.3.1&quot;: {</span></span>
<span class="line"><span>    &quot;enable&quot;: 1,</span></span>
<span class="line"><span>    &quot;modules&quot;: {</span></span>
<span class="line"><span>      &quot;liblcl&quot;: &quot;2.3.1&quot;,</span></span>
<span class="line"><span>      &quot;liblcl-87&quot;: &quot;2.3.1&quot;,</span></span>
<span class="line"><span>      &quot;liblcl-109&quot;: &quot;2.3.1&quot;,</span></span>
<span class="line"><span>      &quot;cef-87&quot;: &quot;87.1.14+ga29e9a3+chromium-87.0.4280.141&quot;,</span></span>
<span class="line"><span>      &quot;cef-106&quot;: &quot;106.1.1+g5891c70+chromium-106.0.5249.119&quot;,</span></span>
<span class="line"><span>      &quot;cef-109&quot;: &quot;109.1.18+gf1c41e4+chromium-109.0.5414.120&quot;,</span></span>
<span class="line"><span>      &quot;cef-118&quot;: &quot;118.7.1+g99817d2+chromium-118.0.5993.119&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;2.3.3&quot;: {</span></span>
<span class="line"><span>    &quot;enable&quot;: 1,</span></span>
<span class="line"><span>    &quot;identical&quot;: &quot;2.3.1&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>字段说明:</span></span>
<span class="line"><span>x.x.x: 版本号, 发行升级版本号, 不可重复一</span></span>
<span class="line"><span>  enable: 是否启用版本</span></span>
<span class="line"><span>  modules: 依赖模块, 针对不同系统架构或特定版本，从而支持的模块</span></span>
<span class="line"><span>    liblcl: 一搬属于当前的最新版本</span></span>
<span class="line"><span>  identical: 相同配置版本, 不为&quot;&quot;(空)时优先于上面3个字段, 如果设置了版本号则表示和被设置版本号配置完全相同</span></span></code></pre></div>`,8),t=[l];function o(i,c,u,r,d,q){return n(),s("div",null,t)}const m=a(e,[["render",o]]);export{_ as __pageData,m as default};
