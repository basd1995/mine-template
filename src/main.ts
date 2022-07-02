/*
* @Author: basd1995
* @Date: 2022-06-20 23:03:54
 * @LastEditors: basd1995
 * @LastEditTime: 2022-07-02 22:08:45
*/
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/global.scss'
import 'uno.css'
import './permission'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')

const setting = designSettings()
setting.updatePrimaryColor()
