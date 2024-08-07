<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import {useAuthStore} from "@/stores/useAuthStore.js";

const isDropdownOpen = ref(false);
const dropdown = ref(null);
const dropdownButton = ref(null);
const authStore = useAuthStore();
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const handleClickOutside = (event) => {
    if (dropdown.value && !dropdown.value.contains(event.target) && !dropdownButton.value.contains(event.target)) {
        isDropdownOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

</script>

<template>
    <div class="w-full max-w-[calc(100%-11rem)] h-16 border-b bg-white/50 backdrop-blur-xl fixed top-0 z-50">
        <div class="px-8 flex w-full h-full justify-between items-center">

            <a href="/" target="_blank" class="block px-4 py-2 hover:bg-primary my-4 bg-primary/20 group dark:hover:text-white transition-all ease-in-out duration-300 rounded-lg">
                <Icon name="mdi:web-refresh" size="50" class="text-primary group-hover:text-white"/>
            </a>

            <div class="relative cursor-pointer">

                <div @click="toggleDropdown" ref="dropdownButton" id="dropdownDefaultButton">
                    <div class="flex gap-2 items-center  px-2 rounded-md">
                        <img class="w-10 h-10 rounded-full" :src="authStore.user?.image" alt="Rounded avatar">
                        <div class="flex flex-col">
                            <p class="m-0 ps-0 font-semibold text-gray-600 capitalize">{{ authStore.user.name }}</p>
                            <small class="text-sm text-gray-400">{{ authStore.user.email }}</small>
                        </div>
                    </div>
                </div>

                <!-- Dropdown menu -->
                <div v-show="isDropdownOpen" ref="dropdown" id="dropdown" class="z-10 bg-white divide-y divide-gray-100 rounded-lg overflow-hidden shadow w-44 dark:bg-gray-700 absolute mt-2">
                    <div v-if="authStore.loading" class="flex items-center justify-center py-5">
                        <div role="status">
                            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <ul class="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <RouterLink :to="{name:'Dashboard'}" class="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <Icon name="ic:twotone-dashboard-customize" size="20" />
                                <span>Dashbord</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink :to="{name:'profileSetup'}" class="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <Icon name="material-symbols:settings-outline-rounded" size="20" />
                                <span>Setting</span>
                            </RouterLink>
                        </li>

                        <li class="border-t">
                            <a @click="authStore.logout"  class="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <Icon name="tabler:logout-2" size="20" />
                                <span>Sign out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
