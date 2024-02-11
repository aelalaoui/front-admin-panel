import { defineStore } from 'pinia'
import { useRuntimeConfig } from "nuxt/app";

interface Part {
    id: number;
    uuid: string;
    ref: string;
    designation: string;
    quantity: number;
    price_unit: string;
    created_at: string;
    updated_at: string;
}

interface Link {
    url: string | null;
    label: string;
    active: boolean;
}

interface meta {
    current_page: number;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

interface PartsApiResponse {
    data: Part[];
    links: Link[];
    meta: meta;
}

export const usePartsStore = defineStore('parts', () => {
    const items = ref<Part[] | undefined>();
    const links = ref<Link[] | undefined>();
    const meta = ref<meta | undefined>();
    const config = useRuntimeConfig();

    const setItems = (data: PartsApiResponse) => {
        items.value = data.data;
    };
    const setLinks = (data: PartsApiResponse) => {
        links.value = data.links;
    };
    const setMeta = (data: PartsApiResponse) => {
        meta.value = data.meta;
    };

    const getParts = async (page = 1, itemsPerPage = 10) => {
        try {
            const data = await $fetch<PartsApiResponse>(
                config.public.apiBackUrl
                + 'parts?page=' + page
                + '&per_page=' + itemsPerPage
            );
            setItems(data);
            setLinks(data);
            setMeta(data);
        } catch (error) {
            console.error('Error fetching parts:', error);
        }
    };

    return { items, links, meta, getParts };
});
