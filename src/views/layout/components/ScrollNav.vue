<!-- src\views\layout\components\ScrollNav.vue -->
<template>
    <ul class="menu scroll-nav d-flex">
        <li v-for="(item,index) in sidebarStore.menuItems" :key="item.name">
            <a class="scroll-to" :class="{ 'active': index === sidebarStore.activeSection }" :href="'/#'+item.link" @click="scrollTo($event, item.link)">
                <span>{{ item.name }}</span> <i :class="item.icon"></i>
            </a>
        </li>
    </ul>
</template>
<script setup>
// import { ref } from "vue";
import { useSidebarStore } from '@/store/sidebar';
import { scrollTo } from '@/utils/useScroll';
const sidebarStore = useSidebarStore();
</script>