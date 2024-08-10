<script setup >
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import ServiceCard from '@/components/Servicecard.vue';
import PriceCard from "@/components/PriceCard.vue";
import PortCard from "@/components/PortCard.vue";
import useAxios from "@/composables/useAxios.js";
import {onMounted, ref, provide, inject} from "vue";
import {useToast} from "vue-toastification";
import LoadingButton from "@/components/LoadingButton.vue";
const {sendRequest, loading, error} = useAxios();
const toast = useToast()
const services = ref(null)
const packages = ref(null)
const galleries = ref(null)
const headerSettings = inject('settings')
const getServices = async () => {
    const response = await sendRequest({
        url: `/api/frontend/services`,
        method: 'GET'
    })
    console.log('res', response)
    services.value = response?.data
}
const getpackages = async () => {
    const response = await sendRequest({
        url: `/api/frontend/packages`,
        method: 'GET'
    })
    console.log('res', response)
    packages.value = response?.data
}
const getGallereries = async () => {
    const response = await sendRequest({
        url: `/api/frontend/gallery`,
        method: 'GET'
    })
    console.log('res', response)
    galleries.value = response?.data
}

const createContact = ref({
    firstname:null,
    lastname:null,
    email:null,
    phone:null,
    message:null,
})

const handelContact = async () => {
    const response = await sendRequest({
        url: `/api/frontend/contact`,
        method: 'POST',
        data: createContact.value
    })
    toast.success(response?.data?.message)
    createContact.value = {};
}

onMounted(async () => {
    await getServices()
    await getpackages()
    await getGallereries()
})

</script>

<template>
  <GuestLayout>
      <!---------Hero section------------->
      <section class="bg-[url(https://as2.ftcdn.net/v2/jpg/00/33/07/75/1000_F_33077580_5RQxiIZ2TwENiWnehethQw6TYlheX0rS.jpg)]
                        relative bg-no-repeat bg-cover bg-center bg-fixed h-screen">
          <span class="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black bg-opacity-70">
          </span>
          <div class="container flex items-center relative z-40 min-h-screen h-full pt-32">

              <div class="w-full md:w-1/2" >
                  <div class="w-full">
                      <div class="flex justify-start items-center gap-3">
                          <p class="uppercase text-white font-bold text-sm md:text-xl">{{ headerSettings?.hero?.prefix }}</p>
                          <hr class="w-24 text-white border-2">
                      </div>
                      <h1 class="uppercase text-2xl md:text-5xl tracking-wide font-bold text-white py-4 md:py-10">{{ headerSettings?.hero?.title }}</h1>
                      <p class="font-normal text-md text-white max-w-lg">{{ headerSettings?.hero?.slogan }}</p>
                      <div class="flex w-full flex-col items-center md:gap-5 py-10">
                          <RouterLink  to="/Contact"  class="uppercase w-full flex justify-center items-center gap-3 font-semibold my-3 bg-primary text-white border-primary px-3 py-3.5  hover:bg-teal-600 transition-all disabled:bg-teal-400 ease-in-out duration-500">
                              <Icon name="material-symbols:arrow-outward" class=" text-2xl text-white "/>
                              discover More
                          </RouterLink>
                          <RouterLink to="/all-services"  class="uppercase w-full flex justify-center items-center gap-3 text-primary bg-white border-2 border-primary py-3 px-5 font-semibold group-hover:text-fourthColor transition-all ease-in-out duration-500">
                              <Icon name="material-symbols:arrow-outward" class=" text-2xl text-primary group-hover:text-fourthColor transition-all ease-in-out duration-500"/>
                              Our Services
                          </RouterLink>
                      </div>
                  </div>
              </div>
              <div class="w-full lg:w-1/2 md:block hidden">
                  <div class="flex flex-wrap">
                      <div class="w-full lg:w-1/2 p-2" v-for="item in services?.selectedServices">
                          <div class="relative w-full overflow-hidden group transition-all ease-in-out duration-1000">
                              <div class="absolute z-10 p-5 w-full h-full top-0 bottom-0 right-0 left-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-700">
                                  <div class="flex items-center justify-center border w-full h-full">
                                      <h2 class="text-white text-lg font-medium animate-none">{{ item?.name }}</h2>
                                  </div>
                              </div>
                              <img class="w-full h-full object-cover group-hover:scale-110 transition-all ease-in-out duration-500"
                                   :src="item?.image" alt="">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

        <!------------servises------------------->
        <div class="container ">
          <div class="text-center flex flex-col justify-center items-center pt-10">
              <h1 class="gradient-text font-bold text-5xl uppercase tracking-widest pb-5">Services</h1>
              <div class="h-1 bg-amber-400 w-28 mt-px"></div>
         </div>
          <div class="container grid grid-cols-1  lg:grid-cols-3 gap-5 mt-10">
            <ServiceCard v-for="service in services?.allServices" :service="service"/>
          </div>
        </div>
        <!---------Consultation Contact Us------------->
      <section class="bg-[url(https://img.freepik.com/free-photo/top-view-blue-paint-brush-strokes-surface_23-2148815435.jpg?t=st=1719739976~exp=1719743576~hmac=202788a852e75aba7d7452d5467f5aa72e00e2838d46b748dd3e12461dbd4cf2&w=740)]
                        relative bg-no-repeat bg-cover bg-center h-screen mt-20">
          <div class="container flex w-full justify-center items-center">
              <div class="w-full h-screen mb-10 flex justify-start items-center relative z-30">
                  <div class="w-full md:w-1/2">
                      <div class="w-full">
                          <div class="flex items-center gap-3">
                              <p class="uppercase text-white font-bold text-sm md:text-xl">Get consultation </p>
                              <hr class="w-20 border-2 bg-white">
                          </div>
                          <h1 class="text-2xl md:text-5xl text-white tracking-widest leading-1 font-bold my-10">Get A Free Consultation Contact Us <span class="text-amber-600">!</span></h1>
                          <div class="flex justify-start items-center gap-5 my-10">
                              <RouterLink to="/Contact" class="group" >
                                  <button class="uppercase flex justify-center items-center gap-3 text-primary bg-white py-3 px-5 font-semibold group-hover:text-fourthColor transition-all ease-in-out duration-500">
                                      <Icon name="material-symbols:arrow-outward" class=" text-2xl text-primary group-hover:text-fourthColor transition-all ease-in-out duration-500"/>
                                      Contact us
                                  </button>
                              </RouterLink>
                          </div>
                      </div>
                  </div>
                  <div class="w-1/2 hidden md:block">
                      <div class="w-full h-full">
                          <img src="https://img.freepik.com/free-photo/man-working-wall-with-paint-roller_23-2148384435.jpg?t=st=1719746200~exp=1719749800~hmac=2d0cb6fe9ad18923ed8cdda8b8f7bba0077f7098ecad4ea48a44bde2018961b9&w=740" alt="">
                      </div>
                  </div>
              </div>

          </div>


          <div class="container bg-sky-gradient text-center py-16 mx-10 -mt-40 relative z-40 flex justify-center items-center">
              <div class="w-1/4">
                  <h1 class="font-bold text-xl md:text-6xl text-white">{{  headerSettings?.counter?.project_complate }}</h1>
                  <p class="text-xs md:text-xl text-white font-normal">Project Completed</p>
              </div>
              <div class="w-1/4">
                  <h1 class="font-bold text-xl md:text-6xl  text-white">{{ headerSettings?.counter?.customer_satisfied }}</h1>
                  <p class="text-xs md:text-xl text-white font-normal">Customer Satisfied</p>
              </div>
              <div class="w-1/4">
                  <h1 class="font-bold text-xl md:text-6xl  text-white">{{ headerSettings?.counter?.expart_team }}</h1>
                  <p class="text-xs md:text-xl text-white font-normal">Expert Team Members</p>
              </div>
              <div class="w-1/4">
                  <h1 class="font-bold text-xl md:text-6xl  text-white">{{ headerSettings?.counter?.award }}</h1>
                  <p class="text-xs md:text-xl font-normal text-white">Awards Winner</p>
              </div>
          </div>
      </section>

        <!-----------price card----------------->

            <div class="bg-[url('https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/flower-parallax-color.png?fbclid=IwZXh0bgNhZW0CMTAAAR2CoaBVw7vs8DwY2hoDfss8yGWStybP4VoToZSB4tJDgY1V1IZaOexRcTo_aem_mdQvljFZEEFNrlWUqGKxYg')]
                       relative bg-no-repeat bg-cover bg-center bg-fixed py-10 my-10 mt-32">
                <div class="absolute h-full w-full top-0 bottom-0 left-0 right-0">
                    <img class="w-full h-full" src="https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/flower-parallax-grey.png?fbclid=IwZXh0bgNhZW0CMTAAAR2R6HLrWcpGd_Xdkha5UL4cRopey5PUS1f5hdHGlVBGInV4BlEHK5lpMuc_aem_Y588DKiJ-DsdFMQfuLNyJg" alt="">
                </div>

                <div class="text-center flex flex-col justify-center items-center ">
                    <h1 class="gradient-text font-bold text-5xl uppercase tracking-widest pb-5">Pricing & Plan </h1>
                    <div class="h-1 bg-amber-400 w-28 mt-px"></div>
                </div>

                <div class="container mx-auto grid grid-cols-1 lg:grid-cols-4 relative z-30 justify-items-center gap-10 pt-10">
                    <PriceCard v-for="item in packages" :package="item"/>
                </div>
            </div>

        <!--------------Portfolio------------------->
        <div class="bg-[url('https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/speckle.png?fbclid=IwZXh0bgNhZW0CMTAAAR3wevHtr2kWtAY0XdDgiO8BufLc8XnlQSmfwkRDYlVi6k-S4-88SuNlFwU_aem_Zfa6x_hwmOyABWT5T9JYzg')]
                    relative bg-no-repeat bg-cover bg-center bg-fixed py-10 my-10 pb-5 ">

            <div class="text-center flex flex-col justify-center items-center ">
                <h1 class="gradient-text font-bold text-5xl uppercase tracking-widest pb-5">our Portfolio</h1>
                <div class="h-1 bg-primary w-28 mt-px"></div>
            </div>


            <div class="container">
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-3 py-20">
                    <PortCard v-for="item in galleries" :gallery="item"/>
                </div>
            </div>
        </div>

        <!-----------facts---------------->
         <div class="bg-[url('https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/flower-parallax-color.png?fbclid=IwZXh0bgNhZW0CMTAAAR2CoaBVw7vs8DwY2hoDfss8yGWStybP4VoToZSB4tJDgY1V1IZaOexRcTo_aem_mdQvljFZEEFNrlWUqGKxYg')]
                       relative bg-no-repeat bg-cover bg-center bg-fixed pt-5 py-14 ">
             <div class="container py-10 h-full w-full bg-fourthColor rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border-4 border-gray-100">

                 <div class="text-center flex flex-col justify-center items-center ">
                     <h1 class="gradient-text font-bold text-5xl uppercase tracking-widest pb-5">fact</h1>
                     <div class="h-1 bg-primary w-28 mt-px"></div>
                 </div>

                 <div class=" mx-10 mt-10 relative z-50 bg-opacity-100 flex flex-wrap gap-10 lg:gap-0 justify-center items-center">

                     <div class="w-full lg:w-1/4 text-center">
                         <h1 class="font-bold text-5xl gradient-text">{{ headerSettings?.counter?.house }}</h1>
                         <p class="text-base font-medium pt-1 text-gray-600">HDB House</p>
                     </div>

                     <div class="w-full lg:w-1/4 text-center">
                         <h1 class="font-bold text-5xl gradient-text">{{ headerSettings?.counter?.condo }}</h1>
                         <p class="text-base font-medium pt-1 text-gray-600">Condo House</p>
                     </div>

                     <div class="w-full lg:w-1/4 text-center">
                         <h1 class="font-bold text-5xl gradient-text">{{ headerSettings?.counter?.landed }}</h1>
                         <p class="text-base font-medium pt-1 text-gray-600">Landed</p>
                     </div>

                     <div class="w-full lg:w-1/4 text-center">
                         <h1 class="font-bold text-5xl gradient-text">{{ headerSettings?.counter?.corporate }}</h1>
                         <p class="text-base font-medium pt-1 text-gray-600">Corporate</p>
                     </div>
                 </div>
             </div>
          </div>
        <!---------contact us------------>
      <div class="bg-[url('https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/speckle-man.png?fbclid=IwZXh0bgNhZW0CMTAAAR0Igb4PrTft9TeCu6n3Mg4svCtU4nmzW5JAVrnGoZw2ft5Fm7F6h_YET58_aem_r2kwQT0as8fil78Cc7ifyw')]
                     relative bg-no-repeat bg-cover bg-center bg-fixed pt-5 pb-14">
            <div class="container">
                <div class="flex items-center lg:pl-20">
                    <div class="w-full lg:w-1/2">
                        <form @submit.prevent="handelContact" class="p-5 lg:px-16">
                            <div class="flex justify-start items-center gap-3">
                                <p class="uppercase text-amber-600 font-semibold ">Get In Touch</p>
                                <hr class="w-14 h-1 bg-amber-600 ">
                            </div>
                            <h1 class="text-3xl gradient-text py-2 font-medium">Have An Upcoming Projects? Let’s Talk to Now!</h1>
                            <div class="w-full flex gap-2 my-5">
                                <div class="w-1/2 ">
                                    <input type="text" v-model="createContact.firstname" :disabled="loading"  placeholder="First Name" class=" w-full bg-gray-100 text-gray-700 border disabled:bg-gray-200 border-gray-300 placeholder:text-sm rounded">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.firstname">{{
                                            error?.response?.data?.errors?.firstname[0]
                                        }}</span>
                                </div>
                                <div class="w-1/2">
                                    <input type="text" v-model="createContact.lastname" :disabled="loading"  placeholder="Last Name" class=" w-full bg-gray-100 text-gray-700 border disabled:bg-gray-200 border-gray-300 placeholder:text-sm rounded">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.lastname">{{
                                            error?.response?.data?.errors?.lastname[0]
                                        }}</span>
                                </div>
                            </div>
                            <div class="w-full flex gap-2 my-5">
                                <div class="w-1/2 ">
                                    <input type="number" v-model="createContact.phone" :disabled="loading"   placeholder="Phone" class=" w-full bg-gray-100 text-gray-700 disabled:bg-gray-200 border border-gray-300 placeholder:text-sm rounded">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.phone">{{
                                            error?.response?.data?.errors?.phone[0]
                                        }}</span>

                                </div>
                                <div class="w-1/2">
                                    <input type="email" v-model="createContact.email" :disabled="loading"  placeholder="E-mail" class=" w-full bg-gray-100 text-gray-700 border disabled:bg-gray-200  border-gray-300 placeholder:text-sm rounded">
                                    <span class="text-red-500" v-if="error?.response?.data?.errors?.email">{{
                                            error?.response?.data?.errors?.email[0]
                                        }}</span>
                                </div>
                            </div>
                            <div class=" ">
                                <textarea v-model="createContact.message" :disabled="loading" id="" placeholder="Message" rows="5" class="w-full bg-gray-100 text-gray-700 border disabled:bg-gray-200 border-gray-300" ></textarea>
                                <span class="text-red-500" v-if="error?.response?.data?.errors?.message">{{
                                        error?.response?.data?.errors?.message[0]
                                    }}</span>
                            </div>
                            <LoadingButton :isLoading="loading" class="w-full text-center">Submit Your Queries</LoadingButton>
<!--                            <Button type="submit" class="w-full py-2 my-3 bg-primary text-white px-3 py-2  hover:bg-teal-600 transition-all disabled:bg-teal-400 ease-in-out duration-500">Send</Button>-->
                        </form>
                    </div>
                </div>
            </div>
      </div>

  </GuestLayout>
</template>
<style scoped>

</style>
