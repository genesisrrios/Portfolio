<template>
  <div>
    <nav>
      <!-- The hamburger class is used to draw three lines -->
      <div class="hamburger" v-on:click="openResponsiveMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>                
      </div>
      <ul class="nav-links">
        <li v-if="language_english"><img /><img src="../assets/name-logo-english.svg"/></li>
        <li v-else><img src="../assets/name-logo-spanish.svg"/></li>
        <li><a class="nav-items" href="">{{ $t("SideBar.about") }}</a></li>
        <li><a class="nav-items" href="">{{ $t("SideBar.experience") }}</a></li>
        <li><a class="nav-items" href="">{{ $t("SideBar.projects") }}</a></li>        
        <li><a class="nav-items" href="">{{ $t("SideBar.technologies") }}</a></li>
        <li><a class="nav-items" href="">{{ $t("SideBar.contactme") }}</a></li>                
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
      switch(language){
          case "es":          
            this.language_english = false;
            break;
          case "en":
            this.language_english = true;
            break;  
        }
    },    
    setLocale(language){     
      localStorage.language = language;        
      this.checkWhichLanguage(language);
      this.$i18n.locale = language;
    },
    openResponsiveMenu(){
      $('.nav-links').toggleClass('open');
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
  height:10vh;
  background:#5b78c7;
}
.nav-links{
  display: -webkit-flex;
  display:flex;
}
.nav-links li:first-child{
  margin-right: auto;
}
.nav-items{
  color:white;  
  text-decoration: none;
}
ul li{
  list-style: none;  
}

@media screen and (max-width: 700px){
  .line{
    width:30px;
    height:3px;
    background:white;
    margin:5px;
  }
  nav{
    position: relative;
  }
  .hamburger{
    position:absolute;
    cursor: pointer;
    right:5%;
    top:50%;
    transform: translate(-5%,-50%);
    z-index: 2;
  }
  .nav-links{
      position:fixed;
      background-color: #5b78c7;
      height: 100vh;
      width: 100%;
      flex-direction: column;
      clip-path: circle(100px at 90% -10%);
      -webkit-clip-path: circle(100px at 90% -10%);
      transition: all 1s ease-out;
      pointer-events: none;
  }
  .nav-links.open{
      clip-path: circle(1200px at 90% -10%);
      -webkit-clip-path: circle(1000px at 90% -10%);
      pointer-events: all;
  }
  .nav-items{
    font-size: 25px;
  } 
  .image{
    display:none;
  }
}
</style>
