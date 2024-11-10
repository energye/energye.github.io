import {DefaultTheme, HeadConfig} from "vitepress";

const isGithub = process.env.DOC_ENV === "github"

export function head(): HeadConfig[] {
    let result: HeadConfig[] = [
        ["link", {rel: "icon", href: "/imgs/favicon.ico"}],
        // ['link', {rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg'}],
        ['link', {rel: 'icon', type: 'image/png', href: '/imgs/energy.png'}],
        ['meta', {name: 'theme-color', content: '#5f67ee'}],
        ['meta', {name: 'keywords', content: 'ENERGY,ENERGYGUI,CEF,GOGUI'}],
        ['meta', {name: 'description', content: 'ENERGY是Go基于LCL和CEF(Chromium Embedded Framework)开发的GUI框架, 用于开发Windows、MacOS 和 Linux 跨平台桌面应用'}],
        ['meta', {property: 'og:type', content: 'article'}],
        ['meta', {property: 'og:locale', content: 'cn'}],
        ['meta', {property: 'og:title', content: 'ENERGY文档'}],
        ['meta', {property: 'og:description', content: 'ENERGY是Go基于LCL和CEF(Chromium Embedded Framework)开发的GUI框架, 用于开发Windows、MacOS 和 Linux 跨平台桌面应用'}],
        ['meta', {
            property: 'og:keywords',
            content: 'Energy,GoGUI,GolangGUI,桌面应用,跨平台GUI,跨平台桌面应用,开源GUI,GoCEF,GolangCEF,Go桌面应用,Golang桌面应用,Golang构建跨平台应用'
        }],
        ['meta', {property: 'og:site_name', content: 'Go ENERGY'}],
        ['meta', {property: 'google-site-verification', content: 'y1ft7YSwR6LAzQsR3s2OBajPkbLz16MDC809PgeHYfI'}],
    ]
    if (isGithub) { // energye.github.io
        result.push(['meta', {property: 'og:image', content: 'https://energye.github.io/imgs/energy-277x156.png'}])
        result.push(['meta', {property: 'og:url', content: 'https://energye.github.io'}])
        result.push(['script', {}, `
window._hmt = window._hmt || [];
(function() {
  let hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5c579ee49a29203cd8dff7fa8eda5ac9";
  let s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
`])
    } else { // energy.yanghy.cn
        result.push(['meta', {property: 'og:image', content: 'https://energy.yanghy.cn/imgs/energy-277x156.png'}])
        result.push(['meta', {property: 'og:url', content: 'https://energy.yanghy.cn'}])
        result.push(['script', {}, `
window._hmt = window._hmt || [];
(function() {
  let hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2a7685fd230a03733744de23eee6e731";
  let s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
`])
    }
    return result
}

export function footer() {
    let footerMessage = ''
    if (!isGithub) {
        footerMessage = `<a href="https://beian.miit.gov.cn" target="_blank" data-v-62fb13f4="">京ICP备2022011663号-1</a><br>`
    }
    footerMessage += '<span style="color: #2ba9f1;">GO<br>ENERGY</span>'
    // footerMessage += '<br><a href="https://forum.yanghy.cn" target="_blank">Forum</a>'
    return {
        message: footerMessage,
        copyright: `Copyright © 2022-${new Date().getFullYear()} YangHY`,
    }
}

export function localSearchConfig(): DefaultTheme.LocalSearchOptions {
    return {
        locales: {
            root: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        displayDetails: '显示详细列表',
                        resetButtonTitle: '重置搜索',
                        backButtonTitle: '关闭搜索',
                        noResultsText: '没有结果',
                        footer: {
                            selectText: '选择',
                            selectKeyAriaLabel: '输入',
                            navigateText: '导航',
                            navigateUpKeyAriaLabel: '上箭头',
                            navigateDownKeyAriaLabel: '下箭头',
                            closeText: '关闭',
                            closeKeyAriaLabel: 'esc'
                        }
                    }
                }
            },
            en: {
                translations: {
                    button: {
                        buttonText: 'Search Document',
                        buttonAriaLabel: 'Search Document'
                    },
                    modal: {
                        footer: {
                            selectText: 'select',
                            navigateText: 'switch',
                        }
                    }
                }
            }
        }
    }
}

export function GithubICO() {
    return "<svg t=\"1730863761071\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"5246\" width=\"200\" height=\"200\"><path d=\"M64 512c0 195.2 124.8 361.6 300.8 422.4 22.4 6.4 19.2-9.6 19.2-22.4v-76.8c-134.4 16-140.8-73.6-150.4-89.6-19.2-32-60.8-38.4-48-54.4 32-16 64 3.2 99.2 57.6 25.6 38.4 76.8 32 105.6 25.6 6.4-22.4 19.2-44.8 35.2-60.8-144-22.4-201.6-108.8-201.6-211.2 0-48 16-96 48-131.2-22.4-60.8 0-115.2 3.2-121.6 57.6-6.4 118.4 41.6 124.8 44.8 32-9.6 70.4-12.8 112-12.8 41.6 0 80 6.4 112 12.8 12.8-9.6 67.2-48 121.6-44.8 3.2 6.4 25.6 57.6 6.4 118.4 32 38.4 48 83.2 48 131.2 0 102.4-57.6 188.8-201.6 214.4 22.4 22.4 38.4 54.4 38.4 92.8v112c0 9.6 0 19.2 16 19.2C832 876.8 960 710.4 960 512c0-246.4-201.6-448-448-448S64 265.6 64 512z\" fill=\"#040000\" p-id=\"5247\"></path></svg>"
}

export function GiteeICO() {
    return "<svg t=\"1730863652667\" class=\"icon\" viewBox=\"0 0 1025 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"4281\" width=\"200\" height=\"200\"><path d=\"M514.275556 512m-510.862223 0a510.862222 510.862222 0 1 0 1021.724445 0 510.862222 510.862222 0 1 0-1021.724445 0Z\" fill=\"#C71D23\" p-id=\"4282\"></path><path d=\"M772.551111 455.111111H483.555556c-13.653333 0-25.031111 11.377778-25.031112 25.031111v62.577778c0 13.653333 11.377778 25.031111 25.031112 25.031111L659.911111 568.888889c13.653333 0 25.031111 11.377778 25.031111 25.031111v13.653333c0 42.097778-34.133333 75.093333-75.093333 75.093334h-238.933333c-13.653333 0-25.031111-11.377778-25.031112-25.031111v-238.933334c0-42.097778 34.133333-75.093333 75.093334-75.093333h352.711111c13.653333 0 25.031111-11.377778 25.031111-25.031111v-62.577778c0-13.653333-11.377778-25.031111-25.031111-25.031111H420.977778c-104.675556 0-188.871111 84.195556-188.871111 188.871111v352.711111c0 13.653333 11.377778 25.031111 25.031111 25.031111h372.053333c94.435556 0 170.666667-76.231111 170.666667-170.666666V480.142222c-1.137778-13.653333-12.515556-25.031111-27.306667-25.031111z\" fill=\"#FFFFFF\" p-id=\"4283\"></path></svg>"
}

export function GitCodeICO() {
    return "<svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.059 5.80628C18.2234 5.71425 18.3973 5.61696 18.585 5.51037C18.6076 5.63327 18.6297 5.74058 18.6497 5.83784C18.685 6.00943 18.714 6.15059 18.728 6.29005C18.8392 7.50125 19.448 8.39222 20.3108 8.59286C21.5726 8.88583 22.7623 8.40159 23.4033 7.33318C24.1733 6.05123 23.839 4.4812 22.5279 3.53618C18.8826 0.907049 14.8777 0.18191 10.5636 1.44819C1.2616 4.1927 -1.92121 15.6199 4.68062 22.6274C7.50507 25.6249 11.0914 26.9182 15.1624 26.8204C20.3774 26.6979 24.1333 24.099 26.5309 19.5947C28.2308 16.3988 26.3829 12.9055 22.8439 12.1795C20.8227 11.7726 18.7559 11.6405 16.6993 11.7869C16.0151 11.8526 15.3509 12.0547 14.7459 12.3811C14.0691 12.7324 13.8734 13.4614 13.9493 14.1838C14.02 14.8421 14.5247 15.2369 15.1258 15.3362C16.3361 15.5256 17.5609 15.6357 18.7833 15.7361C19.1371 15.7659 19.4942 15.7694 19.8507 15.773C20.3623 15.7781 20.873 15.7832 21.3718 15.8657C22.7949 16.1009 23.2836 17.2557 22.5517 18.4911C22.3724 18.7882 22.1633 19.0662 21.9277 19.3209C20.9703 20.3738 19.7183 21.1144 18.3344 21.4465C15.8084 22.0649 13.2798 22.0996 10.7655 21.3054C7.90238 20.4021 6.19549 18.2991 6.13552 15.4682C6.1131 13.7223 6.55634 12.002 7.41963 10.4843C7.80967 9.77685 8.02376 9.04827 7.96359 8.24664C7.93826 7.90488 7.92423 7.56273 7.90915 7.19506C7.90113 6.99938 7.89281 6.79647 7.88233 6.58254C8.17231 6.6434 8.45871 6.72023 8.74022 6.81271C9.83531 7.2523 10.9132 7.45284 12.0986 7.13019C12.7728 6.96895 13.4697 6.92433 14.159 6.99829C15.269 7.08878 16.3785 6.81759 17.3215 6.22521C17.5569 6.08724 17.7963 5.9533 18.059 5.80628Z\" fill=\"#DA203E\"/></svg>"
}
