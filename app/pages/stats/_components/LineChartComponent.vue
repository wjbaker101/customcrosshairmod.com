<template>
    <div class="relative w-full h-90">
        <div v-if="!points.length" class="flex justify-center items-center h-full text-gray-400 text-sm">
            No data available
        </div>
        <template v-else>
            <svg :viewBox="`0 0 ${width} ${height}`" preserveAspectRatio="none" class="w-full h-full overflow-visible">
                <!-- Horizontal grid lines and Y-axis labels -->
                <g v-for="tick in yTicks" :key="tick.value">
                    <line :x1="padding.left" :y1="tick.y" :x2="width - padding.right" :y2="tick.y" stroke-width="1" stroke-dasharray="4 4" class="stroke-slate-700" />
                    <text :x="padding.left - 10" :y="tick.y" text-anchor="end" dominant-baseline="middle" font-size="12" class="fill-current">
                        {{ tick.label }}
                    </text>
                </g>

                <!-- Y-axis -->
                <line
                    :x1="padding.left"
                    :y1="padding.top"
                    :x2="padding.left"
                    :y2="height - padding.bottom"
                    stroke-width="1"
                    class="stroke-slate-400"
                />

                <!-- X-axis -->
                <line
                    :x1="padding.left"
                    :y1="height - padding.bottom"
                    :x2="width - padding.right"
                    :y2="height - padding.bottom"
                    stroke-width="1"
                    class="stroke-slate-400"
                />

                <!-- X-axis notches and labels -->
                <g v-for="(tick, index) in xTicks" :key="index">
                    <line
                        :x1="tick.x"
                        :y1="height - padding.bottom"
                        :x2="tick.x"
                        :y2="height - padding.bottom + 6"
                        stroke-width="1"
                        class="stroke-slate-400"
                    />

                    <text
                        :x="tick.x"
                        :y="height - padding.bottom + 25"
                        text-anchor="middle"
                        font-size="12"
                        class="fill-current"
                    >
                        {{ tick.label }}
                    </text>
                </g>

                <!-- Graph line -->
                <path :d="path" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-orange-400" />

                <!-- Data points -->
                <g v-for="(point, index) in points" :key="index" @mouseenter="hoveredIndex = index" @mouseleave="hoveredIndex = null">
                    <!-- Larger invisible hover target -->
                    <circle :cx="point.x" :cy="point.y" r="12" fill="transparent" class="cursor-pointer" />
                    <circle
                        :cx="point.x"
                        :cy="point.y"
                        :r="hoveredIndex === index ? 6 : 3"
                        :stroke-width="hoveredIndex === index ? 2 : 0"
                        :class="hoveredIndex === index ? 'stroke-white' : ''"
                        class="fill-orange-400 transition-all"
                    />
                </g>
            </svg>

            <div
                v-if="hoveredPoint"
                :style="tooltipStyle"
                class="z-10 absolute bg-slate-900 shadow-lg p-2 rounded-md text-center whitespace-nowrap -translate-x-1/2 translate-y-[-120%] pointer-events-none"
            >
                <div class="mb-1 font-bold">
                    {{ hoveredPoint.value.toLocaleString() }}
                </div>

                <div class="text-slate-400 text-sm">
                    {{ hoveredPoint.date.format('DD MMM YYYY') }}
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

const props = defineProps<{
    data: Array<IValue>;
}>();

const width = 800;
const height = 360;

const padding = {
    top: 20,
    right: 20,
    bottom: 55,
    left: 65,
};

const plotWidth = width - padding.left - padding.right;
const plotHeight = height - padding.top - padding.bottom;

const hoveredIndex = ref<number | null>(null);

const sortedData = computed(() => props.data.toSorted((a, b) => a.retrievedAt.valueOf() - b.retrievedAt.valueOf()));

const bounds = computed(() => {
    const values = sortedData.value.map(x => x.value);

    if (!values.length) {
        return {
            minX: 0,
            maxX: 1,
            minY: 0,
            maxY: 1,
        };
    }

    const minX = sortedData.value[0]!.retrievedAt.valueOf();
    const maxX = sortedData.value.at(-1)!.retrievedAt.valueOf();

    const dataMin = Math.min(0, ...values);
    const dataMax = Math.max(0, ...values);

    const range = dataMax - dataMin || Math.abs(dataMax) * 0.1 || 1;
    const roughStep = range / 4;
    const magnitude = 10 ** Math.floor(Math.log10(roughStep));
    const normalized = roughStep / magnitude;

    const niceStep =
        normalized <= 1 ? 1 :
            normalized <= 2 ? 2 :
                normalized <= 2.5 ? 2.5 :
                    normalized <= 5 ? 5 : 10;

    const step = niceStep * magnitude;

    return {
        minX,
        maxX,
        minY: Math.floor(dataMin / step) * step,
        maxY: Math.ceil(dataMax / step) * step,
    };
});

const scaleX = (timestamp: number) => {
    const { minX, maxX } = bounds.value;

    return padding.left + ((timestamp - minX) / (maxX - minX || 1)) * plotWidth;
};

const scaleY = (value: number) => {
    const { minY, maxY } = bounds.value;

    return padding.top + (1 - (value - minY) / (maxY - minY)) * plotHeight;
};

const points = computed(() => sortedData.value.map(x => ({
    x: scaleX(x.retrievedAt.valueOf()),
    y: scaleY(x.value),
    value: x.value,
    date: x.retrievedAt,
})));

const path = computed(() => points.value
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ')
);

const yTicks = computed(() => {
    const { minY, maxY } = bounds.value;
    const step = (maxY - minY) / 4;

    return Array.from({ length: 5 }, (_, index) => {
        const value = Number((minY + step * index).toPrecision(12));

        return {
            value,
            y: scaleY(value),
            label: value.toLocaleString(undefined, {
                maximumFractionDigits: 2,
            }),
        };
    });
});

const xTicks = computed(() => {
    const { minX, maxX } = bounds.value

    return Array.from({ length: 5 }, (_, index) => {
        const timestamp = minX + (maxX - minX) * (index / 4)

        return {
            x: scaleX(timestamp),
            label: dayjs(timestamp).format('D MMM'),
        }
    })
});

const hoveredPoint = computed(() => (hoveredIndex.value === null) ? null : points.value[hoveredIndex.value] ?? null);

const tooltipStyle = computed(() => {
    if (!hoveredPoint.value) {
        return {};
    }

    return {
        left: `${hoveredPoint.value.x / width * 100}%`,
        top: `${hoveredPoint.value.y / height * 100}%`,
    };
});
</script>