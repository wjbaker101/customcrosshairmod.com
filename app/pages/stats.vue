<template>
    <h1 class="py-8 text-4xl text-center">Stats</h1>
    <div class="flex items-center border border-slate-600 rounded-md text-center cursor-pointer select-none">
        <div
            v-for="(title, identifier) in projects" @click="selectProject(identifier)"
            :class="{
                'bg-slate-600/50': identifier === selectedProject,
            }"
            class="p-4 grow"
        >
            {{ title }}
        </div>
        <div class="self-stretch grid border-slate-600 border-l text-left">
            <div
                v-for="period in periods"
                @click="selectPeriod(period)"
                :class="{
                    'bg-slate-600/50': period === selectedPeriod,
                }"
                class="px-4 cursor-pointer"
            >
                {{ period }}
            </div>
        </div>
    </div>
    <div v-for="x in data.filter(x => x.projectIdentifier === selectedProject)" :key="`${x.projectIdentifier}+${x.retrieverIdentifier}+${x.dataType}`" class="my-8">
        <h2 class="mb-4 text-xl text-center">{{ Mapper.retriever(x.retrieverIdentifier) }} {{ x.dataType}}</h2>
        <ProjectLineGraph :data="x" :period="selectedPeriod" />
    </div>
</template>

<script setup lang="ts">
import ProjectLineGraph from '~/components/pages/stats/ProjectLineGraph.vue';

const data = await getData();

const periods = ['Recent', 'All Time'];

const selectedProject = ref('custom_crosshair_mod');
const selectedPeriod = ref('Recent');

function selectProject(projectIdentifier: string) {
    selectedProject.value = projectIdentifier;
}

function selectPeriod(period: string) {
    selectedPeriod.value = period;
}
</script>