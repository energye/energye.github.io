import{_ as a,c as s,o as n,a4 as l}from"./chunks/framework.D5tr8Gic.js";const b=JSON.parse('{"title":"模块配置文件","description":"","frontmatter":{},"headers":[],"relativePath":"docs/data/model-README.md","filePath":"docs/data/model-README.md","lastUpdated":null}'),p={name:"docs/data/model-README.md"},e=l(`<h1 id="模块配置文件" tabindex="-1">模块配置文件 <a class="header-anchor" href="#模块配置文件" aria-label="Permalink to &quot;模块配置文件&quot;">​</a></h1><h3 id="基础模块配置文件说明" tabindex="-1">基础模块配置文件说明 <a class="header-anchor" href="#基础模块配置文件说明" aria-label="Permalink to &quot;基础模块配置文件说明&quot;">​</a></h3><p>模块配置是给升级版本并下载 liblcl 和 cef 提供的配置参数</p><p>应当属于基础配置，在升级energy版本时使用这里的模块配置</p><h3 id="文件说明" tabindex="-1">文件说明 <a class="header-anchor" href="#文件说明" aria-label="Permalink to &quot;文件说明&quot;">​</a></h3><h4 id="基础配置文件-model-base-config-json" tabindex="-1">基础配置文件: model-base-config.json <a class="header-anchor" href="#基础配置文件-model-base-config-json" aria-label="Permalink to &quot;基础配置文件: model-base-config.json&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>内容 JSON 格式， 它提供下载源和支持系统架构配置</span></span>
<span class="line"><span>1. 下载源 downloadSource, 只配置下载源域名, 配合具体模块配置里的 downloadURL 格式. </span></span>
<span class="line"><span>2. 支持系统架构 supportArch, 根据依赖模块 liblcl 和 cef 配置不同的支持系统架构区分, 配合具体模块配置里的 downloadURL 和 supportOSArch</span></span></code></pre></div><h4 id="liblcl模块配置文件-model-liblcl-json" tabindex="-1">liblcl模块配置文件: model-liblcl.json <a class="header-anchor" href="#liblcl模块配置文件-model-liblcl-json" aria-label="Permalink to &quot;liblcl模块配置文件: model-liblcl.json&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>内容 JSON 格式， 它提供不同 liblcl 版本模块下载配置.</span></span>
<span class="line"><span>模块名为 liblcl, 特定版本支持以 cef 大版本号结尾</span></span>
<span class="line"><span>  例如: liblcl-87 特定最后一个支持 flash 版本, liblcl-109 特定支持最后一个支持 windows7 的版本, 以后有其它的也可以这样增加</span></span>
<span class="line"><span>JSON 格式:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;模块名&quot;: {</span></span>
<span class="line"><span>    &quot;版本号&quot;: {</span></span>
<span class="line"><span>      &quot;downloadSourceSelect&quot;: 2,</span></span>
<span class="line"><span>      &quot;downloadURL&quot;: &quot;https://{source}/energye/energy/releases/download/{version}/{OSARCH}.zip&quot;, </span></span>
<span class="line"><span>      &quot;supportOSArch&quot;: &quot;Windows64,Windows32,MacOSX64,MacOSARM64,LinuxARM64GTK2,LinuxARM64,Linux64GTK2,Linux64&quot; </span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;不同的版本号&quot;: {</span></span>
<span class="line"><span>      &quot;identical&quot;: &quot;2.3.1&quot;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>字段说明:</span></span>
<span class="line"><span>模块名: liblcl, liblcl-87</span></span>
<span class="line"><span>  版本号: x.x.x =&gt; 2.3.1 , 不可重复一</span></span>
<span class="line"><span>     downloadSourceSelect: 下载源选择, 配合基础配置的 downloadSource 字段</span></span>
<span class="line"><span>     downloadURL: 下载地址，配合基础配置 supportArch 字段和模块配置的支持系统架构 supportOSArch 字段</span></span>
<span class="line"><span>     supportOSArch: 支持系统架构</span></span>
<span class="line"><span>     identical: 相同配置版本, 不为&quot;&quot;(空)时优先于上面3个字段, 如果设置了版本号则表示和被设置版本号配置完全相同</span></span></code></pre></div><h4 id="cef模块配置文件-model-cef-json" tabindex="-1">CEF模块配置文件: model-cef.json <a class="header-anchor" href="#cef模块配置文件-model-cef-json" aria-label="Permalink to &quot;CEF模块配置文件: model-cef.json&quot;">​</a></h4><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>内容 JSON 格式， 它提供不同 CEF 版本下载配置.</span></span>
<span class="line"><span>模块名为 cef-[版本号]</span></span>
<span class="line"><span>  其内容与 liblcl 模块配置文件格式完全一样, 但它每个版本模块一搬不会有多个，除非CEF对不同的系统架构有不同的版本支持.</span></span>
<span class="line"><span>JSON 格式:</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;cef-87&quot;: {</span></span>
<span class="line"><span>    &quot;87.1.14+ga29e9a3+chromium-87.0.4280.141&quot;: {</span></span>
<span class="line"><span>      &quot;downloadSourceSelect&quot;: 0,</span></span>
<span class="line"><span>      &quot;downloadURL&quot;: &quot;https://{source}/cef_binary_{version}_{OSARCH}_minimal.tar.bz2&quot;,</span></span>
<span class="line"><span>      &quot;supportOSArch&quot;: &quot;Windows64,Windows32,MacOSX64,MacOSARM64,LinuxARM64,Linux64&quot;,</span></span>
<span class="line"><span>      &quot;identical&quot;: &quot;&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>字段说明:</span></span>
<span class="line"><span>  字段和 liblcl 模块配置含义完全一样</span></span></code></pre></div>`,11),o=[e];function t(i,c,d,u,r,h){return n(),s("div",null,o)}const m=a(p,[["render",t]]);export{b as __pageData,m as default};
