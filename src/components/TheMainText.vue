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
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height:75vh;   
}
.main-text {
    width: 50%;
    text-align: center;
    color: #383030;
}
</style>