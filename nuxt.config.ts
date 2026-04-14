import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    compatibilityDate: '2026-04-01',

    modules: [
        '@nuxt/fonts',
        'nuxt-charts',
    ],

    devtools: {
        enabled: false,
    },

    css: ['~/styling/main.css'],

    pages: {
        pattern: [
            '**/*.vue',
            '!**/_components/**',
            '!**/_logic/**',
        ],
    },

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

});