<script setup>

</script>

<template>
  <div class="cabecalho">
    <div class="esquerda">
        
        <img class ="foto" src="/foto.jpg" >
        © DH Smit
    </div>
    <div class="direita">
        <div class="menu">
            <div class="item ativo">about</div>
            <div class="item">work </div>
            <div class="item">solutions </div>
        </div>
        <div class="icons">
            <div class="icon lua"></div>
            <div class="icon "></div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.cabecalho{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
}
.esquerda{
    display: flex;
    align-items: center;
    gap: 20px;
}
.foto{
    border-radius: 50%;
    height: 200px;
    width: 200px;
    object-fit: none;
}
.direita{
    display: flex;
    gap: 50px;
    
}
.menu{
    border:1px solid gray;
    border-radius: 55px;
    display: flex;
    height: 62px;
}
.item{
    padding: 20px;
    font-size: 20px;
    padding-left: 50px;
    padding-right: 50px;
}
.ativo{
    border-radius: 55px;
    border-right: solid 1px grey;
    
}
.icons{
    display: flex;
    gap: 10px;
}
.icon{
    border-radius: 50%;
    border: 1px solid gray;
    width: 62px;
    height: 62px;
}
.lua{
    background-color: black;
}



</style>