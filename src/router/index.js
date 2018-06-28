import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/login/login.vue'
import Main from '../views/main/main.vue'
import Hello from '../components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'home',
      component: Main
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/hello',
      name: 'hello',
      component: Main,
      children:[
        {
          path: 'index',
          name: 'hello',
          component: Hello
        }
      ]
    },
  ]
})
