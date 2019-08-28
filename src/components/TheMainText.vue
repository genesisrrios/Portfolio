<template>
  <div id="app">
    <section>
      <div class="container">
        <div class="main-content">
            <h1 class="main-text">{{ $t("MainText.introduction") }}</h1>
            <img class="image" alt="SVG Image of a laptop with a cactus and a lamp" src="../assets/main-text-laptop.svg" />
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  name: "TheMainText"
};
</script>
<style scoped>
.container{
  height:100vh;
  width: 100vw;
}
div .main-content{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-text{
  width:55%;
  padding: 150px 0px 40px 0px;
  color:#305d8a;
  font-size: 2em;  
}
h1{
  text-align: center;
}
.image{
  height: 150px;
}
@media only screen and (max-width: 1280px) {
 .main-text{
  width:100%;
  font-size: 1.3em;
}
h1{
  text-align: center;
  font-size: 25spx;
}
.image{
  height: 150px;
} 
}
</style>