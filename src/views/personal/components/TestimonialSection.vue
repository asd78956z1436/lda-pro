<template>
    <!-- Testimonial Section -->
    <section class="testimonial-area page-section scroll-to-page" id="testimonial">
        <div class="custom-container">
            <div class="testimonial-content content-width">
                <div class="section-header">
                    <h4 class="subtitle scroll-animation" data-animation="fade_from_bottom">
                        <i class="lar la-comment"></i> testimonial
                    </h4>
                    <h1 class="scroll-animation" data-animation="fade_from_bottom">Trusted by <span>Hundered Clients</span></h1>
                </div>
                <div class="testimonial-slider-wrap scroll-animation" data-animation="fade_from_bottom">
                    <div class="owl-carousel testimonial-slider owl-theme">
                        <Carousel :value="products" v-model:page="currentPage" :responsiveOptions="responsiveOptions" :showNavigators="false" :showIndicators="false">
                            <template #item="slotProps">
                                <div class="testimonial-item">
                                    <div class="testimonial-item-inner">
                                        <div class="author d-flex align-items-center">
                                            <img :src="require('@/assets/images/' + slotProps.data.image)" alt="portfolio">
                                            <div class="right">
                                                <h3>{{ slotProps.data.name }}</h3>
                                                <p class="designation">{{ slotProps.data.id }}<span>{{ slotProps.data.code }}</span></p>
                                            </div>
                                        </div>
                                        <p>{{ slotProps.data.description }}</p>
                                        <a href="" class="project-btn">Project</a>
                                    </div>
                                </div>
                            </template>
                        </Carousel>
                    </div>
                    <div class="testimonial-footer-nav">
                        <div class="testimonial-nav d-flex align-items-center">
                            <button @click="navigatePrev" class="prev"><i class="las la-angle-left"></i></button>
                            <div id="testimonial-slide-count"><span class='left'>{{ currentPage + 1 }}</span> / {{ totalPages }}</div>
                            <button @click="navigateNext" class="next"><i class="las la-angle-right"></i></button>
                        </div>
                    </div>
                </div>
                <div class="clients-logos">
                    <h4 class="scroll-animation" data-animation="fade_from_bottom">work with 60+ brands worldwide</h4>
                    <div class="row align-items-center">
                        <div class="col-md-3 scroll-animation" data-animation="fade_from_left">
                            <img src="@/assets/images/client-1.png" alt="client">
                        </div>
                        <div class="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <img src="@/assets/images/client-2.png" alt="client">
                        </div>
                        <div class="col-md-3 scroll-animation" data-animation="fade_from_top">
                            <img src="@/assets/images/client-3.png" alt="client">
                        </div>
                        <div class="col-md-3 scroll-animation" data-animation="fade_from_right">
                            <img src="@/assets/images/client-4.png" alt="client">
                        </div>
                        <div class="col-md-3 scroll-animation" data-animation="fade_from_left">
                            <img src="@/assets/images/client-5.png" alt="client">
                        </div>
                        <div class="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                            <img src="@/assets/images/client-6.png" alt="client">
                        </div>
                        <div class="col-md-3 scroll-animation" data-animation="fade_from_top">
                            <img src="@/assets/images/client-7.png" alt="client">
                        </div>
                        <div class="col-md-3 scroll-animation" data-animation="fade_from_right">
                            <img src="@/assets/images/client-8.png" alt="client">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref([]);
const currentPage = ref(0);
const totalPages = computed(() => Math.ceil(products.value.length / 1));
const responsiveOptions = ref([{
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

// 導航到上一頁
function navigatePrev() {
    if (currentPage.value > 0) {
        currentPage.value--;
    }
}

// 導航到下一頁
function navigateNext() {
    if (currentPage.value < totalPages.value - 1) {
        currentPage.value++;
    }
}
</script>