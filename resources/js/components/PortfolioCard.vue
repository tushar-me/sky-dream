<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation} from 'swiper/modules';
const modules = [Autoplay, Navigation];

const open = ref(false)
</script>
<template>
    <div @click="open = true" class="max-w-sm bg-white border border-gray-200 rounded-t-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="@//assets/images/img/contact.jpg" alt="" />
        <div class="p-2">
        <h5 class="mb-2 text-2xl font-semibold text-center hover:text-green-400 tracking-tight text-green dark:text-white">Painting</h5>
        </div>
    </div>

    <div v-if="open" class="model w-1/2 h-[450px]">
        <div class="flex justify-end -mb-8 me-5" >
                <button @click="open = false" class="font-bold text-xl text-red-600 uppercase z-30">close</button>
            </div>
        <div>
            <swiper
                :spaceBetween="30"
                :centeredSlides="true"
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
                >
                <swiper-slide><img src="@/assets/images/img/service.jpeg" alt="Images" class="w-full h-[450px] "></swiper-slide>
                <swiper-slide><img src="@/assets/images/img/1691063201_h12.jpeg" alt="Images" class="w-full h-[450px] "></swiper-slide>
                <swiper-slide><img src="@/assets/images/img/contact.jpg" alt="Images" class="w-full h-[450px] "></swiper-slide>
            </swiper>
        </div>
    </div>

</template>
<style scoped>
.model{
    position: fixed;
    z-index: 9999;
    top: 20%;
    justify-self: center;
}
</style>
