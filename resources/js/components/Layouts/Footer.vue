<template>
    <div class="w-full  bottom-0 flex flex-wrap gap-10 p-10 bg-black text-gray-500 text-base font-semibold">
        <div class="w-full lg:w-1/4">
            <img src="@/assets/images/logo.png" class="w-28 h-28" alt="Logo">
            <p class="mt-10">{{ settings?.profile?.footer_cntent}}</p>
        </div>
        <div class="w-full lg:w-1/4">
            <p class="font-semibold text-xl text-white ms-3">Quick Links</p>
            <ul class="mt-5">
                <li class="flex gap-1 py-2 justify-start items-center hover:text-amber-500 cursor-pointer"
                    v-for="item in menus">
                    <RouterLink :to="item.url" class="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                  d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/>
                        </svg>
                        <span>{{ item.name }}</span>
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="w-full lg:w-1/4">
            <p class="font-semibold text-xl text-white">Contact Us</p>

            <div class="my-5">
                <p class="font-semibold text-xl text-white ">Address Location</p>
                <div class="flex gap-1 mt-3  hover:text-fourthColor  items-center text-base font-normal cursor-pointer">
                    <svg class="text-white bg-primary " xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                         viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"/>
                    </svg>
                    <p>{{ settings?.profile?.address }}</p>
                </div>
            </div>
            <div class="my-5">
                <p class="font-semibold text-xl text-white ">Phone Number</p>
                <div class="flex gap-1 mt-3  hover:text-fourthColor items-center  text-base font-normal cursor-pointer">
                    <svg class="text-white bg-primary p-1" xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                         viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M19.95 21q-3.225 0-6.287-1.438t-5.425-3.8q-2.363-2.362-3.8-5.425T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.013.638T9.4 8.45L6.975 10.9q1.05 1.8 2.638 3.375T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.075.575.338T21 15.9v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9ZM19 18.95v-2.2l-2.35-.475l-1.675 1.675q.975.425 1.987.675T19 18.95Zm-4-1.025ZM6.025 9Z"/>
                    </svg>
                    <p>{{ settings?.profile?.phone }}</p>
                </div>
            </div>
            <div class="my-5">
                <p class="font-semibold text-xl text-white ">Email Address</p>
                <div class="flex gap-1 mt-3 hover:text-fourthColor  items-center  text-base font-normal cursor-pointer">
                    <svg class="text-white bg-primary p-1" xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                         viewBox="0 0 1024 1024">
                        <path fill="currentColor"
                              d="M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"/>
                        <path fill="currentColor"
                              d="M904 224L656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0l210.56 240.704a128 128 0 0 0 192.704 0L818.944 224z"/>
                    </svg>
                    <p>{{ settings?.profile?.email }}</p>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-1/4">
            <div>
                <input type="email" name="email"
                       v-model="createContact.email"
                       class="mt-1 px-3 py-4 bg-gray-700  placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full sm:text-sm focus:ring-1"
                       placeholder="Email Address"/>
                <small class="text-red-500" v-if="error?.response?.data?.errors?.email">{{ error?.response?.data?.errors?.email[0] }}</small>
                <Button
                    @click="handelContact"
                    class="mt-2 bg-sky-gradient text-white py-3 w-full flex justify-center items-center font-bold text-base uppercase">
                    subscribe Now
                </Button>
            </div>
            <div class="mt-10">
                <SocalLinks/>
            </div>
        </div>
    </div>
    <div class="bg-gray-800 text-white flex flex-col lg:flex-row justify-between px-10 py-4">
        <div class="font-medium text-xl flex justify-center items-center">
            <p class="text-center lg:text-start mb-3 lg:mb-0"> &copy; Copyright 2024 <a href="/"
                                                                                        class="text-fourthColor">
                {{ settings?.profile?.name }}
            </a>. All Rights Reserved.</p>
        </div>
        <!--        <div class="font-medium text-xl flex justify-center items-center gap-5">-->
        <!--            <p class="text-sm">Terms & Condition </p>-->
        <!--            <hr class="h-5 border ">-->
        <!--            <p class="text-sm">Privacy & Policy</p>-->
        <!--        </div>-->
    </div>
</template>
<script setup>
import {inject, ref} from "vue";
import useAxios from "@/composables/useAxios.js";
import {useToast} from "vue-toastification";
import SocalLinks from "@/components/SocalLinks.vue";

const settings = inject('settings')
const menus = ref([
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'Services',
        url: '/all-services'
    },
    {
        name: 'Package',
        url: '/all-package'
    },
    {
        name: 'Portfolio',
        url: '/portfolio'
    },
    {
        name: 'Contact',
        url: '/contact'
    }
])
const {sendRequest, loading, error} = useAxios();
const toast = useToast()

const createContact = ref({
    email:null,
})

const handelContact = async () => {
    const response = await sendRequest({
        url: `/api/frontend/contact`,
        method: 'POST',
        data: createContact.value
    })

    toast.success("Your Subscriber Now...")
    createContact.value = {};
}
</script>
