<script setup>
import Cabecalho from './components/Cabecalho.vue'
import Abertura from './components/Abertura.vue'
import AberturaTexto from './components/AberturaTexto.vue'
</script>

<template>
  <div class="conteudo">
  <Cabecalho></Cabecalho>
  <Abertura></Abertura>
  <AberturaTexto></AberturaTexto>
  </div>
</template>

<style scoped>
.conteudo{
  max-width: 1000px;
  margin: 0 auto
}
</style>
