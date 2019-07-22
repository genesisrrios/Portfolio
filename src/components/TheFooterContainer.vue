<template>
  <div class="footer"> 
	  <div class="icons-row">  		  
		<div class="icons-column">
		  <img class="icon" src="../assets/github.svg" v-on:click="githubrepo"/>
	  	</div>
		  <div class="icons-column" >
		  <img class="icon" src="../assets/linkedin.svg" v-on:click="linkedin"/>
		  </div>
	  </div>
  </div>
</template>

<script>

export default {
  name: "TheFooterContainer",
  methods:{
	  githubrepo:function(){
		  window.open("https://github.com/genesisrrios");
	  },
	  linkedin:function(){
		  window.open("https://www.linkedin.com/in/genesis-rivera-78898012a/");
	  }
  }
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
.icon { 
	cursor: pointer;
transition: all .2s ease-in-out; 
}
 
.icon:hover { 
		cursor: pointer;
transform: scale(1.1); 
}
</style>
