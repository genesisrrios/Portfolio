<template>
  <section class="container">
  <div class="center-tittle">
    <h1 class="tittle">{{$t("Projects.tittle")}}</h1>
    </div>
    <div class="row" v-for="project in projectsList" :key="project.Name">
      <div class="column">
        <div class="box rounded-borders box-padding" v-on:click="openLink(project.Url)">
            <div class="rounded-borders box-padding">
                <h1>{{$t(project.Name)}}</h1>
                  <p class="project-description">{{$t(project.Description)}}</p>
                  <div class="row box-padding">
                    <div class="column"  v-for="image in project.Images" :key="image.Url">
                      <img class="image-styling" v-bind:src="image.Url" v-bind:alt="image.AltText">
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "TheProjectsContainer",
    data(){
      return{
        projectsList:[
          {
            Name: 'Projects.firstProject',
            Description:'Projects.firstProjectDescription',
            Images:
            [
              {
                AltText:'css and html logos',
                Url: require('../assets/Technologies/css-html-logo.svg')
              },
              {
                AltText:'javascript logo',
                Url:require('../assets/Technologies/js-logo.svg')
              },
              {
                AltText:'vue js logo',
                Url:require('../assets/Technologies/vuejs-logo.svg')
              },
              {
                AltText:'node js logo',
                Url:require('../assets/Technologies/Node.js_logo.svg')
              },                
            ],
            Url:'Portfolio'
          },
          {
            Name: 'Projects.secondProject',
            Description:'Projects.secondProjectDescription',
            Images:
            [
              {
                AltText:'c# logo',
                Url: require('../assets/Technologies/c-sharp-logo.svg')
              },
              {
                AltText:'dotnet core logo',
                Url:require('../assets/Technologies/dotnetcore-logo.svg')                
              },
              {
                AltText:'css and html logo',
                Url:require('../assets/Technologies/css-html-logo.svg')
              },
              {
                AltText:'javascript logo',
                Url:require('../assets/Technologies/js-logo.svg')
              },
              {
                AltText:'bootstrap logo',
                Url:require('../assets/Technologies/Bootstrap.svg')
              },                                                                                       
            ],
            Url:'EducationGotHacked'
          },
          {
            Name: 'Projects.thirdProject',
            Description:'Projects.thirdProjectDescription',
            Images:
            [
              {
                AltText:'css and html logos',
                Url: require('../assets/Technologies/css-html-logo.svg')
              },
              {
                AltText:'javascript logo',
                Url:require('../assets/Technologies/js-logo.svg')
              },
              {
                AltText:'bootstrap logo',
                Url:require('../assets/Technologies/Bootstrap.svg')
              },
              {
                AltText:'c# logo',
                Url: require('../assets/Technologies/c-sharp-logo.svg')
              },
              {
                AltText:'dotnet core logo',
                Url:require('../assets/Technologies/dotnetcore-logo.svg')                
              },               
            ],
            Url:'AgroHack'
          },
          {
            Name: 'Projects.fourthProject',
            Description:'Projects.fourthProjectDescription',
            Images:
            [
              {
                AltText:'raspberry pi 3',
                Url: require('../assets/Technologies/ArduinoUno.svg')
              },
              {
                AltText:'arduino uno',
                Url:require('../assets/Technologies/raspberrypi.svg')
              },
            ],
            Url:'IBM-Call-for-Code-Hackaton-'
          },                 
        ]
      }
    },
    mounted(){
        console.log(this.$i18n);
    },
    methods:{
      openLink:function(url){
        window.open('https://github.com/genesisrrios/'+url);
    },
  },
};
</script>
<style scoped>
 .box:hover, .box:active{
   background: #9db6c9;
   cursor: pointer;
 }
 @media screen and ( min-width: 300px ) and (max-width:991px)
{
.images{
  visibility: hidden;
}
.project-description{
  visibility: hidden;
}
.container{
  height:100vh;
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
  background:#305d8a;
  width: 290px;
  height:135px;
  margin:15px;
  text-align: center;
}
.rounded-borders{
  border-radius: 10px;
}
.image-styling{
  visibility: hidden;
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
  background:#305d8a;
  width: 900px;
  height:350px;
  margin:15px;
  text-align: center;
}
.rounded-borders{
  border-radius: 10px;
}
.image-styling{
  height:100px;
}
.box-padding{
  padding:35px;
}
}

</style>