// 導入 Bootstrap 5 JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// css
import '@/assets/css/animate.min.css'
import '@/assets/css/smooth-scrollbar.css'
import '@/assets/css/style.css'
import '@/assets/css/responsive.css'

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
