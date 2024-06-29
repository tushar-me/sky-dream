<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import PriceCard from '@/components/PriceCard.vue';
</script>
<template>
    <GuestLayout>
        <div class="m-10">
            <div class="text-center flex flex-col justify-center items-center">
                <h1 class="font-bold text-4xl uppercase">Our Packages</h1>
                <div class="h-1 bg-amber-400 w-28 mt-px"></div>
                <p class="mt-5 text-gray-500 font-normal text-5xl mx-20"> We Provide Painting Plastering Epoxy Vanishing Tiles floor polish Marble Polish Parquet polish vinyl flooring installation Grouting Disposal.</p> 
            </div> 
            <div class="grid grid-cols-3 gap-5 mx-20 my-20">
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/> <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/> <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/> <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
            </div>
        </div>
    </GuestLayout>
</template>