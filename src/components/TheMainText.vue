<template>
  <div id="app">
      <div class="container">
           <div class="main-text">
               <h1 >¡Hola! soy Génesis Rivera Rios ,
          me especializo en resolver problemas para
          compañías de pequeño y mediano tamaño
          mediante la creación y diseño efectivo de
          paginas web de acuerdo a su necesidad.</h1>
           </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "TheMainText"
};
</script>

<style scoped>
.container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height:75vh;   
}
.main-text {
    width: 50%;
    text-align: center;
    color: #383030;
}
</style>