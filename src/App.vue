<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <button @click="set">setLogin</button>
  <button @click="clear">clearToken</button>
  <router-link to="/login">Login</router-link>
  <router-link to="/home">Home</router-link>
  <router-link to="/page1">Page1</router-link>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {setItem, removeItem} from './tools'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    set() {
      setItem('token', '123')
    },
    clear() {
      removeItem('token')
    }
  }
}
</script>
