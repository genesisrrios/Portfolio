<template>
  <div id="app">
    <TheSideBar />
    <InformationContainer/>
    </div>
</template>

<script>
import TheSideBar from "./components/TheSideBar";
import InformationContainer from "./components/InformationContainer";


export default {
  name: "app",
  components: { TheSideBar,InformationContainer },
  mounted() {

  },
  methods: {}
};
</script>