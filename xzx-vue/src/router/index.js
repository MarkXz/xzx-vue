/*
* @Author: xizixin
* @Describe: route
* @Date: 2018-06-22
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  redirect: '/home'
},
// { path: '/login', component: Login },
{
  path: '/home',
  component: Home,
  // redirect: '/roles',
  children: [
    // { path: '/roles', component: Roles }
  ]
}
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  next()
})

export default router
