# 快速开始

### 开发环境安装

开发环境安装 [教程链接](/course/install-env)

### 创建应用

- 命令: `energy init`
- 执行命令后
  1. 输入应用名
  2. 选择 HTTP 
- 等待自动创建并初始化项目和依赖配置
#### 输入应用名
![init_name](/imgs/assets/init_name.png)

#### 选择资源加载方式
![init_http](/imgs/assets/init_http.png)

#### 回车确认，等待
![init_success](/imgs/assets/init_success.png)

### 运行应用
#### 1. 进入项目目录
#### 2. 命令 `go run main.go`
#### Linux-ARM(64)
> 1. `export LD_PRELOAD="$ENERGY_HOME/libcef.so"`
> 2. `go run main.go`

### 目录结构
![dir_struct](/imgs/assets/dir_struct.png)

| 名称                      | 类型  | 描述                               |
|-------------------------|-----|----------------------------------|
| resources               | 文件夹 | 资源存放目录，初始化时创建，可自定义或删除            |
| config/energy_[os].json | 文件  | 项目配置文件，初始化时创建，文件名不可修改，用于构建和制作安装包 |
| go.mod, go.sum          | 文件  | Go模块管理, 自动生成                     |
| README.md               | 文件  | 项目描述文件，初始化时创建，描述当前目录结构           |
| main.go                 | 文件  | Energy Go应用项目main函数启动入口文件        |


### Mac M1 M2
> 对于 Mac ARM(M1, M2)架构, 开发环境和 Mac AMD64 一样
> 在Mac ARM Go需要使用交叉编译, 设置Go的编译环境为 amd64, 和CGO支持
> 通过 Rosetta2 兼容运行AMD架构应用
> 需要额外安装
> 1. GCC工具链 `brew install gcc`, 还可能需要安装`xcode-select --install`
> 2. Rosetta2 [参考链接](https://support.apple.com/zh-cn/HT211861)
>
> 编译环境设置
> - 交叉环境: `GOARCH=amd64`
> - 开启CGO: `CGO_ENABLED=1`
