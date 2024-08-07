<template>
    <AppLayout>
        <div class="flex items-center justify-between p-5">
            <div>
                <div class="flex items-center">
                    <Icon name="ic:baseline-medical-services"
                          class="text-primary text-4xl rounded-full border-2 shadow-lg border-primary p-1"/>
                    <h2 class="font-bold text-3xl py-5 px-3 uppercase text-primary tracking-wider ">Gallary</h2>
                </div>
                <!--                 <div>
                                     <label for="table-search" class="sr-only">Search</label>
                                     <div class="relative mt-1">
                                         <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                             <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                             </svg>
                                         </div>
                                         <input type="text" id="table-search" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50
                                          focus:ring-primary focus:border-primary" placeholder="Search for items">
                                     </div>
                                 </div>-->
            </div>

            <RouterLink :to="{name:'AddGallery'}">
                <button
                    class="flex items-center justify-center gap-2 bg-primary px-5 py-2 text-white text-lg font-medium">
                    <Icon name="streamline:interface-add-circle-button-remove-cross-add-buttons-plus-circle"
                          class="text-sm shadow-lg border-primary"/>
                    Add Record
                </button>
            </RouterLink>
        </div>

        <!--Gallary  table -->
        <div class="relative">
            <div class="grid grid-cols-3 gap-5">
                <div class="col-span-1" v-for="item in gallerys?.gallery?.data">
                    <div class="bg-white p-4 shadow-lg">
                        <img class="w-full h-full" :src="item?.image"
                             alt="">
                        <div class="flex justify-between items-baseline">
                            <div>

                                <p class="font-semibold text-xl mt-3">{{ item?.name }}</p>
                                <small>{{ item?.description }}</small>
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
