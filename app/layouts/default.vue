<template>
    <main class="grid grid-cols-[1fr_min(800px,calc(100%-4rem))_1fr]">
        <div class="col-start-2 col-end-2">
            <slot></slot>
        </div>
    </main>
    <FooterComponent />
</template>

<script setup lang="ts">
</script>