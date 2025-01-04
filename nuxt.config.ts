// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules: ["@nuxt/fonts"],

    devtools: {
        enabled: false,
    },

    postcss: {
        plugins: {
            tailwindcss: {},
        },
    },

});