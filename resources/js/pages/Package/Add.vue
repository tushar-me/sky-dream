<script setup>
import {onMounted, ref} from "vue";
import AppLayout from "@/components/Layouts/AppLayout.vue";
import useAxios from "@/composables/useAxios.js";
import Icon from "@/components/Icon.vue";
import LoadingButton from "@/components/LoadingButton.vue";
import {useToast} from "vue-toastification";
import {useRoute} from "vue-router";

const route = useRoute();
const {sendRequest, loading, error} = useAxios();
const toast = useToast();
const createForm = ref({
    name: null,
    price: null,
    color: null,
    image: null,
    shortDescritions: null,
    details: null,
})

const handelCreate = async () => {
    const data = await sendRequest({
        url: "/api/V1/package",
        method: "POST",
        data: {...createForm.value, id: route?.params?.id ?? null}
    })
    resetOrUpdate()
    toast.success(data?.data?.message)
}


const filepath = ref('')
const onFileChange = (event) => {
    const image = event.target.files[0]
    createForm.value.image = image
    filepath.value = URL.createObjectURL(image)
}


onMounted(async () => {
    const data = await sendRequest({
        url: `/api/V1/package/${route?.params?.id}`,
        method: "GET",
    })
    resetOrUpdate(data.data)
})

const resetOrUpdate = (data) => {
    if (data) {
        createForm.value.name = data?.name
        createForm.value.price = data.price
        createForm.value.image = null
        createForm.value.shortDescritions = data.shortDescritions
        createForm.value.details = data.details
        createForm.value.color = data.color
        filepath.value = data.image
    } else {
        createForm.value.name = null
        createForm.value.price = null
        createForm.value.image = null
        createForm.value.shortDescritions = null
        createForm.value.details = null
        createForm.value.color = null
        filepath.value = null
    }
}

</script>
<template>
    <AppLayout>
        <form @submit.prevent="handelCreate" class="bg-white shadow-md p-6 max-w-5xl mx-auto">
            <h3 class="mb-10 text-primary  text-xl font-medium">
                {{ $route?.params?.id ? 'Edit Package' : 'Create a New Package' }}</h3>
            <div>
                <div class="flex items-center flex-wrap">
                    <div class="w-1/2 pr-5 pb-4">
                        <div class="w-full">
                            <label for="name" class="text-sm block mb-2">Title <span
                                class="text-red-500">*</span></label>
                            <input type="text" :disabled="loading" v-model="createForm.name"
                                   class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50
                             w-full  focus:ring-primary focus:border-primary">
                            <span class="text-red-500" v-if="error?.response?.data?.errors?.name">{{
                                    error?.response?.data?.errors?.name[0]
                                }}</span>
                        </div>
                    </div>


                    <div class="w-1/2 pr-5 pb-4">
                        <div class="w-full">
                            <label for="name" class="text-sm block mb-2">Price <span
                                class="text-red-500">*</span></label>
                            <input type="text" :disabled="loading" v-model="createForm.price" class="border disabled:bg-teal-50 border-primary rounded-md font-normal text-sm
                             w-full  focus:ring-primary focus:border-primary">
                            <span class="text-red-500" v-if="error?.response?.data?.errors?.price">{{
                                    error?.response?.data?.errors?.price[0]
                                }}</span>

                        </div>
                    </div>
                </div>

                <div class="flex items-start gap-5 my-6">
                    <!--                    <div class="w-1/3 pr-2">
                                            <div class="w-full">
                                                <label for="PackageImage" class="text-sm block mb-2">Package Image</label>
                                                <label for="PackageImage"
                                                       class="border border-primary border-dashed p-4 rounded-2xl flex items-center justify-center w-full h-52 cursor-pointer">
                                                    <img class="w-full h-full" v-if="filepath" :src="filepath" alt="">
                                                    <span v-else class="flex flex-col items-center justify-center gap-2">
                                                        <Icon name="tabler:cloud-upload" class="text-primary text-5xl opacity-85"/>
                                                        <small class="text-xs text-center text-red-600">Select an image to upload Accepted formats: .jpg, .png | Max size: 1024kb</small>
                                                        <span class="text-primary font-semibold opacity-85 pl-6">Upload Package Icon</span>
                                                    </span>

                                                </label>
                                                <input class="hidden" :disabled="loading" id="PackageImage" type="file"
                                                       @change="onFileChange">
                                                <span class="text-red-500" v-if="error?.response?.data?.errors?.image">{{
                                                        error?.response?.data?.errors?.image[0]
                                                    }}</span>

                                            </div>
                                        </div>-->
                    <div class="w-full flex flex-col gap-3">
<!--                        <div>
                            <label class="text-sm block mb-2">Color</label>
                            <input type="color" :disabled="loading" v-model="createForm.color" class="border disabled:bg-teal-50 border-primary rounded-md font-normal text-sm
                             w-full  focus:ring-primary focus:border-primary">
                            <span class="text-red-500" v-if="error?.response?.data?.errors?.color">{{
                                    error?.response?.data?.errors?.color[0]
                                }}</span>
                        </div>-->


                        <div>
                            <label class="text-sm block mb-2">Short Description</label>
                            <textarea :disabled="loading" rows="5" v-model="createForm.shortDescritions"
                                      class="border border-primary rounded-md font-normal text-sm w-full disabled:bg-teal-50 focus:ring-primary focus:border-primary"></textarea>
                            <span class="text-red-500" v-if="error?.response?.data?.errors?.shortDescritions">{{
                                    error?.response?.data?.errors?.shortDescritions[0]
                                }}</span>

                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <h2 class="mb-2">Discription</h2>
                    <textarea rows="8" :disabled="loading" v-model="createForm.details"
                              class="border border-primary rounded-md disabled:bg-teal-50 font-normal text-sm w-full focus:ring-primary focus:border-primary"></textarea>
                </div>
            </div>
            <div class="mt-5">
                <LoadingButton :isLoading="loading">
                    {{ $route.params?.id ? 'Update Package' : 'Save Package' }}
                </LoadingButton>
            </div>
        </form>
    </AppLayout>
</template>

<style scoped>

</style>
