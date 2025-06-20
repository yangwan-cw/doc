
# 一、ShardingSphere
![ShardingSphere Logo](<../../public/logo_v3 (4).png>)
## 一、ShardingSphere 是什么？


定位：数据库增强引擎，提供透明化的分布式数据库能力。

## 历史渊源

## 单库单表的性能瓶颈
>[!tip]
> ⚠️ 问题: 当单表数据量增长到千万级甚至更大时，查询性能急剧下降（如全表扫描耗时剧增），索引效率降低，写入速度变慢。
💡 传统方案：升级硬件（如换 SSD、增加内存），但成本高且效果有限

## 手动解决单表庞大
>[!tip]
> ⚠️ 问题: 需自行设置分片规则（如按HASH,取余）,并在代码逻辑上进行编码，导致产生连锁问题
- ​​侵入性强​​：业务代码与分片逻辑耦合，难以维护。

## 二、高性能数据库集群架构模式

1. 🔄 [读写分离](2.读写分离.md)
2. 🗂️ [数据分片](3.数据分片.md)
3. [实现方式](4.实现方式.md)
4. [环境安装](5.docker环境安装.md)
   





## 版本
>[!tip]
> 🏷️ ShardingSphere  v5.1.1


## 贡献者
<!-- readme: collaborators,contributors -start -->

<!-- readme: collaborators,contributors -end -->