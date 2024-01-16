<script setup>
import Botao from "./Botao.vue"
import BotaoRedondo from "./BotaoRedondo.vue";
</script>
<template>
    <div class="tudo">
        <div class="alinhamento">
            <h1 class="titulo">I can I help you with</h1>
            <div class="assuntos">
                <div class="assunto">
                    <div class="cabecalho">01</div>
                    <div class="titulo">Design</div>
                    <div class="descricao">Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit, sed do eiusmod tempor<br> incididunt ut labore et.</div>
                    <div class="topico">Websites</div>
                    <div class="topico">Mobile apps</div>
                    <div class="topico">Web apps</div>
                    <div class="topico">Design systems</div>
                    <div class="topico">Branding</div>
                </div>
                <div class="assunto">
                    <div class="cabecalho">02</div>
                    <div class="titulo">Development</div>
                    <div class="descricao">Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit, sed do eiusmod tempor<br> incididunt ut labore et</div>
                    <div class="topico">Mobile apps</div>
                    <div class="topico">Web apps</div>
                    <div class="topico">Design systems</div>
                </div>
                <div class="assunto">
                    <div class="cabecalho">03</div>
                    <div class="titulo">Full Package</div>
                    <div class="descricao">Lorem ipsum dolor sit amet, consectetur<br> adipiscing elit, sed do eiusmod tempor<br> incididunt ut labore et</div>
                    <div class="topico">Design + Development</div>
                </div>
            </div>
            <div class="textomeio">Get the Full Package, Design + Development with requests & revisions. No expensive hourly billing. Flat monthly rate.
                Pause anytime.</div>
            <div class="preco">
                <div class="numero">$2999</div>
                <div class="mes">/month</div>
            </div>
            <div class="textofim">
                Ideal for websites, web aps, and brand design projects, custom code solutions, blogs and<br>app dashboard design.
            </div>

            <div class="icons">
                <img class="foto" src="/foto.jpg">
                <div class="botao"><Botao isWhite buttonText="Start a project"></Botao></div>
                <div class="botaopequeno">
                <BotaoRedondo></BotaoRedondo> 
                </div>
            </div>
            <div class="fim">Don&#39;t know if fits you or not?
                <div class="call"> Let&#39;s have a call</div>
            </div>
            <div class="cabecalhofundo">
                <div class="media">SOCIAL MEDIA</div>
                <div class="links">
                    <div class="link">Twitter</div>
                    <div class="link">Linkedin</div>
                    <div class="link">Github</div>
                    <div class="link">Dribbble</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.tudo{
    background-color: black;
    margin: 20pxs;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
}
.alinhamento{
    max-width: 1000px;
    margin: 0 auto;
}
.titulo{
    color: white;
    font-size: 40px;
    font-family: monospace;
    margin: 40px;
    margin-left: 0;
}

.cabecalho{
    color: white;
   
    padding: 10px;
    border: 0;
    border-bottom: 3px solid grey;
}
.assuntos{
    color: white;
    display: flex;
    gap:20px;
    width: auto;
}
.descricao{
    color: white;
    font-family: monospace;
}
.topico{
    color: white;
    margin: 20px;
    margin-left: 0;
    font-weight: bold;
    font-family: monospace;
    font-size: 20px;  
}
.textomeio{
    color: white;
    margin: 30px;
    margin-left: 0;
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
}
.preco{
    color: white;
    display: flex;
    align-items: baseline;
    font-family: monospace;
}
.numero{
    color: white;
    font-size: 40px;
}
.mes{
    color: white;
    align-items: end;
}
.textofim{
    color: white;
    margin:40px;
    margin-left:0;
    font-family: monospace;
    
}
.icons{
    color: white;
    display: flex;
    align-items: center;
}
.foto{
    color: white;
    width: 100px; 
    height: 100px; 
    border-radius: 50%; 
    object-fit: cover; 
    margin: 15px;
    margin-left: 0;
}
.fim{
    color: white;
    font-family: monospace;
    display: flex;
    gap: 5px;
    margin-bottom: 60px;
    margin-top: 25px;
}
.call{
    color: white;
    font-weight: bold;
    border-bottom: 3px solid black;
}
.media{
    
    border-bottom: 1.5px solid gray;
}
.links{
    color: white;
    display: flex;
    margin: 20px;
    margin-left: 0;
    margin-bottom: 50px;
    justify-content: space-around;
    width: 30%;
    
}
@media only screen and (max-width: 760px) {
.assuntos{
    flex-direction: column;
}

}
</style>