import { defineStore } from 'pinia'

export const usePartsStore = defineStore('parts', {
    state: () => ({
        items: [
            {
                name: 'Nebula GTX 3080',
                image: '1.png',
                stock: true,
            },
            {
                name: 'Galaxy RTX 3080',
                image: '2.png',
                stock: false,
            },
            {
                name: 'Orion RX 6800 XT',
                image: '3.png',
                stock: true,
            },
            {
                name: 'Vortex RTX 3090',
                image: '4.png',
                stock: true,
            },
            {
                name: 'Cosmos GTX 1660 Super',
                image: '5.png',
                stock: false,
            },
            {
                name: 'Nebula GTX 3080',
                image: '1.png',
                stock: true,
            },
            {
                name: 'Galaxy RTX 3080',
                image: '2.png',
                stock: false,
            },
            {
                name: 'Orion RX 6800 XT',
                image: '3.png',
                stock: true,
            },
            {
                name: 'Vortex RTX 3090',
                image: '4.png',
                stock: true,
            },
            {
                name: 'Cosmos GTX 1660 Super',
                image: '5.png',
                stock: false,
            },
            {
                name: 'Nebula GTX 3080',
                image: '1.png',
                stock: true,
            },
            {
                name: 'Galaxy RTX 3080',
                image: '2.png',
                stock: false,
            },
            {
                name: 'Orion RX 6800 XT',
                image: '3.png',
                stock: true,
            },
            {
                name: 'Vortex RTX 3090',
                image: '4.png',
                stock: true,
            },
            {
                name: 'Cosmos GTX 1660 Super',
                image: '5.png',
                stock: false,
            },
        ],
    }),
    actions: {
        async getParts() {
            const data = await $fetch('http://localhost:4000/cart')
            //this.items = data
        },
    }
})