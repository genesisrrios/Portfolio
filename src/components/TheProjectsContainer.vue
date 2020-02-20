<template>
  <section class="container">
  <div class="center-tittle">
    <h1 class="tittle">{{$t("Projects.tittle")}}</h1>
    </div>
    <div class="row">
      <div class="column">
      <div class=" box rounded-borders ">
      <div class="center">
        <img class="github-logo" alt="github website logo" src="../assets/github-logo.svg"/>
        <div class="rounded-borders">
        </div>
        </div>
        </div>
      </div>
      <div class="column">
      <div class="box rounded-borders">
      <div class="center">
        <img class="github-logo" alt="github website logo" src="../assets/github-logo.svg"/>
        <div class="box-content rounded-borders"> 
        </div>
      </div>
      </div>      
      </div>
    </div>
    <div class="row">
      <div class="column">
    <div class="box rounded-borders">
      <div class="center">    
        <img class="github-logo" alt="github website logo" src="../assets/github-logo.svg"/>
        <div class="box-content rounded-borders">
    </div>
        </div>
      </div>
      </div>      
      <div class="column">
      <div class="box rounded-borders">
      <div class="center">    
        <img class="github-logo" alt="github website logo" src="../assets/github-logo.svg"/>        
        <div class="box-content rounded-borders">
        </div>
        </div>
        </div>        
      </div>         
      </div> 
  </section>
</template>

<script>
export default {
  name: "TheProjectsContainer"
};
</script>
<style scoped>
.container{
  height:130vh;
  width: 100vw;
}
.row{
display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;  flex-direction: row;
  flex-wrap:wrap;
  width:100%;
}
.column {
display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;  flex-direction: column;
  flex: 1;
  align-items: center;  
}
.box{
  background:#afddb5;
  width: 450px;
  height:450px;
  text-align: center;
  margin:16px auto;
}
.rounded-borders{
  border-radius: 10px;
  padding: 10px;
}
.github-logo{
  height: 30%;
  width: 30%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.github-logo:hover, .github-logo:active{  
  filter: invert(10%) sepia(2%) saturate(2878%) hue-rotate(6deg) brightness(57%) contrast(97%);
  cursor: pointer;
 }
@media only screen and (max-width: 1069px) {
.container{
  height:190vh;
  width: 100vw;
}
.github-logo{
  height:50px;
  width: 50px;
}
.box{
  background:#afddb5;
  margin:15px;
  width: 335px;
  height:335px;
  flex-grow: 1;
}
}
@media only screen and (max-width: 900px) {
  .container{
    height: 210vh;
    width: 100vw;
  }
}
@media only screen and (max-width: 375px) {
  .container{
    height: 240vh;
    width: 100vw;
  }
}
@media screen and (max-width: 1280px) and (min-width: 800px),(max-width: 1024px) and (min-width: 768px){
  .container{
  height:90vh;
  width: 100vw;
}
}
@media screen and (max-width: 1280px) and (min-width: 888px){
  .container{
  height:140vh;
  width: 100vw;
}
}
</style>