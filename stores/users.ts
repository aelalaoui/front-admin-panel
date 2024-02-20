import axios from "axios";
import { defineStore } from 'pinia'
import { useRuntimeConfig } from "nuxt/app";

interface User {
    uuid: string;
    name: string;
    email: string;
    email_verified_at: string;
}

interface UserApiResponse {
    data: User;
}

export const useUserStore = defineStore('users', () => {
    const config = useRuntimeConfig();
    const user = ref<User | undefined>();

    const setItems = (data: UserApiResponse) => { user.value = data.data };

    const storeUser = async (opts: object) => {
        try {
            await axios.post<UserApiResponse>(
                config.public.apiBackUrl
                + 'users', opts
            );
        } catch (error) {
            console.error('Error fetching parts:', error);
        }
    };

    return { storeUser };
});
