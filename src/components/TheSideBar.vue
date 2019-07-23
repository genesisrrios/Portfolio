<template>
  <div>
      <header>
    <div class="logo-container">
          <img class="name-logo" v-if="language_english"  src="../assets/name-logo-english.svg" alt="Name of the author of the portoflio">
          <img class="name-logo" v-else  src="../assets/name-logo-spanish.svg" alt="Name of the author of the profile">        
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
    </header>
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
/* Styling for the Sidebar */
.side-bar {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  top:1;
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
.list-right:hover a {
  color: #9db6c9;
  cursor: pointer;
}
.logo-container{
  display: flex;
  width: 90%;
  margin:auto;
}
.name-logo{
  max-width:50%;
}
</style>
