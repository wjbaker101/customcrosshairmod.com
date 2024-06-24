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
            <a class="flex-auto" href="https://github.com/wjbaker101/ccm-mc_latest-fabric" target="_blank">Latest Fabric</a>
            <a class="flex-auto" href="https://github.com/wjbaker101/ccm-mc_latest-forge" target="_blank">Latest Forge</a>
            <a class="flex-auto" href="https://github.com/wjbaker101/ccm-mc_1.8.9-forge" target="_blank">1.8.9 Forge</a>
        </p>
        <p>
            Icons by <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer nofollow">Lucide Icons</a>, fonts by <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer nofollow">Google Fonts</a>.
        </p>
    </footer>
</template>

<script setup lang="ts">
</script>