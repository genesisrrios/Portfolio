<template>
    <section>
      <div class="container">
        <div class="main-content">
            <h1 class="main-text">{{ $t("MainText.introduction") }}</h1>
            <img class="image" alt="SVG Image of a laptop with a cactus and a lamp" src="../assets/main-text-laptop.svg" />
          </div>
        </div>
      </section>
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
  text-align: center;
  font-size: 2em;  
}
.image{
  height: 150px;
}
@media only screen and (max-width: 800px) {
 .main-text{
  width:100%;
  font-size: 1.9em;
}
.image{
  height: 150px;
} 
}
@media screen and (max-width: 1280px) and (min-width: 800px),(max-width: 1024px) and (min-width: 768px){
  .container{
    height:60vh;
    width: 100vw;
  }
}
</style>