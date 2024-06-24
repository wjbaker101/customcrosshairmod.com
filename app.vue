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
</style>