<template>
    <div class="features-section">
        <h1 class="my-12 text-4xl text-center">Features</h1>
        <ol>
            <li>Change size, colour, shape!</li>
            <li>
                <span class="rainbow-text">Rainbow crosshair!</span>
            </li>
            <li>Dynamic (try using a bow or sword)!</li>
            <li>Adaptive colour!</li>
            <li>Works on servers!</li>
            <li>Draw your own crosshair!</li>
            <li>5 fully-supported languages! (English/Spanish/German/Chinese/Icelandic)</li>
        </ol>
        <h2 class="my-8 text-2xl text-center">NEW FEATURE: Draw your own crosshair!</h2>
        <img
            width="854"
            height="480"
            src="https://cdn.modrinth.com/data/o1tyE5vJ/images/73aba3c4758c1eeeed3127f1d15de853e1f388f9.png"
            alt="Image showcasing the unique crosshairs possible when drawing crosshairs."
            title="NEW FEATURE: Draw your own crosshair!"
            class="mx-auto rounded-md"
        >
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.features-section {

    .rainbow-text {
        background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}
</style>