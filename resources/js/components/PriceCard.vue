<template>
    <div class="w-full">
        <div class="bg-white h-auto rounded-2xl  border border-primary shadow shadow-primary">
            <div class="flex justify-center pt-10 text-center">
                <span class="flex items-center justify-center bg-gradient-to-b from-thirdColor to-fourthColor w-12 h-12 rounded-full shadow-lg ">
                    <Icon name="map:bank" class=" text-xl text-white text-center" />
                </span>
            </div>
            <h5 class="mt-4 text-3xl tracking-wide font-bold text-center gradient-text">
                {{ package?.name }}
            </h5>
            <p class="text-sm font-normal text-gray-500 text-center pt-2">{{ package?.shortDescritions }}</p>
            <p class="py-2 tracking-wide font-bold text-2xl text-gray-600 text-center">$ {{ package?.price }} / start</p>
            <div class="text-center py-5">
                {{ package?.details }}
            </div>
            <div class="text-center m-5">
                <a :href="`https://wa.me/01723717933?text=hello mr jugol kumar how are you`" class="bg-primary gap-3 rounded-full py-2 flex items-center justify-center">
                    <Icon name="ph:whatsapp-logo" class="text-white text-2xl" />
                    <p class="text-white">WhatsApp Please</p>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    package:Object
})
</script>
