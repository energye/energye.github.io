# 构建命令 build

---

### energy build

应用构建，内部使用 `go build` 实现

使用应用目录内 `config/energy_[os].json` 配置, 构建程序
- windows 程序图标，和属性等信息

传入自定义 `go build` 参数, 需要在最后一个 `energy build [-x -x...] --buildargs` 有效参数指定标记 `--buildargs`, 
从其开始以后的参数做为 `go build` 参数

`example: energy build --os windows --arch 386 --buildargs -tags="custom" ...`

上面示例中从 `--buildargs` 开始（不包括）之后的参数都将做为 `go build` 参数传递

注意：`energy build` 后的程序在你没自定义加载lib时需要将期放到 Framework 目录内方可运行

使用 `energy build -h` 列出命令参数说明

```cmd
Usage:
  energy [OPTIONS] build [build-OPTIONS]

Help Options:
  /?                   Show this help message
  /h, /help            Show this help message

[build command options]
      /p, /path:       Project path, default current path. Can be configured in energy_[os].json
      /u, /upx         Set this parameter and install upx. Use upx to compress the execution file
          /upxFlag:    Upx command line parameters
          /buildargs   go build [args]. Parameter tags should be in the last position, and the parameters following them will be
                       passed as build parameters.
          /libemfs     Built in dynamic libraries to executable files, Copy liblcl to the built-in directory every compilation
      /o, /out:        Build out file path
          /os:         Build OS for windows | darwin | linux
          /arch:       Build ARCH for 386 | amd64 | arm | arm64
```

### 功能说明

- 根据环境配置 `env` 和当前操作系统环境或指定参数构建程序
```text
例如
 当前系统环境 windows 64, 使用的框架 CEF-109_WINDOWS_32
 energy build
 编译出的二进制文件是 windows 32 位
```
