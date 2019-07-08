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
            sodipodi:docname="name-logo.svg"
          >
            <g transform="translate(0,-197)">
              <text
                x="22.67857"
                y="259.20236"
                style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:50.79999924px;font-family:'Freestyle Script';-inkscape-font-specification:'Freestyle Script';stroke-width:0.26458332"
              >Genesis Rivera Rios</text>
            </g>
          </svg>
        </a>
        <ul>
          <li class="language-list">
            <a style="left:0;cursor:default;" id="language-es">es</a>
          </li>
          <li class="language-list">
            <a style="left:0;" id="language-en">en</a>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="side-bar">
      <li class="list-right">
        <a id="sidebar-about" href="#about" style="text-decoration:underline;">Sobre Mi</a>
      </li>
      <li class="list-right">
        <a id="sidebar-experience" href="#experience" style="text-decoration:none;">Experiencia</a>
      </li>
      <li class="list-right">
        <a id="sidebar-projects" href="#projects" style="text-decoration:none;">Proyectos</a>
      </li>
      <li class="list-right">
        <a id="sidebar-technologies" href="#technologies" style="text-decoration:none;">Tecnologias</a>
      </li>
      <li class="list-right">
        <a id="sidebar-contactme" href="#contactme" style="text-decoration:none;">Contactame</a>
      </li>
    </ul>
  </div>
</template>

<script>
window.$ = require("jquery");
window.JQuery = require("jquery");

export default {
  name: "TheSideBar",
  props: {}
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
        if($(".side-bar").is(":hidden"))
          $(".side-bar").slideDown();         
        $("#sidebar-projects").css("text-decoration", "none");
        $("#sidebar-about").css("text-decoration", "none");
        $("#sidebar-experience").css("text-decoration", "none");
        $("#sidebar-technologies").css("text-decoration", "underline");
        $("#sidebar-contactme").css("text-decoration", "none");
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
}
#language-en {
  cursor: pointer;
  display: none;
}
</style>
