<template>
    <AppLayout>
        <div class="flex items-center justify-between p-5">
            <div>
                <div class="flex items-center">
                    <Icon name="ic:baseline-medical-services"
                          class="text-primary text-4xl rounded-full border-2 shadow-lg border-primary p-1"/>
                    <h2 class="font-bold text-3xl py-5 px-3 uppercase text-primary tracking-wider ">Contacts</h2>
                </div>
            </div>
        </div>

        <!--Gallary  table -->
        <div class="relative">
            <div class="grid grid-cols-2 gap-5">
                <div class="col-span-1" v-for="item in gallerys?.gallery?.data">
                    <div class="bg-white p-4 shadow-lg">
                        <div class="flex justify-between items-baseline">
                            <div>
                                <p class="font-semibold text-xl">
                                    Name: <span class="text-gray-800">{{ item?.name }}</span>
                                </p>
                                <p class="font-semibold text-sm mt-3 ">
                                    Email: <span class="text-gray-800">{{ item?.name }}</span>
                                </p>
                                <p class="font-semibold text-sm">
                                    Phone: <span class="text-gray-800">{{ item?.name }}</span>
                                </p>
                                <div class="flex flex-col">
                                    <p class="font-semibold text-sm">Message:</p>
                                    <span class="text-gray-800 text-xs">{{ item?.description  }}</span>
                                </div>
                            </div>
                            <RouterLink class="mt-3" to="#" @click="handelDelete(item.id)">
                                <Icon name="material-symbols:delete-outline-rounded"
                                      class="text-red-700 text-3xl border border-red-700 bg-red-500/15 rounded p-1"/>
                            </RouterLink>
                        </div>
                    </div>
                </div>

            </div>


            <div v-if="loading" class="flex items-center justify-center">
                <LoadingButton :isLoading="loading">Loading</LoadingButton>
            </div>

        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from "@/components/Layouts/AppLayout.vue";
import {RouterLink} from "vue-router";
import useAxios from "@/composables/useAxios.js";
import {onMounted, ref} from "vue";
import {useToast} from "vue-toastification";
import LoadingButton from "@/components/LoadingButton.vue";

const toast = useToast();
const {sendRequest, loading, error} = useAxios();
const gallerys = ref([])
const getAllgallerys = async () => {
    const response = await sendRequest({
        url: "/api/V1/gallery",
        method: 'GET'
    })
    gallerys.value = response.data
}

const handelDelete = async (id) => {
    if (confirm('Are you sure? want To Delete...')) {
        const response = await sendRequest({
            url: `/api/V1/gallery/${id}`,
            method: 'DELETE'
        })

        toast.success(response?.data?.message)

        await getAllgallerys();
    }
}

onMounted(async () => await getAllgallerys())


</script>
