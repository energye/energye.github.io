import {defineConfig} from 'vitepress'
import {navZH} from "./nav/nav_zh";
import {sidebarZH} from "./sidebar/sidebar_zh";

export const zh = defineConfig({
    lang: 'zh-Hans',
    title: "ENERGY",
    description: "基于CEF",
    themeConfig: {
        lastUpdatedText: '上次更新',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '多语言',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: 'https://github.com/energye/energye.github.io/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        nav: navZH(),
        sidebar: sidebarZH(),
        outline: {
            level: "deep",
            label: "目录",
        },
    },
})


