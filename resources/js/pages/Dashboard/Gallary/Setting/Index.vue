<template>
    <AppLayout>
        <div class="flex items-center justify-between p-5"> 
             <div>
                 <div class="flex items-center">
                     <Icon name="material-symbols:settings-b-roll-outline"  class="text-primary text-4xl rounded-full border-2 shadow-lg border-primary p-1" />
                     <h2 class="font-bold text-3xl py-5 px-3 uppercase text-primary tracking-wider ">Setting</h2>
                 </div>
                 <div>
                     <label for="table-search" class="sr-only">Search</label>
                     <div class="relative mt-1">
                         <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                             <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                             </svg>
                         </div>
                         <input type="text" id="table-search" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50
                          focus:ring-primary focus:border-primary" placeholder="Search for items">
                     </div>
                 </div>
             </div>
             
             <RouterLink to="/dashboard/setting">
                 <button class="flex items-center justify-center gap-2 bg-primary px-5 py-2 text-white text-lg font-medium">
                     <Icon name="streamline:interface-add-circle-button-remove-cross-add-buttons-plus-circle"  class="text-sm shadow-lg border-primary" />
                     Add Record
                 </button>
             </RouterLink>
        </div>
    </AppLayout>
</template>

<script setup>
   import AppLayout from "@/components/Layouts/AppLayout.vue";
  import { RouterLink } from "vue-router";
</script>

<style scoped>

</style>  