<script setup>
import Botao from "./Botao.vue"
</script>
<template>
<div class="tudo">
    <div class="cabecalho">
        <h1 class="texto">The work I do</h1>
        <div class="botoes">
            <Botao buttonText="All"></Botao>
            <Botao isWhite buttonText="Desing"></Botao>
            <Botao isWhite buttonText="Development"></Botao>
        </div>
    </div>
    <div class="imagens"> 
        <div class="coluna">
            <div class="componente">
                <img class="imagem" src="/subimagem1.png">
                <div class="principal">UIDeli.com</div>
                <div class="descricao">Desing + Development 2023</div>
            </div>
            <div class="componente">
                <img class="imagem" src="/imagem3.png">
                <div class="principal">Switch Black</div>
                <div class="descricao">Desing 2023</div>
            </div>
            <div class="componente">
                <img class="imagem" src="/imagem5.png">
                <div class="principal">Another One</div>
                <div class="descricao">Development 2023</div>
            </div>
        </div>
        <div class="coluna">
            <div class="componente">
                <img class="imagem" src="/imagem2.png">
                <div class="principal">Koto Studio</div>
                <div class="descricaoe">Development 2023</div>
            </div>
            <div class="componente">
                <img class="imagem" src="/imagem4.jpg">
                <div class="principal">ReMarket</div>
                <div class="descricao">Development 2023</div>
            </div>
            <div class="componente">
                <img class="imagem" src="/imagem6.jpg">
                <div class="principal">Blender Renders</div>
                <div class="descricao">Desing + Development 2023</div>
            </div>
        </div>
    </div>
    <div class="cabecalhofundo">
        <div class="botao">Load</div>
    </div>
</div>   
</template>
<style scoped>
.tudo{
    display: flex;
    border: 0;
    border-top: 2px solid gray;
    flex-direction: column;
}    
.cabecalho{
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 40px;
}
.cabecalhofundo{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
    margin-bottom: 70px;
}
.texto{
    font-size: 40px;
    font-family: monospace;
    margin: 40px;
    margin-left: 0;
}
.botoes{
    display: flex;
    gap: 10px;
}   
.imagens{
    display: flex;
    flex-direction: row;
    border: 30px;
    justify-content: space-between;
    width: auto;
    gap: 80px;
}
.coluna{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 40px;
}

.componente{
    border-top: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px;
    margin-left: 0;
}
.imagem{
    width: 100%;
}
.principal{
    font-family: monospace;
    font-size: 40px;
    font-weight: bold;
    padding: 20px;
    padding-left: 0;
}
.descricao{
    font-family: system-ui;
}

</style>