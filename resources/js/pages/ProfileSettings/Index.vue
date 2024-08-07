<template>
    <AppLayout>
        <div class="flex items-center justify-between p-5">
        </div>

        <!--Gallary  table -->
        <div class="relative container mx-auto">
            <div class="grid grid-cols-3 gap-10">
                <div class="col-span-1">
                    <div>
                        <p class="text-lg font-bold">Personal Information</p>
                        <p class="text-sm text-gray-700">Setup your personal admin profile</p>
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="flex items-center gap-8">
                        <div class="w-24 h-24 rounded-lg overflow-hidden">
                            <img class="w-full h-full" :src="previewImage"
                                 alt="">
                        </div>
                        <div class="flex flex-col gap-2">
                            <label for="profileupdate"
                                   class="font-semibold text-gray-800 rounded-lg w-max bg-gray-200 px-4 py-2">
                                Change Avatar
                                <input class="hidden" @change="onFileChange" type="file" id="profileupdate">
                            </label>
                            <span class="text-sm">JPG, PNG, SVG. 1MB max</span>
                        </div>
                    </div>
                    <form @submit.prevent="updateProfile" class="flex flex-col gap-5 mt-16">
                            <div class="w-full">
                                <label for="name" class="text-sm block mb-2 font-semibold">Name<span
                                    class="text-red-500">*</span></label>
                                <input type="text" :disabled="loading" v-model="createForm.name" class="border disabled:bg-teal-50 border-primary rounded-md font-normal text-sm
                         w-full  focus:ring-primary focus:border-primary">
                                <span class="text-red-500" v-if="error?.response?.data?.errors?.name">{{
                                        error?.response?.data?.errors?.name[0]
                                    }}</span>
                            </div>
                        <div class="w-full">
                            <label for="name" class="text-sm block mb-2 font-semibold">Email<span
                                class="text-red-500">*</span></label>
                            <input type="text" :disabled="loading" v-model="createForm.email" class="border disabled:bg-teal-50 border-primary rounded-md font-normal text-sm
                         w-full  focus:ring-primary focus:border-primary">
                            <span class="text-red-500" v-if="error?.response?.data?.errors?.email">{{
                                    error?.response?.data?.errors?.email[0]
                                }}</span>
                        </div>
                        <div>
                            <LoadingButton :isLoading="loading">Update Profile</LoadingButton>
                        </div>
                    </form>
                </div>
            </div>

            <div class="grid grid-cols-3 gap-10 mt-16">
                <div class="col-span-1">
                    <div>
                        <p class="text-lg font-bold">Change Your Password</p>
                        <p class="text-sm text-gray-700">update your new password.</p>
                    </div>
                </div>
                <div class="col-span-2">
                    <form @submit.prevent="handelUpdatePassword" class="flex flex-col gap-5">
                        <div class="w-full">
                            <label for="name" class="text-sm block mb-2 font-semibold">Current Passord<span
                                class="text-red-500">*</span></label>
                            <input type="password" :disabled="loading" v-model="updatePassword.current_password" class="border disabled:bg-teal-50 border-primary rounded-md font-normal text-sm
                         w-full  focus:ring-primary focus:border-primary">
                            <span class="text-red-500" v-if="error?.response?.data?.errors?.current_password">{{
                                    error?.response?.data?.errors?.current_password[0]
                                }}</span>
                        </div>
                        <div class="w-full">
                            <label for="name" class="text-sm block mb-2 font-semibold">New Password<span
                                class="text-red-500">*</span></label>
                            <input type="password" :disabled="loading" v-model="updatePassword.new_passwrod" class="border disabled:bg-teal-50 border-primary rounded-md font-normal text-sm
                         w-full  focus:ring-primary focus:border-primary">
                            <span class="text-red-500" v-if="error?.response?.data?.errors?.new_passwrod">{{
                                    error?.response?.data?.errors?.new_passwrod[0]
                                }}</span>
                        </div>
                        <div class="w-full">
                            <label for="name" class="text-sm block mb-2 font-semibold">Confirm Password<span
                                class="text-red-500">*</span></label>
                            <input type="password" :disabled="loading" v-model="updatePassword.confirm_password" class="border disabled:bg-teal-50 border-primary rounded-md font-normal text-sm
                         w-full  focus:ring-primary focus:border-primary">
                            <span class="text-red-500" v-if="error?.response?.data?.errors?.confirm_password">{{
                                    error?.response?.data?.errors?.confirm_password[0]
                                }}</span>
                        </div>
                        <div>
                            <LoadingButton :isLoading="loading">Update Password</LoadingButton>
                        </div>
                    </form>
                </div>
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
import {useAuthStore} from "@/stores/useAuthStore.js";

const toast = useToast();
const {sendRequest, loading, error} = useAxios();
const authStore = useAuthStore()


const createForm = ref({
    name: authStore.user.name,
    email: authStore.user.email,
    image:{}
})



const updateProfile = async () => {
    const response = await sendRequest({
        url: '/api/V1/profile-update',
        method: 'POST',
        params: {
            _method: 'PUT'
        },
        data: createForm.value
    })
    toast.success(response?.data?.message)
    await authStore.logout();
}
const updatePassword = ref({
    current_password:null,
    new_passwrod:null,
    confirm_password:null,
})


const handelUpdatePassword = async () => {
    const response = await sendRequest({
        url: '/api/V1/password-update',
        method: 'POST',
        data: updatePassword.value
    })
    toast.success(response?.data?.message)
    await authStore.logout();
}


const profileImage = ref({})
const previewImage = ref(authStore.user?.image)

const onFileChange = (event) => {
    const image = event.target.files[0]
    createForm.value.image = image
    previewImage.value = URL.createObjectURL(image)
}


</script>
