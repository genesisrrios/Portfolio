<template>
  <div id="app">
    <TheSideBar />
    <TheMainText id="about"/>
    <TheExperienceInformationContainer id="experience"/>
    <TheProjectsContainer id="projects"/>
    <TheTechnologiesContainer id="technologies"/>    
    <TheContactUsForm id="contactme"/>
    </div>
</template>

<script>
import TheSideBar from "./components/TheSideBar";
import TheExperienceInformationContainer from "./components/TheExperienceInformationContainer";
import TheMainText from "./components/TheMainText";
import TheProjectsContainer from "./components/TheProjectsContainer";
import TheContactUsForm from "./components/TheContactUsForm";
import TheTechnologiesContainer from "./components/TheTechnologiesContainer"

export default {
  name: "app",
  components: { 
    TheSideBar,
    TheExperienceInformationContainer,
    TheMainText,
    TheProjectsContainer,
    TheContactUsForm,
    TheTechnologiesContainer
     },
  mounted() {

  },
  methods: {}
};
</script>
<style>
body {
    background:#e3dac9;
}
html {
    scroll-behavior: smooth;
}

</style>