<template>
    <div class="container">
      <div class="box box-text">
           <div class="box-content">
               <h1>-2019</h1>
               <h2>Trabajo a tiempo completo programando aplicaciones web para 
          Multisystems Inc. en San Juan lo que me ha dado la
          oportunidad de ganar experiencia trabajando con proyectos 
          a mayor escala que usuarios utilizan a diario; además participo 
          de charlas relacionadas con programación web y me mantengo 
          al día con las tecnologías más populares.</h2>
          <h1>-2018</h1>
          <h2>Me gradué de un Bachillerato enfocado en sistemas de información.</h2>
          <h2>Complete un internado en Engine-4 en Bayamón  en el cual junto a 
      un grupo de desarrolladores cree una página 
      web para visualizar data.</h2>
      <h2>Gane un <span class="tool-tip">Hackaton<span class="tool-tip-text">Es una maratón de 
      desarrollo web; un encuentro de programadores cuyo objetivo es el desarrollo colaborativo 
      de software. Los participantes se organizan en grupos y cada uno tiene proyectos y 
      retos que conseguir.</span></span> en el cual junto a un grupo de desarrolladores
       creamos una pagina web la cual seria utilizada como plataforma de educación para 
       estudiantes puertorriqueños.</h2>
           </div>
      </div>
    </div> 
</template>

<script>

export default {
  name: "TheExperienceInformationContainer"
};
</script>

<style scoped>
.container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height:100vh;   
}
.box-content{
    padding:10px;
}
h1{
    font-family: 'Baskerville';
    font-size: 45px;
}
.box{
    width: 55%;
    background-color: white;
    border-radius: 25px;
    justify-content: center;
    margin:45px;
}
h2{
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
    box-shadow: 0 0 3px black;
}
.tool-tip-text{
    display: none;
}
</style>