<template>
  <div class="footer"> 
	  <div class="icons-row">  		  
		<div class="icons-column">
		  <img src="../assets/github.svg"/>
	  	</div>
		  <div class="icons-column" >
		  <img src="../assets/linkedin.svg"/>
		  </div>
	  </div>
  </div>
</template>

<script>

export default {
  name: "TheFooterContainer",
}
</script>
<style>
.footer{   
	position: relative;
    height: 50px;
}
.icons-row{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.icons-column{
	display:flex;
	flex-direction: column;
  	justify-content: center;	
}
</style>
