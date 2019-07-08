<template>
  <div class="container">
    <div class="row">
      <div class="box box-text">
        <div class="box-content">
        </div>
      </div>
      <div class="box box-text">
        <div class="box-content"></div>
      </div>
      <div class="box box-text">
        <div class="box-content"></div>
      </div>
    </div>
    <div class="row">
      <div class="box box-text">
        <div class="box-content"></div>
      </div>
      <div class="box box-text">
        <div class="box-content"></div>
      </div>
      <div class="box box-text">
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
  height: 100vh;
}
.row {
  display: flex;
  flex-direction: row;
}
.box-content {
  padding: 10px;
}
h1 {
  font-family: "Baskerville";
  font-size: 45px;
  color: #383030;
}
.box {
  height: 100%;
  width: 55%;
  background-color: white;
  border-radius: 25px;
  justify-content: center;
  margin: 45px;
}
h2 {
  font-family: "Baskerville";
  color: #383030;
}
</style>