<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import Portfolio from '@/components/PortfolioCard.vue';
</script>
<template>
    <GuestLayout>
        <div class="my-10 mx-20">
            <div class="text-center flex flex-col justify-center items-center ">
              <h1 class="font-bold text-4xl uppercase">Our Portfolio</h1>
              <div class="h-1 bg-amber-400 w-40 mt-px"></div>
            </div> 
            <div class="flex justify-center items-center gap-5 mt-5 mx-10">
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">All</button>
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">Painting</button>
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">Pipe</button>
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">plastring</button>
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">epoxy</button>
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">varnish</button>
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">door-frame</button>
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">Grouting</button>
            </div>
            <div class="grid grid-cols-3 gap-5 mx-20 my-10 ">
              <Portfolio/>
              <Portfolio/>
              <Portfolio/>
              <Portfolio/>
              <Portfolio/>
              <Portfolio/>
              <Portfolio/>
              <Portfolio/>
              <Portfolio/>
              <Portfolio/>
              <Portfolio/>
              <Portfolio/>
            </div>
        </div>
    </GuestLayout>
</template>