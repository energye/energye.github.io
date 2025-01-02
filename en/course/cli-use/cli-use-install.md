# 开发环境安装命令 install

---

### energy install

开发环境安装命令, 它会在当前执行目录或指定目录安装开发环境框架和工具

如果明确安装目录，先使用 `energy env -w root:/your/install framework/root/path` 设置一次安装根目录

使用 `energy install -h` 列出命令参数说明

```cmd
Usage:
  energy [OPTIONS] install [install-OPTIONS]

Help Options:
  /?                  Show this help message
  /h, /help           Show this help message

[install command options]
      /p, /path:      Installation directory Default current directory
      /v, /version:   Specifying a version number. x.x.x (default: latest)
      /d, /download:  Download Source. Details: https://energye.github.io/data/model-base-config.json
          /all        Skip select. Install All Software
          /os:        Specify install OS: [windows, linux, macos], default current os
          /arch:      Specify install ARCH: [386, amd64, arm, arm64], default current arch
          /cef:       Install system supports CEF version. options: latest, 109, 101, 87, 49
          /ws:        Set this parameter when GTK2 is used on Linux
```

### 功能说明

- 根据环境配置 `env` 和指定参数安装开发环境
- 在有网络环境在线下载安装开发环境
