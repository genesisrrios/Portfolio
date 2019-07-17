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
  justify-content: center;
}
.box-content {
  display: flex;
  flex-direction: row;
  justify-content: center;  
  padding: 10px;
}
h1 {
  font-family: "Baskerville";
  font-size: 45px;
  color: #383030;
}
.header{
  text-align: center;
}
.box {
  height: 100%;
  width: 55%;
  background-color: white;
  border-radius: 25px;
  margin: 45px;
}
h2 {
  font-family: "Baskerville";
  color: #383030;
}
</style>