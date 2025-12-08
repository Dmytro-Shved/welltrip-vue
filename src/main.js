import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './style.css';
import setUser from '@/plugins/set-user.js'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// set the pinia instance
setUser(pinia)

app.mount('#app')
