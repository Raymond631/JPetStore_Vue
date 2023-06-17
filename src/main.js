import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/router.js'
import axios from 'axios'
import '../src/assets/css/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueAxios from 'vue-axios'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(VueAxios, axios);
axios.defaults.withCredentials = true  //跨域请求带上cookie
app.use(router)
app.mount('#app')
