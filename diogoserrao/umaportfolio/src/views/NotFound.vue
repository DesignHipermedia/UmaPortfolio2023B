<script setup>

</script>
<template>
  <div class="corpo">
    <div class="preto"></div>
    <div class="estrutura">
        <div class="circle" id="circle1"></div>
        <div class="circle" id="circle2"></div>
        <div class="circle" id="circle3"></div>
        <div class="circle" id="circle4"></div>
        <div class="texto1">DESIGN HIPERMÉDIA</div>
        <h1 class="numero">404</h1>
        <div class="texto2">The link you clicked may be broken or the page <br>may have burst</div>
        <a  class="texto3" href="/">Visit the home page</a>
      </div>  
  </div>
</template>
<style scoped>
.preto{
  background-color: black;
  height: 100px;
  margin: 20px;
  margin-top: 0;
  width: 100%;
}
.corpo{
    background-image: linear-gradient(to right,#B15CF1,#E9489C);
    display: flex;
    flex-direction: column;
    align-items: center;
  height: 100vh;
}

.estrutura{
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

.numero{
    font-size: 180px;
    color: white;
    margin:0px; 
    font-family: system-ui;
   
}

.texto1{
    color: white;
    text-align: center;
    margin-bottom: 77px;
}

.texto2{
    color: white;
    text-align: center;
    margin-bottom: 60px;
}

.texto3{
    color: white;
    text-align: center;
    z-index: 2;

}

.bolas{
    position: absolute;
    border: 50%;
    
}

.circle {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: white; 
    opacity: 0.1;
    border-radius: 50%; 
}


#circle1{
    top: 90px;
    left: 50px;        
}
#circle2{
    top: 150px;
    left: 150px;
    height:500px;
    width: 500px;
    animation: moveBall 5s linear infinite;
}
#circle3{
    top:200px;
    right: 150px;
    animation: moveBall3 3s linear infinite;
}
#circle4{
    bottom: 150px;
}



@keyframes moveBall {
    0% {
        left: 0;
    }
    50% {
        left: 500px;
    }
    100%{
        left: 0
    }
}

@keyframes moveBall3{
    0%{
        right:150px;
        top: 200px;
    }
    50%{
        right:300px;
        top:200px;
        height: 450px;
        width: 450px;
    }
    100%{
        right:150px;
        top: 200px;
    }

}

</style>
