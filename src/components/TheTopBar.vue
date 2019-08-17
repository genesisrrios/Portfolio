<template>
  <div>
    <nav>
            <!-- The hamburger class is used to draw three lines -->      
     <div class="hamburger" v-on:click="openResponsiveMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        </div>            
        <img v-if="language_english" class="image-mobile" src="../assets/name-logo-english.svg"/>
        <img v-else class="image-mobile" src="../assets/name-logo-spanish.svg"/>
      <ul class="nav-links">
        <li v-if="language_english"><img class="image-desktop" src="../assets/name-logo-english.svg"/></li>
        <li v-else><img class="image-desktop" src="../assets/name-logo-spanish.svg"/></li>
        <li class="nav-items btn"><a class="nav-items btn language-btn" v-on:click="setLocale('en')" id="en">en</a> <a class="nav-items btn language-btn" v-on:click="setLocale('es')" id="es">es</a></li>        
        <li class="nav-items btn"><a href="">{{ $t("SideBar.about") }}</a></li>        
        <li class="nav-items btn"><a href="">{{ $t("SideBar.experience") }}</a></li>
        <li class="nav-items btn"><a href="">{{ $t("SideBar.projects") }}</a></li>        
        <li class="nav-items btn"><a href="">{{ $t("SideBar.technologies") }}</a></li>
        <li class="nav-items btn"><a href="">{{ $t("SideBar.contactme") }}</a></li>                
      </ul>
    </nav>
  </div>
</template>

<script>
window.$ = require("jquery");
window.JQuery = require("jquery");

export default {
  name: "TheTopBar",
  props: {
  },
  data() {
    return {
      language_english:false
    }
  },  
  methods:{
    checkWhichLanguage(language){
      const enATag = document.getElementById("#en");
      const esATag = document.getElementById("#es");      
      switch(language){
          case "es":          
            this.language_english = false;
<<<<<<< HEAD
            enATag.style.color = "white";
            esATag.style.color = "#eae8e1";            
            // $("#en").css('color','white');
            // $("#es").css('color','#eae8e1');       
            break;
          case "en":
            this.language_english = true;
            enATag.style.color = "#eae8e1";
            esATag.style.color = "white";
            // $("#es").css('color','white');
            // $("#en").css('color','#eae8e1');
=======
            $("#en").css('color','white');
            $("#es").css('color','#afddb5');            
            break;
          case "en":
            this.language_english = true;
            $("#es").css('color','white');
            $("#en").css('color','#afddb5');
>>>>>>> 6980e0f619899d55b0662cbcce6f6fb5eeff0cbf
            break;  
        }
    },    
    setLocale(language){     
      localStorage.language = language;        
      this.checkWhichLanguage(language);
      this.$i18n.locale = language;
    },
    openResponsiveMenu(){
      $('.nav-links').toggleClass('active');
    }
  },
  mounted(){
      if(localStorage.language)
      {
        this.checkWhichLanguage(localStorage.language);
        this.$i18n.locale = localStorage.language;
      }
      else
        this.checkWhichLanguage('es');     
    },
  };
</script>
<style scoped>
nav{
  background:#9db6c9;
  padding:5px 20px;
}
ul{
  list-style-type: none;
}
a{
  color:white;
  text-decoration: none;
}
a:hover{
  font-size: 20px;
}
.nav-links li{
  padding:15px 5px;
  white-space: nowrap;
}
.nav-links{

  display: flex;
  justify-content: space-between;
  align-items:center;
}
li:first-child{
  height: 67px;
  width: 230px;
}
.image-desktop{
  width:100%;
  height:100%;
}
.image-mobile{
  display: none;
}
.language-btn{
  padding:20px;
  cursor: pointer;
}
@media only screen and (max-width: 1280px) {
 .line{
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  }
  .hamburger{
    order:2;
    display:inline-block;
    width: 50%;
  }
.nav-links{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  height: 1000vh;
  display: none;
}
.nav-items{
  width:100%;
  text-align: center;
}
.nav-links.active{
  display:block;
}
.image-desktop{
  display:none;
}

.nav-links li{
  padding:40px 5px;
}
}
@media only screen and (max-width: 1023px) {
.image-mobile{
  display: inline-block;
  height: 40px;
  width: 50%;
  vertical-align: top;
}
.language-btn{
  padding:20px;
}
}
@media only screen and (min-width: 768px) and (max-width:800px) {
.image-mobile{
  display: inline-block;
  height: 40px;
  width: 20%;
  vertical-align: top;
}

}
</style>
