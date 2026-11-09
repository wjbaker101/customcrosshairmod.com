<template>
    <div class="relative mx-auto size-65 _crosshair">
        <div class="_top"></div>
        <div class="_right"></div>
        <div class="_bottom"></div>
        <div class="_left"></div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="css">
._crosshair {
    --bar-size: 1.5rem;
    
    > div {
        position: absolute;
        border: 2px solid #000;
        border-radius: 0.5rem;
        animation: _rainbow 5s linear infinite;
    }
}

@keyframes _rainbow {
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

._top,
._bottom {
    width: var(--bar-size);
    height: calc(50% - 1rem);
}

._right,
._left {
    width: calc(50% - 1rem);
    height: var(--bar-size);
}

._top {
    left: 50%;
    top: 0;
    transform: translateX(-50%);
}

._right {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}

._bottom {
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
}

._left {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}
</style>