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
        <LineChart
            :data="dataToDisplay"
            :categories="categories"
            :height="300"
            :xFormatter="xAxisFormatter"
            yLabel="Count"
            :x-label="xAxisLabel"
            :curve-type="CurveType.Linear"
            hide-legend
        >
            <template #tooltip="{ values }">
                <div class="!bg-(--background-dark)/80 !p-2 rounded-md shadow-xl">
                    <div class="font-bold text-lg text-center">{{ values?.value }}</div>
                    <div class="text-sm">{{ values?.retrievedAt.format('DD/MM/YYYY') }}</div>
                </div>
            </template>
        </LineChart>
    </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

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

const categories = {
    value: {
        name: `${Mapper.project(data.projectIdentifier)} ${Mapper.retriever(data.retrieverIdentifier)} ${data.dataType}`,
        color: '#ffb400',
    },
};

const xAxisFormatter = (i: number) => dataToDisplay.value[i]!.retrievedAt.format('DD/MM/YYYY');

const xAxisLabel = computed(() => `Date (${dataToDisplay.value[0]?.retrievedAt.fromNow(true)} span)`);

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

<style lang="css">
:root {
    --vis-tooltip-padding: 0;

    --vis-tooltip-background-color: transparent !important;
    --vis-tooltip-text-color: inherit !important;
    --vis-tooltip-border-color: transparent !important;

    --vis-dark-tooltip-background-color: transparent !important;
    --vis-dark-tooltip-text-color: inherit !important;
    --vis-dark-tooltip-border-color: transparent !important;
}
</style>