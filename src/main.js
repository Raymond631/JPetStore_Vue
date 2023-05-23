import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(VueAxios, axios);
axios.defaults.withCredentials = true  //跨域请求带上cookie
app.use(router)
app.mount('#app')
