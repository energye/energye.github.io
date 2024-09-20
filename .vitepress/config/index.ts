import {defineConfig} from 'vitepress'
import {en} from './en'
import {zh} from './zh'
import {footer, GitCodeICO, GiteeICO, head, localSearchConfig} from "./shared";

const isGithub = process.env.DOC_ENV === "github"

let outDir = "./docs/" // npm run build:github
if (!isGithub) {
    outDir = "./site/" // npm run build
}

export default defineConfig({
    title: "energy",
    rewrites: {
        'zh/:rest*': ':rest*'
    },
    outDir: outDir,
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    appearance: {
        initialValue: 'dark'
    },
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
