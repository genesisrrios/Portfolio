<template>
  <div class="container spacing">
    <!-- <div class="row">
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
    </div> -->
  </div>
</template>

<script>
export default {
  name: "TheProjectsContainer"
};
</script>

<style scoped>
@media only screen and (min-width:400px) and (max-width: 1700px){
.container {
  width: 100%;
  height: 120vh;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items:center;
}
.box-content {
  padding: 10px;
}
h1 {
  font-size: 45px;
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
}
@media only screen and (max-width: 667px) and (min-width: 375px) {
.container {
  width: 100%;
  height: 120vh;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items:center;
}
.box-content {
  padding: 10px;
}
h1 {
  font-size: 45px;
}
.box {
  height: 50%;
  width: 100%;
  background-color: white;
  justify-content: center;
}
.header{
  text-align: center;
}
h2 {
  color: #383030;
}
}
</style>