<template>
    <div class="crosshair relative mx-auto my-8 size-[260px]">
        <div class="top"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="left"></div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.crosshair {
    $bar-size: 1.5rem;

    & > div {
        position: absolute;
        border: 2px solid #000;
        border-radius: 0.5rem;
        animation: rainbow 5s linear infinite;
    }

    @keyframes rainbow {
        0%   { background-color: #ff0000; }
        10%  { background-color: #ff9a00; }
        20%  { background-color: #d0de21; }
        30%  { background-color: #4fdc4a; }
        40%  { background-color: #3fdad8; }
        50%  { background-color: #2fc9e2; }
        60%  { background-color: #1c7fee; }
        70%  { background-color: #5f15f2; }
        80%  { background-color: #ba0cf8; }
        90%  { background-color: #fb07d9; }
        100% { background-color: #ff0000; }
    }

    .top,
    .bottom {
        width: $bar-size;
        height: calc(50% - 1rem);
    }

    .right,
    .left {
        width: calc(50% - 1rem);
        height: $bar-size;
    }

    .top {
        left: 50%;
        top: 0;
        transform: translateX(-50%);
    }

    .right {
        top: 50%;
        right: 0;
        transform: translateY(-50%);
    }

    .bottom {
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }

    .left {
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }
}
</style>