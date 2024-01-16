<script setup>
import BotaoRedondo from "../components/BotaoRedondo.vue";
</script>
<template>
  <div class="tudo">
    
    <div class="preto"></div>
    <div class="corpo">
      <div class="cima">
        <div class="cabecalhosegunda">
          <div class="textpequeno">ReMarket</div>
          <h1 class="textgrande">
            Helping ReMarket give their users the best online experience.
          </h1>
        </div>
       
        <img class="imagem" :src="`/${$route.params.id}`" />
      </div>
      <div class="baixo"></div>
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
            <div class="descricao">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <h1 class="titulo">The project</h1>
            <div class="descricao">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </div>

            <h1 class="titulo">Testimonials</h1>
            <div class="testimonials">
              <div class="testcontainer">
                <div class="header">
                  <div class="headertxt">anonimo1</div>
                  <img class="headerft" src="/testemunha1.avif" />
                </div>
                <div class="txt">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </div>
              </div>
              <div class="testcontainer">
                <div class="header">
                  <div class="headertxt">anonimo2</div>
                  <img class="headerft" src="/testemunha2.png" />
                </div>
                <div class="txt">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </div>
              </div>

              <div class="testcontainer">
                <div class="header">
                  <div class="headertxt">anonimo3</div>
                  <img class="headerft" src="/testemunha3.png" />
                </div>
                <div class="txt">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </div>
              </div>
              <div class="testcontainer">
                <div class="header">
                  <div class="headertxt">anonimo4</div>
                  <img class="headerft" src="/testemunha4.png" />
                </div>
                <div class="txt">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tudo{
  max-width: 1000px;
  margin: 0 auto;
}
.corpo {
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 20px;
}
.preto {
  background-color: black;
  height: 100px;
  width: 100%;
}
.textpequeno {
  font-family: monospace;
}
.textgrande {
  font-size: 40px;
  font-family: monospace;
  margin: 40px;
  margin-left: 0px;
}
.imagem {
  width: 100%;
}
.cima {
  border-bottom: 3px solid grey;
}
.website {
  display: flex;
  align-items: center;
  gap: 15px;
}
.sublinhado{
    border-bottom: 2px solid black;
}
.partebaixo {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  
    align-items: start;
}
.topicos {
  display: flex;
  gap: 20px;
  flex-direction: column;
}
.titulo {
  font-weight: bold;
  font-size: 33px;
}
.textogrande {
  width: 60%;
}
.testimonials {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.header {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
}
.headertxt {
  border-bottom: 3px solid black;
}
.headerft {
  height: 30px;
  width: 30px;
}
@media only screen and (max-width: 760px) {
  .textogrande{
    width: 100%;
  }
.partebaixo {
  flex-direction: column;
}
.testimonials{
  grid-template-columns: 1fr;
}

}
</style>
