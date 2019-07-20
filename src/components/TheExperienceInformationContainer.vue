<template>
    <div class="container">
      <div class="box box-text ">
          <div class="timeline">
           <div class="box-content">
             <div class="marker"></div>
          <h1>-2019</h1>
          <h2>{{ $t("Experience.first") }}</h2>
             <div class="marker"></div>          
          <h1 id="date">-2018</h1>
          <h2>{{ $t("Experience.second") }}</h2>
          <h2>{{ $t("Experience.third") }}</h2>
          <h2>{{ $t("Experience.fourth") }} <span class="tool-tip">{{ $t("Experience.fifth") }}<span class="tool-tip-text">{{ $t("Experience.sixth") }}</span></span> {{ $t("Experience.seventh") }}</h2>
             <div class="marker"></div>          
          <h1 id="date">-2015</h1>
          <h2>{{ $t("Experience.eight") }}</h2>
           </div>
      </div>
      </div>
    </div> 
</template>

<script>

export default {
  name: "TheExperienceInformationContainer"
};
</script>

<style scoped>
.container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height:100vh;  
    background-color: #cc5577;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23cc5577' width='11' height='11'/%3E%3Crect fill='%23cd5776' x='10' width='11' height='11'/%3E%3Crect fill='%23ce5975' y='10' width='11' height='11'/%3E%3Crect fill='%23cf5b74' x='20' width='11' height='11'/%3E%3Crect fill='%23d05d72' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23d15f71' y='20' width='11' height='11'/%3E%3Crect fill='%23d26170' x='30' width='11' height='11'/%3E%3Crect fill='%23d36370' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23d4666f' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23d4686e' y='30' width='11' height='11'/%3E%3Crect fill='%23d56a6d' x='40' width='11' height='11'/%3E%3Crect fill='%23d56c6c' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23d66e6c' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23d6716b' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23d7736b' y='40' width='11' height='11'/%3E%3Crect fill='%23d7756a' x='50' width='11' height='11'/%3E%3Crect fill='%23d7776a' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23d8796a' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23d87c6a' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23d87e6a' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23d8806a' y='50' width='11' height='11'/%3E%3Crect fill='%23d8826a' x='60' width='11' height='11'/%3E%3Crect fill='%23d8856a' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23d8876a' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23d8896a' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23d88b6a' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23d88d6b' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23d8906b' x='70' width='11' height='11'/%3E%3Crect fill='%23d7926c' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23d7946d' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23d7966d' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23d7986e' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23d69a6f' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23d69d70' x='80' width='11' height='11'/%3E%3Crect fill='%23d69f71' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23d6a172' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23d5a374' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23d5a575' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23d5a776' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23d4a978' x='90' width='11' height='11'/%3E%3Crect fill='%23d4ab79' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23d3ad7b' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23d3af7d' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23d3b17e' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23d2b380' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23d2b582' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23d2b784' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23d1b986' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23d1bb88' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23d1bd8a' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23d1bf8c' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23d0c18f' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23d0c291' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23d0c493' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23d0c696' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23cfc898' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23cfca9a' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23cfcc9d' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23cfcd9f' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23cfcfa2' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;    

}
.box-content{
    padding:10px;
}
h1{
    font-size: 30px;
}
h2{
    font-size:25px;
    color: #383030;
}
.box{
    width: 55%;
    background-color: white;
    border-radius: 25px;
    justify-content: center;
    margin:45px;
}
.tool-tip{
    cursor: pointer;
    color:#58b4e0;
}
.tool-tip:hover .tool-tip-text{
    display:inline;
    background-color:white;
    color: black;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;  
    box-shadow: 0 0 3px black;
}
.tool-tip-text{
    display: none;
}
/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 10px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0;
  margin-left: -30px;
}
.marker {
   width: 25px;
   height: 25px;
   border-radius: 50%;
   border: 2px solid rgb(216, 114, 31);
   background: white;
   margin-top: 10px;
   z-index: 9999;
   position:absolute;
   left: -39px;   
}

</style>