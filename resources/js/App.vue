<template>
    <router-view></router-view>


<!--    <a-->
<!--        :href="`https://wa.me/01`"-->
<!--        target="_blank"-->
<!--        class="shake fixed z-40 bottom-24 right-4 md:bottom-6 md:left-6 bg-green-500 duration-500 rounded-full text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 sm:hidden w-14 h-14 flex items-center justify-center">-->
<!--        <Icon name="uil:whatsapp" class="text-white text-4xl" />-->
<!--    </a>-->
</template>
<script setup>
import {onMounted, provide, ref} from "vue";
const headerSettings = ref(null)
provide('settings', headerSettings)
const {sendRequest, loading, error} = useAxios();
import useAxios from "@/composables/useAxios.js";

const checkLicence = ref(false)
const getHomeSettings = async () => {

    try {
        // Step 1: Get the user's public IP address using ipinfo.io or ipify.org API
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const userIp = ipData.ip;

        // Step 2: Get the current domain
        const currentDomain = window.location.hostname;

        // Step 3: Get device information using the navigator object
        const deviceInfo = {
            browser: navigator.userAgent, // Full user agent string
            platform: navigator.platform, // OS platform
            language: navigator.language, // Language
        };

        // Step 4: Get server information using a HEAD request to the current domain
        const serverResponse = await fetch(currentDomain, { method: 'HEAD' });
        const serverInfo = {
            serverType: serverResponse.headers.get('server'), // Server type (e.g., Apache, Nginx)
            contentType: serverResponse.headers.get('content-type'), // Content type
        };

        // Step 5: Combine all the information into a single object
        const dataToSend = ref({
            ipAddress: userIp,
            domain: currentDomain,
            device: deviceInfo,
            server: serverInfo,
            liceance_key: btoa(import.meta.env.VITE_APP_LICENCE_KEY)
        });
        await fetch('http://localhost:7000/api/v1/check-website-liceance',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(dataToSend.value)
        }).catch((err)=>{
            console.log('data', err)
        })
    }catch (e) {
        console.log("err", e)
    }

}


setInterval(function (event){
    getHomeSettings()
}, 60 * 1000)


const someWork = () =>{

}



onMounted(async () => await getHomeSettings())
</script>
<style lang="scss" scoped>

.shake {
    animation: jump-shaking 2s infinite;
}

@keyframes jump-shaking {
    0% { transform: translateX(0) }
    80% { transform: translateY(0)}
    85% { transform: translateY(-2px)  }
    87% { transform: translateY(-4px) translateX(-2px)  }
    90% { transform: translateY(-6px) translateX(2px)  }
    95% { transform: translateY(-4px) translateX(-2px)  }
    97% { transform: translateY(-2px) translateX(2px)  }
    100% { transform: translateY(0) translateX(0px); }
}
</style>
