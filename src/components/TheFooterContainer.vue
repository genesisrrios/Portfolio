<template>
  <footer id="footer"> 
	<div class="center">
        <img class="github-logo" v-on:click="githubrepo" alt="github website logo" src="../assets/github-logo.svg"/>
        <img class="github-logo" v-on:click="linkedin" alt="linkedin website logo" src="../assets/linkedin-logo.svg"/>
	</div>
  </footer>
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
#footer {
    background-color: #9db6c9;
	position:relative;
	height:100px;
	margin-top:-100px;
	clear:both
}
.center{
	text-align: center;
  	width: 50%;
  	margin: 0 auto;   
}
.github-logo{
	height:50px;
	width:50px;
}
</style>
