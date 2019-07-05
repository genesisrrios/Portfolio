<template>
  <div id="app">
    <TheSideBar />
    <div class="container" style="height:70vh;" id="about">
      <div class="box main-text" >
        <h1>
          ¡Hola! mi nombre es Génesis Rivera Rios ,
          me especializo en resolver problemas para
          compañías de pequeño y mediano tamaño
          mediante la creación y diseño efectivo de
          paginas web de acuerdo a su necesidad.
        </h1>
      </div>
    </div>
    <div class="container">
      <div class="box" id="experience">
        <h2 class="box-text">
          <h2>-2019</h2>
         Trabajo a tiempo completo programando aplicaciones web para 
          Multisystems Inc. en San Juan lo que me ha dado la
          oportunidad de ganar experiencia trabajando con proyectos 
          a mayor escala que usuarios utilizan a diario; además participo 
          de charlas relacionadas con programación web y me mantengo 
          al día con las tecnologías más populares.
        </h2>
        <h2 class="box-text">
          <h2>-2018</h2>
      Me gradué de un Bachillerato enfocado en sistemas de información.
      <br>
      Complete un internado en Engine-4 en Bayamón  en el cual junto a 
      un grupo de desarrolladores cree una página 
      web para visualizar data.
      Gane un <span class="tool-tip">Hackaton<span class="tool-tip-text">Es una maratón de 
      desarrollo web; un encuentro de programadores cuyo objetivo es el desarrollo colaborativo 
      de software. Los participantes se organizan en grupos y cada uno tiene proyectos y 
      retos que conseguir.</span></span> en el cual junto 
        </h2>
        <h2 class="box-text">
        </h2>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "InformationContainer",
  props: {
      text:String
  }
};
</script>

<style>
.top-bar{
    width: 100%;
    background-color: blue;
}
html {
    scroll-behavior: smooth;
}
body {
    background: #2099d2;
}
.changeColor {
    background: #58b4e0;
}
.container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height:100vh;   
}

.main-text {
    width: 50%;
    text-align: center;
}
.underline {
    text-decoration: underline;
}
h1{
    font-family: 'Baskerville';
    font-size: 45px;
}
.box{
    width: 75%;
    background-color: white;
    border-radius: 25px;
}
.box-text{
    margin: 30px;  
}
a{
    font-family: 'Baskerville';
}
.tool-tip{
    cursor: pointer;
    color:#58b4e0;
}
.tool-tip:hover .tool-tip-text{
    display:inline;
    background-color:white;
    color: black;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;  
}
.tool-tip-text{
    display: none;
}

</style>