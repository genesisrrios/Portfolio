<template>
    <div class="container">
      <!-- <div class="box box-text">
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
      </div> -->
    </div> 
</template>

<script>

export default {
  name: "TheExperienceInformationContainer"
};
</script>

<style scoped>
@media only screen and (min-width:400px) and (max-width: 1700px){

.container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height:100vh;  
}
.box-content{
    padding:10px;
}
h1{
    font-size: 25px;
}
h2{
    font-size:20px;
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
   border: 2px solid #95cfea;
   background: #f2f5f8;
   margin-top: 10px;
   z-index: 9999;
   position:absolute;
   left: -39px;   
}
}
@media only screen and (max-width: 667px) and (min-width: 375px) {
.container {
    padding-top:200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height:100vh;  
}
.box-content{
    padding:10px;
}
h1{
    font-size: 25px;
}
h2{
    font-size:20px;
    color: #383030;
}
.box{
    width: 100%;
    background-color: white;
    border-radius: 25px;
    justify-content: center;
    margin:20px;
}
.tool-tip{
    cursor: pointer;
    color:#58b4e0;
}
.tool-tip:hover .tool-tip-text:active{
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
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  display: none;
}
.marker {
   display: none !important; 
}
}
</style>