import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    compatibilityDate: '2025-08-01',

    modules: [
        '@nuxt/fonts',
        'nuxt-charts',
    ],

    devtools: {
        enabled: false,
    },

    css: ['~/styling/main.css'],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

});