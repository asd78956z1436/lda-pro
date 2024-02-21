<template>
    <!-- Preloader -->
    <div v-if="isLoading" class="page-loader">
        <div class="bounceball"></div>
    </div>
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
</script>