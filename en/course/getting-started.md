# Getting Started

### Development environment installation

- [Tutorial link](/en/course/install-env)

### Create Application

- cmd: `energy init`
- run cmd
  1. Input app name
  2. Select HTTP
- Waiting for automatic creation and initialization of projects and dependency configurations
- 
#### Input app name
![init_name](/imgs/assets/init_name.png)

#### Select resource load options
![init_http](/imgs/assets/init_http.png)

#### Enter，waiting
![init_success](/imgs/assets/init_success.png)

### Run app
#### 1. Enter the project directory
#### 2. run go cmd: `go run main.go`
#### Linux-ARM(64)
> 1. `export LD_PRELOAD="$ENERGY_HOME/libcef.so"`
> 2. `go run main.go`

### directory structure
![dir_struct](/imgs/assets/dir_struct.png)

|Name |Type |DESC |
|-|-|-|
|resources |folder |The resource storage directory is created during initialization and can be customized or deleted |
|energy.json |file |Project configuration file, created at initialization, file name cannot be modified, used for building and creating installation packages.|
|go.mod, go.sum |file |Go module management, automatically generated|
|README.md |file |The project description file, created during initialization, describes the current directory structure|
|main.go |file |Energy Go applies the project main function to launch the entry file|


### Mac M1 M2
> For the Mac ARM(M1, M2) architecture, the development environment is the same as for the Mac AMD64
> In Mac ARM Go you need to use cross compilation, set the Go compilation environment to amd64, and CGO support
> Run AMD architecture applications with Rosetta2 compatibility
> Additional installation required
> 1. GCC toolchain `brew install gcc`, Installation may also be required`xcode-select --install`
> 2. Rosetta2 [Reference link](https://support.apple.com/en-us/102527)
>
> Compilation environment setting
> - Cross environment: `GOARCH=amd64`
> - Open CGO: `CGO_ENABLED=1`
