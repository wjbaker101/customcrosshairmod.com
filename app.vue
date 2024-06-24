<template>
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@use '@/styling/main' as *;

html,
body,
#__nuxt {
    @apply h-full;
}

*,
*::before,
*::after {
    transition: all 0.2s, font-size 0s, letter-spacing 0s;
}

body {
    @apply bg-background text-slate-200;
    font-family: K2D, sans-serif;
}

ol {
    @apply border-r-2 border-primary rounded-r-md space-y-2;
    counter-reset: counter;

    & > li::before {
        content: counter(counter);
        counter-increment: counter;
        display: inline-block;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        text-align: center;
        line-height: 1.8rem;
        border: 1px solid #ffb400;
        border-radius: 50%;
    }
}
</style>