<template>
    <div class="w-full">
        <div class="bg-white h-auto rounded-2xl  border border-primary shadow shadow-primary">
            <div class="flex justify-center pt-10 text-center">
                <span class="flex items-center justify-center bg-gradient-to-b from-thirdColor to-fourthColor w-12 h-12 rounded-full shadow-lg ">
                    <Icon name="map:bank" class=" text-xl text-white text-center" />
                </span>
            </div>
            <h5 class="mt-4 text-3xl tracking-wide font-bold text-center gradient-text">
                Painting
            </h5>
            <p class="text-sm font-normal text-gray-500 text-center pt-2">House & Commercial space Painting</p>
            <p class="py-2 tracking-wide font-bold text-2xl text-gray-600 text-center">$ 280 / start</p>
            <div class="text-center py-5">
                <ul class="px-5 flex flex-col gap-3">
                    <li class="flex gap-3 items-start text-gray-500 text-sm">
                                        <span>
                                            <Icon name="material-symbols:check-circle-outline-rounded" class=" text-md text-green-500" />
                                        </span>
                        <p class="tracking-wide text-start">2 Rm HDB - $499 to $999</p>
                    </li>
                    <li class="flex gap-3 items-start text-gray-500 text-sm">
                                        <span >
                                            <Icon name="material-symbols:check-circle-outline-rounded" class=" text-md text-green-500" />
                                        </span>
                        <p class="tracking-wide text-start">3 Rm HDB - $599 to $1199</p>
                    </li>
                    <li class="flex gap-3 items-start text-gray-500 text-sm">
                                        <span >
                                            <Icon name="material-symbols:check-circle-outline-rounded" class=" text-md text-green-500" />
                                        </span>
                        <p class="tracking-wide text-start">4 Rm HDB - $699 to $1349</p>
                    </li>
                    <li class="flex gap-3 items-start text-gray-500 text-sm">
                                        <span >
                                            <Icon name="material-symbols:check-circle-outline-rounded" class=" text-md text-green-500" />
                                        </span>
                        <p class="tracking-wide text-start">5 Rm HDB - $899 to $1450</p>
                    </li>
                    <li class="flex gap-3 items-start text-gray-500 text-sm">
                                        <span >
                                            <Icon name="material-symbols:check-circle-outline-rounded" class=" text-md text-green-500" />
                                        </span>
                        <p class="tracking-wide text-start">Executive Apartment - $999 to $1550</p>
                    </li>
                    <li class="flex gap-3 items-start text-gray-500 text-sm">
                                        <span >
                                            <Icon name="material-symbols:check-circle-outline-rounded" class=" text-md text-green-500" />
                                        </span>
                        <p class="tracking-wide text-start">Executive Mansionette - $1249 to $1900</p>
                    </li>

                </ul>
            </div>
            <div class="text-center mb-5">
                <Button class="rounded-full px-5 py-2">
                    <div class="flex gap-1 items-center justify-center">
                        <Icon name="ph:whatsapp-logo" class=" text-2xl" />
                        <p>WhatsApp Please</p>
                    </div>
                </Button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>
