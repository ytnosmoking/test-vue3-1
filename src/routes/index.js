

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { loadView, isLogin } from '/@/tools'
import 'nprogress/nprogress.css'
import 'nprogress/nprogress.js'
// import newNp from 'nprogress'
// console.log(NProgress)
const NotFound = {
  path: '/not-found',
  component: loadView('NotFound')
}
const LoginView = {
  path: '/login',
  name: 'login',
  meta: {
  },
  component: loadView('Login')
}

// 
const basicRoutes = [
  LoginView,

]


// 
const otherRoutes = [{
  path: '/home',
  component: loadView('Home'),

}
  , {
  path: '/page1',
  component: loadView('Page1'),
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
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

const NoLoginWhteList = ['/login']
const LoginWhiteList = otherRoutes.map(itme => itme.path)
// const whiteList = ['/login', '/home',]
// router.beforeEach((to, from, next) => {
router.beforeEach((to, from) => {
  NProgress.start()
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
  NProgress.done();
  // if (!failure) sendToAnalytics(to.fullPath)
})