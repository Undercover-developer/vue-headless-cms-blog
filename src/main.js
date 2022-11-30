import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import './registerServiceWorker'
import Flutterwave from "flutterwave-vue3"

createApp(App).use(router).use(store).use(Flutterwave).mount('#app')
