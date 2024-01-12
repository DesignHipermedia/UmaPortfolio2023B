<script setup>
import Cabecalho from './components/Cabecalho.vue'
import Abertura from './components/Abertura.vue'
import AberturaTexto from './components/AberturaTexto.vue'
import Imagens from './components/Imagens.vue'
import Partepreta from './components/Partepreta.vue'
import SegundaPagina from './components/SegundaPagina.vue'
</script>

<template>
  <div class="conteudo">
  <Cabecalho></Cabecalho>
  <Abertura></Abertura>
  <AberturaTexto></AberturaTexto>
  <Imagens></Imagens>
  </div>
  <Partepreta></Partepreta>
  <div class="pag2">
  <SegundaPagina></SegundaPagina>
  </div>
</template>

<style scoped>
.conteudo{
  max-width: 1000px;
  margin: 0 auto
}
.pag2{
  max-width: 1000px;
  margin: 0 auto
}
</style>
