<template>
    <footer class="p-2 text-sm text-slate-400 space-y-4">
        <div class="mx-auto my-8 table text-center">
            <SupportComponent />
        </div>
        <p>
            Copyright &copy; Sparkless101,
            <br>
            All rights reserved 2022 &mdash; {{ new Date().getFullYear() }}.
        </p>
        <p class="space-x-2">
            <span class="flex-auto">Source Code:</span>
            <NuxtLink class="flex-auto" to="https://github.com/wjbaker101/ccm-mc_latest-fabric" target="_blank">Latest Fabric</NuxtLink>
            <NuxtLink class="flex-auto" to="https://github.com/wjbaker101/ccm-mc_latest-forge" target="_blank">Latest Forge</NuxtLink>
            <NuxtLink class="flex-auto" to="https://github.com/wjbaker101/ccm-mc_1.8.9-forge" target="_blank">1.8.9 Forge</NuxtLink>
        </p>
        <p>
            Icons by <NuxtLink to="https://lucide.dev/" target="_blank">Lucide</NuxtLink> and <NuxtLink to="https://simpleicons.org" target="_blank">Simple Icons</NuxtLink>, fonts by <NuxtLink to="https://fonts.google.com/" target="_blank">Google Fonts</NuxtLink>.
        </p>
    </footer>
</template>

<script setup lang="ts">
</script>