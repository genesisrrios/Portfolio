<template>
  <div>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
