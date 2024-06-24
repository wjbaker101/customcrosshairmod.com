import type { Config } from 'tailwindcss';

export default {

    content: [
        './components/**/*.{vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{ts}',
        './app.vue',
        './error.vue',
    ],

    theme: {
        extend: {

            colors: {
                'primary': 'rgb(var(--primary) / <alpha-value>)',
                'primary-dark': 'rgb(var(--primary-dark) / <alpha-value>)',

                'background': 'rgb(var(--background) / <alpha-value>)',
            },

        },
    },

    plugins: [],

} satisfies Config;