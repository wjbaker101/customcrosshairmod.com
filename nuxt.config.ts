import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    compatibilityDate: '2025-05-01',

    modules: ['@nuxt/fonts'],

    devtools: {
        enabled: false,
    },

    css: ['@/styling/main.css'],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

});