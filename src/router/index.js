import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/login/login.vue'
import Main from '../views/main/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
})
