<script setup>
import AppLayout from "@/components/Layouts/AppLayout.vue";
</script>
<template>
    <AppLayout>
    <div class="flex mb-5 -mx-3">

          <div class="w-1/4 px-3">
                <div
                    class="h-full p-4 overlay shadow
                     bg-[url('https://img.freepik.com/free-photo/shopping-cart-with-presents_658428-64.jpg?t=st=1717409303~exp=1717412903~hmac=ef1e57a02078b8fd2419ceb6514a406d53a22fc5221264e8849fce08970214db&w=1060')]
                      w-full bg-cover bg-no-repeat bg-center">
                      <div class="relative z-10 flex flex-col justify-between h-full">
                            <div class="flex items-center gap-4">
                                  <div class="w-12 h-12 rounded-2xl bg-slate-400/50 border border-gray-100 flex items-center justify-center">
                                    <Icon name="carbon:settings-services"  class="text-gray-100 text-3xl" />
                                  </div>
                                  <h3 class="text-end text-3xl font-medium text-white">$5000</h3>
                            </div>
                            <div>
                              <p class=" text-gray-200 text-xl text-end">Services</p>
                              <p class="text-end font-light text-sm text-gray-200">Compared Last Year</p>
                            </div>
                      </div>
                </div>
          </div>
          <div class="w-1/4 px-3">
                <div class="h-full p-4 overlay shadow
                       bg-[url('https://img.freepik.com/free-photo/shopping-cart-with-presents_658428-64.jpg?t=st=1717409303~exp=1717412903~hmac=ef1e57a02078b8fd2419ceb6514a406d53a22fc5221264e8849fce08970214db&w=1060')]
                       w-full bg-cover bg-no-repeat bg-center">
                      <div class="relative z-10 flex flex-col justify-between h-full">
                            <div class="flex items-center gap-4">
                                  <div class="w-12 h-12 rounded-2xl bg-slate-400/50 border border-gray-100 flex items-center justify-center">
                                        <Icon name="material-symbols:package-outline-rounded" class="text-gray-100 text-3xl" />
                                  </div>
                                  <h3 class="text-end text-3xl font-medium text-white">$89</h3>
                            </div>
                            <p class="text-gray-200 text-xl text-end">Recent Packages</p>
                      </div>
                </div>
          </div>
          <div class="w-1/4 px-3">
                <div class="h-full p-4 overlay shadow
                       bg-[url('https://img.freepik.com/free-photo/shopping-cart-with-presents_658428-64.jpg?t=st=1717409303~exp=1717412903~hmac=ef1e57a02078b8fd2419ceb6514a406d53a22fc5221264e8849fce08970214db&w=1060')]
                       w-full bg-cover bg-no-repeat bg-center">
                      <div class="relative z-10 flex flex-col justify-between h-full">
                            <div class="flex items-center gap-4">
                                  <div class="w-12 h-12 rounded-2xl bg-slate-400/50 border border-gray-100 flex items-center justify-center">
                                        <Icon name="clarity:employee-group-solid" class="text-gray-100 text-2xl" />
                                  </div>
                                  <h3 class="text-end text-3xl font-medium text-white">15</h3>
                            </div>
                            <div>
                                  <p class="text-white text-xl text-end">Total Employee</p>
                            </div>
                      </div>
                </div>
          </div>
          <div class="w-1/4 px-3">
            <div
                class="
                h-full
                p-4
                  overlay
                   shadow
                   bg-[url('https://img.freepik.com/free-photo/shopping-cart-with-presents_658428-64.jpg?t=st=1717409303~exp=1717412903~hmac=ef1e57a02078b8fd2419ceb6514a406d53a22fc5221264e8849fce08970214db&w=1060')]
                     w-full bg-cover bg-no-repeat bg-center"
            >
              <div class="relative z-10 flex flex-col justify-between h-full">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-2xl bg-slate-400/50 border border-gray-100 flex items-center justify-center">
                    <Icon name="tabler:shopping-cart-up" class="text-gray-100 text-2xl" />
                  </div>
                  <h3 class="text-end text-3xl font-medium text-white">25</h3>
                </div>
                <p class="text-white text-xl text-end">Pending Order</p>
              </div>
            </div>
          </div>

    </div>

    
    <!-- Table section (recent packages)-->
     <div class="font-playfair border shadow-md my-8">
         <h2 class="font-bold text-3xl py-5 px-3 text-gray-600">Recent Packages</h2>

         <div class="relative overflow-x-auto">
            <table class="w-full text-left rtl:text-right">
                <thead class=" text-white uppercase bg-primary tracking-wider">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            icon
                        </th>
                        <th scope="col" class="px-6 py-3">
                            name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            package discription
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            created-at
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-gray-600 border-b font-roboto " v-for="item in 5">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <Icon name="solar:gallery-download-bold"  class="text-primary text-3xl" />
                        </th>
                        <td class="px-6 py-4 text-lg font-semibold" >
                            Painting
                        </td>
                        <td class="px-6 py-4">
                            <p class="max-w-md">House & Commercial space Painting</p>
                        </td>
                        <td class="px-6 py-4">
                           3000
                        </td>
                        <td class="px-6 py-4">
                            by John King
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
     </div>

      <!-- Table section (recent services)-->
      <div class="font-playfair border shadow-md my-8">
            <h2 class="font-bold text-3xl py-5 px-3 text-gray-600">Recent Services</h2>
   
            <div class="relative overflow-x-auto">
               <table class="w-full text-left rtl:text-right">
                   <thead class=" text-white uppercase bg-primary tracking-wider">
                       <tr>
                           <th scope="col" class="px-6 py-3">
                               image
                           </th>
                           <th scope="col" class="px-6 py-3">
                               name
                           </th>
                           <th scope="col" class="px-6 py-3">
                                discription
                           </th>
                           <th scope="col" class="px-6 py-3">
                               created-at
                           </th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr class="text-gray-600 border-b font-roboto " v-for="item in 5">
                           <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               <img class="w-52 h-32" src="https://dtpainting.wpenginepowered.com/wp-content/uploads/2016/03/gallery6.jpg" alt="">
                           </th>
                           <td class="px-6 py-4 text-lg font-semibold" >
                               Painting
                           </td>
                           <td class="px-6 py-4">
                               <p class="max-w-md">House & Commercial space Painting</p>
                           </td>
                           <td class="px-6 py-4">
                               by John King
                           </td>
                       </tr>
                   </tbody>
               </table>
           </div>
        </div>

    </AppLayout>
</template>
