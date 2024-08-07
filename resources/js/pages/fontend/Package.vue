<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import PriceCard from '@/components/PriceCard.vue';
import {onMounted, ref} from "vue";
import useAxios from "@/composables/useAxios.js";
const {sendRequest, loading, error} = useAxios();

const packages = ref([])
const getpackages = async () => {
    const response = await sendRequest({
        url: `/api/frontend/packages`,
        method: 'GET'
    })
    console.log('res', response)
    packages.value = response?.data
}

onMounted(async () => await getpackages())
</script>
<template>
    <GuestLayout>
        <div class="bg-[url(https://images.pexels.com/photos/2065971/pexels-photo-2065971.jpeg)]
                    relative bg-no-repeat bg-cover bg-top">
            <h2 class="text-white uppercase pt-56 pb-20 text-6xl font-bold text-center">Pricing & Plan </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-20 my-20">
            <PriceCard v-for="item in packages" :package="item"/>
        </div>
    </GuestLayout>
</template>
