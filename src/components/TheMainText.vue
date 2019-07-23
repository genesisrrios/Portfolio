<template>
  <div id="app">
      <!-- <div class="container">
        <div class="main-text">
           <h1 >{{ $t("MainText.introduction") }}</h1>
        </div>
      </div> -->
    </div>
</template>

<script>

export default {
  name: "TheMainText"
};
</script>

<style scoped>
@media only screen and (min-width:400px) and (max-width: 1700px){
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    height:100vh;  
    background-image: url("../assets/main-text-laptop.svg");
    background-repeat: no-repeat;
    background-position: center center;    
    background-size: 500px 500px;    
} 

.main-text {
  padding-top: 75px;
  width: 50%;
  text-align: center;
  font-weight:bold;
  color: white;
  text-shadow: #343a40 2px 2px;
}
}
@media only screen and (max-width: 667px) and (min-width: 375px) {
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    height:100vh;  
    background-image: url("../assets/main-text-laptop.svg");
    background-repeat: no-repeat;
    background-position: center center;    
    background-size: 300px 300px;    
}

.main-text {
  padding-top: 55px;
  width: 100%;
  text-align: center;
  font-weight:bold;
  color: white;
  text-shadow: #343a40 2px 2px;
}
h1{
  font-size: 25px;
}
}
</style>