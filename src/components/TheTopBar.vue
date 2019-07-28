<template>
  <div>
<<<<<<< HEAD:src/components/TheTopBar.vue
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
              <a @click="setLocale('es')" id="language-es" style="cursor:pointer;margin:15px;">es</a>
              <a @click="setLocale('en')" id="language-en" style="cursor:pointer;">en</a>
            </a>
          </li>

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
=======

>>>>>>> 8bf45fbbd5678af540e1e058ca07d683c4645e7b:src/components/TheSideBar.vue
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
</script>

<style scoped>
</style>
