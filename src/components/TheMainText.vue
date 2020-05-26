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
/* Larger than mobile */
@media (min-width: 200px) {
  .main-text{
    padding: 150px 0px 40px 0px;
    color:#305d8a;
    font-size: 30px; 
  }
  .image{
  height: 150px;
  width:250px;
  }   
}

/* Larger than phablet */
@media (min-width: 550px) {
  .main-text{
    padding: 150px 0px 40px 0px;
    color:#305d8a;
    font-size: 30px; 
  }
  .image{
  height: 150px;
  width:250px;
  }  
}

/* Larger than tablet */
@media (min-width: 750px) {
    .main-text{
    padding: 150px 0px 40px 0px;
    color:#305d8a;
    font-size: 30px; 
  }
  .image{
  height: 150px;
  width:400px;
  } 
}

@media (min-width: 1000px) {
  .main-text{
    padding: 150px 0px 40px 0px;
    color:#305d8a;
    font-size: 40px; 
  }
  .image{
  height: 150px;
  width:400px;
  }  
}

@media (min-width: 1200px) {
  .main-text{
    padding: 150px 0px 40px 0px;
    color:#305d8a;
    font-size: 37px; 
  }
  .image{
  height: 150px;
  width:400px;
  }	
}
</style>