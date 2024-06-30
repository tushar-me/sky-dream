<template>
 <div class="pt-10">
     <div class="relative w-full overflow-hidden group transition-all ease-in-out duration-1000">
         <div class="absolute z-20 p-5 w-full h-full top-0 bottom-0 right-0 left-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-700">
             <div class="flex items-center justify-center border w-full h-full">

             </div>
         </div>
         <img class="w-full h-full object-cover group-hover:scale-110 transition-all ease-in-out duration-500"
              src="https://dtpainting.wpenginepowered.com/wp-content/uploads/2015/04/blog-3-1024x700.jpg" alt="">
     </div>
     <div class="relative z-40 p-5 pb-0 bg-white group mx-5 border -mt-16 block">
        <h2 class="text-lg font-normal text-gray-600 group-hover:text-thirdColor">The Benefits of High-Quality Paint</h2>
         <p class="text-xs font-light text-gray-500 py-3 leading-5">Phasellus aliquet, risus at blandit lobortis, tortor neque accumsan sem, in aliquet purus purus...</p>
         <RouterLink to="/Contact" class="group" >
             <Button class="uppercase w-full my-8 mb-0 flex justify-center items-center gap-3  text-white py-2 px-5 font-semibold ">
                 <Icon name="ion:logo-whatsapp" class=" text-2xl text-white "/>
                 whatsapp please
             </Button>
         </RouterLink>
     </div>
 </div>
</template>
<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>
