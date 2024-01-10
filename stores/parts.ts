import { defineStore } from 'pinia'
import { useRuntimeConfig } from "nuxt/app";

interface PartsApiResponse {
    // Adjust this structure based on your actual API response
    data: object[]; // Change the type according to your API response
}

export const usePartsStore = defineStore('parts', () => {
    const items = ref<object[] | undefined>();
    const config = useRuntimeConfig();

    // Adjust the setItems function to handle the specific structure of your API response
    const setItems = (data: PartsApiResponse) => (items.value = data.data);

    const getParts = async () => {
        try {
            const data = await $fetch<PartsApiResponse>(config.public.apiBackUrl + 'parts/');
            setItems(data);
        } catch (error) {
            console.error('Error fetching parts:', error);
        }
    };

    return { items, getParts };
});