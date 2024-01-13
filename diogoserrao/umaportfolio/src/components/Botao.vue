<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    isWhite:{
        type: Boolean,
        default: false
    }
  }
}
</script>
<template>
    <button class="botao" :class="{white:isWhite}">
        {{ buttonText }}
    </button>
</template>
<style scoped>
    .botao{
        background-color: black;
        border-radius: 40px;
        color: white;
        padding: 14px 30px;
    }
    .white{
        background-color: white;
        color: black;
    }
</style>