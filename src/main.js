import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './routes/index'
import { store } from './store/index'
console.log(router)
const app = createApp(App)
app.use(router)
app.use(store)

// // Mount when the route is ready
// router.isReady().then(() => {
//   app.mount('#app');
// });

app.mount('#app')
