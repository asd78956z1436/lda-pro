<template>
    <AppLoader />
    <AppIconMenu />
    <SideMenuBar />
    <ScrollNav />
    <LeftSidebar />
    <MainSection />
    <BottomNav />
    <ScrollTop :pt="{
                    root: 'bg-green-300'
                }" />
</template>
<script setup>
// import { onMounted, onUnmounted, ref, nextTick } from 'vue';
// import { useSidebarStore } from '@/store/sidebar';

import AppLoader from './components/AppLoader.vue';
import AppIconMenu from './components/AppIconMenu.vue';
import SideMenuBar from './components/SideMenuBar.vue';
import ScrollNav from './components/ScrollNav.vue';
import LeftSidebar from './components/LeftSidebar.vue';
import MainSection from './components/MainSection.vue';
import BottomNav from './components/BottomNav.vue';
</script>
<script>
export default {
    name: 'AppLayout', // 更新組件名稱
    // ... 其他選項
}
</script>
<style>
.p-scrolltop {
    bottom: 10%;
}
</style>