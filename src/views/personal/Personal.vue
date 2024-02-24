<!-- src\views\personal\Personal.vue -->
<template>
    <HeroSection />
    <AboutSection />
    <ResumeSection />
    <ServicesSection />
    <SkillsSection />
    <PortfolioSection />
    <TestimonialSection />
    <PricingSection />
    <ContactSection />
</template>
<script setup>
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ResumeSection from './components/ResumeSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import PricingSection from './components/PricingSection.vue'
import ContactSection from './components/ContactSection.vue'

import { onMounted, onUnmounted, nextTick } from 'vue';
import { useSidebarStore } from '@/store/sidebar';
import { initScrollAnimations } from '@/utils/scrollAnimations';

const sidebarStore = useSidebarStore();

const onScroll = () => {
    // 獲取所有錨點元素
    const navContents = document.querySelectorAll('#smooth-content section')
    // 所有錨點元素的 offsetTop
    const offsetTopArr = []
    navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop - 350)
    })
    // console.log(offsetTopArr)
    // 獲取當前文檔流的 scrollTop
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    // 定義當前點亮的導航下標
    let navIndex = 0
    for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大於等於第 n 個元素的 offsetTop 則說明 n-1 的內容已經完全不可見
        // 那麼此時導航索引就應該是 n 了
        if (scrollTop >= offsetTopArr[n]) {
            navIndex = n
            sidebarStore.setActiveSection(navIndex); // 更新 activeSection 狀態
        }
    }
};

const scrollToAnchor = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        const section = document.getElementById(hash);
        // console.log(section);
        if (section) {
            // 獲取元素相對於文檔頂部的距離
            const top = section.getBoundingClientRect().top + window.pageYOffset + 20;
            // 使用 window.scrollTo 方法滾動到指定位置
            setTimeout(() => {
                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }, 1000); // 延遲 1000 毫秒後滾動
        }
    }
};

onMounted(() => {
    initScrollAnimations();
    window.addEventListener('scroll', onScroll);
    nextTick().then(() => {
        window.addEventListener('load', scrollToAnchor);
    });
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('load', scrollToAnchor);
});
</script>
<script>
export default {
    name: 'AppHome', // 更新組件名稱
    // ... 其他選項
}
</script>