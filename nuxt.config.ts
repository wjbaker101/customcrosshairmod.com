import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    compatibilityDate: '2026-11-01',

    devtools: { enabled: false },
    telemetry: { enabled: false },

    modules: [
        '@nuxt/fonts',
    ],

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