import {DefaultTheme, HeadConfig} from "vitepress";
import {ref} from "vue";

export function head(): HeadConfig[] {
    return [
        ["link", {rel: "icon", href: "/imgs/favicon.ico"}],
        // ['link', {rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg'}],
        ['link', {rel: 'icon', type: 'image/png', href: '/imgs/energy.png'}],
        ['meta', {name: 'theme-color', content: '#5f67ee'}],
        ['meta', {property: 'og:type', content: 'website'}],
        ['meta', {property: 'og:locale', content: 'cn'}],
        ['meta', {property: 'og:title', content: 'Go, based LCL & CEF, build cross-platform desktop application'}],
        ['meta', {
            property: 'og:keywords',
            content: 'Energy,GoGUI,GolangGUI,桌面应用,跨平台GUI,跨平台桌面应用,开源GUI,GoCEF,GolangCEF,Go桌面应用,Golang桌面应用,Golang构建跨平台应用'
        }],
        ['meta', {property: 'og:site_name', content: 'Go ENERGY'}],
        ['meta', {property: 'google-site-verification', content: 'y1ft7YSwR6LAzQsR3s2OBajPkbLz16MDC809PgeHYfI'}],
        ['meta', {property: 'og:image', content: 'https://energye.github.io/imgs/energy.png'}],
        ['meta', {property: 'og:url', content: 'https://energye.github.io'}],
    ]
}

export function footer() {
    const isGithub = process.env.DOC_ENV === "github"
    let footerMessage = ''
    if (!isGithub) {
        footerMessage = `<a href="https://beian.miit.gov.cn" target="_blank" data-v-62fb13f4="">京ICP备2022011663号-1</a><br>`
    }
    footerMessage += '<span style="color: #2ba9f1;">GO<br>ENERGY</span>'
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


export function GiteeICO() {
    return "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" enable-background=\"new 0 0 16 16\" xml:space=\"preserve\">  <image id=\"image0\" width=\"16\" height=\"16\" x=\"0\" y=\"0\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAB1UExURQAAANsAGNoAFNoAE9kAFP8AK9kAFdoAE9kAFNkAE+NJVvbIzP34+P////zx8uRKV/77+/fLzvXBxeE8St8sO90hMf76+uNFUtsOH9wWJ+E4Rv75+edfav329uhqdeE5R/S3vPXCxv79/eI+TP339/bFyeI/TTeqkrwAAAAJdFJOUwArj9XzBpT9vS/yx5oAAAABYktHRA32tGH1AAAAB3RJTUUH6AgfEAgRsIY2zQAAAIpJREFUGNNlj1kSwjAMQx0nTSqoS9nLWqDA/Y+InQIz0PdnzciSiBTHPgTPjgaKmJBJsch3iS+lKRGYTCsxakT1J8zkTYPkiIG5LJYrYw0weWAjW7Q7pQU8BUBkj4NZKiD8CGKCHwS1HOVkFjbhrB+7i1ztqcZ+Um+9xWqxOp/3xxNWbFx9NO5v/gs9sgonV9DkSAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0wOC0zMVQxNjowODoxNyswMDowMINeYi0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMDgtMzFUMTY6MDg6MTcrMDA6MDDyA9qRAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI0LTA4LTMxVDE2OjA4OjE3KzAwOjAwpRb7TgAAAABJRU5ErkJggg==\" /></svg>"
}

export function GitCodeICO() {
    return "<svg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" clip-rule=\"evenodd\" version=\"1.1\"><g><title>Layer 1</title><g stroke=\"null\" id=\"svg_1\"><path stroke=\"null\" id=\"svg_2\" opacity=\"0.988\" d=\"m19.94487,11.32977c0,0.25588 0,0.51176 0,0.76764c-0.18893,1.08829 -0.58177,2.0996 -1.17856,3.034c-0.77259,1.19313 -1.7215,2.22275 -2.84668,3.08883c-1.42308,0.96565 -2.99449,1.52617 -4.71424,1.68149c-2.73727,0.26988 -5.21529,-0.40027 -7.434,-2.01048c-2.29253,-1.84949 -3.54966,-4.256 -3.77139,-7.21945c0,-0.31681 0,-0.63359 0,-0.95041c0.41185,-4.31961 2.61182,-7.28659 6.59994,-8.90094c2.8808,-0.98979 5.67308,-0.78265 8.37685,0.62142c1.00239,0.69177 1.31063,1.6239 0.92472,2.79639c-0.4884,0.98053 -1.28013,1.41307 -2.37525,1.29767c-0.55338,-0.20434 -0.95833,-0.57598 -1.21482,-1.1149c-0.08631,-0.27668 -0.15883,-0.55694 -0.21758,-0.84075c-0.02499,-0.03132 -0.05519,-0.05568 -0.09066,-0.07311c-0.41536,0.37366 -0.85052,0.72092 -1.30548,1.04179c-0.2958,0.18562 -0.6101,0.33184 -0.94285,0.43865c-0.99873,0.0537 -1.95369,0.2852 -2.86481,0.69453c-0.38254,0.08619 -0.76933,0.11058 -1.16043,0.07311c-0.44738,-0.07318 -0.89462,-0.13412 -1.34175,-0.18277c-0.02107,0.03264 -0.03318,0.0692 -0.03626,0.10966c0.26516,0.70136 0.36793,1.42638 0.30824,2.17497c-0.19361,0.54908 -0.35074,1.10957 -0.47142,1.68149c-0.23488,1.10299 -0.21069,2.19961 0.07253,3.28987c0.38584,1.30809 1.20177,2.22801 2.44778,2.75984c1.11854,0.45002 2.27897,0.62062 3.48129,0.51176c1.56393,-0.10725 3.02654,-0.5459 4.38787,-1.31595c0.67087,-0.43255 1.22088,-0.98696 1.64999,-1.66321c0.24191,-0.36587 0.38091,-0.76797 0.41703,-1.20629c-0.04529,-0.6367 -0.38374,-0.99614 -1.01538,-1.07835c-0.27803,-0.02438 -0.55603,-0.02438 -0.83406,0c-1.11133,0.20602 -2.22947,0.35834 -3.35437,0.45693c-0.37583,-0.00896 -0.74449,-0.06379 -1.10603,-0.16449c-0.6667,-0.29013 -0.91449,-0.79582 -0.7434,-1.517c0.21831,-0.64705 0.65347,-1.07352 1.30548,-1.2794c1.83736,-0.49688 3.70492,-0.68572 5.6027,-0.56659c1.54163,0.19465 2.59932,1.01712 3.17305,2.46741c0.1374,0.35904 0.22806,0.72458 0.27198,1.09662z\" fill=\"#fb5530\"/></g></g></svg>"
}
