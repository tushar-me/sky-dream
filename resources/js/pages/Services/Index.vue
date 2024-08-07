<template>
    <AppLayout>
        <div class="flex items-center justify-between p-5">
            <div>
                <div class="flex items-center">
                    <Icon name="ic:baseline-medical-services"
                          class="text-primary text-4xl rounded-full border-2 shadow-lg border-primary p-1"/>
                    <h2 class="font-bold text-3xl py-5 px-3 uppercase text-primary tracking-wider ">Services</h2>
                </div>
                <div>
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative mt-1">
                        <div
                            class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="table-search" v-model="search" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50
                         focus:ring-primary focus:border-primary" placeholder="Search for items">
                    </div>
                </div>
            </div>

            <RouterLink :to="{name:'AddServices'}">
                <button
                    class="flex items-center justify-center gap-2 bg-primary px-5 py-2 text-white text-lg font-medium">
                    <Icon name="streamline:interface-add-circle-button-remove-cross-add-buttons-plus-circle"
                          class="text-sm shadow-lg border-primary"/>
                    Add Record
                </button>
            </RouterLink>
        </div>

        <!--service  table -->
        <div class="relative overflow-x-auto mt-10">
            <table class="w-full text-left rtl:text-right">
                <thead class=" text-white uppercase bg-primary tracking-wider">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        icon
                    </th>
                    <th scope="col" class="px-6 py-3">
                        image
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Service Info
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Show Home
                    </th>
                    <th scope="col" class="px-6 py-3">
                        action
                    </th>
                </tr>
                </thead>
                <tbody v-if="!loading">
                <TransitionGroup name="fade">
                    <tr class="text-gray-600 border-b font-roboto " v-for="item in services?.services?.data">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <Icon name="material-symbols:temple-buddhist-outline-rounded"
                                  class="text-primary text-3xl"/>
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-48 h-40" :src="item?.image" alt="">
                        </th>
                        <td class="px-6 py-4">
                            <div>
                                <p class="text-lg font-semibold">{{ item?.name }}</p>
                                <span class="text-sm text-primary">{{ item?.speciality }}</span>
                            </div>
                        </td>
                        <td class="text-center">
                            <label class="inline-flex items-center mb-5 cursor-pointer">
                                <input type="checkbox" :value="item.id" @change="handelToggle" class="sr-only peer" :checked="item.show_home">
                                <div class="relative w-11 h-6 bg-gray-200 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                            </label>
                        </td>

                        <td class="px-6 py-4">
                            <div class="flex gap-3">
                                <RouterLink :to="{name:'EditServices', params:{id:item.id}}">
                                    <Icon name="jam:write-f"
                                          class="text-yellow-700 text-3xl border border-yellow-700 bg-yellow-400/15 rounded p-1"/>
                                </RouterLink>
                                <RouterLink to="#" @click="handelDelete(item.id)">
                                    <Icon name="material-symbols:delete-outline-rounded"
                                          class="text-red-700 text-3xl border border-red-700 bg-red-500/15 rounded p-1"/>
                                </RouterLink>
                            </div>
                        </td>

                    </tr>
                </TransitionGroup>
                </tbody>
            </table>
            <div v-if="loading" class="w-full h-52 flex items-center justify-center">
                <div>
                    <LoadingButton :isLoading="loading">Loading</LoadingButton>
                </div>
            </div>

        </div>

    </AppLayout>
</template>

<script setup>
import AppLayout from "@/components/Layouts/AppLayout.vue";
import {RouterLink} from "vue-router";
import useAxios from "@/composables/useAxios.js";
import {onMounted, ref, watch} from "vue";
import {useToast} from "vue-toastification";
import LoadingButton from "@/components/LoadingButton.vue";

const toast = useToast();
const {sendRequest, loading, error} = useAxios();
const services = ref([])
const getAllServices = async (search) => {
    const response = await sendRequest({
        url: "/api/V1/service",
        params:{
            search:search
        },
        method: 'GET'
    })
    services.value = response.data
}

const handelDelete = async (id) => {
    if (confirm('Are you sure? want To Delete...')) {
        const response = await sendRequest({
            url: `/api/V1/service/${id}`,
            method: 'DELETE'
        })

        toast.success(response?.data?.message)

        await getAllServices();
    }
}

const handelToggle = async (event) => {
    const response = await sendRequest({
        url: `/api/V1/service/${event.target.value}?type=toggle`,
        method: 'GET'
    })

    toast.success("Update Your Queries...")
    await getAllServices();
}

onMounted(async () => await getAllServices())
const search = ref(null)
watch(search, function (item){
    setTimeout(()=> getAllServices(item), 1000)
})

</script>

<style>
.fade-enter-active {
    transition: all 0.3s ease-out;
}

.fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
