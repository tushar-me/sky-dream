<script setup >
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import ServiceCard from '@/components/Servicecard.vue';
import PriceCard from "@/components/PriceCard.vue";
import Button from "@/components/Button.vue";
import PortCard from "@/components/PortCard.vue";
</script>

<template>
  <GuestLayout>
      <!---------Hero section------------->
      <section class="bg-[url(https://as2.ftcdn.net/v2/jpg/00/33/07/75/1000_F_33077580_5RQxiIZ2TwENiWnehethQw6TYlheX0rS.jpg)]
                        relative bg-no-repeat bg-cover bg-center bg-fixed h-screen">
          <span class="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-black bg-opacity-70">
          </span>
          <div class="container flex items-center relative z-40 h-screen pt-32">

              <div class="w-1/2" >
                  <div class="">
                      <div class="flex justify-start items-center gap-3">
                          <p class="uppercase text-white font-bold text-xl">we build, you thrive </p>
                          <hr class="w-24 text-white border-2">
                      </div>
                      <h1 class="uppercase text-5xl tracking-wide font-bold text-white py-10">Building beyond boundaries.</h1>
                      <p class="font-normal text-md text-white max-w-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda asperiores sit ipsa vero architecto.</p>
                      <div class="flex items-center gap-5 py-10">
                          <RouterLink to="/Contact" class="group" >
                              <Button class="uppercase flex justify-center items-center gap-3  text-white py-3 px-5 font-semibold ">
                                  <Icon name="material-symbols:arrow-outward" class=" text-2xl text-white "/>
                                  discover More
                              </Button>
                          </RouterLink>
                          <RouterLink to="/Contact" class="group" >
                              <button class="uppercase flex justify-center items-center gap-3 text-primary bg-white border-2 border-primary py-3 px-5 font-semibold group-hover:text-fourthColor transition-all ease-in-out duration-500">
                                  <Icon name="material-symbols:arrow-outward" class=" text-2xl text-primary group-hover:text-fourthColor transition-all ease-in-out duration-500"/>
                                  Our Services
                              </button>
                          </RouterLink>
                      </div>
                  </div>
              </div>
              <div class="w-full lg:w-1/2">
                  <div class="flex flex-wrap lg:flex-col">
                      <div class="w-full lg:w-1/2 p-2" v-for="item in 4">
                          <div class="relative w-full overflow-hidden group transition-all ease-in-out duration-1000">
                              <div class="absolute z-50 p-5 w-full h-full top-0 bottom-0 right-0 left-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-700">
                                  <div class="flex items-center justify-center border w-full h-full">
                                      <h2 class="text-white text-lg font-medium animate-none">Painting Management</h2>
                                  </div>
                              </div>
                              <img class="w-full h-full object-cover group-hover:scale-110 transition-all ease-in-out duration-500" src="https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/gallery6.jpg" alt="">
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
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
          </div>
        </div>
        <!---------Consultation Contact Us------------->
      <section class="bg-[url(https://img.freepik.com/free-photo/top-view-blue-paint-brush-strokes-surface_23-2148815435.jpg?t=st=1719739976~exp=1719743576~hmac=202788a852e75aba7d7452d5467f5aa72e00e2838d46b748dd3e12461dbd4cf2&w=740)]
                        relative bg-no-repeat bg-cover bg-center h-screen mt-20">
          <div class="container flex w-full justify-center items-center">
              <div class="w-full h-screen mb-10 flex justify-start items-center relative z-30">
                  <div class="w-1/2 ">
                      <div>
                          <div class="flex items-center gap-3">
                              <p class="uppercase text-white font-bold text-xl">Get consultation </p>
                              <hr class="w-20 border-2 bg-white">
                          </div>
                          <h1 class="text-5xl text-white tracking-widest leading-1 font-bold my-10">Get A Free Consultation Contact Us <span class="text-amber-600">!</span></h1>
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
                  <div class="w-1/2">
                      <div class="w-full h-full">
                          <img src="https://img.freepik.com/free-photo/man-working-wall-with-paint-roller_23-2148384435.jpg?t=st=1719746200~exp=1719749800~hmac=2d0cb6fe9ad18923ed8cdda8b8f7bba0077f7098ecad4ea48a44bde2018961b9&w=740" alt="">
                      </div>
                  </div>
              </div>

          </div>
          <div class="container bg-sky-gradient text-center py-16 mx-10 -mt-40 relative z-40 flex justify-center items-center">
              <div class="w-1/4">
                  <h1 class="font-bold text-6xl text-white">2k+</h1>
                  <p class="text-xl text-white font-normal">Project Completed</p>
              </div>
              <div class="w-1/4">
                  <h1 class="font-bold text-6xl text-white">1.5k+</h1>
                  <p class="text-xl text-white font-normal">Customer Satisfied</p>
              </div>
              <div class="w-1/4">
                  <h1 class="font-bold text-6xl text-white">360+</h1>
                  <p class="text-xl text-white font-normal">Expert Team Members</p>
              </div>
              <div class="w-1/4">
                  <h1 class="font-bold text-6xl text-white">85+</h1>
                  <p class="text-xl font-normal text-white">Awards Winner</p>
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
                    <PriceCard />
                    <PriceCard />
                    <PriceCard />
                    <PriceCard />
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
                    <PortCard v-for="item in 4" />
                </div>
            </div>
        </div>
        <!-----------facts---------------->
         <div class="bg-[url('https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/flower-parallax-color.png?fbclid=IwZXh0bgNhZW0CMTAAAR2CoaBVw7vs8DwY2hoDfss8yGWStybP4VoToZSB4tJDgY1V1IZaOexRcTo_aem_mdQvljFZEEFNrlWUqGKxYg')]
                       relative bg-no-repeat bg-cover bg-center bg-fixed pt-5 py-14 ">
             <div class="container py-10 h-full w-full bg-green-950 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-4 border-gray-100">

                 <div class="text-center flex flex-col justify-center items-center ">
                     <h1 class="gradient-text font-bold text-5xl uppercase tracking-widest pb-5">fact</h1>
                     <div class="h-1 bg-primary w-28 mt-px"></div>
                 </div>

                 <div class=" mx-10 mt-10 relative z-50 bg-opacity-100 flex flex-wrap gap-10 lg:gap-0 justify-center items-center">

                     <div class="w-full lg:w-1/4 text-center">
                         <h1 class="font-bold text-5xl gradient-text">1471</h1>
                         <p class="text-base font-medium pt-1 text-gray-600">HDB House</p>
                     </div>

                     <div class="w-full lg:w-1/4 text-center">
                         <h1 class="font-bold text-5xl gradient-text">352</h1>
                         <p class="text-base font-medium pt-1 text-gray-600">Condo House</p>
                     </div>

                     <div class="w-full lg:w-1/4 text-center">
                         <h1 class="font-bold text-5xl gradient-text">63</h1>
                         <p class="text-base font-medium pt-1 text-gray-600">Landed</p>
                     </div>

                     <div class="w-full lg:w-1/4 text-center">
                         <h1 class="font-bold text-5xl gradient-text">17</h1>
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
                        <div class="p-5 lg:px-16">
                            <div class="flex justify-start items-center gap-3">
                                <p class="uppercase text-amber-600 font-semibold ">Get In Touch</p>
                                <hr class="w-14 h-1 bg-amber-600 ">
                            </div>
                            <h1 class="text-3xl gradient-text py-2 font-medium">Have An Upcoming Projects? Let’s Talk to Now!</h1>
                            <div class="w-full flex gap-2 my-5">
                                <div class="w-1/2 ">
                                    <input type="text" placeholder="First Name" class=" w-full bg-gray-100 text-gray-700 border border-gray-300 placeholder:text-sm rounded">
                                </div>
                                <div class="w-1/2">
                                    <input type="text" placeholder="Last Name" class=" w-full bg-gray-100 text-gray-700 border border-gray-300 placeholder:text-sm rounded">
                                </div>
                            </div>
                            <div class="w-full flex gap-2 my-5">
                                <div class="w-1/2 ">
                                    <input type="number" placeholder="Phone" class=" w-full bg-gray-100 text-gray-700 border border-gray-300 placeholder:text-sm rounded">
                                </div>
                                <div class="w-1/2">
                                    <input type="email" placeholder="E-mail" class=" w-full bg-gray-100 text-gray-700 border border-gray-300 placeholder:text-sm rounded">
                                </div>
                            </div>
                            <div class=" ">
                                <textarea name="" id="" placeholder="Message" rows="5" class="w-full bg-gray-100 text-gray-700 border border-gray-300" ></textarea>
                            </div>
                            <Button class="w-full py-2">Send</Button>
                        </div>
                    </div>
                </div>
            </div>
      </div>

  </GuestLayout>
</template>
<style scoped>

</style>
