<template>
    <div class="relative grid h-screen place-items-center">
        <div class="text-center">
            <h1 class="mb-2 text-3xl font-bold">Custom Crosshair Mod</h1>
            <p class="mb-4"><small>{{ topVersions.join(' , ') }} + more!</small></p>
            <p class="mb-2">DOWNLOAD:</p>
            <div class="mb-4 space-x-2">
                <a href="https://www.curseforge.com/minecraft/mc-mods/custom-crosshair-mod" target="_blank">
                    <ButtonComponent class="text-black !bg-curseforge hover:!bg-curseforge-light focus:!outline-curseforge">
                        <CurseForgeIcon class="mr-2 inline-block align-middle" />
                        <span class="align-middle">CurseForge</span>
                    </ButtonComponent>
                </a>
                <a href="https://modrinth.com/mod/custom-crosshair-mod" target="_blank">
                    <ButtonComponent class="!bg-modrinth hover:!bg-modrinth-dark focus:!outline-modrinth">
                        <ModrinthIcon class="mr-2 inline-block align-middle" />
                        <span class="align-middle">Modrinth</span>
                    </ButtonComponent>
                </a>
            </div>
            <p class="mb-4">Supports: <strong>{{ loaders.join(', ') }}</strong></p>
            <CrosshairComponent class="my-12" />
            <SupportComponent />
        </div>
        <div class="absolute bottom-2 text-center">
            <p>See more below!</p>
            <ArrowDownIcon class="inline-block animate-bounce" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowDownIcon } from 'lucide-vue-next';
import { CurseForgeIcon, ModrinthIcon } from 'vue3-simple-icons';

const topVersions = [
    '1.21.5',
    '1.18.2',
    '1.16.5',
    '1.12',
    '1.8.9',
    '1.7.10',
];

const loaders = [
    'Fabric',
    'Forge',
    'NeoForge',
];
</script>