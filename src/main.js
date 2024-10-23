import { createApp } from 'vue'
import './global.css'
import App from './App.vue'
import router from './router'
/*import-laith.vuefw-pinia*/

createApp(App)
.use(router)
/*laith.vuefw-pinia*/
.mount('#app')