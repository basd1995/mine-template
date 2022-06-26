/*
 * @Author: basd1995
 * @Date: 2022-06-20 23:03:54
 * @LastEditors: basd1995
 * @LastEditTime: 2022-06-26 23:14:57
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'uno.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')

const setting = designSettings()
setting.updatePrimaryColor()
