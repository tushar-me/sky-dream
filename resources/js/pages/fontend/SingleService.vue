<template>
    <GuestLayout>
        <div class="min-h-screen mt-52">
            <div class="container mx-auto">
                <div class="grid grid-cols-2 gap-10">
                    <div class="grid-cols-1">
                        <img class="max-h-72 object-cover w-full" :src="service.image" />
                    </div>
                    <div class="grid-cols-1">
                        <h1 class="font-bold text-5xl text-primary">{{ service?.name }}</h1>
                        <div class="mt-10 flex flex-col gap-3">
                            <p class="font-semibold text-2xl">Starting Price: {{ service?.price }}</p>
                            <p class="font-semibold text-2xl">Speciality: {{ service?.speciality }}</p>
                            <div class="flex flex-col gap-3">
                                <p class="font-semibold text-2xl">Short Breaf : </p>
                                <small>{{ service?.shortDescritions }}</small>
                            </div>

                            <a :href="`https://wa.me/${settings?.profile?.whatsapp}?text=Hello, I want Talk Aoout, ${service.name}`" class="bg-primary gap-3 rounded-full py-2 flex items-center justify-center">
                                <Icon name="ph:whatsapp-logo" class="text-white text-2xl" />
                                <p class="text-white">WhatsApp Please</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <div class="border">
                        <h2 class="bg-primary text-white p-3 font-semibold">Descriptions</h2>
                        <div class="px-2">
                            <small class="whitespace-pre-wrap">
                                {{ service?.details }}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </GuestLayout>
</template>

<script setup>
import useAxios from "@/composables/useAxios.js";
import {useRoute} from "vue-router";
import {inject, onMounted, ref} from "vue";
import GuestLayout from "@/components/Layouts/GuestLayout.vue";
const settings = inject('settings')
const {sendRequest, loading, error} = useAxios();
const service = ref(null)

const singleService = async () => {
    const route = useRoute();

    const response = await sendRequest({
        url: `/api/frontend/service/${route?.params?.id}`,
        method: 'GET'
    })
    console.log(response)
    service.value = response.data
}
onMounted(()=> singleService())
</script>
