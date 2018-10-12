
# Iview Pro
 Vue后台管理通用解决方案
## 使用
```bash
$ git clone https://github.com/xinpingJun/iview-pro.git
$ cd iview-pro
$ yarn install
$ yarn serve    # 访问 http://localhost:8080
$ yarn build    # 打包  

```

## 简介
&emsp;&emsp;Iview Pro
  基于Vue.js，
  使用[iView],参考[ivew-admin]，
  使用vue-cli 3.0 脚手架搭建的Vue后台管理通用解决方案，
  实现动态路由和权限验证，
  封装axios，
  新增常用页面，
  加入ant-desgin 图标库。

## 项目结构
```shell
.
└── src
    ├── api  接口文件
    ├── assets  静态文件（样式，图片，字体图标等。）
    ├── libs  工具方法
    ├── router  路由配置
    ├── store  状态管理
    ├── vendors  公共库文件
    └── views
        ├── login  登陆页面
        ├── main  主框架
        ├── case 空白/栅格页面（常用页面布局）
        ├── chart G2 表单  
        ├── form 表单模块
        ├── home 首页  
        ├── page 常用页面模块
        ├── system 系统管理模块  
        ├── table 表格模块  
        ├── UI ui模块  
```


##  后台管理开发备忘录
- [ ]   动态路由  router.addRoutes(routes)
- [ ]   权限控制  自定指令
- [ ]   登陆拦截  axios  token/cookie
- [ ]   开发环境/生产环境切换，配置文件
- [x]   目录结构规范 组件使用index.js导出

## 组件规范 （必须）
  - 组件名应该始终是多个单词的  命名：todo-item  导入/使用：TodoItem  
  - 组件 data 必须为函数
  - Prop（传入的值） 定义应该尽量详细（默认值/对象/字符串/。。）
  - 总是用 key 配合 v-for  如：v-for="(item.index) in list"  :key="index"
  - 永远不要把 v-if 和 v-for 同时用在同一个元素上。
  - 单文件组件中 ：对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。
  - 在插件、混入等扩展中始终为自定义的私有属性使用 $_ 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 $_yourPluginName_)。


## 兼容性
现代浏览器及 IE11。

## Links

- [iView](https://github.com/iview/iview)
- [Vue](https://github.com/vuejs/vue)
- [Webpack](https://github.com/webpack/webpack)
