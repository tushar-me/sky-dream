import {ref} from 'vue';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
    withCredentials: true,
    xsrfHeaderName: "X-XSRF-TOKEN",
    Accept: "application/json",
    "Content-Type": "multipart/form-data"
});

export default function useAxios() {
    const getAuthStore = async () => {
        const {useAuthStore} = await import('@/stores/useAuthStore.js');
        return useAuthStore();
    }

    const loading = ref(false);
    const error = ref(null);

    const sendRequest = async (config) => {
        loading.value = true;
        error.value = null
        try {
            const authStore = await getAuthStore();
            return await axiosInstance({
                ...config,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${authStore?.user?.token}`
                }
            });
        } catch (err) {
            error.value = err;
            throw err;
        } finally {
            loading.value = false;
        }
    };

    return {
        loading,
        error,
        sendRequest,
    };
}
