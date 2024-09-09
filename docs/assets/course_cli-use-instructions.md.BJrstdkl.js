import{_ as t,c as s,o as i,a4 as a}from"./chunks/framework.D5tr8Gic.js";const u=JSON.parse('{"title":"使用命令行工具","description":"","frontmatter":{},"headers":[],"relativePath":"course/cli-use-instructions.md","filePath":"zh/course/cli-use-instructions.md","lastUpdated":1725890410000}'),n={name:"course/cli-use-instructions.md"},e=a(`<h1 id="使用命令行工具" tabindex="-1">使用命令行工具 <a class="header-anchor" href="#使用命令行工具" aria-label="Permalink to &quot;使用命令行工具&quot;">​</a></h1><hr><h3 id="energy-cli" tabindex="-1">energy cli <a class="header-anchor" href="#energy-cli" aria-label="Permalink to &quot;energy cli&quot;">​</a></h3><h3 id="命令参数" tabindex="-1">命令参数 <a class="header-anchor" href="#命令参数" aria-label="Permalink to &quot;命令参数&quot;">​</a></h3><p><code>energy [options]</code></p><table tabindex="0"><thead><tr><th>参数名</th><th>说明</th></tr></thead><tbody><tr><td>install</td><td>环境安装</td></tr><tr><td>init</td><td>应用初始化</td></tr><tr><td>build</td><td>编译&amp;构建应用</td></tr><tr><td>package</td><td>制作应用安装包</td></tr><tr><td>version</td><td>查看所有已发行版本</td></tr><tr><td>env</td><td>查看开发环境变量</td></tr><tr><td>setenv</td><td>设置开发环境变量</td></tr><tr><td>v</td><td>查看当前cli版本</td></tr><tr><td>gen</td><td>windows生成ico和syso</td></tr><tr><td>bindata</td><td>小于go1.16版本内置资源到exe</td></tr></tbody></table><hr><h3 id="命令参数详情" tabindex="-1">命令参数详情 <a class="header-anchor" href="#命令参数详情" aria-label="Permalink to &quot;命令参数详情&quot;">​</a></h3><h4 id="install-环境安装" tabindex="-1">install - 环境安装 <a class="header-anchor" href="#install-环境安装" aria-label="Permalink to &quot;install - 环境安装&quot;">​</a></h4><p><code>energy install</code></p><p>自动检查当前系统环境，并安装和配置完整的开发环境 如未指定<code>-p</code>在当前命令执行目录创建框架安装目录, 目录名: energy</p><ul><li>开发环境依赖模块</li><li>以下模块根据不同平台提供安装选项, 并自动安装和配置</li></ul><table tabindex="0"><thead><tr><th>平台</th><th>软件模块</th><th>描述</th></tr></thead><tbody><tr><td>Windows</td><td>Golang、CEF,liblcl、UPX、NSIS、7z</td><td>Windows AMD， 安装选项</td></tr><tr><td>Linux</td><td>Golang、CEF,liblcl、UPX、7z</td><td>Linux64 AMD,ARM， 安装选项</td></tr><tr><td>MacOS</td><td>Golang、CEF,liblcl</td><td>MacOS AMD,ARM， 安装选项</td></tr></tbody></table><ul><li>软件模块说明</li></ul><table tabindex="0"><thead><tr><th>软件模块</th><th>说明</th></tr></thead><tbody><tr><td>Golang</td><td>Go语言开发环境</td></tr><tr><td>CEF,liblcl</td><td>energy依赖底层框架</td></tr><tr><td>UPX</td><td>二进制文件压缩工具</td></tr><tr><td>NSIS</td><td>Windows软件安装包制作程序工具</td></tr><tr><td>7z</td><td>配合NSIS压缩CEF</td></tr></tbody></table><h5 id="cef-liblcl" tabindex="-1">CEF,liblcl <a class="header-anchor" href="#cef-liblcl" aria-label="Permalink to &quot;CEF,liblcl&quot;">​</a></h5><p>安装当前所支持的系统架构</p><table tabindex="0"><thead><tr><th>平台</th><th>CEF,liblcl</th></tr></thead><tbody><tr><td>Windows 32</td><td>Windows 32</td></tr><tr><td>Windows 64</td><td>Windows 64</td></tr><tr><td>Linux 64</td><td>Linux 64</td></tr><tr><td>Linux ARM 64</td><td>Linux ARM 64</td></tr><tr><td>MacOSX 64</td><td>Darwin 64</td></tr><tr><td>MacOS ARM 64</td><td>Darwin M1 M2</td></tr></tbody></table><h5 id="指定安装cef-liblcl架构和系统位数" tabindex="-1">指定安装CEF,liblcl架构和系统位数 <a class="header-anchor" href="#指定安装cef-liblcl架构和系统位数" aria-label="Permalink to &quot;指定安装CEF,liblcl架构和系统位数&quot;">​</a></h5><p>我们也可以使用命令参数自定义安装的软件模块架构和位数</p><p>例如: 当前 windows64 平台, 我们可以使用下面命令安装32位架构, 但不会配置到环境变量</p><p><code>energy install -os windows -arch 386</code></p><hr><h4 id="init-应用初始化" tabindex="-1">init- 应用初始化 <a class="header-anchor" href="#init-应用初始化" aria-label="Permalink to &quot;init- 应用初始化&quot;">​</a></h4><p><code>energy init</code></p><p>执行命令在当前目录初始化并创建一个Golang的energy应用项目</p><ul><li>提供两种资源加载模式选项</li></ul><table tabindex="0"><thead><tr><th>加载模式</th><th>说明</th></tr></thead><tbody><tr><td>HTTP</td><td>常规 http 服务支撑资源加载, 通过网络请求</td></tr><tr><td>Local Load</td><td>本地资源加载 1. 支持本地读取 2. 支持内置二进制执行文件中读取</td></tr></tbody></table><h5 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h5><blockquote><p>resources</p><blockquote><p>本地或内置资源存放目录, 可自定义目录名, 非固定.</p></blockquote><p>build</p><blockquote><p>该目录自动生成: 用于编译、构建、生成安装包</p></blockquote></blockquote><h5 id="文件说明" tabindex="-1">文件说明 <a class="header-anchor" href="#文件说明" aria-label="Permalink to &quot;文件说明&quot;">​</a></h5><blockquote><p>energy.json 项目配置文件, 用于构建和生成安装程序, 文件名不可更改.</p><p>go.mod 模块依赖管理, 文件名不可更改.</p><p>go.sum 模块依赖管理, 自动生成</p><p>main.go Golang入口启动程序</p></blockquote><hr><h4 id="build-构建-编译应用" tabindex="-1">build - 构建&amp;编译应用 <a class="header-anchor" href="#build-构建-编译应用" aria-label="Permalink to &quot;build - 构建&amp;编译应用&quot;">​</a></h4><p><code>energy build</code></p><p>在应用目录main函数位置执行</p><p><code>energy build</code> 默认会去除调试信息和符号, 和压缩</p><ul><li>不同平台区别</li></ul><table tabindex="0"><thead><tr><th>平台</th><th>描述</th></tr></thead><tbody><tr><td>Windows</td><td>去除调试信息和符号, 生成执行文件图标</td></tr><tr><td>Linux</td><td>去除调试信息和符号</td></tr><tr><td>MacOS</td><td>去除调试信息和符号</td></tr></tbody></table><h5 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h5><table tabindex="0"><thead><tr><th>名称</th><th>描述</th><th>平台</th></tr></thead><tbody><tr><td>-p, --path</td><td>编译的应用根目录, 默认当前目录</td><td>all</td></tr><tr><td>-u, --upx</td><td>如果安装了upx同时设置了该参数, 二进制文件将使用upx压缩, 默认未启用</td><td>all</td></tr><tr><td>--upxFlag</td><td>upx参数, 默认空</td><td>all</td></tr></tbody></table><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">完整参数示例使用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">energy build </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">p /</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/app/path </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">upxFlag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--best --no-color&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span></span></code></pre></div><hr><h4 id="package-制作安装包" tabindex="-1">package - 制作安装包 <a class="header-anchor" href="#package-制作安装包" aria-label="Permalink to &quot;package - 制作安装包&quot;">​</a></h4><p><code>energy package</code></p><p>在应用根目录执行</p><h5 id="安装包制作条件" tabindex="-1">安装包制作条件 <a class="header-anchor" href="#安装包制作条件" aria-label="Permalink to &quot;安装包制作条件&quot;">​</a></h5><ol><li>需先 build 应用, 得到二进制执行文件</li><li>开发环境和 energy.json 须配置正确</li><li>需安装以下软件包</li></ol><table tabindex="0"><thead><tr><th>平台</th><th>安装包制作程序</th><th>描述</th></tr></thead><tbody><tr><td>Windows</td><td>NSIS</td><td>通过energy cli安装</td></tr><tr><td>Linux</td><td>dpkg</td><td>系统自带</td></tr><tr><td>MacOS</td><td>pkgbuild</td><td>系统自带</td></tr></tbody></table><ol start="4"><li>附加条件</li></ol><table tabindex="0"><thead><tr><th>平台</th><th>软件包</th></tr></thead><tbody><tr><td>Windows</td><td>7z, nsis7z</td></tr><tr><td>Linux</td><td>7z</td></tr><tr><td>MacOS</td><td>upx</td></tr></tbody></table><h5 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h5><p>energy.json 应用配置,主要用于构建和制作安装包</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{.Name}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;projectPath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{.ProjectPath}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;frameworkPath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{.FrameworkPath}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;assetsDir&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;assets&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;outputFilename&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{.OutputFilename}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;nsis&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;dpkg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yanghy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;snxamdf@126.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">windows:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  info: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;icon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{.ProjectPath}}/resources/icon.ico&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;companyName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{.CompanyName}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;productName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{.ProductName}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;fileVersion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;productVersion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;copyright&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Copyright.....&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;comments&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Built using ENERGY (https://github.com/energye/energy)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;fileDescription&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Built using ENERGY (https://github.com/energye/energy)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nsis: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;include&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;exclude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cache&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;icon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{.ProjectPath}}/resources/icon.ico&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;unIcon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{.ProjectPath}}/resources/icon.ico&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;license&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;language&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;english&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;requestExecutionLevel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;admin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;compress&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;7za&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">linux: </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  info: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;icon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{.ProjectPath}}/resources/icon.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;companyName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{.CompanyName}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;productName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{.ProductName}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;productVersion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;comments&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Built using ENERGY (https://github.com/energye/energy)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dpkg: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;include&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;exclude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cache&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;package&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;com.{{.CompanyName}}.{{.CompanyName}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;homepage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://github.com/energye/energy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;compress&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;7zz&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span></code></pre></div><h5 id="配置字段说明" tabindex="-1">配置字段说明 <a class="header-anchor" href="#配置字段说明" aria-label="Permalink to &quot;配置字段说明&quot;">​</a></h5><ul><li>project 应用根对象</li></ul><table tabindex="0"><thead><tr><th>字段名</th><th>描述</th></tr></thead><tbody><tr><td>name</td><td>自动生成, 应用项目名</td></tr><tr><td>projectPath</td><td>自动生成, 完整项目路径</td></tr><tr><td>frameworkPath</td><td>自动生成, 完整CEF路径</td></tr><tr><td>assetsDir</td><td>项目构建和安装包制作模板资源目录, 默认assets，如自定义须自己配置模板</td></tr><tr><td>outputFilename</td><td>编译&amp;构建时生成的二进制执行文件名</td></tr></tbody></table><ul><li>windows - info windows 应用信息</li></ul><table tabindex="0"><thead><tr><th>字段名</th><th>描述</th></tr></thead><tbody><tr><td>icon</td><td>应用图标, windows:构建时自动加上该图标, 如是png格式会自动转换ico, linux, mac应用图标</td></tr><tr><td>companyName</td><td>公司名称</td></tr><tr><td>productName</td><td>产品名称</td></tr><tr><td>fileVersion</td><td>文件版本</td></tr><tr><td>productVersion</td><td>产品版本</td></tr><tr><td>copyright</td><td>版本信息</td></tr><tr><td>comments</td><td>描述</td></tr><tr><td>fileDescription</td><td>文件描述</td></tr></tbody></table><ul><li>windows - nsis windows 应用安装包生成配置</li></ul><table tabindex="0"><thead><tr><th>字段名</th><th>描述</th></tr></thead><tbody><tr><td>icon</td><td>NSIS 安装程序图标 windows</td></tr><tr><td>unIcon</td><td>NSIS 卸载程序图标 windows</td></tr><tr><td>include</td><td>自定义打包资源</td></tr><tr><td>exclude</td><td>排除打包资源</td></tr><tr><td>license</td><td>NSIS 授权描述界面，txt文本格式, 全路径名</td></tr><tr><td>language</td><td>NSIS 安装程序语言, 默认:english, 中文:SimpChinese, 参考: nsis\\Contrib\\Language files</td></tr><tr><td>requestExecutionLevel</td><td>NSIS 执行等级, 默认: admin, 空: 当前用户</td></tr><tr><td>compress</td><td>CEF压缩, 目前仅支持7z</td></tr></tbody></table><ul><li><p>关于nsis energy安装nsis时已经集成7z插件, 如果你自己安装可能没有7z, 制作安装包时可能报错. 你可以通过自己下载安装和相关插件<a href="https://nsis.sourceforge.io/Download" target="_blank" rel="noreferrer">nsis</a>或重新使用energy安装nsis</p></li><li><p>linux -info linux 应用信息</p></li></ul><table tabindex="0"><thead><tr><th>字段名</th><th>描述</th></tr></thead><tbody><tr><td>icon</td><td>应用图标, windows:构建时自动加上该图标, 如是png格式会自动转换ico, linux, mac应用图标</td></tr><tr><td>companyName</td><td>公司名称</td></tr><tr><td>productName</td><td>产品名称</td></tr><tr><td>productVersion</td><td>产品版本</td></tr><tr><td>comments</td><td>描述</td></tr></tbody></table><ul><li>linux - dpkg linux 应用安装包生成配置</li></ul><table tabindex="0"><thead><tr><th>字段名</th><th>描述</th></tr></thead><tbody><tr><td>include</td><td>自定义打包资源</td></tr><tr><td>exclude</td><td>排除打包资源</td></tr><tr><td>package</td><td>包名 com.companyName.productName</td></tr><tr><td>homepage</td><td>首页</td></tr><tr><td>compress</td><td>CEF压缩, 目前仅支持7z</td></tr></tbody></table><hr><h4 id="version-查看所有已发行版本" tabindex="-1">version - 查看所有已发行版本 <a class="header-anchor" href="#version-查看所有已发行版本" aria-label="Permalink to &quot;version - 查看所有已发行版本&quot;">​</a></h4><p><code>energy version</code> 列出所有已发行的版本</p><hr><h4 id="env-查看开发环境变量" tabindex="-1">env - 查看开发环境变量 <a class="header-anchor" href="#env-查看开发环境变量" aria-label="Permalink to &quot;env - 查看开发环境变量&quot;">​</a></h4><p><code>energy env</code> 列出energy开发依赖当前环境变量配置</p><hr><h4 id="setenv-设置开发环境变量" tabindex="-1">setenv - 设置开发环境变量 <a class="header-anchor" href="#setenv-设置开发环境变量" aria-label="Permalink to &quot;setenv - 设置开发环境变量&quot;">​</a></h4><p><code>energy setenv</code> 设置energy开发环境变量配置</p><h4 id="v-查看当前cli版本" tabindex="-1">v - 查看当前cli版本 <a class="header-anchor" href="#v-查看当前cli版本" aria-label="Permalink to &quot;v - 查看当前cli版本&quot;">​</a></h4><p><code>energy v</code></p><h4 id="gen-windows-生成ico和syso" tabindex="-1">gen - windows 生成ico和syso <a class="header-anchor" href="#gen-windows-生成ico和syso" aria-label="Permalink to &quot;gen - windows 生成ico和syso&quot;">​</a></h4><p><code>energy gen --icon</code><code>energy gen --syso</code></p><h4 id="bindata-内嵌资源到exe中" tabindex="-1">bindata - 内嵌资源到exe中 <a class="header-anchor" href="#bindata-内嵌资源到exe中" aria-label="Permalink to &quot;bindata - 内嵌资源到exe中&quot;">​</a></h4><p><code>//go:generate energy bindata --fs --o=assets/assets.go --pkg=assets --paths=./assets</code></p><p>执行Go生成命令 <code>go generate</code></p>`,81),l=[e];function h(d,p,r,k,o,E){return i(),s("div",null,l)}const g=t(n,[["render",h]]);export{u as __pageData,g as default};
