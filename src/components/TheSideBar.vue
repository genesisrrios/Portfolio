<template>
  <div>
    <div class="top-bar-logo">
      <div class="flex-desktop-side">
          <img v-if="language_english"  src="../assets/name-logo-english.svg" alt="Name of the author of the profile">
          <img v-else  src="../assets/name-logo-spanish.svg" alt="Name of the author of the profile">
          <div class="language-list">
            <img class="language-icon" src="../assets/global.svg" alt="Languages icon" align="bottom">
            <a @click="setLocale('es')" id="language-es" style="cursor:pointer;margin:15px;">es</a>
            <a @click="setLocale('en')" id="language-en" style="cursor:pointer;">en</a>
          </div>
      </div>
    </div>
    <ul class="side-bar">
      <li class="list-right">
        <a id="sidebar-about" href="#about" style="text-decoration:underline;" >{{ $t("SideBar.about") }}</a>
      </li>
      <li class="list-right">
        <a id="sidebar-experience" href="#experience" style="text-decoration:none;">{{$t("SideBar.experience")}}</a>
      </li>
      <li class="list-right">
        <a id="sidebar-projects" href="#projects" style="text-decoration:none;">{{$t("SideBar.projects")}}</a>
      </li>
      <li class="list-right">
        <a id="sidebar-technologies" href="#technologies" style="text-decoration:none;">{{$t("SideBar.technologies")}}</a>
      </li>
      <li class="list-right">
        <a id="sidebar-contactme" href="#contactme" style="text-decoration:none;">{{$t("SideBar.contactme")}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
window.$ = require("jquery");
window.JQuery = require("jquery");

export default {
  name: "TheSideBar",
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
            $("#language-es").css("color","#d71e18");
            $("#language-en").css("color","white");
            this.language_english = false;
            break;
          case "en":
            $("#language-en").css("color","#d71e18");  
            $("#language-es").css("color","white");                  
            this.language_english = true;
            break;  
        }
    },    
    setLocale(language){     
      localStorage.language = language;        
      this.checkWhichLanguage(language);
      this.$i18n.locale = language;
    }
  },
  mounted(){
      if(localStorage.language)
      {
        this.checkWhichLanguage(localStorage.language);
        this.$i18n.locale = localStorage.language;

      }else
        this.checkWhichLanguage('es');     
    },
  };
$(document).ready(function() {
  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() <= 50) {
        if($(".side-bar").is(":hidden"))
          $(".side-bar").slideDown();   

        $("#sidebar-about").css("text-decoration", "underline");
        $("#sidebar-projects").css("text-decoration", "none");
        $("#sidebar-experience").css("text-decoration", "none");
        $("#sidebar-technologies").css("text-decoration", "none");
        $("#sidebar-contactme").css("text-decoration", "none");
      }
      if ($(this).scrollTop() >= 700 && $(this).scrollTop() <= 1000) {
        if($(".side-bar").is(":hidden"))
          $(".side-bar").slideDown();          

        $("#sidebar-experience").css("text-decoration", "underline");
        $("#sidebar-about").css("text-decoration", "none");
        $("#sidebar-projects").css("text-decoration", "none");
        $("#sidebar-technologies").css("text-decoration", "none");
        $("#sidebar-contactme").css("text-decoration", "none");
      }
      if ($(this).scrollTop() >= 1500 && $(this).scrollTop() <= 2000) {
        $(".side-bar").slideUp()
      }
      if ($(this).scrollTop() >= 1600 && $(this).scrollTop() <= 2700) {
        $(".side-bar").slideUp()
      }
      if ($(this).scrollTop() >= 3000) {
        if($(".side-bar").is(":hidden"))
          $(".side-bar").slideDown();         

        $("#sidebar-projects").css("text-decoration", "none");
        $("#sidebar-about").css("text-decoration", "none");
        $("#sidebar-experience").css("text-decoration", "none");
        $("#sidebar-technologies").css("text-decoration", "none");
        $("#sidebar-contactme").css("text-decoration", "underline");
      }
    });
  });
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-width:400px) and (max-width: 1700px){

.top-bar-logo {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.hide{
  visibility: hidden;
}
.side-bar {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  top:2;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  position: fixed;
  right: 0;
}

.list-right a {
  padding-top: 15px;
  font-size: 25px;
  color:white;
  transition: 0.3s;
  display: inline-block;
  right: 0;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  text-shadow: #343a40 2px 2px;

}

#language-es,#language-en{
  cursor:pointer;
}
.language-icon{
  padding-bottom:-20px;
}
.list-right:hover a {
  color: #9db6c9;
  cursor: pointer;
}
.language-list {
  left:0;
  padding-left: 30px;
}
.fex-desktop-side{
  flex: 2 0 0;
}
}
@media only screen and (max-width: 667px) and (min-width: 375px) {

.top-bar-logo {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  justify-content: center;
}
.hide{
  visibility: hidden;
}
.side-bar {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  top:2;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  position: fixed;
  right: 0;
}

.list-right a {
  padding-top: 15px;
  font-size: 25px;
  color:white;
  transition: 0.3s;
  display: none !important;
  right: 0;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  text-shadow: #343a40 2px 2px;

}
.language-list{
  display: flex;
  align-items: center;
  justify-content: center;
}
.list-right:hover a {
  color: #9db6c9;
  cursor: pointer;
}
.language-icon{
  display:none !important;
}
}
</style>
