<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <button @click="changeLocation">change Provide location</button>
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
import {provide,ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import {setItem, removeItem} from './tools'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(props, context){
    const count = ref(0)
    provide('location', count)
    provide('name', 'this is name')
    return {
      count,
      changeLocation:()=>{
        const num = Math.ceil(Math.random()*9999)
        count.value = num
        
      }
    }
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
