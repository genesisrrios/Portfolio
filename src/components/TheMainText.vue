<template>
    <section class="container" >
    <div class="row">
      <h1 class="main-text">{{ $t("MainText.introduction") }}</h1>            
    </div>
		<div class="row">
			<img class="image" alt="SVG Image of a laptop with a cactus and a lamp" src="../assets/main-text-laptop.svg" />
		</div>
    </section>
</template>

<script>
export default {
  name: "TheMainText"
};
</script>
<style scoped>
div{
	text-align: center;
}
.image{
  height: 150px;
  width:300px;
}		
.main-text{
padding: 150px 0px 40px 0px;
color:#305d8a;
font-size: 3em; 
}
</style>