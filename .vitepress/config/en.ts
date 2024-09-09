import {defineConfig} from 'vitepress'
import {navEN} from "./nav/nav_en";
import {sidebarEN} from "./sidebar/sidebar_en";

export const en = defineConfig({
    lang: 'en-US',
    title: "ENERGY",
    description: "Base CEF",
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/energye/energye.github.io/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        nav: navEN(),
        sidebar: sidebarEN(),
        outline: {
            level: "deep",
            label: "DIR",
        },
    },
})
