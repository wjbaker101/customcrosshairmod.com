import type { Config } from 'tailwindcss';

export default {

    content: [
        './components/**/*.{vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.ts',
        './app.vue',
        './error.vue',
    ],

    theme: {
        extend: {

            colors: {
                'primary': 'rgb(var(--primary) / <alpha-value>)',
                'primary-dark': 'rgb(var(--primary-dark) / <alpha-value>)',

                'background': 'rgb(var(--background) / <alpha-value>)',

                'modrinth': 'rgb(var(--modrinth) / <alpha-value>)',
                'modrinth-dark': 'rgb(var(--modrinth-dark) / <alpha-value>)',

                'curseforge': 'rgb(var(--curseforge) / <alpha-value>)',
                'curseforge-dark': 'rgb(var(--curseforge-dark) / <alpha-value>)',
            },

        },
    },

    plugins: [],

} satisfies Config;