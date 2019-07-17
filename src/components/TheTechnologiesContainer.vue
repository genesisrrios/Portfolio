<template>
  <div class="container">
    <div class="row" style="justify-content: center;">  
    <h1 class="header" >{{ $t("Technologies.tittle") }}</h1>
    </div>
    <div class="row">
      <div class="box">
        <div class="box-content">
          <img src="../assets/javascript-vector-logo.svg" alt="Javascript Logo">
        </div>
      </div>
      <div class="box ">
        <div class="box-content">
         <img src="../assets/logo_NETcore.svg" alt=".Net Core Logo">
         </div>
         </div>
      <div class="box">
        <div class="box-content">
           <img src="../assets/microsoft-sql-server.svg" alt="Sql Server Logo">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="box">
        <div class="box-content">
            <img  src="../assets/C_sharp.svg" alt="C# Logo">
        </div>
      </div>
      <div class="box">
        <div class="box-content">
          <img src="../assets/CSS3_and_HTML5_.svg" alt="Css and HTML Logo">          
        </div>
      </div>
      <div class="box">
        <div class="box-content">
           <img src="../assets/WordPress.svg" alt="Css and HTML Logo">           
        </div>
      </div>    
    </div>
  <div class="row">
            <div class="box" >
        <div class="box-content" > 
           <img src="../assets/Vue.js_Logo.svg" alt="Vue js Logo">           
        </div>
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
  height: 150vh;
  background: linear-gradient(to right bottom,  #e0ebe8 50%, white 50%);
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.box-content {
  display: flex;
  flex-direction: row;
  justify-content: center;  
  padding: 10px;
}
h1 {
  font-size: 45px;
}
.header{
  text-align: center;
}

.box {
  height: 100%;
  width: 55%;
  border-radius: 25px;
  margin: 45px;
}
</style>