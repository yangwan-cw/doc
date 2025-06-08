import type { DefaultTheme } from 'vitepress'

const toolConfig: DefaultTheme.NavItemWithChildren = {
    text: '工具',
    items: [
        { text: 'rabbitmq', link: '/tools/rabbitmq/' },
        { text: 'vim', link: '/tools/vim/' },
        { text: 'git', link: '/tools/git/' },
        { text: 'maven', link: '/tools/maven/' },
        { text: 'idea', link: '/tools/idea/' },
        { text: 'Apifox', link: '/tools/apifox/' },
        { text: 'Fiddler', link: '/tools/fiddler/' },
        { text: 'Docker', link: '/tools/docker/' },
        { text: 'Kubernetes', link: '/tools/kubernetes/' },
        { text: 'Jenkins', link: '/tools/jenkins/' },
        { text: 'Nginx', link: '/tools/nginx/' },
        { text: 'Elasticsearch', link: '/tools/elasticsearch/' }
    ]
}

export default toolConfig