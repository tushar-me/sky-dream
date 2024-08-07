import '@/assets/css/app.css'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import AppLayout from '@/components/Layouts/AppLayout.vue';
import VSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import 'flowbite';
import '../../node_modules/flowbite-vue/dist/index.css'
import App from './App.vue'
import router from './router/index.js'
import Icon from '@/components/Icon.vue';
import Toast, {useToast} from "vue-toastification";
import "vue-toastification/dist/index.css";
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import {useAuthStore} from "@/stores/useAuthStore.js";
// import {useAuthStore} from "@/stores/useAuthStore.js";
// const authStore = useAuthStore()
const toast = useToast();

const app = createApp(App)
app.use(createPinia())
    .use(router)
    .component('AppLayout', AppLayout)
    .component("Select", VSelect)
    .component('Icon', Icon)
    .use(Toast, {
        position: "bottom-right",
        timeout: 2254,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.32,
        showCloseButtonOnHover: true,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
    })
    .mount('#app')

app.config.errorHandler = async (err, instance, info) => {
    const authStore = useAuthStore()

    switch (err?.response?.status) {
        case 200:
            toast('Hello World.!')
            break;
        case 500:
            toast(err.message)
            break;
        case 422:
            toast.error(err.message)
            break;
        case 401:
            toast.error(err.message)
            await authStore.logout()
            break;
        default:
        // toast.error(err.message)
    }
}
