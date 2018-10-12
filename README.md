
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
├── config   开发相关配置
├── dist     打包后文件
├── public   打包所需静态资源
└── src
    ├── api  接口文件
    ├── assets  静态文件（样式，图片，字体图标等。）
    ├── components  公共组件（可复用）
    ├── directive  自定义指令
    ├── libs  工具方法
    ├── router  路由配置
    ├── store  状态管理
    ├── vendors  公共库文件 （jaquery等）
    └── views 页面文件
    ├── App.vue 入口页面
    └── main.js 入口配置
├── eslintrc.js  Javascript静态检查工具
├── .gitignore  忽略文件配置
├── .postcssrc.js   css转化工具
├── babel.config.js  js代码转换配置文件
├── package.json   项目需要的模块
├── READEME.md   项目说明
├── vue.config.js  vue 配置文件
└── yran.lock   yarn 配置文件

```


##  后台管理开发备忘录
- [ ]   动态路由  router.addRoutes(routes)
- [ ]   权限控制  自定指令 directive
- [ ]   登陆拦截  axios  token/cookie
- [ ]   开发环境/生产环境切换，配置文件
- [ ]   表单详情页面，查询表格页面
- [x]   目录结构规范 组件使用index.js导出

## 组件规范 （必须）
  - 组件名应该始终是多个单词的  命名：todo-item  导入/使用：TodoItem  
  - 组件 data 必须为函数
  - Prop（传入的值） 定义应该尽量详细（默认值/对象/字符串/。。）
  - 总是用 key 配合 v-for  如：v-for="(item.index) in list"  :key="index"
  - 永远不要把 v-if 和 v-for 同时用在同一个元素上。
  - 单文件组件中 ：对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。
  - 在插件、混入等扩展中始终为自定义的私有属性使用 $_ 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 $_yourPluginName_)。

## 组件规范 （建议）
  - 把每个组件单独分成文件
  - 组件名称单词大写开头 (PascalCase)
  - 和父组件紧密耦合的子组件应该以父组件名作为前缀命名。 如：父，TodoList.vue  子，TodoListItem.vue TodoListItemButton.vue
  - 组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法
  - 非空 HTML 特性值应该始终带引号 (单引号或双引号，选你 JS 里不用的那个) :style="{ width: sidebarWidth + 'px' }"
  - 指令缩写 (用 : 表示 v-bind: 和用 @ 表示 v-on:) 应该要么都用要么都不用。

## 组件/页面开发 文件结构命名范例

 ```shell
 
     ├── todo-list  组件
       ├── index.js  导出组件js
       ├── todo-list.vue  组件
       ├── todo-list.scss  样式文件
       ├── components   子组件
          ├── todo-list-item.vue
          ├── todo-list-item-button.vue

 ```

## 兼容性

现代浏览器及 IE11。

## 页面展示
![登陆页](https://github.com/xinpingJun/iview-pro/blob/master/static/image2.png)
![首页](https://github.com/xinpingJun/iview-pro/blob/master/static/image.png)

## 相关链接
- [iView](https://github.com/iview/iview)
- [Vue](https://github.com/vuejs/vue)
- [Webpack](https://github.com/webpack/webpack)
