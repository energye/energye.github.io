# Download CLI

### Go ENERGY Command-line tools

- energy scaffold It has the following functions
1. Automatically install a complete development environment
```text
  Goalng
  CEF
  Other: (NSIS, UPX, 7z) Select based on platform
```
2. Application initialization
3. Application Build&Compilation
4. Create application installation package

<script setup>
import DownloadCLIComponent from '../../components/download-cli.vue'
</script>

### CLI Download <DownloadCLIComponent />

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
