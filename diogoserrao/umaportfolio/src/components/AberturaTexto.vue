<script setup>
import BotaoRedondo from "./BotaoRedondo.vue"
</script>

<template>
   <div class="tudo">
        <div class="alinhamento">
            <div class="texto">Welcome, make yourself at home. I am a 
        multidisciplinary web designer, designing and 
        building beautiful digital products, for 
        companies around the world.</div>

            <div class="texto">I believe that design should be both functional 
        and aesthetically pleasing, and I am dedicated 
        to delivering exceptional user experiences 
        through thoughtful design and meticulous 
        attention to detail.</div>

            <div class="textopequeno"><button class="botaotexto">Download resume</button>
                <BotaoRedondo is-small></BotaoRedondo>
            </div>
        </div>
   </div>
</template>

<style scoped>
    .tudo{
        display: flex;
        justify-content: end;
    }
    .texto{
        font-size: 24px;
        font-family: monospace;
        font-weight: bold;
        line-height: 1.5;
        
    }
    .alinhamento{
        display: flex;
        flex-direction: column;
        max-width: 60%;
        gap: 20px;

    }

    .botaotexto{
        background-color: transparent;
        border: 0;
        border-bottom: 2px solid grey ;
        font-size: 14px;
    }
    @media only screen and (max-width: 760px) {

.alinhamento{
  max-width: 100%;
}

}
</style>