<template>
  <div id="app">
    <TheTopBar />
    <TheMainText id="about"/>    
    <TheExperienceInformationContainer id="experience" />
    <TheProjectsContainer id="projects"/>
    <TheContactUsForm id="contactme"/>    
    </div>
</template>

<script>
import TheTopBar from "./components/TheTopBar";
import TheExperienceInformationContainer from "./components/TheExperienceInformationContainer";
import TheMainText from "./components/TheMainText";
import TheProjectsContainer from "./components/TheProjectsContainer";
import TheContactUsForm from "./components/TheContactUsForm";
import TheSnackBar from "./components/TheSnackBar";

export default {
  name: "app",
  components: { 
    TheTopBar,
    TheExperienceInformationContainer,
    TheMainText,
    TheProjectsContainer,
    TheContactUsForm,
  },
  mounted() {

  },
  methods: {
  }
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
.center-tittle{
  margin: auto;
  width: 50%;
}
</style>