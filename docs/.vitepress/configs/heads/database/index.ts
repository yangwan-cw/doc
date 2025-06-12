const databaseConfig = {
    text: '数据库',
    items: [
        { text: 'Redis', items:[
            { text: 'Redis概述', link: '/database/redis/overview' },
            { text: 'Redis数据结构', link: '/database/redis/data-structure' },
            { text: 'Redis持久化机制', link: '/database/redis/persistence' },
            { text: 'Redis集群与分片', link: '/database/redis/clustering' },
            { text: 'Redis性能优化', link: '/database/redis/performance' }
        ] },
        { text: 'MySQL', items:[
            { text: 'MySQL概述', link: '/database/mysql/overview' },
            { text: 'MySQL数据类型', link: '/database/mysql/data-types' },
            { text: 'MySQL索引优化', link: '/database/mysql/index-optimization' },
            { text: 'MySQL事务与锁机制', link: '/database/mysql/transactions-and-locks' },
            { text: 'MySQL性能调优', link: '/database/mysql/performance-tuning' }
        ] },
        { text: 'MongoDB', items:[
            {text: 'MongoDB概述', link: '/database/mongodb/overview' },
            {text: 'MongoDB数据模型', link: '/database/mongodb/data-model' },
            {text: 'MongoDB查询优化', link: '/database/mongodb/query-optimization' },
            {text: 'MongoDB索引与聚合', link: '/database/mongodb/indexes-and-aggregation' },
            {text: 'MongoDB性能调优', link: '/database/mongodb/performance-tuning' }
        ]
         }
    ]
}

export default databaseConfig