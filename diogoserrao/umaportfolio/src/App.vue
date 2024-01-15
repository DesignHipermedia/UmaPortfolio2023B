<template>
  <div
    :class="theme === 'light' ? 'light-theme' : 'dark-theme'"
    class="main-body"
  >
    <div class="conteudo">
      <div class="cabecalho">
        <div class="esquerda">
          <a href="/"><img class="foto" src="/foto.jpg" /></a>
          © DH Smit
        </div>
        <div class="direita">
          <div class="menu">
            <div class="item ativo">about</div>
            <div class="item">work</div>
            <div class="item">solutions</div>
          </div>
          <div class="icons">
            <button @click="changeTheme" class="icon lua">
              <font-awesome-icon icon="fa-solid fa-moon" />
            </button>
            <button @click="changeTheme" class="icon sol">
              <font-awesome-icon icon="fa-solid fa-sun" />
            </button>
          </div>
        </div>
      </div>
      <RouterView></RouterView>
    </div>
    <Partepreta></Partepreta>
  </div>
</template>

<script setup>
import {ref} from "vue"
import Partepreta from "./components/Partepreta.vue";
import { RouterView } from "vue-router";

let theme = ref("light");

const changeTheme = ()=> {
  console.log("I am changing theme");
  theme.value = theme.value === "dark" ? "light" : "dark";
}
</script>

<style>
.conteudo {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
}
.light-theme {
  background-color: white;
  color: black;
}
.dark-theme {
  background-color: black;
  color: white;
}
.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
}
.esquerda {
  display: flex;
  align-items: center;
  gap: 20px;
}
.foto {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  object-fit: none;
}
.direita {
  display: flex;
  gap: 50px;
}
.menu {
  border: 1px solid gray;
  border-radius: 55px;
  display: flex;
  height: 62px;
}
.item {
  padding: 20px;
  font-size: 20px;
  padding-left: 50px;
  padding-right: 50px;
}
.ativo {
  border-radius: 55px;
  border-right: solid 1px grey;
}
.icons {
  display: flex;
  gap: 10px;
}
.icon {
  border-radius: 50%;
  border: 1px solid gray;
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lua {
  background-color: black;
  color: white;
}
.sol {
  background-color: white;
  color: black;
}
@media only screen and (max-width: 760px) {
.direita{
  display: none;
}


}
</style>
