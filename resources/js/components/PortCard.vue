<script setup>
defineProps({gallery:Object})
</script>

<template>
    <div class="relative w-full h-96 overflow-hidden group transition-all ease-in-out duration-1000">
        <div class="absolute z-20 p-5 w-full h-full top-0 bottom-0 right-0 left-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-700">
            <div class="flex items-center flex-col justify-center border w-full h-full animate-pulse">
                <h2 class="text-white text-lg font-medium animate-none">{{ gallery?.name }}</h2>
                <small class="text-white">{{ gallery?.description }}</small>
            </div>
        </div>
        <img class="w-full h-full object-cover group-hover:scale-110 transition-all ease-in-out duration-500"
             :src="gallery?.image" alt="">
    </div>
</template>
