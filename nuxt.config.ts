import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    compatibilityDate: '2026-11-01',

    modules: [
        '@nuxt/fonts',
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

    nitro: {
        preset: 'vercel-static',
    },

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

});