<template>
    <div class="container">
      <div class="box box-text">
           <div class="box-content">
               <h1>-2019</h1>
               <h2>{{ $t("Experience.first") }}</h2>
          <h1>-2018</h1>
          <h2>{{ $t("Experience.second") }}</h2>
          <h2>{{ $t("Experience.third") }}</h2>
          <h2>{{ $t("Experience.fourth") }} <span class="tool-tip">{{ $t("Experience.fifth") }}<span class="tool-tip-text">{{ $t("Experience.sixth") }}</span></span> {{ $t("Experience.seventh") }}</h2>
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
}
.box-content{
    padding:10px;
}
h1{
    font-family: 'Baskerville';
    font-size: 45px;
}
.box{
    width: 55%;
    background-color: white;
    border-radius: 25px;
    justify-content: center;
    margin:45px;
}
h2{
    font-family: 'Baskerville';
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
</style>