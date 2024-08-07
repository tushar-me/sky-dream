<template>
    <AppLayout>
        <div class="flex items-center justify-between p-5">
            <div>
                <div class="flex items-center">
                    <Icon name="ic:baseline-medical-services"
                          class="text-primary text-4xl rounded-full border-2 shadow-lg border-primary p-1"/>
                    <h2 class="font-bold text-3xl py-5 px-3 uppercase text-primary tracking-wider ">Settings</h2>
                </div>
            </div>
        </div>

        <!--Gallary  table -->
        <div class="relative">
            <div class="grid grid-cols-4 gap-5 min-h-[60vh]">
                <div class="col-span-1 h-full bg-white">
                    <ul>
                        <li class="w-full border-b hover:bg-teal-100 group transition-all ease-linear duration-300"
                            :class="{'bg-teal-100' : section === 'hero'}">
                            <a href="javascript:void(0)" @click="section = 'hero'"
                                        :class="section === 'hero' ? 'text-teal-800 font-bold' : ' font-semibold'"
                                        class="py-4 flex items-center justify-center w-full h-full group-hover:text-teal-800 group-hover:font-bold">Hero Section Setup</a>
                        </li>

                        <li class="w-full border-b hover:bg-teal-100 group transition-all ease-linear duration-300"
                            :class="{'bg-teal-100' : section === 'profile'}">
                            <a href="javascript:void(0)" @click="section = 'profile'"
                                        :class="section === 'profile' ? 'text-teal-800 font-bold' : ' font-semibold'"
                                        class="py-4 flex items-center justify-center w-full h-full group-hover:text-teal-800 group-hover:font-bold">Setup Profile</a>
                        </li>

                        <li class="w-full border-b hover:bg-teal-100 group transition-all ease-linear duration-300"
                            :class="{'bg-teal-100' : section === 'social'}">
                            <a href="javascript:void(0)" @click="section = 'social'"
                                        :class="section === 'social' ? 'text-teal-800 font-bold' : ' font-semibold'"
                                        class="py-4 flex items-center justify-center w-full h-full group-hover:text-teal-800 group-hover:font-bold">Social Setup</a>
                        </li>

                        <li class="w-full border-b hover:bg-teal-100 group transition-all ease-linear duration-300"
                            :class="{'bg-teal-100' : section === 'Counter'}">
                            <a href="javascript:void(0)" @click="section = 'Counter'"
                               :class="section === 'Counter' ? 'text-teal-800 font-bold' : ' font-semibold'"
                               class="py-4 flex items-center justify-center w-full h-full group-hover:text-teal-800 group-hover:font-bold">Counter Setup</a>
                        </li>
                    </ul>
                </div>


                <div class="col-span-3 h-full bg-white overflow-hidden p-5">
                    <TransitionGroup name="fade" mode="in-out">
                        <div v-if="section === 'hero'">
                            <p class="text-3xl font-semibold">Hero Section</p>
                            <form @submit.prevent="updateSetting" class="mt-3 flex flex-col gap-3">
                                <div class="w-full">
                                    <label for="name" class="text-sm block mb-2">Prefix <span
                                        class="text-red-500">*</span></label>
                                    <input type="text" :disabled="loading" v-model="settings.hero.prefix"
                                           class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.prefix">{{
                                            error?.response?.data?.errors?.prefix[0]
                                        }}</span>
                                </div>



                                <div class="w-full">
                                    <label for="name" class="text-sm block mb-2">Title <span
                                        class="text-red-500">*</span></label>
                                    <input type="text" :disabled="loading" v-model="settings.hero.title"
                                           class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.title">{{
                                            error?.response?.data?.errors?.title[0]
                                        }}</span>
                                </div>

                                <div class="w-full">
                                    <label for="name" class="text-sm block mb-2">Slogan <span
                                        class="text-red-500">*</span></label>
                                    <input type="text" :disabled="loading" v-model="settings.hero.slogan"
                                           class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.slogan">{{
                                            error?.response?.data?.errors?.slogan[0]
                                        }}</span>
                                </div>

                                <div class="flex items-center justify-end">
                                    <LoadingButton :isLoading="loading">Update Settings</LoadingButton>
                                </div>

                            </form>
                        </div>

                        <div v-if="section === 'profile'">
                            <p class="text-3xl font-semibold">Profile Setup</p>
                            <form @submit.prevent="updateSetting" class="mt-3 flex flex-col gap-3">
                                <div class="w-full">
                                    <label for="name" class="text-sm block mb-2">Site Name<span
                                        class="text-red-500">*</span></label>
                                    <input type="text" :disabled="loading" v-model="settings.profile.name"
                                           class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.name">{{
                                            error?.response?.data?.errors?.name[0]
                                        }}</span>
                                </div>



                                <div class="w-full">
                                    <label for="name" class="text-sm block mb-2">Email <span
                                        class="text-red-500">*</span></label>
                                    <input type="text" :disabled="loading" v-model="settings.profile.email"
                                           class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.email">{{
                                            error?.response?.data?.errors?.email[0]
                                        }}</span>
                                </div>

                                <div class="w-full">
                                    <label for="name" class="text-sm block mb-2">Phone <span
                                        class="text-red-500">*</span></label>
                                    <input type="text" :disabled="loading" v-model="settings.profile.phone"
                                           class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.phone">{{
                                            error?.response?.data?.errors?.phone[0]
                                        }}</span>
                                </div>
                                <div class="w-full">
                                    <label for="name" class="text-sm block mb-2">Whatsapp <span
                                        class="text-red-500">*</span></label>
                                    <input type="text" :disabled="loading" v-model="settings.profile.whatsapp"
                                           class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.whatsapp">{{
                                            error?.response?.data?.errors?.whatsapp[0]
                                        }}</span>
                                </div>
                                <div class="w-full">
                                    <label for="name" class="text-sm block mb-2">Address <span
                                        class="text-red-500">*</span></label>
                                    <input type="text" :disabled="loading" v-model="settings.profile.address"
                                           class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.address">{{
                                            error?.response?.data?.errors?.address[0]
                                        }}</span>
                                </div>

                                <div class="w-full">
                                    <label for="name" class="text-sm block mb-2">Footer Content <span
                                        class="text-red-500">*</span></label>
                                    <textarea type="text" :disabled="loading" v-model="settings.profile.footer_cntent"
                                              rows="5"
                                              class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary"></textarea>
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.footer_cntent">{{
                                            error?.response?.data?.errors?.footer_cntent[0]
                                        }}</span>
                                </div>

                                <div class="flex items-center justify-end">
                                    <LoadingButton :isLoading="loading">Update Settings</LoadingButton>
                                </div>

                            </form>
                        </div>

                        <div v-if="section === 'social'">
                            <p class="text-3xl font-semibold">Social Setup</p>
                            <form @submit.prevent="updateSetting" class="mt-3 flex flex-col gap-3">
                                <div class="w-full">
                                    <label for="name" class="text-sm block mb-2">Facebook<span
                                        class="text-red-500">*</span></label>
                                    <input type="text" :disabled="loading" v-model="settings.social.facebook"
                                           class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.facebook">{{
                                            error?.response?.data?.errors?.facebook[0]
                                        }}</span>
                                </div>


                                <div class="w-full">
                                    <label for="name" class="text-sm block mb-2">Instagram <span
                                        class="text-red-500">*</span></label>
                                    <input type="text" :disabled="loading" v-model="settings.social.instagram"
                                           class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.instagram">{{
                                            error?.response?.data?.errors?.instagram[0]
                                        }}</span>
                                </div>

                                <div class="w-full">
                                    <label for="name" class="text-sm block mb-2">Twitter <span
                                        class="text-red-500">*</span></label>
                                    <input type="text" :disabled="loading" v-model="settings.social.twitter"
                                           class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.twitter">{{
                                            error?.response?.data?.errors?.twitter[0]
                                        }}</span>
                                </div>

                                <div class="w-full">
                                    <label for="name" class="text-sm block mb-2">Linkedin <span
                                        class="text-red-500">*</span></label>
                                    <input type="text" :disabled="loading" v-model="settings.social.linkedin"
                                           class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.linkedin">{{
                                            error?.response?.data?.errors?.linkedin[0]
                                        }}</span>
                                </div>
                                <div class="w-full">
                                    <label for="name" class="text-sm block mb-2">Youtube <span
                                        class="text-red-500">*</span></label>
                                    <input type="text" :disabled="loading" v-model="settings.social.youtube"
                                           class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.youtube">{{
                                            error?.response?.data?.errors?.youtube[0]
                                        }}</span>
                                </div>

                                <div class="flex items-center justify-end">
                                    <LoadingButton :isLoading="loading">Update Settings</LoadingButton>
                                </div>

                            </form>
                        </div>

                        <div v-if="section === 'Counter'">
                            <p class="text-3xl font-semibold">Counter Setup</p>
                            <form @submit.prevent="updateSetting" class="mt-8 flex flex-col gap-3">
                                <div class="grid gap-5 grid-cols-4">
                                    <div class="col-span-1">
                                        <label for="name" class="text-sm block mb-2">Project Complate<span
                                            class="text-red-500">*</span></label>
                                        <input type="text" :disabled="loading" v-model="settings.counter.project_complate"
                                               class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                        <span class="text-red-500" v-if="error?.response?.data?.errors?.project_complate">{{
                                                error?.response?.data?.errors?.project_complate[0]
                                            }}</span>
                                    </div>
                                    <div class="col-span-1">
                                        <label for="name" class="text-sm block mb-2">Customer Satisfied <span
                                            class="text-red-500">*</span></label>
                                        <input type="text" :disabled="loading" v-model="settings.counter.customer_satisfied"
                                               class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                        <span class="text-red-500" v-if="error?.response?.data?.errors?.customer_satisfied">{{
                                                error?.response?.data?.errors?.customer_satisfied[0]
                                            }}</span>
                                    </div>
                                    <div class="col-span-1">
                                        <label for="name" class="text-sm block mb-2">Expart Team <span
                                            class="text-red-500">*</span></label>
                                        <input type="text" :disabled="loading" v-model="settings.counter.expart_team"
                                               class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                        <span class="text-red-500" v-if="error?.response?.data?.errors?.expart_team">{{
                                                error?.response?.data?.errors?.expart_team[0]
                                            }}</span>
                                    </div>
                                    <div class="col-span-1">
                                        <label for="name" class="text-sm block mb-2">Award<span
                                            class="text-red-500">*</span></label>
                                        <input type="text" :disabled="loading" v-model="settings.counter.award"
                                               class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                        <span class="text-red-500" v-if="error?.response?.data?.errors?.award">{{
                                                error?.response?.data?.errors?.award[0]
                                            }}</span>
                                    </div>
                                </div>
                                <hr>
                                <div class="grid gap-5 grid-cols-4">
                                    <div class="col-span-1">
                                        <label for="name" class="text-sm block mb-2">Complate House<span
                                            class="text-red-500">*</span></label>
                                        <input type="text" :disabled="loading" v-model="settings.counter.house"
                                               class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                        <span class="text-red-500" v-if="error?.response?.data?.errors?.house">{{
                                                error?.response?.data?.errors?.house[0]
                                            }}</span>
                                    </div>
                                    <div class="col-span-1">
                                        <label for="name" class="text-sm block mb-2">Condo House<span
                                            class="text-red-500">*</span></label>
                                        <input type="text" :disabled="loading" v-model="settings.counter.condo"
                                               class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                        <span class="text-red-500" v-if="error?.response?.data?.errors?.condo">{{
                                                error?.response?.data?.errors?.condo[0]
                                            }}</span>
                                    </div>
                                    <div class="col-span-1">
                                        <label for="name" class="text-sm block mb-2">Landed<span
                                            class="text-red-500">*</span></label>
                                        <input type="text" :disabled="loading" v-model="settings.counter.landed"
                                               class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                        <span class="text-red-500" v-if="error?.response?.data?.errors?.landed">{{
                                                error?.response?.data?.errors?.landed[0]
                                            }}</span>
                                    </div>
                                    <div class="col-span-1">
                                        <label for="name" class="text-sm block mb-2">Corporate<span
                                            class="text-red-500">*</span></label>
                                        <input type="text" :disabled="loading" v-model="settings.counter.corporate"
                                               class="border border-primary rounded-md font-normal text-sm disabled:bg-teal-50 w-full  focus:ring-primary focus:border-primary">
                                        <span class="text-red-500" v-if="error?.response?.data?.errors?.corporate">{{
                                                error?.response?.data?.errors?.corporate[0]
                                            }}</span>
                                    </div>
                                </div>

                                <div class="flex items-center justify-end">
                                    <LoadingButton :isLoading="loading">Update Settings</LoadingButton>
                                </div>

                            </form>
                        </div>
                    </TransitionGroup>
                </div>
            </div>


<!--            <div v-if="loading" class="flex items-center justify-center">
                <LoadingButton :isLoading="loading">Loading</LoadingButton>
            </div>-->

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

const section = ref('hero')

const settings = ref({
    hero:{
        prefix:null,
        title:null,
        slogan:null
    },
    profile:{
        name:null,
        email:null,
        phone:null,
        whatsapp:null,
        address:null,
        footer_cntent:null,
    },
    social:{
        facebook:null,
        instagram:null,
        twitter:null,
        linkedin:null,
        youtube:null,
    },
    counter:{
        project_complate:null,
        customer_satisfied:null,
        expart_team:null,
        award:null,

        house:null,
        condo:null,
        landed:null,
        corporate:null,
    }
})

const updateSetting = async () => {
    const response = await sendRequest({
        url: "/api/V1/settings",
        method: 'POST',
        data: settings.value
    })
    toast.success(response?.data?.message)
}
const getSettings = async () => {
    const response = await sendRequest({
        url: "/api/V1/settings",
        method: 'GET'
    })
    setupSettings(response.data)
}
const setupSettings = (data)=>{
    settings.value.hero = data?.bSettings.hero ?? {}
    settings.value.profile = data?.bSettings.profile ?? {}
    settings.value.social = data?.bSettings.social ?? {}
    settings.value.counter = data?.bSettings.counter ?? {}
}

onMounted(async () => await getSettings())


</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
