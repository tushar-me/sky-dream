<script setup>
const props = defineProps({
        text:{
            type: Boolean,
            default: true
        }
    });
</script>

<template>
    <div class="mx-auto">
        <div>
            <div>
                <img src="" alt="">
            </div>
            <ul class="flex flex-col gap-5 p-5 ">
                <li>
                    <RouterLink :to="{name:'Dashboard'}" class="flex items-center gap-2">
                        <div class="w-10 h-10 bg-slate-400/50 border border-gray-100/50 rounded-full flex items-center justify-center">
                            <Icon name="ic:twotone-dashboard-customize" size="20" class="text-white" />
                        </div>
                        <p  v-if="text" class="text-white">Dashboard</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{name:'Services'}" class="flex items-center gap-2">
                        <div class="w-10 h-10 bg-slate-400/50 border border-gray-100/50 rounded-full flex items-center justify-center">
                            <Icon name="material-symbols:service-toolbox-sharp" size="20" class="text-white" />
                        </div>
                        <p  v-if="text" class="text-white">Services</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{name:'Package'}" class="flex items-center gap-2">
                        <div class="w-10 h-10 bg-slate-400/50 border border-gray-100/50 rounded-full flex items-center justify-center">
                            <Icon   name="carbon:ibm-data-product-exchange" size="20" class="text-white" />
                        </div>
                        <p  v-if="text" class="text-white">Packages</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink  :to="{name:'Gallery'}" class="flex items-center gap-2">
                        <div class="w-10 h-10 bg-slate-400/50 border border-gray-100/50 rounded-full flex items-center justify-center">
                            <Icon name="solar:gallery-check-bold" size="20" class="text-white" />
                        </div>
                        <p  v-if="text" class="text-white">Gallary</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink  :to="{name:'Contacts'}" class="flex items-center gap-2">
                        <div class="w-10 h-10 bg-slate-400/50 border border-gray-100/50 rounded-full flex items-center justify-center">
                            <Icon name="solar:gallery-check-bold" size="20" class="text-white" />
                        </div>
                        <p  v-if="text" class="text-white">Contacts</p>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink  :to="{name:'Setting'}" class="flex items-center gap-2">
                        <div class="w-10 h-10 bg-slate-400/50 border border-gray-100/50 rounded-full flex items-center justify-center">
                            <Icon name="material-symbols:settings-outline-rounded" size="20" class="text-white" />
                        </div>
                        <p  v-if="text" class="text-white">Settings</p>
                    </RouterLink>
                </li>
            </ul>

        </div>
    </div>


</template>
