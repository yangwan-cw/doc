type HeadConfig =
    | [string, Record<string, string>]
    | [string, Record<string, string>, string]

export const head: HeadConfig[] = [
    ['link', {rel: 'icon', href: '../public/favicon.ico'}],
]