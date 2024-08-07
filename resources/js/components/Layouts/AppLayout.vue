<script setup>
import SideBar from '@/components/Layouts/SideBar.vue';
import Header from '@/components/Layouts/AdminHeader.vue';
</script>
<template>

    <div class="bg-primary w-full h-screen flex">
        <aside class="w-44 fixed top-0 left-0 bottom-0 h-screen bg-primary">
            <SideBar/>
        </aside>
        <div class="ml-44 w-full h-screen">
            <Header/>
            <main class="bg-slate-100 min-h-screen p-4 pb-10 relative pt-20">
                <div class="pb-1">
                    <slot/>
                </div>
            </main>
        </div>
    </div>
</template>
