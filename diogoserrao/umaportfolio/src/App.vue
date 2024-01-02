<script setup>
import Cabecalho from './components/Cabecalho.vue'
import Abertura from './components/Abertura.vue'
</script>

<template>
  <div class="conteudo">
  <Cabecalho></Cabecalho>
  <Abertura></Abertura>
  </div>
</template>

<style scoped>
.conteudo{
  max-width: 1000px;
  margin: 0 auto
}
</style>
