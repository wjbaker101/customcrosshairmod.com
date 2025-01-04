// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    compatibilityDate: '2025-01-04',

    modules: ['@nuxt/fonts'],

    devtools: {
        enabled: false,
    },

    postcss: {
        plugins: {
            tailwindcss: {},
        },
    },

});