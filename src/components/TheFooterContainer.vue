<template>
  <div class="footer-container">
	<footer id="footer center"> 
		<div class="center">
			<img class="logos" v-on:click="githubrepo" alt="github website logo" src="../assets/github-logo.svg"/>
			<img class="logos" v-on:click="linkedin" alt="linkedin website logo" src="../assets/linkedin-logo.svg"/>
		</div>
	</footer>
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
.footer-container{
	height:50px;
	width:100%;
	background-color:#9db6c9;
}
#footer {
	position:absolute;
}
.logos{
	height:50px;
	width:50px;
}
.center{
	text-align:center;
}
@media (-moz-touch-enabled){
    
}  
</style>
