<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import PriceCard from '@/components/PriceCard.vue';
import {inject, onMounted, ref} from "vue";
import useAxios from "@/composables/useAxios.js";

const {sendRequest, loading, error} = useAxios();

const packages = ref([])
const getpackages = async () => {
    const response = await sendRequest({
        url: `/api/frontend/packages`,
        method: 'GET'
    })

    packages.value = response?.data
}

onMounted(async () => await getpackages())

</script>
<template>
    <GuestLayout>
        <div class="bg-[url(https://images.pexels.com/photos/2065971/pexels-photo-2065971.jpeg)]
                    relative bg-no-repeat bg-cover bg-top">
            <h2 class="text-white uppercase pt-20 lg:pt-56 pb-20 text-4xl lg:text-6xl font-bold text-center">Pricing &  Plan </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-5 lg:mx-20 my-20">
            <div v-if="loading" v-for="i in 7">
                <div class="w-full">
                    <div class="bg-white h-auto rounded-2xl border border-primary shadow shadow-primary">
                        <!-- Placeholder for Icon -->
                        <div class="flex justify-center pt-10 text-center">
                        <span class="flex items-center justify-center bg-gradient-to-b from-thirdColor to-fourthColor w-12 h-12 rounded-full shadow-lg animate-pulse">
                            <span class="w-6 h-6 bg-gray-300 rounded-full"></span>
                        </span>
                        </div>

                        <!-- Placeholder for Package Name -->
                        <h5 class="mt-4 text-3xl tracking-wide font-bold text-center animate-pulse">
                            <span class="h-6 w-2/3 bg-gray-300 mx-auto rounded"></span>
                        </h5>

                        <!-- Placeholder for Description -->
                        <p class="text-sm font-normal text-gray-500 text-center pt-2 animate-pulse">
                            <span class="h-4 w-3/4 bg-gray-200 mx-auto rounded"></span>
                        </p>

                        <!-- Placeholder for Price -->
                        <p class="py-2 tracking-wide font-bold text-2xl text-gray-600 text-center animate-pulse">
                            <span class="h-5 w-1/3 bg-gray-300 mx-auto rounded"></span>
                        </p>

                        <!-- Placeholder for Details -->
                        <div class="text-center px-2 py-5 whitespace-pre-wrap animate-pulse">
                            <div class="h-3 w-full bg-gray-200 rounded mb-2"></div>
                            <div class="h-3 w-4/5 bg-gray-200 rounded mb-2"></div>
                            <div class="h-3 w-3/4 bg-gray-200 rounded mb-2"></div>
                            <div class="h-3 w-2/3 bg-gray-200 rounded"></div>
                        </div>

                        <!-- Placeholder for WhatsApp Button -->
                        <div class="text-center m-5">
                            <div
                                class="bg-primary gap-3 rounded-full py-2 flex items-center justify-center animate-pulse">
                                <div class="w-6 h-6 bg-gray-300 rounded-full"></div>
                                <div class="w-1/3 h-4 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PriceCard v-else v-for="item in packages" :package="item"/>
        </div>
    </GuestLayout>
</template>
