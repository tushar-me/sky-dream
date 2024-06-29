<script setup>
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import ServiceCard from '@/components/Servicecard.vue';
import Swipercard  from '@/components/Swiper.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay } from 'swiper/modules';
const  modules=[ Autoplay ]
  
</script>
<template>
<GuestLayout>
  <div class="mx-10 py-5">
    <div class="w-full flex justify-start">
      <div class="w-1/2 p-10">
        <Swipercard/>
      </div>
      <div class="w-1/2 py-10 pe-20">
        <h1 class="font-bold text-4xl text-amber-400 mb-5">Condo Package</h1>
        <h3 class="text-gray-800 font-normal text-base my-1"><span class="font-semibold text-xl text-black me-2">Start Price :</span>(SG $)280.00</h3>
        <h3 class="text-gray-800 font-normal text-base my-1"><span class="font-semibold text-xl text-black me-2">Service Code :</span>CP002</h3>
        <h3 class="text-gray-800 font-normal text-base my-1"><span class="font-semibold text-xl text-black me-2">Speciality :</span>100 % satisfied and one day finish job.</h3>
        <h3 class="font-semibold text-xl text-black mt-10">Short Breaf :</h3>
        <p class="text-gray-800 font-normal text-base mt-3">Revamp Your Condo with our Exclusive Painting Company's Condo Package Our painting company is proud to offer an exclusive condo package designed to breathe new life into your living space. With our expertise and attention to detail, we provide a comprehensive solution for transforming your condo into a stylish and inviting home.</p>

      </div>
    </div>
    <div class="mt-10 border border-gray-300 rounded">
      <div class="text-gray-700 font-medium text-lg py-2 ps-5 border-b border-gray-300 bg-gray-100">Description: </div>
      <div class="p-5 text-gray-700">
        Transform Your Condo with Our Painting Service Package

        Looking to give your condo a fresh and vibrant look? Our painting service condo package is designed to cater specifically to the needs of condo owners, offering a convenient and comprehensive solution for a stunning transformation.

        Our condo painting service package includes professional expertise, high-quality paints, and meticulous attention to detail. Our skilled team will handle every aspect of the painting process, from surface preparation to flawless application, ensuring a seamless and long-lasting finish.

        Whether you want to refresh the interiors or enhance the exteriors of your condo, our package covers it all. Choose from a wide range of colors and finishes to create the perfect ambiance that suits your style and preferences.

        With our condo painting service package, you can enjoy a hassle-free experience, minimal disruption, and outstanding results that will breathe new life into your living space. Contact us today to learn more about our package and give your condo the makeover it deserves.

        Including Furniture protection and Floor !!
        Including Shifting Furniture !!
        Including Primary Cleaning After Work Also !!
        1/2 days finish jobs !!
        Touch up Plastering Free !!
        Experienced Every Painter!!
        Reasonable Price!!
        We always provide 100% fresh Nippon brand paint!!
        NB: Our Service can be provide on Public Holidays Too
        1 year warranty!!

        painting company in singapore

        cheapest painting services singapore

        commercial painting services singapore

        house painting services singapore

        1 room painting cost singapore

        ici painting services singapore

        5 room painting cost

        budget painting sg review

        painting services singapore review

      </div>
    </div>
    <div class="mt-14">
      <div class="text-center flex flex-col justify-center items-center">
        <h1 class="font-bold text-4xl uppercase">Related Packages</h1>
        <div class="h-1 bg-amber-400 w-60 mt-px"></div>
      </div> 
      <div class="my-10">
        <swiper
          ref="{swiperRef}"
          :slidesPerView="4"
          :centeredSlides="true"
          :spaceBetween="30"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide><ServiceCard/></swiper-slide>
          <swiper-slide><ServiceCard/></swiper-slide>
          <swiper-slide><ServiceCard/></swiper-slide>
          <swiper-slide><ServiceCard/></swiper-slide>
          <swiper-slide><ServiceCard/></swiper-slide>
          <swiper-slide><ServiceCard/></swiper-slide>
          <swiper-slide><ServiceCard/></swiper-slide>
          <swiper-slide><ServiceCard/></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  
  
</GuestLayout>
</template>
