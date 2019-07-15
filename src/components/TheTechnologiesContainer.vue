<template>
  <div class="container">
    <div><h1 class="header">Technologies</h1></div>
    <div class="row">
      <div class="box box-text">
        <div class="box-content">
        </div>
      </div>
      <div class="box box-text">
        <div class="box-content">
        <div><svg width="256px" height="221px" viewBox="0 0 256 221" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
	        <g>
            <path d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z" fill="#41B883"></path>
            <path d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z" fill="#41B883"></path>
            <path d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z" fill="#35495E"></path>
          </g></svg>
        </div>
        </div>
      </div>
      <div class="box box-text">
        <div class="box-content">
        </div>
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
  name: "TheTechnologiesContainer"
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