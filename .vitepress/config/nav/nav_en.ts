import {DefaultTheme} from "vitepress";
const latestVersion = require('../../../public/data/latest-version.json')

export function navEN(): DefaultTheme.NavItem[] {
    return [
        {text: "Course", link: "/en/course/getting-started", activeMatch: "/course"},
        {text: "Examples", link: "/en/examples", activeMatch: "/examples"},
        {text: "Document", link: "/en/document", activeMatch: "/document"},
        {
            text: latestVersion.version,
            items: [
                {
                    text: "Update Log",
                    link: "https://github.com/energye/energy/blob/main/UpdateLog.md",
                },
                {
                    text: "Version 3.0",
                    link: "https://gitee.com/energye/energy/milestones/196997",
                },
            ]
        },
        {
            text: "About",
            items: [
                {
                    text: "Question",
                    link: "/en/about/question",
                    activeMatch: "/en/about/question",
                },
                {
                    text: "Donation",
                    link: "/en/about/support",
                    activeMatch: "/en/about/support",
                },
                {
                    text: "Technical",
                    link: "/en/about/contact",
                    activeMatch: "/en/about/contact",
                },
                {
                    text: "Other Project",
                    items: [
                        {
                            text: "Go Energy",
                            link: "https://gitee.com/energye/energy",
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
            activeMatch: "/en/about",
        },
        {text: "Download", link: "https://sourceforge.net/projects/liblcl/files/"},
    ]
}
