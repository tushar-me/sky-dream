<script setup lang="ts">
import {ref} from 'vue'
const toggleNav = ref(false);
</script>

<template>
    <!--  phone nav bar-->

    <nav class="lg:hidden header-bg-sky-gradient px-5 relative z-50">

            <!--        menu & logo  -->
            <div class="flex items-center justify-between">

                <div>
                    <RouterLink to="/" class="">
                        <img class="w-12 h-auto" src="@/assets/images/logo.png"  alt="Logo" >
                    </RouterLink>
                </div>

                <div>
                    <!--            menu bar-->
                    <div class="elegance-hamburger-menu" @click="toggleNav = !toggleNav">
                        <div class="elegance-hamburger-menu__btn" :class="{'elegance-hamburger-menu__btn--active' : toggleNav}">
                            <span></span>
                        </div>
                    </div>

                    <div :class="{'translate-x-0': toggleNav, '-translate-x-80': !toggleNav}" class="fixed top-0 left-0 bottom-0 w-64 h-screen z-50 lg:hidden transition-all ease-in-out duration-500
                         bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border-2 border-gray-100">
                        <div class="bg-secondary">
                        </div>

                        <ul class="px-5 text-secondary">
                            <li class="pt-2">
                                <RouterLink to="/" class="">Home</RouterLink>
                            </li>
                            <li class="pt-2">
                                <RouterLink :to="{name:'Front.Services'}" class="">Services</RouterLink>
                            </li>
                            <li class="pt-2">
                                <RouterLink :to="{name:'Front.Package'}" class="">Package</RouterLink>
                            </li>
                            <li class="pt-2">
                                <RouterLink :to="{name:'Portfolio'}" class="">Portfolio</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
    </nav>
    <!--  phone nav bar end-->
</template>


