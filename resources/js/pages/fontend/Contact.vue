<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import {ref} from "vue";
import useAxios from "@/composables/useAxios.js";
import {useToast} from "vue-toastification";
import LoadingButton from "@/components/LoadingButton.vue";
const {sendRequest, error, loading} = useAxios()
const toast = useToast();
const createContact = ref({
    firstname:null,
    lastname:null,
    email:null,
    phone:null,
    message:null,
})

const handelContact = async () => {
    const response = await sendRequest({
        url: `/api/frontend/contact`,
        method: 'POST',
        data: createContact.value
    })
    toast.success(response?.data?.message)
    createContact.value = {};
}
</script>
<template>
    <GuestLayout>
        <div class="w-full lg:w-1/2 my-10 mx-auto mt-20 lg:mt-52">
            <form @submit.prevent="handelContact" class="p-5 lg:px-16">
                <div class="flex justify-start items-center gap-3">
                    <p class="uppercase text-amber-600 font-semibold ">Get In Touch</p>
                    <hr class="w-14 h-1 bg-amber-600 ">
                </div>
                <h1 class="text-3xl gradient-text py-2 font-medium">Have An Upcoming Projects? Let’s Talk to Now!</h1>
                <div class="w-full flex gap-2 my-5">
                    <div class="w-full lg:w-1/2 ">
                        <input type="text" v-model="createContact.firstname" :disabled="loading"  placeholder="First Name" class=" w-full bg-gray-100 text-gray-700 border disabled:bg-gray-200 border-gray-300 placeholder:text-sm rounded">
                        <span class="text-red-500" v-if="error?.response?.data?.errors?.firstname">{{
                                error?.response?.data?.errors?.firstname[0]
                            }}</span>
                    </div>
                    <div class="w-1/2">
                        <input type="text" v-model="createContact.lastname" :disabled="loading"  placeholder="Last Name" class=" w-full bg-gray-100 text-gray-700 border disabled:bg-gray-200 border-gray-300 placeholder:text-sm rounded">
                        <span class="text-red-500" v-if="error?.response?.data?.errors?.lastname">{{
                                error?.response?.data?.errors?.lastname[0]
                            }}</span>
                    </div>
                </div>
                <div class="w-full flex gap-2 my-5">
                    <div class="w-1/2 ">
                        <input type="number" v-model="createContact.phone" :disabled="loading"   placeholder="Phone" class=" w-full bg-gray-100 text-gray-700 disabled:bg-gray-200 border border-gray-300 placeholder:text-sm rounded">
                        <span class="text-red-500" v-if="error?.response?.data?.errors?.phone">{{
                                error?.response?.data?.errors?.phone[0]
                            }}</span>

                    </div>
                    <div class="w-1/2">
                        <input type="email" v-model="createContact.email" :disabled="loading"  placeholder="E-mail" class=" w-full bg-gray-100 text-gray-700 border disabled:bg-gray-200  border-gray-300 placeholder:text-sm rounded">
                        <span class="text-red-500" v-if="error?.response?.data?.errors?.email">{{
                                error?.response?.data?.errors?.email[0]
                            }}</span>
                    </div>
                </div>
                <div class=" ">
                    <textarea v-model="createContact.message" :disabled="loading" id="" placeholder="Message" rows="5" class="w-full bg-gray-100 text-gray-700 border disabled:bg-gray-200 border-gray-300" ></textarea>
                    <span class="text-red-500" v-if="error?.response?.data?.errors?.message">{{
                            error?.response?.data?.errors?.message[0]
                        }}</span>
                </div>
                <LoadingButton :isLoading="loading" class="w-full text-center">Submit Your Queries</LoadingButton>
                <!--                            <Button type="submit" class="w-full py-2 my-3 bg-primary text-white px-3 py-2  hover:bg-teal-600 transition-all disabled:bg-teal-400 ease-in-out duration-500">Send</Button>-->
            </form>

        </div>
        <div class="my-10 lg:mx-20 mx-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6708.299179926398!2d103.85584667561598!3d1.3080902792371925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c83e64fe33%3A0x229883f341b544f7!2s101%20Kitchener%20Rd%2C%20Singapore%20208511!5e0!3m2!1sen!2sin!4v1688026309089!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </GuestLayout>
</template>
