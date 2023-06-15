<template>
  <div>
    <h3>this is Home View</h3> 
    <div>store control</div>
    <ul>
      <li>from App ==== location  {{location}} ----- fromName {{fromName}}</li>
      <li>ref {{count}} <button @click="incCount">incCount</button></li>
      <li>selfnum {{selfnum}} <button @click="incSelf">incSelf</button></li>
      <li>store  state  arrs : {{list.length}} ----- </li>
      <li>store getters arrs: {{total}} ----- </li>
      <li>
        <button @click="incremet">incremet </button>
        <button @click="incremetPay">incremet pay </button>
      </li>
      <li>
        <button @click="asyncInc(1000)">asyncInc</button>
        <button @click="asyncIncPay({time:3000,payload: 32})">incremetPay</button>
      </li>
    </ul>
  </div>
</template>
<script>
import {computed,onMounted,ref, watch,inject} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {mapGetters,mapActions,useStore} from 'vuex'
export default {
  name: 'Home',
  props: {
    name: {
      type: String,
      default: 'home'
    }
  },
  setup(props, context){
  
    const router = useRouter()
    const route = useRoute()

    console.log(props)
    console.log(context)
    console.log(context.attrs)
    console.log(context.slots)
    console.log(context.emit)
  const location = inject('location')
  const fromName = inject('name')


    const store = useStore()
    console.log(store)
    const count = ref(0)
    watch(count,(newV,oldV)=>{
      console.log(`new`)
      console.log(newV)
    })
     onMounted(()=>{
        console.log(23123)
      })
      const selfnum = ref(0)
    return {
      location,
      fromName,
      count,
      incCount:()=>count.value++,
      selfnum,
      incSelf:()=>selfnum.value++,
      list: store.state.arrs,
      total:computed(()=>store.getters.total),
      incremet: ()=>store.commit('incremet'),
      asyncInc :(time)=>store.dispatch('asyncIncremet', time),
     
    }
    
  },
  // data() {
  //   return {
  //     list: this.$store.state.arrs
  //   }
  // },
  // computed: {
  //   ...mapGetters([
  //     'total'
  //   ])
    
  // },
  mounted() {
    
  },
  methods: {
    ...mapActions({
      // asyncInc :'asyncIncremet',
      asyncIncPay :'asyncIncremetPay',
    }),
    // incremet() {
    //   this.$store.commit('incremet')
    // },
    incremetPay() {
      const num = Math.ceil(Math.random()*9999)
      this.$store.commit('incremetWithPay',num)
    },
    
  },
  // beforeRouteLeave(to, from) {
  //   const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  //   if (!answer) return false
  // }
}
</script>
<style lang='less' scoped>
    
</style>