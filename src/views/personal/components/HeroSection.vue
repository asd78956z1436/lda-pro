<template>
    <!-- Hero Section -->
    <section class="hero-section page-section scroll-to-page" id="home">
        <div class="custom-container">
            <div class="hero-content content-width">
                <div class="section-header">
                    <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                        <i class="las la-home"></i> Introduce
                    </h4>
                    <h1 class="scroll-animation" data-animation="fade_from_bottom">Say Hi from <span>Drake</span>, Framer Designer and Developer</h1>
                </div>
                <p class="scroll-animation" data-animation="fade_from_bottom">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                <a href="javascript:void(0)" class="go-to-project-btn scroll-to scroll-animation" data-animation="rotate_up" @click="scrollTo($event, 'portfolio')">
                    <img src="@/assets/images/round-text.png" alt="Rounded Text">
                    <i class="las la-arrow-down"></i>
                </a>
                <div class="facts d-flex">
                    <div class="left scroll-animation" data-animation="fade_from_left">
                        <h1>10+</h1>
                        <p>Years of <br>Experience</p>
                    </div>
                    <div class="right scroll-animation" data-animation="fade_from_right">
                        <h1>182+</h1>
                        <p>projects completed on <br>15 countries</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { scrollTo } from '@/utils/useScroll';
</script>