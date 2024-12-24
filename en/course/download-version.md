# Version Download

> Use [energy cli](/en/course/install-env) automatic installation development environment

### Energy CEF Version support

- Windows, MacOSX
- Windows
  - Windows 10, 11 `energy-latest`
  - Windows 7, 8/8.1 and Windows Server 2012  `CEF 109.1.18`
  - Windows XP SP3  `CEF 49.0.2623`
- MacOSX
  - Default : `energy-latest`
- Linux
  - GTK3 Default : `energy-latest`
- Flash
  - CEF 87.1.14
  - Depending on the `liblcl` dynamic link library you are using
  - For example: `liblcl-89` can only be used in `CEF 89.0.18`

#### Energy - CEF version update
``` text
Current energy lags behind the latest stable version of CEF
```

### CEF and Liblcl version matching

| liblcl     | CEF     | Desc                                             | OS      |
|------------|---------|--------------------------------------------------|---------|
| liblcl     | CEF     | Current energy-latest version                    | ALL     |
| liblcl-49  | CEF-49  | Support Windows XP SP3                           | Windows |
| liblcl-89  | CEF-87  | Support Flash                                    | ALL     |
| liblcl-101 | CEF-101 | Support Linux32                                  | ALL     |
| liblcl-109 | CEF-109 | Support Windows 7, 8/8.1 and Windows Server 2012 | ALL     |

<span style="color:red;">Hint:</span> Strictly distinguish the matching between liblcl and cef version numbers in different distribution versions


### Windows XP
Windows XP SP3, Go1.11 dev

| LIBLCL Download                                                                                                                                                                                                    | CEF Download                                                                                                                                                                                                                                                              | Golang                                                                                                                                               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| [WindowsXPSP3-64](https://sourceforge.net/projects/liblcl/files/v2.5.1/liblcl-49.Windows64.zip) <br> [WindowsXPSP3-32](https://sourceforge.net/projects/liblcl/files/v2.5.1/liblcl-49.Windows32.zip) | [Windows64](https://sourceforge.net/projects/liblcl/files/CEF/49.0.2623/cef_binary_49.0.2623%2Bchromium-49.0.2623.110_windows64.zip) [Windows32](https://sourceforge.net/projects/liblcl/files/CEF/49.0.2623/cef_binary_49.0.2623%2Bchromium-49.0.2623.110_windows32.zip) | [Windows64](https://studygolang.com/dl/golang/go1.11.13.windows-amd64.msi)  [Windows32](https://studygolang.com/dl/golang/go1.11.13.windows-386.msi) |

<script setup>
import DownloadVersionComponent from '../../components/download-version.vue'
</script>

## Release Download

<DownloadVersionComponent />
