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
        <div class="box-content small-top-margin" >
           <img src="../assets/microsoft-sql-server.svg" alt="Sql Server Logo">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="box">
        <div class="box-content small-top-margin">
            <img  src="../assets/C_sharp.svg" alt="C# Logo">
        </div>
      </div>
      <div class="box">
        <div class="box-content">
          <img src="../assets/CSS3_and_HTML5_.svg" alt="Css and HTML Logo">          
        </div>
      </div>
      <div class="box">
        <div class="box-content big-top-margin">
           <img src="../assets/WordPress.svg" alt="Css and HTML Logo">           
        </div>
      </div>    
            <div class="box" >
        <div class="box-content big-top-margin left-margin"> 
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
  height: 100vh;
    /* background-color: #cc5577;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23cc5577' width='11' height='11'/%3E%3Crect fill='%23cd5776' x='10' width='11' height='11'/%3E%3Crect fill='%23ce5975' y='10' width='11' height='11'/%3E%3Crect fill='%23cf5b74' x='20' width='11' height='11'/%3E%3Crect fill='%23d05d72' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23d15f71' y='20' width='11' height='11'/%3E%3Crect fill='%23d26170' x='30' width='11' height='11'/%3E%3Crect fill='%23d36370' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23d4666f' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23d4686e' y='30' width='11' height='11'/%3E%3Crect fill='%23d56a6d' x='40' width='11' height='11'/%3E%3Crect fill='%23d56c6c' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23d66e6c' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23d6716b' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23d7736b' y='40' width='11' height='11'/%3E%3Crect fill='%23d7756a' x='50' width='11' height='11'/%3E%3Crect fill='%23d7776a' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23d8796a' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23d87c6a' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23d87e6a' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23d8806a' y='50' width='11' height='11'/%3E%3Crect fill='%23d8826a' x='60' width='11' height='11'/%3E%3Crect fill='%23d8856a' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23d8876a' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23d8896a' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23d88b6a' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23d88d6b' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23d8906b' x='70' width='11' height='11'/%3E%3Crect fill='%23d7926c' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23d7946d' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23d7966d' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23d7986e' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23d69a6f' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23d69d70' x='80' width='11' height='11'/%3E%3Crect fill='%23d69f71' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23d6a172' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23d5a374' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23d5a575' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23d5a776' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23d4a978' x='90' width='11' height='11'/%3E%3Crect fill='%23d4ab79' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23d3ad7b' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23d3af7d' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23d3b17e' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23d2b380' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23d2b582' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23d2b784' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23d1b986' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23d1bb88' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23d1bd8a' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23d1bf8c' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23d0c18f' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23d0c291' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23d0c493' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23d0c696' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23cfc898' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23cfca9a' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23cfcc9d' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23cfcd9f' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23cfcfa2' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed; */

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
  height: 250px;
  width: 250px;
  border-radius: 25px;
  margin: 45px;
  background-color:white;
}
.small-top-margin{
  margin-top:15px;
}
.big-top-margin{
  margin-top:50px;
}
.left-margin{
  margin-left: 25px;
}
</style>