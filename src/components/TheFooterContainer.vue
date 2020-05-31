<template>
  <div class="footer-container">
	<footer id="footer center"> 
		<div class="center">
			<img class="logos" v-on:click="openLink('https://github.com/genesisrrios')" alt="github website logo" src="../assets/Footer/github-logo.svg"/>
			<img class="logos" v-on:click="openLink('https://www.linkedin.com/in/genesis-rivera-78898012a/')" alt="linkedin website logo" src="../assets/Footer/linkedin-logo.svg"/>
		</div>
	</footer>
   </div>
</template>

<script>

export default {
  name: "TheFooterContainer",
  methods:{
    openLink:function(url){
		  window.open(url);
	},	  
  }
}
</script>
<style>
.footer-container{
	background-color:#9db6c9;
}
#footer {
	position:absolute;
}
.logos{
	height:50px;
	width:50px;
	cursor: pointer;
}
.center{
	text-align:center;
}
@media (-moz-touch-enabled){
	.logos{
		visibility: hidden;
	}}   

</style>
