<template>
  <div id="app">
    <TheSideBar />
    <TheMainText id="about"/>    
    <TheExperienceInformationContainer id="experience" />
    <TheProjectsContainer id="projects"/>
    <TheTechnologiesContainer id="technologies"/> 
    <TheContactUsForm id="contactme"/>
    <TheFooterContainer/>
    </div>
</template>

<script>
import TheSideBar from "./components/TheSideBar";
import TheExperienceInformationContainer from "./components/TheExperienceInformationContainer";
import TheMainText from "./components/TheMainText";
import TheProjectsContainer from "./components/TheProjectsContainer";
import TheContactUsForm from "./components/TheContactUsForm";
import TheTechnologiesContainer from "./components/TheTechnologiesContainer";
import TheFooterContainer from "./components/TheFooterContainer"

export default {
  name: "app",
  components: { 
    TheSideBar,
    TheExperienceInformationContainer,
    TheMainText,
    TheProjectsContainer,
    TheContactUsForm,
    TheTechnologiesContainer,
    TheFooterContainer
     },
  mounted() {

  },
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
    font-family: 'Sansita', sans-serif;
}

</style>