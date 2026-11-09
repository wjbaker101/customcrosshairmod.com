<template>
    <div class="my-8">
        <h2 class="mb-2 text-xl text-center">{{ Mapper.retriever(data.retrieverIdentifier) }} {{ data.dataType}}</h2>
        <div class="mb-4 text-sm text-center">
            <strong class="font-bold">Latest: </strong>
            <span>{{ formatNumber(data.values.at(-1)!.value) }}</span>
            (<span
                :class="{
                    'text-green-600': latestDiff > 0,
                    'text-red-600': latestDiff < 0,
                }"
            >{{ latestDiffFormatted }}</span>)
        </div>
        <LineChartComponent :data="dataToDisplay" />
    </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

import LineChartComponent from '~/pages/stats/_components/LineChartComponent.vue';

const { data, period } = defineProps<{
    data: IProjectData;
    period: PeriodIdentifier;
}>();

const dataToDisplay = computed(() => {
    if (period === 'recent') {
        return data.values.filter(x => x.retrievedAt.isAfter(dayjs().subtract(1, 'months')));
    }

    return data.values.filter(x => x.retrievedAt);
});

const latestDiff = computed(() => {
    return data.values.at(-1)!.value - data.values.at(-2)!.value;
});

const latestDiffFormatted = computed(() => {
    const latest = formatNumber(Math.abs(latestDiff.value));

    if (latestDiff.value < 0) {
        return `-${latest}`;
    }

    return `+${latest}`;
});
</script>