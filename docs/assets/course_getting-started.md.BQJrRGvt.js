import{_ as a,a as t,b as e,c as o}from"./chunks/dir_struct.DGGwymdq.js";import{_ as r,c as i,o as d,a4 as l}from"./chunks/framework.D5tr8Gic.js";const x=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"course/getting-started.md","filePath":"zh/course/getting-started.md","lastUpdated":1725890410000}'),n={name:"course/getting-started.md"},c=l('<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h3 id="开发环境安装" tabindex="-1">开发环境安装 <a class="header-anchor" href="#开发环境安装" aria-label="Permalink to &quot;开发环境安装&quot;">​</a></h3><p>开发环境安装 <a href="/course/install-env">教程链接</a></p><h3 id="创建应用" tabindex="-1">创建应用 <a class="header-anchor" href="#创建应用" aria-label="Permalink to &quot;创建应用&quot;">​</a></h3><ul><li>命令: <code>energy init</code></li><li>执行命令后 -- 1. 输入应用名 -- 2. 选择 HTTP</li><li>等待自动创建并初始化项目和依赖配置</li></ul><h4 id="输入应用名" tabindex="-1">输入应用名 <a class="header-anchor" href="#输入应用名" aria-label="Permalink to &quot;输入应用名&quot;">​</a></h4><p><img src="'+a+'" alt="init_name"></p><h4 id="选择资源加载方式" tabindex="-1">选择资源加载方式 <a class="header-anchor" href="#选择资源加载方式" aria-label="Permalink to &quot;选择资源加载方式&quot;">​</a></h4><p><img src="'+t+'" alt="init_http"></p><h4 id="回车确认-等待" tabindex="-1">回车确认，等待 <a class="header-anchor" href="#回车确认-等待" aria-label="Permalink to &quot;回车确认，等待&quot;">​</a></h4><p><img src="'+e+'" alt="init_success"></p><h3 id="运行应用" tabindex="-1">运行应用 <a class="header-anchor" href="#运行应用" aria-label="Permalink to &quot;运行应用&quot;">​</a></h3><h4 id="_1-进入项目目录" tabindex="-1">1. 进入项目目录 <a class="header-anchor" href="#_1-进入项目目录" aria-label="Permalink to &quot;1. 进入项目目录&quot;">​</a></h4><h4 id="_2-命令-go-run-main-go" tabindex="-1">2. 命令 <code>go run main.go</code> <a class="header-anchor" href="#_2-命令-go-run-main-go" aria-label="Permalink to &quot;2. 命令 `go run main.go`&quot;">​</a></h4><h4 id="linux-arm-64" tabindex="-1">Linux-ARM(64) <a class="header-anchor" href="#linux-arm-64" aria-label="Permalink to &quot;Linux-ARM(64)&quot;">​</a></h4><blockquote><ol><li><code>export LD_PRELOAD=&quot;$ENERGY_HOME/libcef.so&quot;</code></li><li><code>go run main.go</code></li></ol></blockquote><h3 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h3><p><img src="'+o+'" alt="dir_struct"></p><table tabindex="0"><thead><tr><th>名称</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>resources</td><td>文件夹</td><td>资源存放目录，初始化时创建，可自定义或删除</td></tr><tr><td>energy.json</td><td>文件</td><td>项目配置文件，初始化时创建，文件名不可修改，用于构建和制作安装包</td></tr><tr><td>go.mod, go.sum</td><td>文件</td><td>Go模块管理, 自动生成</td></tr><tr><td>README.md</td><td>文件</td><td>项目描述文件，初始化时创建，描述当前目录结构</td></tr><tr><td>main.go</td><td>文件</td><td>Energy Go应用项目main函数启动入口文件</td></tr></tbody></table><h3 id="mac-m1-m2" tabindex="-1">Mac M1 M2 <a class="header-anchor" href="#mac-m1-m2" aria-label="Permalink to &quot;Mac M1 M2&quot;">​</a></h3><blockquote><p>对于 Mac ARM(M1, M2)架构, 开发环境和 Mac AMD64 一样 在Mac ARM Go需要使用交叉编译, 设置Go的编译环境为 amd64, 和CGO支持 通过 Rosetta2 兼容运行AMD架构应用 需要额外安装</p><ol><li>GCC工具链 <code>brew install gcc</code>, 还可能需要安装<code>xcode-select --install</code></li><li>Rosetta2 <a href="https://support.apple.com/zh-cn/HT211861" target="_blank" rel="noreferrer">参考链接</a></li></ol><p>编译环境设置</p><ul><li>交叉环境: <code>GOARCH=amd64</code></li><li>开启CGO: <code>CGO_ENABLED=1</code></li></ul></blockquote>',21),s=[c];function h(u,m,_,p,b,g){return d(),i("div",null,s)}const k=r(n,[["render",h]]);export{x as __pageData,k as default};
