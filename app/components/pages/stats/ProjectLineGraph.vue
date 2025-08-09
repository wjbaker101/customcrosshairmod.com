<template>
    <div class="my-8">
        <h2 class="mb-4 text-xl text-center">{{ Mapper.retriever(data.retrieverIdentifier) }} {{ data.dataType}}</h2>
        <LineChart
            :data="dataToDisplay"
            :categories="categories"
            :height="300"
            :xFormatter="xAxisFormatter"
            yLabel="Count"
            :x-label="xAxisLabel"
            :curve-type="CurveType.Linear"
            hide-legend
        />
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
</script>