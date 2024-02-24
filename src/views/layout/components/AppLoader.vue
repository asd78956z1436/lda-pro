<template>
    <!-- Preloader -->
    <transition name="fadeOut" @after-leave="handleAfterLeave">
        <div v-if="isLoading" class="page-loader">
            <div class="bounceball"></div>
        </div>
    </transition>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue';

const isLoading = ref(true);
onMounted(() => {
    nextTick().then(() => {
        // 模擬加載過程
        setTimeout(() => {
            isLoading.value = false;
        }, 1500); // 延遲 1500ms 來模擬加載時間
    });
});

// 淡出動畫完成後的處理函數，可用於清理或其他邏輯
function handleAfterLeave() {
    console.log('淡出動畫完成');
}
</script>
<style>
/* 定義淡入淡出效果 */
.fadeOut-enter-active,
.fadeOut-leave-active {
    transition: opacity 1s ease;
}

.fadeOut-enter-from,
.fadeOut-leave-to {
    opacity: 0;
}
</style>