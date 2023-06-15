
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import { loadView, isLogin } from '/@/tools'
// import { isLogin } from '/@/tools'

import NotFoundPage from '/@/views/NotFound/index.vue'
import Login from '/@/views/Login/index.vue'
import Home from '/@/views/Home/index.vue'
import Page1 from '/@/views/Page1/index.vue'

import { start, done } from 'nprogress'
import 'nprogress/nprogress.css'
// const start = Nprogress.start
// const done = Nprogress.done




const NotFound = {
  path: '/not-found',
  // component: loadView('NotFound')
  component: NotFoundPage

}
const LoginView = {
  path: '/login',
  name: 'login',
  meta: {
  },
  // component: loadView('Login')
  component: Login


}

// 
const basicRoutes = [
  LoginView,

]


// 
const otherRoutes = [{
  path: '/home',
  // component: loadView('Home'),
  component: Home,


}
  , {
  path: '/page1',
  // component: loadView('Page1'),
  component: Page1,

  beforeEnter: (to, from) => {
    console.log(to)
  }
}
  , NotFound
]


// default Routes
const routes = [
  ...basicRoutes,
  ...otherRoutes
]


export const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes
})

const NoLoginWhteList = ['/login']
const LoginWhiteList = otherRoutes.map(itme => itme.path)
// const whiteList = ['/login', '/home',]
// router.beforeEach((to, from, next) => {
router.beforeEach((to, from) => {
  // NProgress.start()
  start()
  //  1 判断 是否登陆  
  //       没有登陆  所有的定向走到login
  //       登陆了  判断路由 没有的话 就去home
  console.log(to)
  if (isLogin()) {
    console.log(`is---login`)
    //  如果做路由动态 权限的 话  现在这里的loginWhiteList
    //  就是动态请求过来的 用户路由权限
    if (LoginWhiteList.includes(to.path)) {
      return true
    } else {
      return NotFound
    }

  } else {
    if (NoLoginWhteList.includes(to.path)) {
      return true
    } else {
      console.log(to)
      return LoginView
      // return next(LoginView)
    }
  }
  // if (whiteList.includes(to.path)) {
  //   return true
  // } else {
  //   return NotFound
  // }
})


router.afterEach((to, from, failure) => {
  // NProgress.done();
  done();
  // if (!failure) sendToAnalytics(to.fullPath)
})