<script setup>
const props = defineProps({
    isSmall:{
        type: Boolean,
        default: false
    }
})
    console.log(props["isSmall"])
</script>
<template>
    <button class="botao" :class="{small: isSmall}">
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
    </button>
</template>
<style scoped>
    .botao{
        background-color: blueviolet;
        border: 0;
        border-radius: 50%;
        height: 60px;
        width: 60px;
        color: white;
        font-size: large;
    }
    .small{
        height: 30px;
        width: 30px;
    }
</style>