<template>
  <div>
    <header>
            <!-- The hamburger class is used to draw three lines -->      
     <div class="hamburger" v-on:click="openResponsiveMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        </div>            
        <img v-if="language_english" class="image-mobile" alt="Name of the author of the website" src="../assets/name-logo-english.svg"/>
        <img v-else class="image-mobile" alt="Name of the author of the website" src="../assets/name-logo-spanish.svg"/>
      <ul class="header-links">
        <li v-if="language_english"><img class="image-desktop" alt="Name of the author of the website" src="../assets/name-logo-english.svg"/></li>
        <li v-else><img class="image-desktop" alt="Name of the author of the website" src="../assets/name-logo-spanish.svg"/></li>
        <li class="header-items btn">
          <a class="header-items btn language-btn" v-on:click="setLocale('en')" id="en">en</a> 
          <span class="dot-en"></span>
          <a class="header-items btn language-btn" v-on:click="setLocale('es')" id="es">es</a>
          <span class="dot-es"></span>          
        </li>        
        <li class="header-items btn"><a href="#about">{{ $t("SideBar.about") }}</a></li>        
        <li class="header-items btn"><a href="#experience">{{ $t("SideBar.experience") }}</a></li>
        <li class="header-items btn"><a href="#projects">{{ $t("SideBar.projects") }}</a></li>        
        <li class="header-items btn"><a href="#technologies">{{ $t("SideBar.technologies") }}</a></li>
        <li class="header-items btn"><a href="#contactme">{{ $t("SideBar.contactme") }}</a></li>                
      </ul>
    </header>
  </div>
</template>

<script>
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
      const enTag = document.getElementById("en");
      const esTag = document.getElementById("es");
      // const dot_es = document.getElementsByClassName('dot-es')[0];
      // const dot_en = document.getElementsByClassName('dot-en')[0];      
      switch(language){
          case "es":          
            this.language_english = false;
            enTag.style.margin = 0;
            enTag.style.padding = "";
            enTag.style.border = "";
            enTag.style.borderRadius = "";              
            esTag.style.padding = "5px 10px 5px 10px";
            esTag.style.border = "2px solid white";
            esTag.style.borderRadius = "5px";
            esTag.style.fontSize = "20px";
            enTag.style.fontSize = "";
            break;
          case "en":
            this.language_english = true;
            enTag.style.margin = 0;
            esTag.style.padding = "";
            esTag.style.border = "";
            esTag.style.borderRadius = "";            
            enTag.style.padding = "5px 10px 5px 10px";
            enTag.style.border = "2px solid white";
            enTag.style.borderRadius = "5px";
            esTag.style.fontSize = "";
            enTag.style.fontSize = "20px";
            break;  
        }
    },    
    setLocale(language){     
      localStorage.language = language;        
      this.checkWhichLanguage(language);
      this.$i18n.locale = language;
    },
    openResponsiveMenu(){
      const headerLinks = document.querySelector(".header-links");
      headerLinks.classList.toggle('active');
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
header{
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
.header-links li{
  padding:15px 5px;
  white-space: nowrap;
}
.header-links{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align:center;
  -ms-flex-align:center;
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
.header-links{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
          justify-content: space-between;
  align-items:center;
  height: 100vh;
  display: none;
}
.header-items{
  width:100%;
  text-align: center;
}
.header-links.active{
  display:block;
}
.image-desktop{
  display:none;
}

.header-links li{
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
