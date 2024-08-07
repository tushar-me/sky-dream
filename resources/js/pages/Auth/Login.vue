<template>

    <div class="flex items-center justify-center h-full min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
            <form @submit.prevent="handelLogin">
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email</label>
                    <input type="email" :disabled="authStore.loading" id="email" v-model="loginData.email" class="w-full p-2 border disabled:bg-gray-200 border-gray-300 rounded mt-1" required>
                    <small class="text-red-500" v-if="authStore.error?.response?.data?.errors?.email">{{ authStore.error?.response?.data?.errors?.email[0] }}</small>
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-gray-700">Password</label>
                    <input type="password" :disabled="authStore.loading" id="password" v-model="loginData.password" class="w-full p-2 border disabled:bg-gray-200 border-gray-300 rounded mt-1" required>
                    <small class="text-red-500" v-if="authStore.error?.response?.data?.errors?.password">{{ authStore.error?.response?.data?.errors?.password[0] }}</small>
                </div>
                <LoadingButton :isLoading="authStore.loading">Login</LoadingButton>
<!--                <button type="submit" :disabled="authStore.loading" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-400">-->
<!--                    {{ authStore.loading ? 'Loading...' : 'Login' }}-->
<!--                </button>-->
            </form>
        </div>
    </div>

</template>
<script setup>
import { ref, onMounted } from "vue"
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'vue-router'
import LoadingButton from "@/components/LoadingButton.vue";
const authStore = useAuthStore();



const router = useRouter()


const loginData = ref({
    email: 'admin@admin.com',
    password: 12345678,
    remember_me:false,
})



authStore.error = null;
const handelLogin = async () => {
    authStore.error = null;
    await authStore.login(loginData.value)
    await router.push({name: "Dashboard"})
}

// onMounted(() =>{
//   if(!authStore.isLoggedIn){
//     router.push({name:"dashboard"})
//   }
// })
</script>
