import {DefaultTheme} from "vitepress";

export function sidebarZH() {
    return {
        '/course/': {base: '/course/', items: course()},
        '/examples/': {base: '/examples/', items: examples()},
        '/document/': {base: '/document/', items: document()},
    }
}

function course(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '简介',
            collapsed: false,
            items: [
                {text: '什么是 energy？', link: 'what-is-energy'},
            ]
        },
        {
            text: '开始使用',
            collapsed: false,
            items: [
                {text: '快速开始', link: 'getting-started'},
                {text: '环境安装', link: 'install-env'},
                {text: '使用SDK安装环境', link: 'install-sdk'},
                {text: '版本下载', link: 'download-version'},
            ]
        },
        {
            text: 'Energy CLI',
            collapsed: false,
            items: [
                {text: '下载 CLI', link: 'cli-download'},
                {text: '构建打包', link: 'build-package'},
                {
                    text: '使用命令',
                    base: "/course/cli-use/",
                    link: 'index',
                    items: [
                        {text: "1. env", link: 'cli-use-env'},
                        {text: "2. install", link: 'cli-use-install'},
                        {text: "3. init", link: 'cli-use-init'},
                        {text: "4. build", link: 'cli-use-build'},
                        {text: "5. package", link: 'cli-use-package'},
                        {text: "6. cli", link: 'cli-use-cli'},
                        {text: "7. update", link: 'cli-use-update'},
                        {text: "8. version", link: 'cli-use-version'}
                    ]
                }
            ]
        },
        {text: '编译 liblcl', link: 'build-liblcl'},
    ]
}


function examples(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '示例',
            collapsed: false,
            items: [
                {text: '链接', link: 'index'},
                {
                    text: '列表',
                    items: [
                        {text: '简单应用创建 1', link: 'simple-create1'},
                        {text: '简单应用创建 2', link: 'simple-create2'},
                        {text: '浏览器状态控制', link: 'browser-control'},
                        {text: '开发者工具使用', link: 'devtools-use'},
                        {text: '内置http服务', link: 'built-http-service'},
                        {text: '执行开发者工具方法', link: 'execute-dev-tools-method'},
                        {text: '下载事件', link: 'download'},
                        {text: 'Cookie读写', link: 'cookie-rw'},
                        {text: 'Go执行JS函数&代码', link: 'execute-javascript'},
                        {text: 'Go定义事件JS调用', link: 'go-onevent-js-emitevent'},
                        {text: '键盘事件和快捷键', link: 'keyboard-event-shortcut-key'},
                        {text: '使用HTML、URL或Path加载页面', link: 'load-html-url-localpath-page'},
                        {text: '弹出子窗口', link: 'popup-subwindow'},
                        {text: '页面保存PDF', link: 'page-save-pdf'},
                        {text: '查看网页源代码', link: 'view-page-sourcecode'},
                        {text: '自定义窗口属性', link: 'custom-window-property'},
                        {text: '页面缩放', link: 'page-zoom'},
                        {text: '系统托盘', link: 'tray'},
                        {text: 'Helper(独立)子进程', link: 'helper-process'},
                        {text: '自定义右键菜单', link: 'context-menu'},
                        {text: 'OSR-Windows', link: 'osr-windows'},
                        {text: 'OSR-Linux', link: 'osr-linux'},
                        {text: '无边框窗口', link: 'frameless'},
                    ]
                }
            ]
        }
    ]
}

function document(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '文档',
            items: [
                {text: 'Application', link: 'application'},
                {text: 'IPC Event', link: 'ipc-event'},
            ]
        },
        {
            text: '版本升级',
            link: 'version-upgrade-releases'
        },
        {
            text: '系统架构支持',
            link: 'version-details'
        }
    ]
}
