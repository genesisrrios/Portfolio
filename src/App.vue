<template>
  <div id="app">
    <TheSideBar />
    <TheMainText />
    <TheExperienceInformationContainer/>
    <TheProjectsContainer/>
    </div>
</template>

<script>
import TheSideBar from "./components/TheSideBar";
import TheExperienceInformationContainer from "./components/TheExperienceInformationContainer";
import TheMainText from "./components/TheMainText";
import TheProjectsContainer from "./components/TheProjectsContainer";

export default {
  name: "app",
  components: { 
    TheSideBar,
    TheExperienceInformationContainer,
    TheMainText,
    TheProjectsContainer },
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