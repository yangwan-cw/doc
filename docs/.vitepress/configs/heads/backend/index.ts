const backendConfig = {
    text: 'Java', items: [
        {
            text: '面向对象与基础',
            items: [
                { text: 'Java基础', link: '/java/test' },
                { text: 'Java面向对象', link: '/java/core-knowledge' }
            ]
        },
        {
            text: '进阶框架',
            items: [
                { text: '集合框架详解', link: '/java/collections' },
                { text: '并发知识体系', link: '/java/concurrency-theory' },
                { text: 'J.U.C框架详解', link: '/java/juc' },
                { text: 'IO框架精讲', link: '/java/io-framework' }
            ]
        },
        {
            text: '新版本特性',
            items: [
                { text: 'Java8特性详解', link: '/java/java8-features' },
                { text: 'Java11升级必读', link: '/java/java11-upgrade' },
                { text: 'Java17新特性', link: '/java/java17-features' }
            ]
        },
        // JVM相关
        {
            text: 'JVM深度解析',
            items: [
                { text: '类加载机制', link: '/java/class-loading' },
                { text: '字节码增强技术', link: '/java/bytecode' },
                { text: '内存结构详解', link: '/java/jvm-memory' },
                { text: '垃圾回收机制', link: '/java/gc-mechanism' },
                { text: '调试排错指南', link: '/java/jvm-debugging' }
            ]
        },
        {
            text: 'Java 工作常见技巧',
            items: [
                { text: 'stream流式编程', link: '/java/stream-api' },
            ]
        }
    ]
}
export default backendConfig