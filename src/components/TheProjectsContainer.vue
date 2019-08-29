<template>
  <div class="container">
    <section>
    <div class="row">
      <div class="column">
      <div class=" box rounded-borders">
        <img class="github-logo" src="../assets/github-logo.svg"/>
        <div class="box-content rounded-borders">
        </div>
        </div>
      </div>
      <div class="column">
      <div class="box rounded-borders">
        <img class="github-logo" src="../assets/github-logo.svg"/>
        <div class="box-content rounded-borders"> 
        </div>
      </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
    <div class="box rounded-borders">
        <img class="github-logo" src="../assets/github-logo.svg"/>
        <div class="box-content rounded-borders">
    </div>
        </div>
      </div>
      <div class="column">
      <div class="box rounded-borders">
        <img class="github-logo" src="../assets/github-logo.svg"/>        
        <div class="box-content rounded-borders">
        </div>
        </div>
      </div>         
      </div> 
    </section>
  </div>
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
  flex-basis: 100%;
  flex: 2;
  align-items: center;     /* center items horizontally, in this case */  
}
.box{
  background:#afddb5;
  margin:15px;
  width: 450px;
  height:450px;
  text-align: center;
}
.box-content{
  background-color: white;
  padding:10px;
  width: 85%;
  height:85%;
  margin:0 auto;
}
.rounded-borders{
  border-radius: 10px;
  border: 2px solid #afddb5;
  padding: 3px 10px 3px 10px;
}
.github-logo{
  height: 40px;
  width: 40px;
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
.box-content{
  background-color: white;
  padding:10px;
  width: 80%;
  height:80%;
  margin:0 auto;
}
}
</style>