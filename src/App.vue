<template>
  <div id="app">
    <TheSideBar />
    <div class="container">
      <div class="main-text">
        <h1>
          ¡Hola! mi nombre es Génesis Rivera Rios ,
          me especializo en resolver problemas para
          compañías de pequeño y mediano tamaño
          mediante la creación y diseño efectivo de
          paginas web de acuerdo a su necesidad.
        </h1>
      </div>
    </div>
    <div class="container">
        <h1>
          ¡Hola! mi nombre es Génesis Rivera Rios ,
          me especializo en resolver problemas para
          compañías de pequeño y mediano tamaño
          mediante la creación y diseño efectivo de
          paginas web de acuerdo a su necesidad.
        </h1>
    </div>
    <div class="container"></div>
  </div>
</template>

<script>
import TheSideBar from "./components/TheSideBar";

export default {
  name: "app",
  components: { TheSideBar },
  mounted() {

  },
  methods: {}
};


</script>

<style >
body {
  background: #2099d2;
}
.changeColor {
  background: #58b4e0;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height:100vh;
}

.main-text {
  width: 50%;
  text-align: center;
}
.underline {
  text-decoration: underline;
}
h1{
  font-size: 45px;
}
</style>
