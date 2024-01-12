<script setup>
import BotaoRedondo from "./BotaoRedondo.vue"
</script>
<template>
    <div class="tudo">
        <div class="preto"></div>
        <div class="corpo">
            <div class="cima">
                <div class="cabecalho">
                    <div class="textpequeno">ReMarket</div>
                    <h1 class="textgrande">Helping ReMarket give their users the best online experience.</h1>
                </div>
                <img class="imagem" src="/subimagem1.png">
            </div>
            <div class="baixo">
            </div>
        </div>
        <div class="partebaixo">
            <div class="website">
                <div class="sublinhado">Visit website</div>
                <BotaoRedondo is-small></BotaoRedondo>
            </div>
            <div class="textogrande">
                <div class="texto">
                    <div class="topicos">
                        <h1 class="titulo">About ReMarket</h1>
                        <div class="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                        <h1 class="titulo">The project</h1>
                        <div class="descricao">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>  
                    </div>
                    <h1 class="titulo">Testimonials</h1>
                        <div class="testimonials">
                                <div class="testcontainer">
                                    <div class="header">
                                        <div class="headertxt">anonimo1</div>
                                        <div class="headerft"></div>
                                    </div>
                                    <div class="txt">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
                                </div>
                                <div class="testcontainer">
                                    <div class="header">
                                        <div class="headertxt">anonimo2</div>
                                        <div class="headerft"></div>
                                    </div>
                                    <div class="txt">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
                                </div>

                            <div class="testcontainer">
                                <div class="header">
                                    <div class="headertxt">anonimo3</div>
                                    <div class="headerft"></div>
                                </div>
                                <div class="txt">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
                            </div>
                            <div class="testcontainer">
                                <div class="header">
                                    <div class="headertxt">anonimo4</div>
                                    <div class="headerft"></div>
                                </div>
                                <div class="txt">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

.corpo{
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 20px;
}
.preto{
    background-color: red;
    height: 100px;
    margin: 20px;
    width: 100%;
}
.textpequeno{
    font-family: monospace;
}
.textgrande{
    font-size: 40px;
    font-family: monospace;
    margin: 40px;
    margin-left: 0px;
}
.imagem{
    width: 100%;
}
.cima{
    border-bottom: 3px solid grey;
}
.website{
    display: flex;
}
.partebaixo{
    display: flex;
    justify-content: end;
}
.topicos{
    display: flex;
    gap: 20px;
    flex-direction: column;
}
.titulo{
    font-weight: bold;
}
.textogrande{
    width: 60%;
}
.testimonials{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
.header{
    display: flex;
    justify-content: end;
}
.headertxt{
    border-bottom: 3px solid black;
}
</style>