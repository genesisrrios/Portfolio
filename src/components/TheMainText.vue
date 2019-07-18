<template>
  <div id="app">
      <div class="container">
           <div class="main-text">
               <h1 >{{ $t("MainText.introduction") }}</h1>
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
.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    height:80vh;   
}
.main-text {
  padding-top: 75px;
  width: 50%;
  text-align: center;
  font-weight:bold
}
</style>