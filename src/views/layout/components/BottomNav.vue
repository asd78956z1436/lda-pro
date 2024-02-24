<template>
    <div class="dock-demo">
        <div class="dock-window block  sm:hidden">
            <Dock :model="items" :position="position" :pt="dockPtOptions">
                <template #icon="{ item }">
                    <img :alt="item.label" :src="item.icon" style="width: 100%" />
                </template>
            </Dock>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from "vue";

const items = ref([{
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg'
    },
    {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg'
    },
    {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg'
    },
    {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png'
    }
]);
const position = ref('bottom');
// 定義 PT 選項
const dockPtOptions = reactive({
    // root: {
    //     class: 'hidden ', // 給根元素添加自定義樣式類
    //     // 'data-attribute': 'value' // 添加自定義 data 屬性
    // },
    container: {
        class: 'justify-content-center', // 給容器添加自定義樣式
    },
    // 添加其他部分的配置...
});
</script>
<style scoped>
.dock-demo>.dock-window {
    width: 100%;
    position: fixed;
    z-index: 1000;
    bottom: 0;
}

::v-deep .p-dock {
    z-index: 1000;
    width: 100%;
    box-shadow: inset 0 0 47px #3741518a;
    background: #2b2a2a;
    padding: 8px;
}

::v-deep .p-dock .p-dock-list-container {
    border: none;
    background: none;
}
</style>