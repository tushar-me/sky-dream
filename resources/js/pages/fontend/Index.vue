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
        <div class="relative flex w-full  justify-center items-center h-screen overflow-hidden">
            <div class="w-full h-screen flex justify-start items-center opacity-100 relative z-30 bg-opacity-50">
                <div class="w-1/2 ms-20 " >
                     <div class="flex justify-start items-center gap-3">
                        <p class="uppercase text-amber-600 font-bold text-2xl bg-gradient-to-b from-fourthColor to-thirdColor text-transparent bg-clip-text">we build, you thrive </p>
                        <hr class="w-24 h-1 bg-amber-500 border">
                     </div>
                        <h1 class="flex uppercase justify-start items-center text-6xl tracking-wide font-black my-10 bg-gradient-to-b from-primary to-secondary text-transparent bg-clip-text animate-pulse">Building beyond boundaries.</h1>
                         <p class="flex justify-start items-center font-normal text-lg text-gray-500 my-5 pe-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda asperiores sit ipsa vero architecto.</p>
                    <div class="flex justify-start items-center gap-5 my-10">
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
            <div class="w-1/2 "></div>
          </div>
              <div class="absolute z-10 max-sm:items-center w-full h-screen " >
                <img src="@/assets/images/img/hero-section.jpg" class="w-full h-full">
              </div>
        </div>
        <!------------servises------------------->
        <div class="mx-20 my-10">
          <div class="text-center flex flex-col justify-center items-center">
              <h1 class="font-bold text-4xl uppercase bg-gradient-to-b from-thirdColor to-fourthColor pb-5 text-transparent bg-clip-text">Services</h1>
              <div class="h-1 bg-amber-400 w-28 mt-px"></div>
         </div>
          <div class="grid grid-cols-1  lg:grid-cols-3 gap-5 mt-10">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
          </div>
        </div>
        <!---------Consultation Contact Us------------->
        <div class="relative flex w-full  justify-center items-center h-lvh overflow-hidden">
          <div class="w-full h-screen mb-10 flex justify-start items-center opacity-100 relative z-30 bg-opacity-50">
            <div class="w-1/3 px-10" >
              <img src="@/assets/images/img/consultion-man.jpg" class="bg-cover">
            </div>
            <div class="w-2/3 ">
                <div>
                    <div class="flex justify-start items-center gap-3">
                        <p class="uppercase text-amber-600 font-bold text-xl">Get consultation </p>
                        <hr class="w-20 h-1 bg-white">
                    </div>
                    <h1 class="text-5xl text-white tracking-widest font-bold my-10 me-20 animate-pulse">Get A Free Consultation Contact Us <span class="text-amber-600">!</span></h1>
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
          </div>
          <div class="absolute z-10 max-sm:items-center w-full" >
            <img src="@/assets/images/img/Consultation.jpg" class="w-full h-full">
          </div>
        </div>
        <div class="bg-sky-gradient h-60 p-10 mx-10 -mt-40  relative z-50 bg-opacity-100 flex justify-center items-center bg-amber-600 ">
            <div class="w-1/4 ps-10">
              <h1 class="font-bold text-6xl  text-white">2k+</h1>
              <p class="text-xl text-white font-normal pt-1">Project Completed</p>
            </div>
            <div class="w-1/4 ps-10">
              <h1 class="font-bold text-6xl text-white">1.5k+</h1>
              <p class="text-xl text-white font-normal pt-1">Customer Satisfied</p>
            </div>
            <div class="w-1/4 ps-10">
              <h1 class="font-bold text-6xl text-white">360+</h1>
              <p class="text-xl text-white font-normal pt-1">Expert Team Members</p>
            </div>
            <div class="w-1/4 ps-10">
              <h1 class="font-bold text-6xl text-white">85+</h1>
              <p class="text-xl font-normal pt-1 text-white ">Awards Winner</p>
            </div>
        </div>
        <!-----------price card----------------->

            <div class="bg-[url('https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/flower-parallax-color.png?fbclid=IwZXh0bgNhZW0CMTAAAR2CoaBVw7vs8DwY2hoDfss8yGWStybP4VoToZSB4tJDgY1V1IZaOexRcTo_aem_mdQvljFZEEFNrlWUqGKxYg')]
                       relative bg-no-repeat bg-cover bg-center bg-fixed py-10 my-10">
                <div class="absolute h-full w-full top-0 bottom-0 left-0 right-0">
                    <img class="w-full h-full" src="https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/flower-parallax-grey.png?fbclid=IwZXh0bgNhZW0CMTAAAR2R6HLrWcpGd_Xdkha5UL4cRopey5PUS1f5hdHGlVBGInV4BlEHK5lpMuc_aem_Y588DKiJ-DsdFMQfuLNyJg" alt="">
                </div>
                <div class="container mx-auto flex flex-wrap justify-center gap-8 relative z-30">
                    <PriceCard />
                    <PriceCard />
                    <PriceCard />
                </div>
            </div>

        <!--------------Portfolio------------------->
        <div class="bg-[url('https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/speckle.png?fbclid=IwZXh0bgNhZW0CMTAAAR3wevHtr2kWtAY0XdDgiO8BufLc8XnlQSmfwkRDYlVi6k-S4-88SuNlFwU_aem_Zfa6x_hwmOyABWT5T9JYzg')]
                    relative bg-no-repeat bg-cover bg-center bg-fixed py-10 my-10 pb-5 ">
            <div class="text-center flex flex-col justify-center items-center ">
                  <h1 class="font-bold text-4xl uppercase animate-pulse
                            bg-gradient-to-b from-thirdColor to-fourthColor text-transparent bg-clip-text pb-5">Our Portfolio</h1>
                  <div class="h-1 w-56 mt-px bg-gradient-to-b from-thirdColor to-fourthColor"></div>
            </div>


            <div class="container">
                <div class="grid grid-cols-4 gap-3 py-20">
                    <PortCard v-for="item in 4" />
                </div>
            </div>
        </div>
        <!-----------facts---------------->
         <div class="bg-[url('https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/flower-parallax-color.png?fbclid=IwZXh0bgNhZW0CMTAAAR2CoaBVw7vs8DwY2hoDfss8yGWStybP4VoToZSB4tJDgY1V1IZaOexRcTo_aem_mdQvljFZEEFNrlWUqGKxYg')]
                       relative bg-no-repeat bg-cover bg-center bg-fixed pt-5 py-14 ">
             <div class="container py-10 h-full w-full bg-green-950 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-4 border-gray-100">

                 <div class="text-center flex flex-col justify-center items-center">
                     <h1 class="font-bold text-4xl uppercase bg-gradient-to-b from-primary to-secondary text-transparent bg-clip-text pb-5">Facts</h1>
                     <div class="h-1 bg-green-400 w-20 mt-px bg-gradient-to-b from-primary to-secondary"></div>
                 </div>

                 <div class=" mx-10 mt-10 relative z-50 bg-opacity-100 flex justify-center items-center">

                     <div class="w-1/4 text-center">
                         <h1 class="font-bold text-5xl bg-gradient-to-b from-thirdColor to-fourthColor text-transparent bg-clip-text">1471</h1>
                         <p class="text-base font-medium pt-1 text-gray-600">HDB House</p>
                     </div>

                     <div class="w-1/4 text-center">
                         <h1 class="font-bold text-5xl bg-gradient-to-b from-thirdColor to-fourthColor text-transparent bg-clip-text">352</h1>
                         <p class="text-base font-medium pt-1 text-gray-600">Condo House</p>
                     </div>

                     <div class="w-1/4 text-center">
                         <h1 class="font-bold text-5xl bg-gradient-to-b from-thirdColor to-fourthColor text-transparent bg-clip-text">63</h1>
                         <p class="text-base font-medium pt-1 text-gray-600">Landed</p>
                     </div>

                     <div class="w-1/4 text-center">
                         <h1 class="font-bold text-5xl bg-gradient-to-b from-thirdColor to-fourthColor text-transparent bg-clip-text">17</h1>
                         <p class="text-base font-medium pt-1 text-gray-600">Corporate</p>
                     </div>
                 </div>
             </div>
          </div>
        <!---------contact us------------>
      <div class="bg-[url('https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/speckle-man.png?fbclid=IwZXh0bgNhZW0CMTAAAR0Igb4PrTft9TeCu6n3Mg4svCtU4nmzW5JAVrnGoZw2ft5Fm7F6h_YET58_aem_r2kwQT0as8fil78Cc7ifyw')]
                     relative bg-no-repeat bg-cover bg-center bg-fixed pt-5 pb-14">
            <div class="container">
                <div class="flex items-center pl-20">
                    <div class="w-1/2">
                        <div class="p-5 px-16">
                            <div class="flex justify-start items-center gap-3">
                                <p class="uppercase text-amber-600 font-semibold ">Get In Touch</p>
                                <hr class="w-14 h-1 bg-amber-600 ">
                            </div>
                            <h1 class="text-3xl text-gray-500 py-2 font-medium">Have An Upcoming Projects? Let’s Talk to Now!</h1>
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
























                                                                                          <!--        <div class=" flex mx-10 gap-20 py-10">-->
<!--             <div class="w-1/2">-->


<!--                <div class="w-full flex gap-2 my-5">-->
<!--                    <div class="w-1/2 ">-->
<!--                      <input type="text" placeholder="Your Name" class=" w-full py-4  bg-gray-100 text-gray-700 border border-gray-300">-->
<!--                    </div>-->
<!--                    <div class="w-1/2">-->
<!--                      <input type="email" placeholder="Email Address" class="w-full py-4  bg-gray-100 text-gray-700 border border-gray-300">-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="w-full flex gap-2 my-5">-->
<!--                  <div class="w-1/2">-->
<!--                    <input type="number" placeholder="Phone Number" class="w-full py-4 bg-gray-100 text-gray-700 border border-gray-300">-->
<!--                  </div>-->
<!--                  <div class="w-1/2">-->
<!--                    <input type="text" placeholder="Select Subjects" class="w-full py-4  bg-gray-100 text-gray-700 border border-gray-300">-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="w-full">-->
<!--                    <textarea name="" id="" placeholder="Phone Number" rows="5" class="w-full bg-gray-100 text-gray-700 border border-gray-300" ></textarea>-->
<!--                  </div>-->
<!--                <div class="flex justify-start items-center gap-5 my-10">-->
<!--                  <button class="flex uppercase justify-center items-center py-4 px-8 text-white bg-amber-600   hover:bg-black  text-base font-semibold ">-->
<!--                    <p>Send Mesage</p>-->
<!--                    <svg class="font-semibold " xmlns="http://www.w3.org/2000/svg" width="28"  viewBox="0 0 24 20"><path fill="currentColor" d="m16.289 7.208l-9.766 9.746q-.14.14-.344.13q-.204-.009-.345-.15t-.14-.334t.14-.334L15.582 6.5H6.789q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h9.692q.343 0 .575.232t.233.576V16q0 .213-.145.356t-.356.144t-.356-.144t-.144-.356z"/></svg>-->
<!--                  </button>-->
<!--                </div>-->
<!--             </div>-->
<!--             <div class="w-1/2 bg-amber-600">-->
<!--              <img src="@/assets/images/img/contact.jpg" class="w-full h-full p-5">-->
<!--             </div>-->
<!--        </div>-->

  </GuestLayout>
</template>
<style scoped>

</style>
