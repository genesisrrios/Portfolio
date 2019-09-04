<template>
  <section class="container">
    <div class="row">
      <div class="column">
      <div class=" box rounded-borders ">
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
  height:100vh;
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
  align-items: center;     /* center items horizontally, in this case */  
}
.box{
  background:#afddb5;
  width: 450px;
  height:450px;
  text-align: center;
  margin:16px auto;
}
/* .box-content{
  background-color: white;
  padding:10px;
  width: 85%;
  height:85%;
  margin:0 auto;
} */
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
/* .box-content{
  background-color: white;
  padding:10px;
  width: 80%;
  height:80%;
  margin:0 auto;
} */
}
</style>