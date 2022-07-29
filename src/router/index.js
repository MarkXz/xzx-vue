/*
* @Author: xizixin
* @Describe: route
* @Date: 2018-06-22
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import Index from '../views/index/index.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  redirect: '/home'
},
{ path: '/login', component: Login },
{
  path: '/home',
  component: Home,
  redirect: '/index',
  children: [
    { path: '/index', component: Index },
  ]
}
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  // if (to.path === '/login') {
    next()
  // } else {
  //   if (sessionStorage.getItem('token')) {
  //     next()
  //   } else {
  //     Message.error('登录过期，请重新登录')
  //     sessionStorage.clear()
  //     router.push('/login')
  //   }
  // }
})

export default router
