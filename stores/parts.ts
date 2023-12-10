import { defineStore } from 'pinia'
import { useRuntimeConfig } from "nuxt/app";

export const usePartsStore = defineStore('parts', () => {
    const items = ref();
    const config = useRuntimeConfig();

    const setItems = ({ data }: { data?: object }) => (items.value = data);

    const getParts = async () => {
        const data = await $fetch<any>(config.public.apiBackUrl + 'parts/');
        setItems(data);
    };


    return { items, getParts };
})

// export const usePartsStore = defineStore('parts', {
//     state: () => ({
//         items: [
//             {
//                 name: 'Nebula GTX 3080',
//                 image: '1.png',
//                 rating: 5,
//                 stock: true,
//             },
//             {
//                 name: 'Galaxy RTX 3080',
//                 image: '2.png',
//                 stock: false,
//             },
//             {
//                 name: 'Orion RX 6800 XT',
//                 image: '3.png',
//                 stock: true,
//             },
//             {
//                 name: 'Vortex RTX 3090',
//                 image: '4.png',
//                 stock: true,
//             },
//             {
//                 name: 'Cosmos GTX 1660 Super',
//                 image: '5.png',
//                 stock: false,
//             },
//             {
//                 name: 'Nebula GTX 3080',
//                 image: '1.png',
//                 stock: true,
//             },
//             {
//                 name: 'Galaxy RTX 3080',
//                 image: '2.png',
//                 stock: false,
//             },
//             {
//                 name: 'Orion RX 6800 XT',
//                 image: '3.png',
//                 stock: true,
//             },
//             {
//                 name: 'Vortex RTX 3090',
//                 image: '4.png',
//                 stock: true,
//             },
//             {
//                 name: 'Cosmos GTX 1660 Super',
//                 image: '5.png',
//                 stock: false,
//             },
//             {
//                 name: 'Nebula GTX 3080',
//                 image: '1.png',
//                 stock: true,
//             },
//             {
//                 name: 'Galaxy RTX 3080',
//                 image: '2.png',
//                 stock: false,
//             },
//             {
//                 name: 'Orion RX 6800 XT',
//                 image: '3.png',
//                 stock: true,
//             },
//             {
//                 name: 'Vortex RTX 3090',
//                 image: '4.png',
//                 stock: true,
//             },
//             {
//                 name: 'Cosmos GTX 1660 Super',
//                 image: '5.png',
//                 stock: false,
//             },
//         ],
//     }),
//     actions: {
//         async getParts() {
//             const config = useRuntimeConfig();
//             console.log(config);
//             const data = await $fetch(config.API_BACK_URL + 'parts/')
//             //this.items = data
//             console.log(data);
//         },
//     }
//})