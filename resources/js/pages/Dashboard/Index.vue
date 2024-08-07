<script setup>
import AppLayout from "@/components/Layouts/AppLayout.vue";
import {useAuthStore} from "@/stores/useAuthStore.js";

const {user} = useAuthStore();

</script>
<template>
    <AppLayout>
        <div class="py-4 px-6 flex flex-col gap-4 bg-teal-100 text-teal-900">
            <h1 class="font-bold text-4xl">Hello {{ user?.name }}</h1>
            <h1 class="font-semibold text-lg">WELCOM TO DASHBOARD</h1>
        </div>

    </AppLayout>
</template>
