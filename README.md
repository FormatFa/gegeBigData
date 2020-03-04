# 基于Spark的大数据离线分析平台 Django后端

- 集群HDFS文件管理
- 可视化生成数据ETL任务，支持执行，查看结果
- 查询Hive数据库(未完成)
 

### 传送门
阿里云预览地址:
http://47.105.180.125:8000/gegebigdata/index.html

Vue.js 前端:
https://gitee.com/FormatFa/gegeBigdataUI
https://github.com/FormatFa/gegeBigdataUI

Django 后端:
https://gitee.com/FormatFa/gegeBigData
https://github.com/FormatFa/gegeBigData

Spark处理核心:
https://gitee.com/FormatFa/gegeCore
https://github.com/FormatFa/gegeCore

本地预览地址:
http://127.0.0.1:8000/gegebigdata/index.html#/

### Windows 调试环境准备

- 需要一台部署了大数据环境的虚拟机(目前仅测试了伪分布集群),VirtualBox 或者 Vmware
- VSCode 编辑器，安装vue,Python的相关插件
- Node.js
- Python 3.7 



### 待完成功能
- 将request部分封装在一起
- 添加更多的ETL操作
- 提交任务数据传递，传递数据现在是通过livy主方法参数的方式，感觉不够优雅
- 查看日志时可以自动刷新日志
- Django后台考虑写好点，或者更换比较熟悉的Flask框架
- 完成数据查询的功能调试，现在还没测试这个功能，因为是在windows系统上，使用不了pyhive。还有下载结果到本机的功能。
- 表设置那些和用户表关联起来，现在是单用户模式的，不用登录。连接配置的直接读取JSON文件看起来也不够优化，多个并发感觉就会出问题。
- 查看执行任务时，可以在优化下显示的日志。和Spark那边输出的日志。
- 如果使用Java 的Web框架，可以尝试下Livy的Programmatic API，看起来可以执行并接受返回值。但是是用Java，如果换成Python,按照官方例子就是用pyspark的了。
- 整理前后端的文档，代码注释和删除没用的，重新阅读下。
- 前端的展示还有很多可以美化下，现在大部分地方只是想显示出来而已。
- HDFS 管理的功能有待完善和显示的更加友好。




### 测试环境

集群要求:

安装Apache Livy
上传处理的jar包到集群目录中
/root/gegeCore-0.0.1-SNAPSHOT-jar-with-dependencies.jar

### 打包部署
 tar   czvf  gegebigdata.tar.gz  --exclude=gegebigdata/venv gegebigdata


### Django后台
Django 后台不熟，有点想换了。现在共有下面几个app
- etl
    ETL任务相关的
- cluster
    HDFS文件管理，集群相关
- query
    查询sql相关的
- user
    用户设置相关

数据库使用内置的SQLite
### 部署
guncorn启动
gunicorn  --daemon --access-logfile /root/graduation/access.log   --error-logfile /root/graduation/errors.log  -b 0.0.0.0:8000   gegebigdata.wsgi

pstree -ap|grep gunicorn
杀死线程
kill -9 1234
重启线程
kill -HUP 1234
 
### 
测试数据
```
电影数据:
hdfs://172.31.32.137/testdata/movies.csv
userId,movieId,title,rating,genres
1,1,Toy Story (1995),4.0,Adventure|Animation|Children|Comedy|Fantasy
1,3,Grumpier Old Men (1995),4.0,Comedy|Romance


店铺数据:
hdfs://172.31.32.137/testdata/zhuhai.csv
商圈,店铺名称,用户平均评分,用户评论数量,店铺地址,人均价格,行政区域,菜系
南屏,储缘蛋糕（华发商都店）,5,421,香洲区珠海市香洲区南屏北山南街76号之101（欢乐岛北山幼儿园附近）,50,香洲区,
```

