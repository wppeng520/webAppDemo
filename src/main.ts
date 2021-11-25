import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { store, key } from '../src/store'

const app = createApp(App)

app.use(store, key).use(router).mount('#app')

