# energy 版本更新命令 update

---

### energy update

根据环境配置 `env` 更新 `energy` 发行版本和 `LibLCL` 库

在项目目录运行 `update` 命令，检查 go.mod 的 `energy` 模块版本并做出更新修改

每次 `update` 时从远程服务获取升级列表，从而检查当前 `energy` 发行版本所支持的 `LibLCL` 库并做出下载更新

使用 `energy cli -h` 列出命令参数说明

```cmd
Usage:
  energy [OPTIONS] update [update-OPTIONS]

Help Options:
  /?                 Show this help message
  /h, /help          Show this help message

[update command options]
      /v, /version:  Upgrade energy to the specified version
      /p, /path:     Project path
          /ws:       Set this parameter when GTK2 is used on Linux
```

### 功能说明

- 更新 go.mod 的 energy 模块版本
- 检查更新当前使用 `Framework` 的 `LibLCL` 库
- Linux: 默认 `GTK3`
