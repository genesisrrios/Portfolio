<template>
  <section class="container">
  <div class="center-tittle">
    <h1 class="tittle">{{$t("Technologies.tittle")}}</h1>
    </div>
    <div class="row">
      <div class="column">
      <div class=" box rounded-borders ">
      <div class="center">
        <div class="box-content rounded-borders">
         <img width="1000" src="/src/assets/c-sharp-logo.svg" alt="C# Programming Language Logo">
        </div>
        </div>
        </div>
      </div>
      <div class="column">
      <div class="box rounded-borders">
      <div class="center">
        <div class="box-content rounded-borders"> 
        </div>
      </div>
      </div>      
      </div>
            <div class="column">
    <div class="box rounded-borders">
      <div class="center">    
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
        <div class="box-content rounded-borders">
        </div>
        </div>
        </div>        
      </div>      
      <div class="column">
      <div class="box rounded-borders">
      <div class="center">    
        <div class="box-content rounded-borders">
        </div>
        </div>
        </div>        
      </div>  
      <div class="column">
      <div class="box rounded-borders">
      <div class="center">    
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
  name: "TheTechnologiesContainer"
};
</script>
<style>
.container{
  height:120vh;
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
  width: 300px;
  height:300px;
  text-align: center;
  margin:16px auto;
}
.rounded-borders{
  border-radius: 10px;
  padding: 10px;
}
@media only screen and (max-width: 1071px) {
.container{
  height: 200vh;
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
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
}
@media only screen and (max-width: 726px) {
.container{
  height: 300vh;
  width: 100vw;
}    
}
@media only screen and (max-width: 900px) {
  .container{
    height: 310vh;
    width: 100vw;
  }
}
@media only screen and (max-width: 375px) {
  .container{
    height: 350vh;
    width: 100vw;
  }
}
@media screen and (max-width: 1280px) and (min-width: 800px),(max-width: 1024px) and (min-width: 768px){
  .container{
  height:140vh;
  width: 100vw;
}
}
@media screen and (max-width: 1280px) and (min-width: 888px){
  .container{
  height:110vh;
  width: 100vw;
}
}
</style>