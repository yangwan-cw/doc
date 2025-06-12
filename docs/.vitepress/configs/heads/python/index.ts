const PythonConfig = {
    text: 'Python',
    items: [
        {
            text: '基础语法',
            items: [
                {text: 'python基础', link: '/python/test'},
                {text: 'python基础进阶', link: '/python/core-knowledge'}
            ]
        },
        {
            text: '语法进阶',
            items: [
                {text: '函数进阶', link: '/python/test'},
                {text: '正则表达式', link: '/python/core-knowledge'},
                {text: '装饰器', link: '/python/decorator'},
                {text: '迭代器与生成器', link: '/python/iterator-generator'},
                {text: '上下文管理器', link: '/python/context-manager'},
                {text: '异常处理', link: '/python/exception-handling'},
                {text: '并发', link: '/python/multithreading-multiprocessing'},
                {text: '网络', link: '/python/networking'}
            ]
        },
        {
            text: 'Web开发',
            items: [
                {text: 'Django框架', link: '/python/django'},
                {text: 'WebSocket编程', link: '/python/websocket'},
                {text: 'MySQL数据库', link: '/python/mysql'},
            ]
        },
        {
            text: '爬虫',
            items: [
                {text: '爬虫基础', link: '/python/crawler-basics'},
                {text: 'Scrapy框架', link: '/python/scrapy'},
                {text: '数据存储', link: '/python/data-storage'}
            ]
        },
        {
            text: '自动化运维',
            items: [
                {text: 'Linux 环境', link: '/python/linux-environment'},
                {text: 'Shell 脚本编写', link: '/python/shell-scripting'},
                {text: '脚本管理', link: '/python/logging'},
                {text: 'Python 运维库', link: '/python/automation-libraries'},
            ]
        }
    ]
}

export default PythonConfig