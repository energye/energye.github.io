import {DefaultTheme} from "vitepress";

export function sidebarEN(){
    return {
        '/en/course/': {base: '/en/course/', items: course()},
        '/en/examples/': {base: '/en/examples/', items: examples()},
        '/en/document/': {base: '/en/document/', items: document()},
    }
}

function course(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Introduction',
            collapsed: false,
            items: [
                {text: 'What is energy？', link: 'what-is-energy'},
            ]
        },
        {
            text: 'Start Using',
            collapsed: false,
            items: [
                {text: 'Getting Started', link: 'getting-started'},
                {text: 'Install Environment', link: 'install-env'},
                {text: 'Download Version', link: 'download-version'},
            ]
        },
        {
            text: 'Energy CLI',
            collapsed: false,
            items: [
                {text: 'Use Instructions', link: 'cli-use-instructions'},
                {text: 'Download CLI', link: 'cli-download'},
                {text: 'Package Build', link: 'build-package'},
            ]
        },
        {text: 'Build Liblcl', link: 'build-liblcl'},
    ]
}

function examples(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Examples',
            collapsed: false,
            items: [
                {text: 'Link', link: 'index'},
                {
                    text: 'List',
                    items: [
                        {text: 'Simple-App Create 1', link: 'simple-create1'},
                        {text: 'Simple-App Create 2', link: 'simple-create2'},
                        {text: 'Browser State Control', link: 'browser-control'},
                        {text: 'DevTools', link: 'devtools-use'},
                        {text: 'Built Http Service', link: 'built-http-service'},
                        {text: 'Execute DevTools Method', link: 'execute-dev-tools-method'},
                        {text: 'Chromium Download', link: 'download'},
                        {text: 'Cookie Read Write', link: 'cookie-rw'},
                        {text: 'Go Execute JS', link: 'execute-javascript'},
                        {text: 'Go-OnEvent-JS-Call', link: 'go-onevent-js-emitevent'},
                        {text: 'Keyboard Event', link: 'keyboard-event-shortcut-key'},
                        {text: 'HTML、URL Path LoadPage', link: 'load-html-url-localpath-page'},
                        {text: 'Popup Sub Window', link: 'popup-subwindow'},
                        {text: 'Page Save PDF', link: 'page-save-pdf'},
                        {text: 'View Page SourceCode', link: 'view-page-sourcecode'},
                        {text: 'Custom Window Property', link: 'custom-window-property'},
                        {text: 'Page Zoom', link: 'page-zoom'},
                        {text: 'Sys Tray', link: 'tray'},
                        {text: 'Helper SubProcess', link: 'helper-process'},
                        {text: 'Context Menu', link: 'context-menu'},
                        {text: 'OSR-Windows', link: 'osr-windows'},
                        {text: 'OSR-Linux', link: 'osr-linux'},
                    ]
                }
            ]
        }
    ]
}

function document(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Document',
            items: []
        }
    ]
}
