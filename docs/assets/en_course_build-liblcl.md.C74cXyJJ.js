import{_ as a,c as l,o as s,a4 as n}from"./chunks/framework.D5tr8Gic.js";const g=JSON.parse('{"title":"编译liblcl","description":"","frontmatter":{},"headers":[],"relativePath":"en/course/build-liblcl.md","filePath":"en/course/build-liblcl.md","lastUpdated":1725890410000}'),p={name:"en/course/build-liblcl.md"},e=n(`<h1 id="编译liblcl" tabindex="-1">编译liblcl <a class="header-anchor" href="#编译liblcl" aria-label="Permalink to &quot;编译liblcl&quot;">​</a></h1><h2 id="自己编译energy依赖的liblcl动态链接库" tabindex="-1">自己编译energy依赖的liblcl动态链接库 <a class="header-anchor" href="#自己编译energy依赖的liblcl动态链接库" aria-label="Permalink to &quot;自己编译energy依赖的liblcl动态链接库&quot;">​</a></h2><p>我的编译环境有限，无法编译出所有CEF支持的系统架构，如何自己编译liblcl动态链接库 目前energy提供了 Windows(32,64), Linux (AMD64, ARM64), MacOSX AMD64, MacOS (M1,M2) 平台liblcl动态链接库，除此之外你需要自己编译CEF所支持的平台</p><h2 id="正文" tabindex="-1">正文 <a class="header-anchor" href="#正文" aria-label="Permalink to &quot;正文&quot;">​</a></h2><p>liblcl 是使用 lazarus 开发的基于 CEF4Delphi 开源软件包，使用FPC(Free Pascal Compiler)编译器, 在编译liblcl之前需要成功安装或构建出lazbuild</p><h3 id="使用-git-clone-liblcl" tabindex="-1">使用 git clone liblcl <a class="header-anchor" href="#使用-git-clone-liblcl" aria-label="Permalink to &quot;使用 git clone liblcl&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git clone https://github.com/energye/liblcl.git</span></span></code></pre></div><ul><li>main分枝: 是liblcl最新版本, 目前落后CEF版本</li><li>其它分枝: 一搬是CEF最后支持特定情况的版本</li></ul><h3 id="方式一-安装lazarus-ide" tabindex="-1">方式一 安装lazarus-ide <a class="header-anchor" href="#方式一-安装lazarus-ide" aria-label="Permalink to &quot;方式一 安装lazarus-ide&quot;">​</a></h3><p>以下是<span style="color:red;">直接安装</span>lazarus-ide的方式编译liblcl 当前lazarus-ide最新稳定版本是2.2.6</p><h4 id="lazarus-ide-官网" tabindex="-1">lazarus-ide 官网 <a class="header-anchor" href="#lazarus-ide-官网" aria-label="Permalink to &quot;lazarus-ide 官网&quot;">​</a></h4><p><a href="https://www.lazarus-ide.org" target="_blank" rel="noreferrer">https://www.lazarus-ide.org</a></p><h4 id="lazarus-相关下载" tabindex="-1">lazarus 相关下载 <a class="header-anchor" href="#lazarus-相关下载" aria-label="Permalink to &quot;lazarus 相关下载&quot;">​</a></h4><ul><li>Lazarus <a href="https://sourceforge.net/projects/lazarus/files" target="_blank" rel="noreferrer">https://sourceforge.net/projects/lazarus/files</a></li><li>FPC <a href="https://sourceforge.net/projects/freepascal/files" target="_blank" rel="noreferrer">https://sourceforge.net/projects/freepascal/files</a></li></ul><h4 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h4><h5 id="_1-下载lazarus-windows安装包-需要注意386和amd64" tabindex="-1">1. 下载lazarus windows安装包, 需要注意386和amd64 <a class="header-anchor" href="#_1-下载lazarus-windows安装包-需要注意386和amd64" aria-label="Permalink to &quot;1. 下载lazarus windows安装包, 需要注意386和amd64&quot;">​</a></h5><h5 id="_2-安装到你想安装的目录" tabindex="-1">2. 安装到你想安装的目录 <a class="header-anchor" href="#_2-安装到你想安装的目录" aria-label="Permalink to &quot;2. 安装到你想安装的目录&quot;">​</a></h5><h5 id="_3-配置lazarus安装目录到path环境变量-以使用lazbuild命令编译liblcl" tabindex="-1">3. 配置lazarus安装目录到PATH环境变量, 以使用lazbuild命令编译liblcl <a class="header-anchor" href="#_3-配置lazarus安装目录到path环境变量-以使用lazbuild命令编译liblcl" aria-label="Permalink to &quot;3. 配置lazarus安装目录到PATH环境变量, 以使用lazbuild命令编译liblcl&quot;">​</a></h5><h5 id="_4-进入liblcl目录-注意-你想使用的cef版本分枝" tabindex="-1">4. 进入liblcl目录，注意: 你想使用的CEF版本分枝 <a class="header-anchor" href="#_4-进入liblcl目录-注意-你想使用的cef版本分枝" aria-label="Permalink to &quot;4. 进入liblcl目录，注意: 你想使用的CEF版本分枝&quot;">​</a></h5><h5 id="_5-编译liblcl" tabindex="-1">5. 编译liblcl <a class="header-anchor" href="#_5-编译liblcl" aria-label="Permalink to &quot;5. 编译liblcl&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>打开 CMD 并进入 liblcl 目录</span></span>
<span class="line"><span>1. 执行以下命令添加软件包</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild.exe --add-package-link .\\src\\3rd-party\\richmemo\\richmemopackage.lpk</span></span>
<span class="line"><span>lazbuild.exe .\\src\\3rd-party\\richmemo\\richmemopackage.lpk</span></span>
<span class="line"><span>lazbuild.exe --add-package .\\src\\3rd-party\\richmemo\\ide\\richmemo_design.lpk</span></span>
<span class="line"><span>lazbuild.exe .\\src\\3rd-party\\richmemo\\ide\\richmemo_design.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild.exe --add-package .\\src\\3rd-party\\ATFlatControls\\atflatcontrols\\atflatcontrols_package.lpk</span></span>
<span class="line"><span>lazbuild.exe .\\src\\3rd-party\\ATFlatControls\\atflatcontrols\\atflatcontrols_package.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild.exe --add-package-link .\\src\\3rd-party\\DCPcrypt\\dcpcrypt.lpk</span></span>
<span class="line"><span>lazbuild.exe .\\src\\3rd-party\\DCPcrypt\\dcpcrypt.lpk</span></span>
<span class="line"><span>lazbuild.exe --add-package .\\src\\3rd-party\\DCPcrypt\\dcpcrypt_laz.lpk</span></span>
<span class="line"><span>lazbuild.exe .\\src\\3rd-party\\DCPcrypt\\dcpcrypt_laz.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild.exe --add-package .\\src\\3rd-party\\CEF4Delphi\\packages\\cef4delphi_lazarus.lpk</span></span>
<span class="line"><span>lazbuild.exe .\\src\\3rd-party\\CEF4Delphi\\packages\\cef4delphi_lazarus.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>提示: 如果出现错误，请检查lazarus环境变量是否配置正确，检查当前运行命令是否在liblcl目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 构建liblcl动态链接库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild.exe -B --bm=Win64 &quot;src/liblcl.lpi&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数说明: </span></span>
<span class="line"><span>    --bm 指定编译模式, Windows提供了2种, 分别是 Win64, Win32</span></span>
<span class="line"><span>编译模式用于区分编译出的liblcl.dll是32位还是64位，也同时需要安装对应的lazarus-ide</span></span></code></pre></div><h5 id="_6-最后编译出的-liblcl-dll-在当前-系统登录用户-golcl-liblcl-dll-目录" tabindex="-1">6. 最后编译出的 liblcl.dll 在当前 系统登录用户\\golcl\\liblcl.dll 目录 <a class="header-anchor" href="#_6-最后编译出的-liblcl-dll-在当前-系统登录用户-golcl-liblcl-dll-目录" aria-label="Permalink to &quot;6. 最后编译出的 liblcl.dll 在当前 系统登录用户\\golcl\\liblcl.dll 目录&quot;">​</a></h5><p>例如: C:\\Users\\Administrator\\golcl\\liblcl.dll</p><h4 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h4><h5 id="_1-下载lazarus-deb安装包-需要注意386和amd64" tabindex="-1">1. 下载lazarus deb安装包, 需要注意386和amd64 <a class="header-anchor" href="#_1-下载lazarus-deb安装包-需要注意386和amd64" aria-label="Permalink to &quot;1. 下载lazarus deb安装包, 需要注意386和amd64&quot;">​</a></h5><h5 id="_2-我们使用deb安装包-提供了3个deb安装包-全部下载" tabindex="-1">2. 我们使用deb安装包, 提供了3个deb安装包, 全部下载 <a class="header-anchor" href="#_2-我们使用deb安装包-提供了3个deb安装包-全部下载" aria-label="Permalink to &quot;2. 我们使用deb安装包, 提供了3个deb安装包, 全部下载&quot;">​</a></h5><p>分别是 lazarus-ide: lazarus-project_2.2.6-0_amd64.deb fpc命令工具: fpc-laz_3.2.2-210709_amd64.deb fpc源码: fpc-src_3.2.2-210709_amd64.deb</p><h5 id="_3-安装" tabindex="-1">3. 安装 <a class="header-anchor" href="#_3-安装" aria-label="Permalink to &quot;3. 安装&quot;">​</a></h5><p>双击安装或使用dpkg命令安装 安装顺序 1. fpc-laz 2. fpc-src 3. lazarus-project</p><h5 id="_4-配置lazarus安装目录到path环境变量-以使用lazbuild命令编译liblcl" tabindex="-1">4. 配置lazarus安装目录到PATH环境变量, 以使用lazbuild命令编译liblcl <a class="header-anchor" href="#_4-配置lazarus安装目录到path环境变量-以使用lazbuild命令编译liblcl" aria-label="Permalink to &quot;4. 配置lazarus安装目录到PATH环境变量, 以使用lazbuild命令编译liblcl&quot;">​</a></h5><h5 id="_5-进入liblcl目录-注意-你想使用的cef版本分枝" tabindex="-1">5. 进入liblcl目录，注意: 你想使用的CEF版本分枝 <a class="header-anchor" href="#_5-进入liblcl目录-注意-你想使用的cef版本分枝" aria-label="Permalink to &quot;5. 进入liblcl目录，注意: 你想使用的CEF版本分枝&quot;">​</a></h5><h5 id="_6-编译liblcl" tabindex="-1">6. 编译liblcl <a class="header-anchor" href="#_6-编译liblcl" aria-label="Permalink to &quot;6. 编译liblcl&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>打开 terminal 并进入 liblcl 目录</span></span>
<span class="line"><span>1. 执行以下命令添加软件包</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package-link ./src/3rd-party/richmemo/richmemopackage.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/richmemo/richmemopackage.lpk</span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/richmemo/ide/richmemo_design.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/richmemo/ide/richmemo_design.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package-link ./src/3rd-party/DCPcrypt/dcpcrypt.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt.lpk</span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>提示: 如果出现错误，请检查lazarus环境变量是否配置正确，检查当前运行命令是否在liblcl目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 构建liblcl动态链接库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild -B --bm=Linux64 --ws=gtk3 --lazarusdir=/lazarus-ide/install/path &quot;src/liblcl.lpi&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数说明: </span></span>
<span class="line"><span>    --bm 指定编译模式, Linux提供了2种, 分别是 Linux64, Linux32</span></span>
<span class="line"><span>    --ws 指定LCLWidgetType, Linux提供了2种，分别是 gtk2, gtk3</span></span>
<span class="line"><span>    --lazarusdir 指定lazarus-ide的安装目录</span></span>
<span class="line"><span>编译模式用于区分编译出的liblcl.so是32位还是64位，也同时需要安装对应的lazarus-ide</span></span>
<span class="line"><span>LCLWidgetType: 是因为CEF不同版本在linux下对gtk支持不同, CEF106是最后一个支持gtk2的版本, 以后默认都是gtk3</span></span></code></pre></div><h5 id="_7-最后编译出的-liblcl-so-在当前-系统登录用户-golcl-liblcl-so-目录" tabindex="-1">7. 最后编译出的 liblcl.so 在当前 系统登录用户/golcl/liblcl.so 目录 <a class="header-anchor" href="#_7-最后编译出的-liblcl-so-在当前-系统登录用户-golcl-liblcl-so-目录" aria-label="Permalink to &quot;7. 最后编译出的 liblcl.so 在当前 系统登录用户/golcl/liblcl.so 目录&quot;">​</a></h5><p>例如: ~/golcl/liblcl.so</p><h4 id="macosx" tabindex="-1">MacOSX <a class="header-anchor" href="#macosx" aria-label="Permalink to &quot;MacOSX&quot;">​</a></h4><h5 id="_1-下载lazarus安装包-需要注意386和64-energy仅支持64位" tabindex="-1">1. 下载lazarus安装包, 需要注意386和64, energy仅支持64位 <a class="header-anchor" href="#_1-下载lazarus安装包-需要注意386和64-energy仅支持64位" aria-label="Permalink to &quot;1. 下载lazarus安装包, 需要注意386和64, energy仅支持64位&quot;">​</a></h5><h5 id="_2-提供了3个安装包-全部下载" tabindex="-1">2. 提供了3个安装包, 全部下载 <a class="header-anchor" href="#_2-提供了3个安装包-全部下载" aria-label="Permalink to &quot;2. 提供了3个安装包, 全部下载&quot;">​</a></h5><p>分别是 lazarus-ide: Lazarus-2.2.6-0-x86_64-macosx.pkg fpc命令工具: fpc-3.2.2.intelarm64-macosx.dmg fpc源码: fpc-src-3.2.2-20210709-macosx.dmg</p><h5 id="_3-安装-1" tabindex="-1">3. 安装 <a class="header-anchor" href="#_3-安装-1" aria-label="Permalink to &quot;3. 安装&quot;">​</a></h5><p>双击安装或使用命令安装 安装顺序 1. fpc 2. fpc-src 3. lazarus-project</p><h5 id="_4-进入liblcl目录-注意-你想使用的cef版本分枝-1" tabindex="-1">4. 进入liblcl目录，注意: 你想使用的CEF版本分枝 <a class="header-anchor" href="#_4-进入liblcl目录-注意-你想使用的cef版本分枝-1" aria-label="Permalink to &quot;4. 进入liblcl目录，注意: 你想使用的CEF版本分枝&quot;">​</a></h5><h5 id="_5-编译liblcl-1" tabindex="-1">5. 编译liblcl <a class="header-anchor" href="#_5-编译liblcl-1" aria-label="Permalink to &quot;5. 编译liblcl&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>打开 terminal 并进入 liblcl 目录</span></span>
<span class="line"><span>1. 执行以下命令添加软件包</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package-link ./src/3rd-party/richmemo/richmemopackage.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/richmemo/richmemopackage.lpk</span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/richmemo/ide/richmemo_design.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/richmemo/ide/richmemo_design.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package-link ./src/3rd-party/DCPcrypt/dcpcrypt.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt.lpk</span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>提示: 如果出现错误，请检查lazarus是否正确安装，检查当前运行命令是否在liblcl目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 构建liblcl动态链接库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>编译AMD64</span></span>
<span class="line"><span>lazbuild -B --bm=&quot;MacOS64(cocoa)&quot; --ws=cocoa &quot;src/liblcl.lpi&quot;</span></span>
<span class="line"><span>编译ARM64(M1 M2)平台</span></span>
<span class="line"><span>lazbuild -B --bm=&quot;MacOS64(cocoa)ARM64&quot; --ws=cocoa &quot;src/liblcl.lpi&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数说明: </span></span>
<span class="line"><span>    --bm 指定编译模式, MacOS提供了2种, 分别是 MacOS64(cocoa)ARM64, MacOS64(cocoa)</span></span>
<span class="line"><span>    --ws 指定LCLWidgetType = cocoa</span></span>
<span class="line"><span>    --lazarusdir 指定lazarus-ide的安装目录</span></span>
<span class="line"><span>编译模式 分别为AMD64和ARM64, 可在同一平台交叉编译</span></span>
<span class="line"><span>LCLWidgetType: 固定值 cocoa</span></span></code></pre></div><h5 id="_6-最后编译出的-liblcl-so-在当前-系统登录用户-golcl-liblcl-dylib-目录" tabindex="-1">6. 最后编译出的 liblcl.so 在当前 系统登录用户/golcl/liblcl.dylib 目录 <a class="header-anchor" href="#_6-最后编译出的-liblcl-so-在当前-系统登录用户-golcl-liblcl-dylib-目录" aria-label="Permalink to &quot;6. 最后编译出的 liblcl.so 在当前 系统登录用户/golcl/liblcl.dylib 目录&quot;">​</a></h5><p>例如: ~/golcl/liblcl.dylib</p><h3 id="方式二-自己编译lazarus-ide" tabindex="-1">方式二 自己编译lazarus-ide <a class="header-anchor" href="#方式二-自己编译lazarus-ide" aria-label="Permalink to &quot;方式二 自己编译lazarus-ide&quot;">​</a></h3><p>因lazarus有些平台未提供安装包，我们使用 源码+FPC工具 自己编译，这里使用linux-aarch64，其它平台照搬，基本差不多 我使用的是 lazarus-2.2.6-0.tar.gz， fpc-3.2.2.aarch64-linux.tar，fpc-3.2.2.source.tar.gz</p><p>先安装一些必备软件工具包</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>apt-get update -q -y</span></span>
<span class="line"><span>apt-get install -q -y git</span></span>
<span class="line"><span>apt-get install -q -y make binutils build-essential gdb subversion zip unzip libx11-dev libgtk2.0-dev libgdk-pixbuf2.0-dev libcairo2-dev libpango1.0-dev libgtk-3-dev</span></span></code></pre></div><h4 id="_1-下载源码-注意版本匹配-目前lazarus-2-2-2-2-2-4-2-2-6-使用-fpc-3-2-2" tabindex="-1">1. 下载源码 注意版本匹配, 目前lazarus (2.2.2, 2.2.4, 2.2.6) 使用 FPC 3.2.2 <a class="header-anchor" href="#_1-下载源码-注意版本匹配-目前lazarus-2-2-2-2-2-4-2-2-6-使用-fpc-3-2-2" aria-label="Permalink to &quot;1. 下载源码 注意版本匹配, 目前lazarus (2.2.2, 2.2.4, 2.2.6) 使用 FPC 3.2.2&quot;">​</a></h4><ul><li>Lazarus源码: <a href="https://sourceforge.net/projects/lazarus/files/Lazarus%20Zip%20_%20GZip" target="_blank" rel="noreferrer">https://sourceforge.net/projects/lazarus/files/Lazarus%20Zip%20_%20GZip/</a></li><li>FPC工具: <a href="https://sourceforge.net/projects/freepascal/files/Linux" target="_blank" rel="noreferrer">https://sourceforge.net/projects/freepascal/files/Linux</a></li><li>FPC源码: <a href="https://sourceforge.net/projects/freepascal/files/Source" target="_blank" rel="noreferrer">https://sourceforge.net/projects/freepascal/files/Source</a></li></ul><h4 id="_2-将压缩包内容解压出来" tabindex="-1">2. 将压缩包内容解压出来 <a class="header-anchor" href="#_2-将压缩包内容解压出来" aria-label="Permalink to &quot;2. 将压缩包内容解压出来&quot;">​</a></h4><p><code>tar -xvf lazarus-2.2.6-0.tar.gz -C ~/app</code><code>tar -xvf fpc-3.2.2.aarch64-linux.tar -C ~/app/lazarus</code><code>tar -xvf fpc-3.2.2.source.tar.gz -C ~/app/lazarus</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>先解压 lazarus</span></span>
<span class="line"><span>接着解压 FPC工具 和 FPC源码 到 lazarus 目录</span></span>
<span class="line"><span>~/app/lazarus </span></span>
<span class="line"><span>  lazarus-2.2.6-0 // lazarus源码</span></span>
<span class="line"><span>  fpc-3.2.2.aarch64-linux // FPC工具</span></span>
<span class="line"><span>  fpc-3.2.2 // FPC源码</span></span></code></pre></div><h4 id="_3-开始安装" tabindex="-1">3. 开始安装 <a class="header-anchor" href="#_3-开始安装" aria-label="Permalink to &quot;3. 开始安装&quot;">​</a></h4><pre><code>- 进入 ~/app/lazarus/fpc-3.2.2.aarch64-linux 目录
- 执行 ./install.sh 脚本, 会提示输入，直接一路回车即可
- 返回到上级目录 cd ../
- 执行 make clean all
  如果有错误根据提示自己修改，应该不会出现错误，我是没遇到错误。
</code></pre><h4 id="_4-配置lazarus安装目录到path环境变量-以使用lazbuild命令编译liblcl-1" tabindex="-1">4. 配置lazarus安装目录到PATH环境变量, 以使用lazbuild命令编译liblcl <a class="header-anchor" href="#_4-配置lazarus安装目录到path环境变量-以使用lazbuild命令编译liblcl-1" aria-label="Permalink to &quot;4. 配置lazarus安装目录到PATH环境变量, 以使用lazbuild命令编译liblcl&quot;">​</a></h4><h4 id="_5-进入liblcl目录-注意-你想使用的cef版本分枝-1" tabindex="-1">5. 进入liblcl目录，注意: 你想使用的CEF版本分枝 <a class="header-anchor" href="#_5-进入liblcl目录-注意-你想使用的cef版本分枝-1" aria-label="Permalink to &quot;5. 进入liblcl目录，注意: 你想使用的CEF版本分枝&quot;">​</a></h4><h4 id="_6-编译liblcl-1" tabindex="-1">6. 编译liblcl <a class="header-anchor" href="#_6-编译liblcl-1" aria-label="Permalink to &quot;6. 编译liblcl&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>打开 terminal 并进入 liblcl 目录</span></span>
<span class="line"><span>1. 执行以下命令添加软件包</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package-link ./src/3rd-party/richmemo/richmemopackage.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/richmemo/richmemopackage.lpk</span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/richmemo/ide/richmemo_design.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/richmemo/ide/richmemo_design.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package-link ./src/3rd-party/DCPcrypt/dcpcrypt.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt.lpk</span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>提示: 如果出现错误，请检查lazarus环境变量是否配置正确，检查当前运行命令是否在liblcl目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 构建liblcl动态链接库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild -B --bm=Linux64 --ws=gtk3 --lazarusdir=/lazarus-ide/install/path &quot;src/liblcl.lpi&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数说明: </span></span>
<span class="line"><span>    --bm 指定编译模式, Linux提供了2种, 分别是 Linux64, Linux32</span></span>
<span class="line"><span>    --ws 指定LCLWidgetType, Linux提供了2种，分别是 gtk2, gtk3</span></span>
<span class="line"><span>    --lazarusdir 指定lazarus-ide的安装目录</span></span>
<span class="line"><span>编译模式用于区分编译出的liblcl.so是32位还是64位，也同时需要安装对应的lazarus-ide</span></span>
<span class="line"><span>LCLWidgetType: 是因为CEF不同版本在linux下对gtk支持不同, CEF106是最后一个支持gtk2的版本, 以后默认都是gtk3</span></span></code></pre></div><h4 id="_7-最后编译出的-liblcl-so-在当前-系统登录用户-golcl-liblcl-so-目录-1" tabindex="-1">7. 最后编译出的 liblcl.so 在当前 系统登录用户/golcl/liblcl.so 目录 <a class="header-anchor" href="#_7-最后编译出的-liblcl-so-在当前-系统登录用户-golcl-liblcl-so-目录-1" aria-label="Permalink to &quot;7. 最后编译出的 liblcl.so 在当前 系统登录用户/golcl/liblcl.so 目录&quot;">​</a></h4><p>例如: ~/golcl/liblcl.so</p><hr><h2 id="loongnix-龙芯" tabindex="-1">Loongnix 龙芯 <a class="header-anchor" href="#loongnix-龙芯" aria-label="Permalink to &quot;Loongnix 龙芯&quot;">​</a></h2><p>我没有Loongnix(龙芯)机器无法测试，龙芯工程师对lazarus做了支持, 理论上可以编译出liblcl。</p><h3 id="安装lazarus" tabindex="-1">安装lazarus <a class="header-anchor" href="#安装lazarus" aria-label="Permalink to &quot;安装lazarus&quot;">​</a></h3><p>相关链接</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>龙芯CEF: http://www.loongnix.cn/zh/api/CEF/  CEF 109 或 与energy有对应的版本</span></span>
<span class="line"><span>龙芯Go:  http://www.loongnix.cn/zh/toolchain/Golang/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方式一 在线安装 fpcupdeluxe - 支持各种平台在线安装lazarus-ide</span></span>
<span class="line"><span>   https://github.com/LongDirtyAnimAlf/fpcupdeluxe/releases  </span></span>
<span class="line"><span>   下载 fpcupdeluxe-loongarch64-linux</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方式二 龙芯在线仓库 - 有能力自己编译</span></span>
<span class="line"><span>   仓库: http://pkg.loongnix.cn/</span></span>
<span class="line"><span>   fpc:  http://pkg.loongnix.cn/loongnix/pool/main/f/fpc/</span></span>
<span class="line"><span>   lazarus: http://pkg.loongnix.cn/loongnix/pool/main/l/lazarus/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方式三 龙芯lazarus绿色安装包和教程 - 推荐</span></span>
<span class="line"><span>   https://www.cnblogs.com/qiufeng2014/p/17197981.html</span></span></code></pre></div><h3 id="编译liblcl-1" tabindex="-1">编译liblcl <a class="header-anchor" href="#编译liblcl-1" aria-label="Permalink to &quot;编译liblcl&quot;">​</a></h3><p>编译步骤，除了lazarus安装方式不同，构建liblcl时命令和上面的教程一样, 如果你已尝试或有问题可以与我沟通。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>打开 terminal 并进入 liblcl 目录</span></span>
<span class="line"><span>1. 执行以下命令添加软件包</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package-link ./src/3rd-party/richmemo/richmemopackage.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/richmemo/richmemopackage.lpk</span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/richmemo/ide/richmemo_design.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/richmemo/ide/richmemo_design.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/ATFlatControls/atflatcontrols/atflatcontrols_package.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package-link ./src/3rd-party/DCPcrypt/dcpcrypt.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt.lpk</span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/DCPcrypt/dcpcrypt_laz.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild --add-package ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk</span></span>
<span class="line"><span>lazbuild ./src/3rd-party/CEF4Delphi/packages/cef4delphi_lazarus.lpk</span></span>
<span class="line"><span></span></span>
<span class="line"><span>提示: 如果出现错误，请检查lazarus环境变量是否配置正确，检查当前运行命令是否在liblcl目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 构建liblcl动态链接库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>lazbuild -B --bm=Linux64 --ws=gtk3 --lazarusdir=/lazarus-ide/install/path &quot;src/liblcl.lpi&quot;</span></span></code></pre></div><p>最后编译出的 liblcl.so 在当前 系统登录用户/golcl/liblcl.so 目录 例如: ~/golcl/liblcl.so</p>`,73),i=[e];function c(r,t,d,o,u,b){return s(),l("div",null,i)}const k=a(p,[["render",c]]);export{g as __pageData,k as default};
