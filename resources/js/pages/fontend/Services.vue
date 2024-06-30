<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import ServiceCard from '@/components/Servicecard.vue';
</script>
<template>
    <GuestLayout>
        <section>
            <div class="bg-[url(https://img.freepik.com/free-photo/buckets-paint-floor_53876-63280.jpg?t=st=1719749678~exp=1719753278~hmac=c02f2eccf66a237eb86be8cf6fbdec8e0a08f0be1aecf4fbb9dee0027466c161&w=740)]
                        relative bg-no-repeat bg-cover bg-top">
                <h2 class="gradient-text uppercase pt-56 pb-20 text-6xl font-bold text-center">Our Services</h2>
            </div>
            <div class="my-10 mx-20">
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
                    <ServiceCard v-for="item in 8"/>
                </div>
            </div>
        </section>
    </GuestLayout>
</template>
