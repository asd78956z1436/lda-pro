<!-- src\views\layout\components\SideMenuBar.vue -->
<template>
    <!-- Side Menu Bar -->
    <div class="responsive-sidebar-menu" :class="{ 'active': sidebarStore.isOpen }">
        <div class="overlay" @click="sidebarStore.toggle"></div>
        <div class="sidebar-menu-inner">
            <div class="menu-wrap">
                <p>Menu</p>
                <ul class="menu scroll-nav-responsive d-flex">
                    <li v-for="(item,index) in sidebarStore.menuItems" :key="item.name" @click="sidebarStore.toggle">
                        <a class="scroll-to" :class="{ 'active': index === sidebarStore.activeSection }" :href="'/#'+item.link" @click="scrollTo($event, item.link)" >
                            <i :class="item.icon"></i> <span>{{ item.name }}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="sidebar-social">
                <p>Social</p>
                <ul class="social-links d-flex align-items-center">
                    <li v-for="link in socialLinks" :key="link.icon">
                        <a :href="link.link"><i :class="link.icon"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { scrollTo } from '@/utils/useScroll';
import { useSidebarStore } from '@/store/sidebar';

const sidebarStore = useSidebarStore();
const socialLinks = ref([])


socialLinks.value = [
    { icon: 'lab la-twitter', link: '' }, // 添加實際鏈接
    { icon: 'lab la-dribbble', link: '' }, // 添加實際鏈接
    { icon: 'lab la-instagram', link: '' }, // 添加實際鏈接
];

</script>