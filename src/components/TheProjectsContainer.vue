<template>
  <div class="container spacing">
    <div class="row"  style="justify-content: center;">
    <h1 class="header">{{ $t("Projects.tittle") }}</h1>
    </div>    
    <div class="row">
      <div class="box">
        <div class="box-content"></div>
      </div>
      <div class="box">
        <div class="box-content"></div>
      </div>
    </div>
    <div class="row">
      <div class="box">
        <div class="box-content"></div>
      </div>
      <div class="box">
        <div class="box-content"></div>
      </div>
      <div class="box">
        <div class="box-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheProjectsContainer"
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 120vh;
}
.row {
  display: flex;
  flex-direction: row;
}
.box-content {
  padding: 10px;
}
h1 {
  font-size: 45px;
  color: #383030;
}
.box {
  height: 100%;
  width: 55%;
  background-color: white;
  justify-content: center;
  margin: 45px;
}
.header{
  text-align: center;
}
h2 {
  color: #383030;
}
.image{
  height:300px;
}
</style>