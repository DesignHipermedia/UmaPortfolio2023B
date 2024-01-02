<script setup>
    import Botao from './Botao.vue'
    import BotaoRedondo from './BotaoRedondo.vue'
    
</script>
<template>
    <div class="abertura">
        <h1 class="titulo"> I'm DH, and I turn ideas into digital experiences that people love.</h1>
        <div class="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et.</div>
        <div class="icons">
            <Botao></Botao>
            <BotaoRedondo></BotaoRedondo>
        </div>
    </div>
</template>

<style scoped>
.abertura{
    width: 80%;
    display: flex;
    gap: 30px;
    flex-direction: column;
    margin-top: 40px;
}
.titulo{
    font-family: monospace;
    font-size: 40px;
    line-height: 1.2;
}
.texto{
    font-size: 18px;
    width: 60%;
    line-height: 1.2;
}
.icons{
    display: flex;
    gap:5px
}

</style>