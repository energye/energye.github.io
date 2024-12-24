# Install Environment

# Video Tutorials
> [Link](https://www.bilibili.com/video/BV1MN411Q7a2/)

# Development Environment Dependency
| Name        | Platform       | illustrate                                   |
|-------------|----------------|----------------------------------------------|
| Golang      | ALL            | Golang Development Environment               |
| CEF, liblcl | ALL            | CEF Framework                                |
| NSIS        | Windows        | Windows Installation package production tool |
| UPX         | All            | Execute file compression tool                |
| 7z          | Windows        | CEF Framework compression tool               |

# Development environment installation -3 ways

## 1、Automatically install the complete development environment - <span style="color: blue;">Online recommendation</span>

### Obtain the Energy command-line tool
- Obtaining Method 1: Precompiled Command Line Tool [Download](/en/course/cli-download)
>
> This method does not require manual installation of the Golang environment, and the energy command-line tool automatically installs Golang
> This method can skip Method 2
>
- Obtaining Method 2: Self Compiling Command Line Tools
>
> You need to install it yourself[Golang](https://golang.google.cn/dl/)
>> 1. Clone Project
      >> `git clone https://github.com/energye/energy.git`
>> 2. Download Dependency
      >> `go mod tidy`
>> 3. cd energy/cmd/energy
      >> `cd energy/cmd/energy`
>>
>> Execute the command `go install` to install the command-line tool
>>
>> `go install`

### Installation and development environment

Run CMD
1. Initialize the environment before

`energy env` Looking at the environment, a list similar to the one below appears

```cmd
┌───────────────────────────────────────┐
| Name      | Value                     |
| ------------------------------------- |
| Golang    |                           |
| Root      | /Users/yanghy             |
| Framework |                           |
| NSIS      |                           |
| 7z        |                           |
| UPX       |                           |
| Registry  | https://energye.github.io |
| Proxy     |                           |
└───────────────────────────────────────┘
```
`energy env -w root:/Users/yanghy/app` Modify the framework installation root directory, 'root: Replace it with your directory'

Execute command
```cmd
energy install .
```
run in（windows -> cmd）(linux or macosx -> terminal)
> linux GTK needs to be installed, and the default energy dependency is GTK3
> GTK install command:
>> GTK3, `sudo apt-get install libgtk-3-dev`
>> GTK2, `sudo apt-get install libgtk2.0-dev`

---

## 2、Automatic installation development environment - <span style="color: blue;">offline</span>
### Tool acquisition
> refer : <span style="color: blue;">Obtaining Method 1</span>
> Automatically install all dependencies of the Energy framework using command-line tools, applicable: Window、Linux、MacOSX
> Provided to users who have no network or have failed online installation and download
### Manually downloading binary frameworks
> Obtain the latest version of CEF and corresponding liblcl dynamic library [Download](/en/course/download-version)
> 1. Create a framework download directory by executing the directory (at the same level) on the energy command line`EnergyFrameworkDownloadCache`
> 2. Copy the downloaded CEF and liblcl compressed packages to`EnergyFrameworkDownloadCache`dir
>>  <span style="color: red;">attention</span>: Cannot modify CEF and liblcl compressed package file names
> 3. run install command
```cmd
energy install .
```

---
## 3、Manually installing the development environment
``` text
Require compressed package file
CEF
   1. Windows and Linux only use files in the Release and Resources directories of CEF
   2. MacOSX only uses files in the Release directory
Energy
   liblcl.xx file
ENERGY_HOME 
   Configure development environment variables
   ENERGY_HOME=/to/path/CEFFramework
```

---

### [Download Link](/en/course/download-version)

---
### Windows & Linux
> Download <font color="red">CEF & Energy</font> Corresponding version of dynamic link library compression package
>
> 1. Create a new folder ChromiumDemo (choose the folder name yourself)
> 2. CEF: Extract the 'internal' files from the Release and Resources directories to the ChromiumDemo folder
> 3. Energy: Extract the dynamic link library to the ChromiumDemo folder
> 4. Final directory structure
>> Different versions may have different files
>>>  locales - folder
>>>
>>>  cef_sandbox.lib - file
>>>
>>>  chrome_100_percent.pak - file
>>>
>>>  chrome_200_percent.pak - file
>>>
>>>  chrome_elf.dll - file
>>>
>>>  d3dcompiler_47.dll - file
>>>
>>>  icudtl.dat - file
>>>
>>>  libcef.dll - file
>>>
>>>  libcef.lib - file
>>>
>>>  libEGL.dll - file
>>>
>>>  libGLESv2.dll - file
>>>
>>>  liblcl.dll - file
>>>
>>>  resources.pak - file
>>>
>>>  snapshot_blob.bin - file
>>>
>>>  v8_context_snapshot.bin - file
>>>
>>>  vk_swiftshader.dll - file
>>>
>>>  vk_swiftshader_icd.json - file
>>>
>>>  vulkan-1.dll - file

### MacOS X
> Download <font color="red">CEF & Energy</font> Corresponding version of dynamic link library compression package
> 1. Create a new folder ChromiumDemo (choose the folder name yourself)
> 2. CEF: Extract the 'internal' files from the Release directory to the ChromiumDemo folder
> 3. Energy: Extract the dynamic link library to the ChromiumDemo folder
> 4. Final directory structure
>> Different versions may have different files
>>> Chromium Embedded Framework.framework - folder
>>>
>>> cef_sandbox.a - file
>>>
>>> liblcl.dylib - file

#### Mac M1 M2
> Mac ARM (M1, M2) architecture, development environment is the same as Mac AMD64
> On Mac ARM Go, cross compilation is required, with the Go compilation environment set to amd64 and CGO support
> Running AMD architecture applications compatible with Rosetta2
> Additional installation required
> 1. GCC`brew install gcc`, You may also need to install `xcode-select --install`
> 2. Rosetta2 [Reference link](https://support.apple.com/zh-cn/HT211861)
>
> Compilation Environment Settings
> - Cross environment: `GOARCH=amd64`
> - Enable CGO: `CGO_ENABLED=1`

## Other Dependent

### Linux
> Linux Additional shared support libraries may need to be installed
>
> gtk3, libharfbuzz-gobject0

## Environmental configuration
> Environmental: ENERGY_HOME=/EnergyFramework
>> ENERGY_ HOME is the development environment variable for Energy, and running the application during development will search for the framework directory from the environment variable
>>
>> You can also manually specify the framework directory through Go code without configuring environment variables `app.SetFrameworkDirPath`

# Command line automatic installation rendering
## Windows
![Description](/imgs/assets/cmd-install.gif)


### Environment installation failure
Online installation may fail to obtain remote service resources due to network factors or other restrictions.

config proxy: `energy env -w proxy:http://ip:port`
