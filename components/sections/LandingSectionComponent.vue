<template>
    <div class="relative grid h-screen place-items-center">
        <div class="text-center">
            <h1 class="mb-2 text-3xl font-bold">Custom Crosshair Mod</h1>
            <p class="mb-8"><small>{{ topVersions.join(' , ') }} + more!</small></p>
            <a href="https://www.curseforge.com/minecraft/mc-mods/custom-crosshair-mod/files" target="_blank" rel="noopener noreferrer nofollow">
                <ButtonComponent>
                    <DownloadIcon class="mr-2 inline-block align-middle" />
                    <span class="align-middle">OFFICIAL DOWNLOAD</span>
                </ButtonComponent>
            </a>
            <CrosshairComponent class="my-8" />
            <SupportComponent />
        </div>
        <div class="absolute bottom-2 text-center">
            <p>See more below!</p>
            <ArrowDownIcon class="inline-block animate-bounce" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowDownIcon, DownloadIcon } from 'lucide-vue-next';

const topVersions = [
    '1.21',
    '1.18.2',
    '1.16.5',
    '1.12',
    '1.8.9',
    '1.7.10',
];
</script>