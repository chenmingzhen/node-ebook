# ebook后端API

## 思路
```
1.先打开数据库，插入书籍的资料
2.编写node.js 编写连接数据库接口 监听本地3000端口
3.编写API app.get  '/book/list' '/book/home' 等
  通过本地ip加端口加指定位置 获得json数据
4.打开vue项目 将之前的mock模拟数据取消 
  .env.development的所有API地址进行修改
```

## 环境安装
```
1.express API
    cnpm i express -S
2.跨域问题
   cnpm i -S cors  

```

## 填坑
```
1.调用跨域是app.use(cors());
 不是app.use(cors)啊
2.上线的时候
    不用域名登录数据库 直接localhost
3.不知道为什么vue的dev环境生产变量没有生效
```
     

