import { createApp } from 'vue'
import './glob.css'
// @tailwind
import App from './App.vue'
import router from './router'
// @pinia

createApp(App)
.use(router)
// @pinia
.mount('#app')