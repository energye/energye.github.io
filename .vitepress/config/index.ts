import {defineConfig} from 'vitepress'
import {en} from './en'
import {zh} from './zh'
import {head, footer, localSearchConfig, GiteeICO, GitCodeICO} from "./shared";

export default defineConfig({
    title: "energy",
    rewrites: {
        'zh/:rest*': ':rest*'
    },
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    themeConfig: {
        logo: {src: "/imgs/icon.png", width: 24, height: 24},
        search: {provider: "local", options: localSearchConfig()},
        socialLinks: [
            {icon: 'github', link: 'https://github.com/energye/energy'},
            {
                icon: {
                    svg: GiteeICO()
                },
                link: 'https://gitee.com/energye/energy'
            },
            {
                icon: {
                    svg: GitCodeICO()
                },
                link: 'https://gitcode.com/energye/energy'
            }
        ],
        footer: footer()
    },
    head: head(),
    locales: {
        root: {label: '中文', ...zh},
        en: {label: 'English', ...en}
    }
})
