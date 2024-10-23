<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import {inject} from "vue";

const settings = inject('settings')

</script>
<template>
    <div class="w-full relative">
        <header>
            <Header/>
        </header>
        <main>
            <slot/>
        </main>
        <footer>
            <Footer/>
        </footer>

<!--        phone wp button-->
        <div class="shake w-[90%] left-[5%] bottom-6 lg:hidden flex items-center justify-center fixed z-50 bg-white py-2 shadow-lg border-2 border-primary rounded-full">
            <a class="flex items-center gap-3 justify-center" :href="`https://wa.me/${settings?.profile?.whatsapp}?text=Hello, I need painting service.`">
                <Icon name="uil:whatsapp" class="text-green-600 text-4xl md:text-8xl"/>
                <span class="font-bold uppercase">Whatsapp Us</span>
            </a>
        </div>

<!--        desktop wp button -->
        <div class="shake hidden lg:block fixed z-50 bg-white px-3 py-2 shadow-lg border-2 border-primary rounded-full bottom-6 right-6">
            <a class="flex items-center gap-3 py-0 px-3 justify-center" :href="`https://wa.me/${settings?.profile?.whatsapp}?text=Hello, I need painting service.`">
                <Icon name="uil:whatsapp" class="text-green-600 text-4xl"/>
                <span class="font-bold uppercase">Whatsapp Us</span>
            </a>
        </div>
    </div>
</template>
<style lang="scss" scoped>

.shake {
    animation: jump-shaking 2s infinite;
}

@keyframes jump-shaking {
    0% {
        transform: translateX(0)
    }
    80% {
        transform: translateY(0)
    }
    85% {
        transform: translateY(-5px)
    }
    87% {
        transform: translateY(-9px) translateX(-9px)
    }
    90% {
        transform: translateY(-12px) translateX(12px)
    }
    95% {
        transform: translateY(-9px) translateX(-9px)
    }
    97% {
        transform: translateY(-5px) translateX(5px)
    }
    100% {
        transform: translateY(0) translateX(0px);
    }
}
</style>
