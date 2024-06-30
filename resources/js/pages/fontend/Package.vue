<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import PriceCard from '@/components/PriceCard.vue';
</script>
<template>
    <GuestLayout>
        <div class="bg-[url(https://img.freepik.com/free-photo/top-view-paint-can_23-2149705349.jpg?t=st=1719751239~exp=1719754839~hmac=81aa9a6259c8dcecaee60563cb1c007c6a05e204e35515bf87600a7bd4e5a4a6&w=740)]
                    relative bg-no-repeat bg-cover bg-top">
            <h2 class="text-white uppercase pt-56 pb-20 text-6xl font-bold text-center">Pricing & Plan </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 mx-20 my-20">
            <PriceCard v-for="item in 8"/>
        </div>
    </GuestLayout>
</template>
