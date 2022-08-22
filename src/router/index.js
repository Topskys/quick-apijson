/*
 * @Author: Topskys
 * @Date: 2022-08-22 19:00:39
 * @LastEditTime: 2022-08-22 19:03:25
 * @LastEditors: Topskys
 * @Description: 
 * @FilePath: \quick-apijson\src\router\index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router