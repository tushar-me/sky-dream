<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import ServiceCard from '@/components/Servicecard.vue';
</script>
<template>
    <GuestLayout>
        <div class="my-10 mx-20">
            <div class="text-center flex flex-col justify-center items-center">
                <h1 class="font-bold text-4xl uppercase">Services</h1>
                <div class="h-1 bg-amber-400 w-28 mt-px"></div>
            </div> 
            <div class="grid grid-cols-3 gap-5 mt-10">
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </div>
        </div>
    </GuestLayout>
</template>