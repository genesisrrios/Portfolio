<template>
  <div>
    <ul class="top-bar-logo">
      <li style="flex: 2 0 0;">
        <a v-if="language_english">
           <img  src="../assets/name-logo-english.svg" alt="Name of the author of the profile">
        </a>
        <a v-else>
          <img  src="../assets/name-logo-spanish.svg" alt="Name of the author of the profile">
        </a>
        <ul>
          <li class="language-list">
            <a>
              <img src="../assets/global.svg" alt="Languages icon">
            </a>
          </li>
            <a @click="setLocale('es')" id="language-es" style="cursor:pointer;margin:15px;">es</a>
            <a @click="setLocale('en')" id="language-en" style="cursor:pointer;">en</a>
        </ul>
      </li>
    </ul>
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
.top-bar-logo {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* background-color: #cc5577;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23cc5577' width='11' height='11'/%3E%3Crect fill='%23cd5776' x='10' width='11' height='11'/%3E%3Crect fill='%23ce5975' y='10' width='11' height='11'/%3E%3Crect fill='%23cf5b74' x='20' width='11' height='11'/%3E%3Crect fill='%23d05d72' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23d15f71' y='20' width='11' height='11'/%3E%3Crect fill='%23d26170' x='30' width='11' height='11'/%3E%3Crect fill='%23d36370' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23d4666f' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23d4686e' y='30' width='11' height='11'/%3E%3Crect fill='%23d56a6d' x='40' width='11' height='11'/%3E%3Crect fill='%23d56c6c' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23d66e6c' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23d6716b' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23d7736b' y='40' width='11' height='11'/%3E%3Crect fill='%23d7756a' x='50' width='11' height='11'/%3E%3Crect fill='%23d7776a' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23d8796a' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23d87c6a' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23d87e6a' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23d8806a' y='50' width='11' height='11'/%3E%3Crect fill='%23d8826a' x='60' width='11' height='11'/%3E%3Crect fill='%23d8856a' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23d8876a' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23d8896a' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23d88b6a' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23d88d6b' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23d8906b' x='70' width='11' height='11'/%3E%3Crect fill='%23d7926c' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23d7946d' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23d7966d' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23d7986e' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23d69a6f' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23d69d70' x='80' width='11' height='11'/%3E%3Crect fill='%23d69f71' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23d6a172' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23d5a374' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23d5a575' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23d5a776' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23d4a978' x='90' width='11' height='11'/%3E%3Crect fill='%23d4ab79' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23d3ad7b' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23d3af7d' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23d3b17e' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23d2b380' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23d2b582' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23d2b784' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23d1b986' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23d1bb88' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23d1bd8a' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23d1bf8c' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23d0c18f' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23d0c291' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23d0c493' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23d0c696' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23cfc898' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23cfca9a' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23cfcc9d' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23cfcd9f' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23cfcfa2' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover; */
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

#language-es{
  color: #fff;
}
.list-right:hover a {
  color: #9db6c9;
  cursor: pointer;
}
.language-list {
  list-style: none;
  left:0;  
}
</style>
