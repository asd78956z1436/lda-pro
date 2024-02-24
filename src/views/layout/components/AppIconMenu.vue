<template>
    <span class="icon-menu" @click="toggleSidebar">
        <span class="bar"></span>
        <span class="bar"></span>
    </span>
</template>
<script setup>
import { useSidebarStore } from '@/store/sidebar';

const sidebarStore = useSidebarStore();

const toggleSidebar = () => {
    sidebarStore.toggle();
};
</script>