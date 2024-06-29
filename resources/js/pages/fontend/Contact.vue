<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
</script>
<template>
    <GuestLayout>
        <div class="w-1/2 my-10 mx-auto">
            <div class="text-center flex flex-col justify-center items-center">
                <p class="text-4xl font-normal text-gray-700 ">
                    Have question?
                </p>
                <h1 class="font-bold text-4xl text-gray-600 mt-5 uppercase">SEND A MESSAGE</h1>
            </div> 
            <div class="mt-5 ">
                <div class="my-5">
                    <input type="text" placeholder="Name" class="bg-gray-100 py-4 w-full border border-gray-200">
                </div>
                <div class="my-5">
                    <input type="number" placeholder="Phone" class="bg-gray-100 py-4 w-full border border-gray-200">
                </div>
                <div class="my-5">
                    <textarea rows="1" placeholder="Question" class="bg-gray-100 py-4 w-full border border-gray-200"></textarea>
                </div>
                <button class="text-white flex justify-center items-center py-2 px-5 text-base bg-amber-400 font-normal">Submit Now</button>
            </div>
        </div>
        <div class="my-10 mx-20 ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.5372301505513!2d90.42439698478422!3d23.77073443268977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c0dc77f59d%3A0x23a188a3c575c454!2sThe%20Imperial%20Irish%20Kingdom!5e0!3m2!1sen!2sbd!4v1719148264943!5m2!1sen!2sbd" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </GuestLayout>
</template>