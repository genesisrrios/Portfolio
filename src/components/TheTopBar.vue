<template>
  <div>
    <nav class="navbar">      
        <a class="navbar-hamburger"><img src='../assets/hamburger-menu.svg'/></a>
        <a v-if="language_english"><img class="navbar-logo" src='../assets/name-logo-spanish.svg'/></a>
        <a v-else><img class="navbar-logo" src='../assets/name-logo-english.svg'/></a>
      <ul class="nav-links" role="navigation">
        <li><a class="btn">{{ $t("SideBar.about") }}</a></li>
        <li><a class="btn">{{ $t("SideBar.experience") }}</a></li>
        <li><a class="btn">{{ $t("SideBar.projects") }}</a></li>                
        <li><a class="btn">{{ $t("SideBar.technologies") }}</a></li>                        
        <li><a class="btn">{{ $t("SideBar.contactme") }}</a></li>               
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
  width:100%;
  background-color:green;
  height:130px;
}
 ul{
    list-style: none;
    padding:0;
  }
 @media only screen and (min-width: 909px) {
  .navbar{
      display: flex;
      justify-content: space-between;
      align-items:center;
  }
  .navbar-logo{
    padding-top: 50px;
    display:inline-block;
  }
  .nav-links{
    display:flex;
  }
  li{
    padding: 10px 15px;
  }
  .navbar-hamburger{
    display:none;
  }
  .btn {
  text-align: center;
  padding: 15px 10px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  text-decoration: none;
  cursor: pointer;
  border-radius: 3px;
  color: black;
  border: 2px solid #008CBA;
  color: white;
}

.btn:hover {
  background-color: #008CBA;
  color: white;
}
 }
  @media only screen and (max-width: 909px) {
  
}
</style>
