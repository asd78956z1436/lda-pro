/* eslint-disable vue/multi-word-component-names */

// 導入 PrimeVue 樣式
import '@/assets/styles.scss';

// 導入 Bootstrap 5 JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// css
import '@/assets/css/animate.min.css'
import '@/assets/css/smooth-scrollbar.css'
import '@/assets/css/style.css'
import '@/assets/css/responsive.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import gsap from 'gsap'; // 引入 GSAP
import ScrollTrigger from 'gsap/ScrollTrigger'; // 引入 ScrollTrigger 插件

//PrimeVue套件
import PrimeVue from 'primevue/config';
//PrimeVue元件導入
import Carousel from 'primevue/carousel';
import ScrollTop from 'primevue/scrolltop';
import Dock from 'primevue/dock';


// 註冊 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);
const app = createApp(App);
const pinia = createPinia();

app.use(store).use(router)
app.use(pinia)
app.use(PrimeVue, { ripple: true });
app.component('Carousel', Carousel);
app.component('ScrollTop', ScrollTop);
app.component('Dock', Dock);

app.mount('#app')
