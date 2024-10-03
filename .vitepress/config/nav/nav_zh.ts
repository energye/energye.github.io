import {DefaultTheme} from "vitepress";
const latestVersion = require('../../../public/data/latest-version.json')

export function navZH(): DefaultTheme.NavItem[] {
    return [
        {text: "教程", link: "/course/what-is-energy", activeMatch: "/course"},
        {text: "示例", link: "/examples", activeMatch: "/examples"},
        {text: "文档", link: "/document", activeMatch: "/document"},
        {
            text: latestVersion.version,
            items: [
                {
                    text: "更新日志",
                    link: "https://github.com/energye/energy/blob/main/UpdateLog.md",
                },
                {
                    text: "版本 3.0",
                    link: "https://gitee.com/energye/energy/milestones/196997",
                },
            ]
        },
        {text: "论坛", link: "https://forum.yanghy.cn"},
        {
            text: "下载",
            items:[
              {
                  text: "CLI",
                  link: "https://sourceforge.net/projects/energye/files/cli/",
              },
              {
                  text: "CEF & LCL",
                  link: "https://sourceforge.net/projects/liblcl/files/",
              },
            ],
        },
        {
            text: "关于",
            items: [
                {
                    text: "常见问题",
                    link: "/about/question",
                    activeMatch: "/about/question",
                },
                {
                    text: "捐赠支持",
                    link: "/about/support",
                    activeMatch: "/about/support",
                },
                {
                    text: "技术支持",
                    link: "/about/contact",
                    activeMatch: "/about/contact",
                },
                {
                    text: "相关项目",
                    items: [
                        {
                            text: "Go Energy",
                            link: "https://github.com/energye/energy",
                        },
                        {
                            text: "LCL",
                            link: "https://github.com/energye/lcl",
                        },
                        {
                            text: "CEF",
                            link: "https://github.com/energye/cef",
                        },
                        {
                            text: "WebView2(wv)",
                            link: "https://github.com/energye/wv",
                        },
                        {
                            text: "Webkit(wk)",
                            link: "https://github.com/energye/wk",
                        },
                    ],
                }
            ],
            activeMatch: "/about",
        },
    ]
}
