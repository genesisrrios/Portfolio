<template>
  <section class="container">
  <div class="center-tittle">
    <h1 class="tittle">{{$t("Projects.tittle")}}</h1>
    </div>
    <div class="row">
      <div class="column">
        <div class="box rounded-borders " v-on:click="openLink('Portfolio')">
            <div class="rounded-borders">
                <h3>{{$t("Projects.firstProject")}}</h3>
                <div class="show-case-project"> 
                  <img alt="Porfolio image" src="/src/assets/Projects/Portfolio_1.PNG"/>
                </div>
            </div>
        </div>
      </div>
      <div class="column">
        <div class="box rounded-borders" v-on:click="openLink('EducationGotHacked')">
            <div class="rounded-borders">
                <h3>{{$t("Projects.secondProject")}}</h3>
            </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="box rounded-borders" v-on:click="openLink('AgroHack')">
            <div class="rounded-borders">
                <h3>{{$t("Projects.thirdProject")}}</h3>
            </div>
        </div>
      </div>   
      <div class="column">
        <div class="box rounded-borders" v-on:click="openLink('IBM-Call-for-Code-Hackaton-')">
            <div class="rounded-borders">
                <h3>{{$t("Projects.fourthProject")}}</h3>
            </div>
        </div>
      </div>        
    </div> 
  </section>
</template>

<script>
export default {
    name: "TheProjectsContainer",
    methods:{
      openLink:function(url){
        window.open('https://github.com/genesisrrios/'+url);
    }
  }	  
};
</script>
<style scoped>
 .box:hover, .box:active{
   background: #305d8a;
   cursor: pointer;
 }
 @media screen and ( min-width: 300px ) and (max-width:991px)
{
.show-case-project{
  visibility: hidden;
}
.container{
  height:70vh;
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
  background:#9db6c9;
  width: 290px;
  height:70px;
  text-align: center;
}
.rounded-borders{
  border-radius: 10px;
}

}
@media screen and ( min-width: 992px )
{
.container{
  height:210vh;
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
  background:#9db6c9;
  width: 900px;
  height:300px;
  text-align: center;
}
.rounded-borders{
  border-radius: 10px;
}
}

</style>