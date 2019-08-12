<template>
  <div id="app">
      <div class="container">
        <div class="main-content">
           <h1 class="main-text">{{ $t("MainText.introduction") }}</h1>
          <img class="image" src="../assets/main-text-laptop.svg" />
        </div>
      </div>
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