const GoConfig = {
    text: 'Go',
    items: [
        {
            text: '基础语法',
            items: [
                {text: 'Go基础', link: '/go/test'},
                {text: 'Go基础进阶', link: '/go/core-knowledge'}
            ]
        },
        {
            text: '语法进阶',
            items: [
                {text: '函数进阶', link: '/go/test'},
                {text: '正则表达式', link: '/go/core-knowledge'},
                {text: '协程', link: '/go/decorator'},
                {text: '通道与同步', link: '/go/iterator-generator'},
            ]
        },
        {
            text: 'Web开发',
            items: [
                {text: 'Gin框架', link: '/go/gin'},
                {text: 'WebSocket编程', link: '/go/websocket'},
                {text: 'MySQL数据库', link: '/go/mysql'},
                {text: '缓存', link: '/go/cache'},
                {text: 'ORM框架', link: '/go/orm'},
                {text: 'RESTful API设计', link: '/go/restful-api'},
                {text: '日志处理', link: '/go/logging'},
                {text: '实时通信', link: '/go/real-time-communication'},
                {text: '测试框架', link: '/go/testing-debugging'},
            ]
        },
        {
            text: '任务调度',
            items: [
                {text: '调度', link: '/go/scheduling'},
            ]
        },
        {
            text:'微服务',
            items: [
                {text: '微服务架构', link: '/go/microservices'},
                {text: '服务注册与发现', link: '/go/service-discovery'},
                {text: 'API网关', link: '/go/api-gateway'},
                {text: '配置管理', link: '/go/config-management'},
                {text: '服务监控与日志', link: '/go/monitoring-logging'},
            ]
        },
        {
            text: '设计模式',
            items: [
                {text: '常用设计模式', link: '/go/design-patterns'},
                {text: '架构模式', link: '/go/architecture-patterns'},
            ]
        }
    ]
}

export default GoConfig