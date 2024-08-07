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
    console.log('res', response)
    services.value = response?.data
}
onMounted(async () => await getServices())
</script>
<template>
    <GuestLayout>
        <section>
            <div class="bg-[url(https://images.pexels.com/photos/2065971/pexels-photo-2065971.jpeg)]
                        relative bg-no-repeat bg-cover bg-bottom">
                <h2 class="text-white uppercase pt-56 pb-20 text-6xl font-bold text-center">Our Services</h2>
            </div>
            <div class="my-10 mx-20">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
                    <ServiceCard v-for="service in services?.allServices" :service="service"/>
                </div>
            </div>
        </section>
    </GuestLayout>
</template>
