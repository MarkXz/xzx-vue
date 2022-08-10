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

// 不是必须加载的组件使用懒加载
// const Icon = () => import("@/views/icon/index")
// const Erji = () => import("@/views/duoji/erji")
const NotFound = () => import("@/views/page404")
const WorkList = () => import("@/views/worklist/worklist")
const CurrentWork = () => import("@/views/currentwork/currentwork")
const WorkListChild = () => import("@/views/worklistchild/worklistchild")


/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(VueRouter)

const addRouter = [
  {
    path: "/index",
    iconCls: "el-icon-s-home",
    name: '首页',
    component: Index,
  },
  {
    path: "",
    iconCls: "el-icon-menu",
    name: '任务列表',
    component: WorkList,
    children: [{
      path: "/worklistchild",
      iconCls: "el-icon-s-grid",
      name: '任务子列表',
      component: WorkListChild,
    }]
  },
  {
    path: "/currentwork",
    iconCls: "el-icon-share",
    name: '当前任务',
    component: CurrentWork,
  },
]

const routes = [{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  component: Home,
  redirect: '/index',
  children: addRouter
},
{ path: '/login', component: Login },
{
  path: "/404",
  component: NotFound,
  name: "404",
},
{
  path: "*",
  redirect: "/404",
}
]


// router.beforeEach((to, form, next) => {
//   // if (to.path === '/login') {
//   next()
//   // } else {
//   //   if (sessionStorage.getItem('token')) {
//   //     next()
//   //   } else {
//   //     Message.error('登录过期，请重新登录')
//   //     sessionStorage.clear()
//   //     router.push('/login')
//   //   }
//   // }
// })

export default new VueRouter({
  routes
})

export { routes, addRouter }
