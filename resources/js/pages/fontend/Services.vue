<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import ServiceCard from '@/components/Servicecard.vue';
import useAxios from "@/composables/useAxios.js";
import {onMounted, ref} from "vue";
const {sendRequest, loading, error} = useAxios();
const services = ref([])
const getServices = async () => {
    const response = await sendRequest({
        url: `/api/frontend/services`,
        method: 'GET'
    })

    services.value = response?.data
}
onMounted(async () => await getServices())
</script>
<template>
    <GuestLayout>
        <section>
            <div class="bg-[url(https://images.pexels.com/photos/2065971/pexels-photo-2065971.jpeg)]
                        relative bg-no-repeat bg-cover bg-bottom">
                <h2 class="text-white uppercase pt-20 lg:pt-56 pb-20 text-4xl lg:text-6xl font-bold text-center">Our Services</h2>
            </div>
            <div class="my-10 mx-5 lg:mx-20">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
                    <div class="col-span-1" v-if="loading" v-for="i in 12">
                        <div class="relative w-full overflow-hidden group transition-all ease-in-out duration-1000">
                            <!-- Placeholder for Image -->
                            <div class="animate-pulse bg-gray-200 w-full h-64"></div>

                            <div
                                class="absolute z-20 p-5 w-full h-full top-0 bottom-0 right-0 left-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-700">
                                <!-- Placeholder for Name -->
                                <div class="flex items-center justify-center border w-full h-full text-white">
                                    <div class="animate-pulse bg-gray-300 w-1/2 h-6"></div>
                                </div>
                            </div>
                        </div>
                        <div class="relative z-40 p-5 pb-0 bg-white group mx-5 border -mt-16 block">
                            <!-- Placeholder for Name -->
                            <div class="h-5 w-2/3 bg-gray-300 animate-pulse mb-2"></div>

                            <!-- Placeholder for Description -->
                            <div class="h-3 w-full bg-gray-200 animate-pulse mb-2"></div>
                            <div class="h-3 w-4/5 bg-gray-200 animate-pulse mb-2"></div>
                            <div class="h-3 w-3/4 bg-gray-200 animate-pulse mb-4"></div>

                            <!-- Placeholder for WhatsApp Button -->
                            <div
                                class="h-10 w-full bg-gray-300 animate-pulse flex items-center justify-center gap-3 text-white py-2 px-5 font-semibold"></div>
                        </div>
                    </div>

                    <ServiceCard v-else v-for="service in services?.allServices" :loading="loading.value" :service="service"/>
                </div>
            </div>
        </section>
    </GuestLayout>
</template>
