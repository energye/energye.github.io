# Version Download

### Releases
- [Github](https://github.com/energye/energy/releases)
- [Gitee](https://gitee.com/energye/energy/releases)

> Use [energy](https://energy.yanghy.cn/course/6342d92c401bfe4d0cdf6065/63511b14a749ba0318943f3a) command line tool automatic installation development environment

### Energy CEF Version support

- Windows, MacOSX
- Windows
  -- Windows 10, 11 `energy-latest`
  -- Windows 7, 8/8.1 and Windows Server 2012  `CEF 109.1.18`
  -- Windows XP SP3  `CEF 49.0.2623`
- MacOSX
  -- Default : `energy-latest`
- Linux
  -- GTK3 Default : `energy-latest`
  -- GTK2 Option : `CEF 106.1.1`
- Flash
  -- CEF 89.0.18
  -- Depending on the `liblcl` dynamic link library you are using
  -- For example: `liblcl-87` can only be used in `CEF 89.0.18`

#### Energy - CEF version update
``` text
Current energy lags behind the latest stable version of CEF
```

### CEF and Liblcl version matching

|liblcl|CEF|desc|OS|
|-|-|-|-|
|liblcl-49|CEF-49|Support Windows XP SP3|Windows|
|liblcl|CEF|Current energy-latest version, Including CEF 106.1.1|ALL|
|liblcl-87|CEF-87|Support Flash|ALL|
|liblcl-109|CEF-109|Support Windows 7, 8/8.1 and Windows Server 2012|Windows|

<span style="color:red;">Hint:</span> Strictly distinguish the matching between liblcl and cef version numbers in different distribution versions


### Windows XP
Windows XP SP3, Go1.11 dev

|LIBLCL Download|CEF Download| Golang |
|-|-|-|
| [WindowsXPSP3-64](https://energy.yanghy.cn/energye/liblcl/releases/download/windowsxpsp3/liblcl-49.WindowsXP_SP3_64.zip) <br> [WindowsXPSP3-32](https://energy.yanghy.cn/energye/liblcl/releases/download/windowsxpsp3/liblcl-49.WindowsXP_SP3_32.zip) | [Windows64](https://gitee.com/energye/assets/releases/download/cef/cef_binary_49.0.2623%20chromium-49.0.2623.110_windows64.zip) [Windows32](https://gitee.com/energye/assets/releases/download/cef/cef_binary_49.0.2623%20chromium-49.0.2623.110_windows32.zip) | [Windows64](https://studygolang.com/dl/golang/go1.11.13.windows-amd64.msi)  [Windows32](https://studygolang.com/dl/golang/go1.11.13.windows-386.msi) |

<script setup>
import DownloadVersionComponent from '../../components/download-version.vue'
</script>

## Release Download

<DownloadVersionComponent />
