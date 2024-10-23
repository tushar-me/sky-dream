<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import PortCard from "@/components/PortCard.vue";

import useAxios from "@/composables/useAxios.js";
import {onMounted, ref} from "vue";

const {sendRequest, loading, error} = useAxios();
const gallery = ref([])
const getGalleries = async () => {
    const response = await sendRequest({
        url: `/api/frontend/gallery`,
        method: 'GET'
    })
    gallery.value = response?.data
}
onMounted(async () => await getGalleries())
</script>
<template>
    <GuestLayout>
        <div class="bg-[url(https://img.freepik.com/free-photo/canvas-easel-black-copy-space-background_23-2148660999.jpg?t=st=1719752276~exp=1719755876~hmac=2fa6d6653d0f4b54552edb24623613d11041a69d39d9d1a0c376e449319d4882&w=740)]
                        relative bg-no-repeat bg-cover bg-top">
            <h2 class="text-white uppercase pt-20 px-3 lg:pt-56 pb-20 text-4xl lg:text-6xl font-bold text-center">Our Portfolio</h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-5 lg:mx-20 my-10 ">
            <PortCard v-for="item in gallery" :gallery="item"/>
        </div>
    </GuestLayout>
</template>
