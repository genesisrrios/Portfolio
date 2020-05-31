<template>
  <div class="u-full-width u-max-full-width">
    <div id="app">
      <TheTopBar />
      <TheMainText id="about"/>    
      <TheExperienceInformationContainer id="experience" />
      <TheProjectsContainer id="projects"/>
      <TheFooterContainer/>
      <!--<TheContactUsForm id="contactme"/> -->
    </div>
  </div>
</template>

<script>
import TheTopBar from "./components/TheTopBar";
import TheMainText from "./components/TheMainText";
import TheExperienceInformationContainer from "./components/TheExperienceInformationContainer";
import TheProjectsContainer from "./components/TheProjectsContainer";
import TheFooterContainer from "./components/TheFooterContainer";
// import TheContactUsForm from "./components/TheContactUsForm";
// import TheSnackBar from "./components/TheSnackBar";

export default {
  name: "app",
  components: { 
    TheTopBar,
    TheMainText,
    TheExperienceInformationContainer,
    TheProjectsContainer,
    TheFooterContainer
    // TheContactUsForm,
  },
  mounted() {},
  methods: {}
};
</script>
<style>
html {
    scroll-behavior: smooth;
}
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body {
    font-family: 'Indie Flower', cursive;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Sansita', sans-serif;
    color:#f2f2f2 ;
}
a{
  font-family: 'Sansita', sans-serif;
}
p{
  font-family: 'Sansita', sans-serif;
}
h1{
  font-family: 'Sansita', sans-serif;
}
.tittle{
  color:#305d8a;
  font-size: 2em; 
  text-align:center;
}
</style>