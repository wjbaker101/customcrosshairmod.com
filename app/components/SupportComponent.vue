<template>
    <p class="mb-4 text-slate-200">Please support the mod:</p>
    <a href="https://www.patreon.com/bePatron?u=66431720" class="flex-auto" target="_blank" rel="noopener noreferrer nofollow">
        <ButtonComponent class="!bg-[#ff424d] text-black hover:!bg-[#ae2730] focus:!outline-[#ff424d]">
            <PatreonIcon class="mr-2 inline-block align-middle" />
            <span class="align-middle">Patreon</span>
        </ButtonComponent>
    </a>
</template>

<script setup lang="ts">
import { PatreonIcon } from 'vue3-simple-icons';
</script>