<template>
    <router-view />
</template>
<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

// 當組件掛載時添加類名
onMounted(() => {
    document.body.classList.add('home1-page');
});

// 當組件卸載前移除類名
onBeforeUnmount(() => {
    document.body.classList.remove('home1-page');
});
</script>
<style lang="scss">
</style>