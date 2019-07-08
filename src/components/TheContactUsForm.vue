<template>
    <div class="container">
      <div class="container-flex">
        <input placeholder="Email" class="input-box" type="email" name="email">
      </div>
      <div class="container-flex">
        <input placeholder="Nombre" class="input-box" type="text" name="name">
      </div>	  
      <div class="container-flex">
        <input placeholder="Numero de telefono" class="input-box" type="text" name="phone">
      </div>
      <div class="container-flex">
        <input placeholder="Nota (opcional)" class="input-box" type="text" name="subject">        
      </div>
            <div class="container-flex">
      <button class="btn" >Enviar</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "TheContactUsForm"
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  padding-top: 50px;
}
.container-flex{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;	
}
.input-box{
    width: 30%;
    background-color: white;
    border-radius: 25px;
    justify-content: left;
	padding: 20px 30px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;	
}
.btn{
  padding: 10px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 10px;  
}
.btn:hover{
  cursor: pointer;
}
</style>