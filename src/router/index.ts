import { createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import Layout from '@/views/layout/Layout.vue'

const routes: Array < RouteRecordRaw > = [{
    path: '/',
    name: 'index',
    component: Layout,
    // redirect: '/home',
    children: [{
        path: '/', // 預設子路由的 path 為空
        name: 'personal',
        // meta: {
        //     title: '主頁',
        //     keepAlive: true
        // },
        component: () => import('@/views/personal/Personal.vue')
    }]
}]


const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
    if (to.hash) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (document.querySelector(to.hash)) {
                    resolve({
                        el: to.hash, // 使用 'el' 而不是 'selector'
                        top: document.querySelector(to.hash) ?.getBoundingClientRect().top ?? 0,
                        behavior: 'smooth',
                    });
                } else {
                    resolve({ left: 0, top: 0 });
                }
            }, 500); // 延遲，以確保頁面已經渲染完畢
        });
    } else if (savedPosition) {
        return savedPosition;
    } else {
        return { left: 0, top: 0 };
    }
};


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior
})

export default router