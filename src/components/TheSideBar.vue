<template>
  <div>
    <ul class="top-bar-logo">
      <li style="flex: 2 0 0;">
        <a>
          <svg
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 100"
            width="250px"
            sodipodi:docname="name-logo.svg">
            <g transform="translate(0,-197)">
              <text x="22.67857" y="259.20236" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:50.79999924px;font-family:'Freestyle Script';-inkscape-font-specification:'Freestyle Script';stroke-width:0.26458332">Genesis Rivera Rios</text>
            </g>
          </svg>
        </a>
        <ul>
          <li class="language-list"><svg data-v-abbad38a="" id="Capa_1" x="0px" y="0px" sodipodi:docname="switch-keyboard-language-svgrepo-com.svg" width="50" height="50" viewBox="3 1 8 9"><g data-v-abbad38a="" id="g73" transform="matrix(0.42074593,0,0,0.40584991,2.0690724,2.6158722)" inkscape:transform-center-x="-11.843655" inkscape:transform-center-y="0.14269464"><g data-v-abbad38a="" id="g71"><g data-v-abbad38a="" id="g69"><path data-v-abbad38a="" d="M 5.734,8.248 V 7.617 C 5.382,7.377 5.049,7.092 4.742,6.754 3.853,7.613 3.002,8.157 2.906,8.218 L 2.825,8.268 2.335,7.485 2.415,7.434 C 2.425,7.427 3.291,6.878 4.166,6.021 3.363,4.85 3.054,3.67 3.042,3.619 L 3.019,3.529 3.914,3.299 3.936,3.39 C 3.938,3.4 4.193,4.344 4.813,5.316 5.426,4.571 5.783,3.853 5.874,3.176 H 2.115 V 2.171 H 4.187 V 1.612 H 5.153 V 2.17 H 7.225 V 3.176 H 6.808 C 6.711,4.117 6.233,5.092 5.384,6.077 5.498,6.205 5.615,6.322 5.734,6.434 V 6.369 5.961 c 0,-0.336 0.272,-0.608 0.608,-0.608 H 9.047 V 0.569 C 9.047,0.485 8.98,0.417 8.895,0.417 H 0.152 C 0.068,0.417 0,0.485 0,0.569 v 8.742 c 0,0.085 0.068,0.152 0.152,0.152 h 5.582 z" id="path61" inkscape:connector-curvature="0" style="fill: rgb(9, 5, 9);"></path><path data-v-abbad38a="" d="M 10.728,8.515 H 10.711 C 10.627,8.848 10.545,9.27 10.453,9.593 l -0.332,1.187 h 1.236 L 11.01,9.593 C 10.91,9.261 10.81,8.847 10.728,8.515 Z" id="path63" inkscape:connector-curvature="0" style="fill: rgb(9, 5, 9);"></path><path data-v-abbad38a="" d="M 15.152,5.841 H 6.41 c -0.084,0 -0.152,0.068 -0.152,0.152 v 8.743 c 0,0.084 0.068,0.151 0.152,0.151 h 8.742 c 0.085,0 0.152,-0.067 0.152,-0.151 V 5.993 c 0,-0.083 -0.067,-0.152 -0.152,-0.152 z m -3.18,7.319 -0.431,-1.436 H 9.94 L 9.541,13.16 H 8.231 L 9.94,7.57 h 1.658 l 1.733,5.59 z" id="path65" inkscape:connector-curvature="0" style="fill: rgb(9, 5, 9);"></path><polygon data-v-abbad38a="" points="5.986,11.647 3.935,11.647 3.935,9.846 2.72,9.846 2.72,11.866 3.726,12.862 5.986,12.862 " id="polygon67" style="fill: rgb(9, 5, 9);"></polygon></g></g></g><g data-v-abbad38a="" id="g75" transform="translate(0,-3.304)"></g><g data-v-abbad38a="" id="g77" transform="translate(0,-3.304)"></g><g data-v-abbad38a="" id="g79" transform="translate(0,-3.304)"></g><g data-v-abbad38a="" id="g81" transform="translate(0,-3.304)"></g><g data-v-abbad38a="" id="g83" transform="translate(0,-3.304)"></g><g data-v-abbad38a="" id="g85" transform="translate(0,-3.304)"></g><g data-v-abbad38a="" id="g87" transform="translate(0,-3.304)"></g><g data-v-abbad38a="" id="g89" transform="translate(0,-3.304)"></g><g data-v-abbad38a="" id="g91" transform="translate(0,-3.304)"></g><g data-v-abbad38a="" id="g93" transform="translate(0,-3.304)"></g><g data-v-abbad38a="" id="g95" transform="translate(0,-3.304)"></g><g data-v-abbad38a="" id="g97" transform="translate(0,-3.304)"></g><g data-v-abbad38a="" id="g99" transform="translate(0,-3.304)"></g><g data-v-abbad38a="" id="g101" transform="translate(0,-3.304)"></g><g data-v-abbad38a="" id="g103" transform="translate(0,-3.304)"></g></svg>
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
  methods:{
    checkWhichLanguage(language){
      switch(language){
          case "es":          
            $("#language-es").css("color","red");
            $("#language-en").css("color","black");
            break;
          case "en":
            $("#language-en").css("color","red");  
            $("#language-es").css("color","black");                  
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
    }
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
      if ($(this).scrollTop() >= 1000 && $(this).scrollTop() <= 1600) {
        $(".side-bar").slideUp()
        // $("#sidebar-projects").css("text-decoration", "underline");
        // $("#sidebar-about").css("text-decoration", "none");
        // $("#sidebar-experience").css("text-decoration", "none");
        // $("#sidebar-technologies").css("text-decoration", "none");
        // $("#sidebar-contactme").css("text-decoration", "none");
      }
      if ($(this).scrollTop() >= 1600 && $(this).scrollTop() <= 2700) {
        $(".side-bar").slideUp()
        // if($(".side-bar").is(":hidden"))
        //   $(".side-bar").slideDown();         
        // $("#sidebar-projects").css("text-decoration", "none");
        // $("#sidebar-about").css("text-decoration", "none");
        // $("#sidebar-experience").css("text-decoration", "none");
        // $("#sidebar-technologies").css("text-decoration", "underline");
        // $("#sidebar-contactme").css("text-decoration", "none");
      }
      if ($(this).scrollTop() >= 2700) {
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
}
.hide{
  visibility: hidden;
}
.side-bar {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  position: fixed;
  right: 0;
}

.list-right a {
  padding-top: 45px;
  font-size: 25px;
  color: #383030;
  transition: 0.3s;
  display: inline-block;
  right: 0;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.list-right:hover a {
  color: #383030;
  cursor: pointer;
}
.language-list {
  list-style: none;
  left:0;  
}
</style>
