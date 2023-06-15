

import { defineAsyncComponent } from 'vue'


export const loadView = (name) => defineAsyncComponent(() => import(`/@/views/${name}/index.vue`))
// export const loadView = (name) => () => import(`/@/views/${name}/index.vue`)
export const getItem = (key) => {
  const val = localStorage.getItem(key)
  return val ? JSON.parse(val) : ''
}
export const setItem = (key, val) => {
  if (!val) {
    return
  }
  localStorage.setItem(key, JSON.stringify(val))
}

export const removeItem = (key) => localStorage.removeItem(key)
export const isLogin = () => getItem('token')