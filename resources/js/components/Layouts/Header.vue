<script setup>
import {inject, ref} from 'vue';
import MobileNav from "@/components/MobileNav.vue";
import SocalLinks from "@/components/SocalLinks.vue";
const isOpen = ref(false);
const settings = inject('settings')

</script>
<template>
   <MobileNav />
    <div class="hidden lg:block fixed top-0 left-0 right-0 w-full z-50">
        <!-- top manu -->
         <div class="bg-black text-gray-400  flex justify-between items-center py-3">
            <div class="flex items-center">
                <div class="flex gap-1 cursor-pointer hover:text-amber-500 justify-center items-center px-5 text-sm font-normal">
                    <svg class="text-amber-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.225 0-6.287-1.438t-5.425-3.8q-2.363-2.362-3.8-5.425T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.013.638T9.4 8.45L6.975 10.9q1.05 1.8 2.638 3.375T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.075.575.338T21 15.9v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9ZM19 18.95v-2.2l-2.35-.475l-1.675 1.675q.975.425 1.987.675T19 18.95Zm-4-1.025ZM6.025 9Z"/></svg>
                    <p>{{ settings?.profile?.phone }}</p>
                </div>
                <hr class="h-5 border">
                <div class="flex gap-1 cursor-pointer hover:text-amber-500 justify-center items-center px-5 text-sm font-normal">
                    <svg class="text-amber-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"/></svg>
                    <p>{{ settings?.profile?.address }}</p>
                </div>
                <hr class="h-5 border">
                <div class="flex gap-1 cursor-pointer hover:text-amber-500 justify-center items-center px-5 text-sm font-normal">
                    <svg class="text-amber-500" xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 1024 1024"><path fill="currentColor" d="M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"/><path fill="currentColor" d="M904 224L656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0l210.56 240.704a128 128 0 0 0 192.704 0L818.944 224z"/></svg>
                    <p>{{ settings?.profile?.email }}</p>
                </div>
            </div>
             <SocalLinks/>
         </div>
        <!-- main manu -->
        <div class="header-bg-sky-gradient">
            <div class=" flex justify-center items-center container" >
                <RouterLink to="/" class="flex justify-center items-center ">
                    <img class="w-16 h-16 py-2 border-2 border-white rounded-full m-2 p-3" src="@/assets/images/logo.png"  alt="Logo" >
                </RouterLink>
                <div class=" w-full  flex justify-center items-center">
                    <div class="w-full flex justify-start items-center font-semibold gap-10 uppercase text-base text-white ps-10">
                        <RouterLink to="/" class="">Home</RouterLink>
                        <RouterLink :to="{name:'Front.Services'}" class="">Services</RouterLink>
                        <RouterLink :to="{name:'Front.Package'}" class="">Package</RouterLink>
                        <RouterLink :to="{name:'Portfolio'}" class="">Portfolio</RouterLink>
                    </div>
                    <div class="w-1/3 flex justify-center items-center gap-10">
                        <div @click="isOpen = true" class="flex justify-center items-center border-2 border-white hover:border-primary hover:bg-white rounded-full w-12 h-12 transition-all ease-in-out duration-500">
                            <Icon name="ic:round-dashboard" class=" text-2xl text-white hover:text-primary" />
                        </div>
                        <RouterLink to="/contact" class="group" >
                            <button class="uppercase flex justify-center items-center gap-3 text-primary bg-white py-3 px-5 font-semibold group-hover:text-fourthColor transition-all ease-in-out duration-500">
                                <Icon name="material-symbols:arrow-outward" class=" text-2xl text-primary group-hover:text-fourthColor transition-all ease-in-out duration-500"/>
                                Contact us
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <aside  :class="{ 'right-0': isOpen , '-right-[600px]': !isOpen }" class="hidden w-[450px] transition-all ease-in-out duration-1000 p-5 z-50  fixed bg-white h-full  top-0 right-0  bottom-0  overflow-auto " >
        <div  class="flex justify-end mb-5 hover:text-amber-500   ">
            <svg @click="isOpen = false" class="hover:origin-center hover:-rotate-[30deg]" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7t.7.275t.7-.275zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>
        </div>
        <div>
            <RouterLink to="/" class=" w-64 h-16 bg-white mt-28 ">
                <img src="@/assets/images/logo.svg"  alt="Logo" >
            </RouterLink>
            <p class="mt-10 font-medium text-base text-gray-600">Construction services offer tailored solutions to meet the unique needs and specifications of each project.</p>
            <div class="flex gap-2 text-white  bottom-0 mt-10">
                <a href="#" class="bg-gray-500 p-2 ">
                    <svg class="hover:text-amber-500 hover:" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z" clip-rule="evenodd"/></svg>
                </a>
                <a href="#" class="bg-gray-500 p-2">
                    <svg class="hover:text-amber-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M19.633 7.997c.013.175.013.349.013.523c0 5.325-4.053 11.461-11.46 11.461c-2.282 0-4.402-.661-6.186-1.809c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721a4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062c.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973a4.02 4.02 0 0 1-1.771 2.22a8.073 8.073 0 0 0 2.319-.624a8.645 8.645 0 0 1-2.019 2.083z" fill="currentColor"/></svg>
                </a>
                <a href="#" class="bg-gray-500 p-2">
                    <svg class="hover:text-amber-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8 19H5V9h3zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085c-.779 0-1.273.388-1.521 1.165V19h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678c1.025 0 1.854.285 2.487 1.001c.637.717.954 1.679.954 3.03z"/><ellipse cx="6.5" cy="6.5" fill="currentColor" rx="1.55" ry="1.5"/></svg>
                </a>
                <a href="#" class="bg-gray-500 p-2 ">
                    <svg class="hover:text-amber-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 550 550"><path fill="currentColor" fill-rule="evenodd" d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.6 220.6 0 0 0 29.78 111L32 480l118.25-30.87a223.6 223.6 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1M256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4l-70.17 18.32l18.73-68.09l-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52m101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78s-14.4 18-17.65 21.75s-6.5 4.16-12.07 1.38s-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26s.93-6.94-.46-9.71s-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52c-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38s39.3 59.73 95.21 83.76a323 323 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2c10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37s-5.11-3.71-10.69-6.48"/></svg>
                </a>
            </div>
        </div>
        <div class="mt-10">
            <h1 class="text-2xl font-semibold">Recent Posts</h1>
            <div class="flex mt-3">
                <div class="h-[3px]  bg-amber-500 w-10"></div>
                <div class="h-[3px] bg-gray-400 w-full"></div>
            </div>
            <div class="w-full flex mb-3 mt-5">
                <div class="w-1/3 p-1" >
                    <RouterLink to="/" >
                        <img src="@/assets/images/img/contact.jpg"  alt="Logo" >
                    </RouterLink>
                </div>
                <div class="w-2/3 p-1 mb-2" >
                    <div class="flex gap-1 justify-start items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5.616 21q-.691 0-1.153-.462T4 19.385V6.615q0-.69.463-1.152T5.616 5h1.769V3.308q0-.233.153-.386t.385-.153t.386.153t.153.386V5h7.154V3.27q0-.214.143-.358t.357-.143t.356.143t.144.357V5h1.769q.69 0 1.153.463T20 6.616v12.769q0 .69-.462 1.153T18.384 21zm0-1h12.769q.23 0 .423-.192t.192-.424v-8.768H5v8.769q0 .23.192.423t.423.192"/></svg>
                        <p> 24 Feb , 2024 </p>
                    </div>
                    <h1 class="font-semibold text-lg text-black hover:text-amber-400 mt-2 ps-2">Where Vision Meets Concrete Reality</h1>
                </div>
            </div>
            <div class="w-full flex mb-3">
                <div class="w-1/3 p-1" >
                    <RouterLink to="/" >
                        <img src="@/assets/images/img/contact.jpg"  alt="Logo" >
                    </RouterLink>
                </div>
                <div class="w-2/3 p-1 mb-2" >
                    <div class="flex gap-1 justify-start items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5.616 21q-.691 0-1.153-.462T4 19.385V6.615q0-.69.463-1.152T5.616 5h1.769V3.308q0-.233.153-.386t.385-.153t.386.153t.153.386V5h7.154V3.27q0-.214.143-.358t.357-.143t.356.143t.144.357V5h1.769q.69 0 1.153.463T20 6.616v12.769q0 .69-.462 1.153T18.384 21zm0-1h12.769q.23 0 .423-.192t.192-.424v-8.768H5v8.769q0 .23.192.423t.423.192"/></svg>
                        <p> 24 Feb , 2024 </p>
                    </div>
                    <h1 class="font-semibold text-lg text-black hover:text-amber-400 mt-2 ps-2">Where Vision Meets Concrete Reality</h1>
                </div>
            </div>
        </div>
        <div class="mt-10 pb-40">
            <h1 class="text-2xl font-semibold">Contact Us</h1>
            <div class="flex mt-3">
                <div class="h-[3px]  bg-amber-500 w-10"></div>
                <div class="h-[3px] bg-gray-400 w-full"></div>
            </div>
            <div class="w-full mb-3 mt-5">
                <div class="p-1 mb-2" >
                    <h1 class="font-semibold text-lg text-black  mt-2 ps-2 cursor-pointer">Address Location</h1>
                    <div class="flex gap-1 justify-start items-center">
                        <svg class="text-amber-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm7-15q-1.9 0-3.35 1.325t-1.45 3.6q0 1.825 1.425 3.6t2.7 2.9q.15.125.325.188t.35.062t.35-.062t.325-.188q1.275-1.125 2.7-2.9t1.425-3.6q0-2.275-1.45-3.6T12 6m0 6.25q-.525 0-.888-.363T10.75 11t.363-.888T12 9.75t.888.363t.362.887t-.363.888t-.887.362"/></svg>
                        <p>138 MacArthur Ave, USA</p>
                    </div>
                </div>
                <div class="p-1 mb-2">
                    <h1 class="font-semibold text-lg text-black  mt-2 ps-2 cursor-pointer">Phone Number</h1>
                    <div class="flex gap-1 justify-start items-center">
                        <svg class="text-white bg-amber-400 p-px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.225 0-6.287-1.438t-5.425-3.8q-2.363-2.362-3.8-5.425T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.013.638T9.4 8.45L6.975 10.9q1.05 1.8 2.638 3.375T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.075.575.338T21 15.9v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9ZM19 18.95v-2.2l-2.35-.475l-1.675 1.675q.975.425 1.987.675T19 18.95Zm-4-1.025ZM6.025 9Z"/></svg>
                        <p>+880 1389654723</p>
                    </div>
                </div>
                <div class="p-1 mb-2">
                    <h1 class="font-semibold text-lg text-black  mt-2 ps-2 cursor-pointer">Email Address</h1>
                    <div class="flex gap-1 justify-start items-center">
                        <svg class="text-white bg-amber-400 p-px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"/><path fill="currentColor" d="M904 224L656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0l210.56 240.704a128 128 0 0 0 192.704 0L818.944 224z"/></svg>
                        <p>help24/7info@kotar.com</p>
                    </div>
                </div>
            </div>

        </div>



    </aside>


</template>
