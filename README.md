vitepress: https://vitepress.dev/

vitepress: https://github.com/vuejs/vitepress

energy-doc: 

环境

nodejs >= 18

 运行以下命令来热部署
```
npm run dev
```

1. 运行以下命令来构建文档
```
npm run build
```

2. 构建文档后，通过运行以下命令可以在本地预览它
```
npm run preview
```

可以通过传递 --port 作为参数来配置服务器的端口
```
{
  "scripts": {
    "preview": "vitepress preview --port 8080"
  }
}
```
