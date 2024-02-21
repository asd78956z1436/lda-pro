import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout/Layout.vue'

const routes: Array < RouteRecordRaw > = [{
    path: '/index',
    name: 'index',
    component: Layout,
    redirect: 'personal',
    alias: '/',
    children: [{
        path: '', // 預設子路由的 path 為空
        name: 'personal',
        meta: {
            title: '主頁',
            keepAlive: true
        },
        component: () => import('@/views/personal/Personal.vue')
    }]
}]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router