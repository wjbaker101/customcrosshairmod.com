<template>
    <div class="pre-made-crosshairs-section">
        <h1 class="my-12 text-center text-4xl">Pre-Made Crosshairs</h1>
        <p class="mb-4">Place all files in your .minecraft folder. Extract any .zip files in the same directory.</p>
        <h2 class="my-8 text-2xl">Made by Players*</h2>
        <ol class="numbered-list">
            <li class="flex items-center gap-4 pr-4">
                <a href="/static/pre-made-crosshairs/OfficialGabes/crosshair_config.ccmcfg" download class="shrink">
                    <ButtonComponent class="primary">
                        <DownloadIcon class="mr-2 inline-block align-middle" />
                        <span class="align-middle">Download</span>
                    </ButtonComponent>
                </a>
                <div class="grow">OfficialGabes</div>
                <div class="shrink">
                    <img width="70" height="70" src="/static/pre-made-crosshairs/OfficialGabes/OfficialGabes.jpg" alt="Custom drawn crosshair in the shape of a blue arrow." class="rounded-md">
                </div>
            </li>
            <li class="flex items-center gap-4 pr-4">
                <a href="/static/pre-made-crosshairs/AlonH100/crosshair_config.ccmcfg" download class="shrink">
                    <ButtonComponent class="primary">
                        <DownloadIcon class="mr-2 inline-block align-middle" />
                        <span class="align-middle">Download</span>
                    </ButtonComponent>
                </a>
                <div class="grow">AlonH100</div>
                <div class="shrink">
                    <img width="70" height="70" src="/static/pre-made-crosshairs/AlonH100/AlonH100.jpg" alt="Custom drawn crosshair in the shape of a blue arrow." class="rounded-md">
                </div>
            </li>
        </ol>
        <p><small>* Feel free to post on an <strong>official</strong> forum or DM me to have your crosshair featured!</small></p>
        <h2 class="my-8 text-2xl">More Crosshairs</h2>
        <ol class="numbered-list">
            <li class="flex items-center gap-4 pr-4">
                <a href="/static/pre-made-crosshairs/blue-arrow-crosshair.zip" download class="shrink">
                    <ButtonComponent class="primary">
                        <DownloadIcon class="mr-2 inline-block align-middle" />
                        <span class="align-middle">Download</span>
                    </ButtonComponent>
                </a>
                <div class="grow">Blue feathered arrow</div>
                <div class="shrink">
                    <img width="70" height="70" src="/static/pre-made-crosshairs/blue-arrow-crosshair.jpg" alt="Custom drawn crosshair in the shape of a blue arrow." class="rounded-md">
                </div>
            </li>
            <li class="flex items-center gap-4 pr-4">
                <a href="/static/pre-made-crosshairs/green-circle-diagonal-cross-dot.zip" download class="shrink">
                    <ButtonComponent class="primary">
                        <DownloadIcon class="mr-2 inline-block align-middle" />
                        <span class="align-middle">Download</span>
                    </ButtonComponent>
                </a>
                <div class="grow">Green circle around a diagonal cross and dot</div>
                <div class="shrink">
                    <img width="70" height="70" src="/static/pre-made-crosshairs/green-circle-diagonal-cross-dot.jpg" alt="Custom drawn crosshair in the shape of a green circle around a diagonal cross and dot." class="rounded-md">
                </div>
            </li>
        </ol>
    </div>
</template>

<script setup lang="ts">
import { DownloadIcon } from 'lucide-vue-next';
</script>