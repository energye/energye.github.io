# 下载 energy cli

### Go ENERGY 命令行工具

- energy cli, 具有以下功能
1. 自动安装完整的开发环境
```text
  Goalng
  CEF
  其它: (NSIS, UPX, 7z) 根据平台选择
```
2. 应用初始化
3. 应用构建&编译
4. 制作应用安装包

<script setup>
import DownloadCLIComponent from '../../components/download-cli.vue'
</script>

### CLI 下载 <DownloadCLIComponent />

### MD5
[Download](https://sourceforge.net/projects/energye/files/cli/md5.txt)

| Platform | ARCH     | Install CLI CMD       | 32                                                                                   | 64                                                                                     |
|----------|----------|-----------------------|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| Windows  | `x86_64` | -                     | [Download](https://sourceforge.net/projects/energye/files/cli/energy-windows-32.zip) | [Download](https://sourceforge.net/projects/energye/files/cli/energy-windows-64.zip)   |
| MacOSX   | `x86_64` | `brew install energy` | -                                                                                    | [Download](https://sourceforge.net/projects/energye/files/cli/energy-darwin-64.zip)    |
| MacOS    | `ARM64`  | `brew install energy` | -                                                                                    | [Download](https://sourceforge.net/projects/energye/files/cli/energy-darwinarm-64.zip) |
| Linux    | `x86_64` | `brew install energy` | -                                                                                    | [Download](https://sourceforge.net/projects/energye/files/cli/energy-linux-64.zip)     |
| Linux    | `ARM64`  | -                     | -                                                                                    | [Download](https://sourceforge.net/projects/energye/files/cli/energy-linuxarm-64.zip)  |

Linux install brew: 

```shell
bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
