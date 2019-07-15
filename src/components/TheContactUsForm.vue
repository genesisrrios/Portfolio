<template>
    <div class="container">
      <div class="container-flex">
        <input v-model="email" :placeholder="$t('Contactme.email')" class="input-box" type="email" name="email">
      </div>
      <div class="container-flex">
        <input v-model="name" :placeholder="$t('Contactme.name')" class="input-box" type="text" name="name">
      </div>	  
      <div class="container-flex">
        <input v-model="phone" :placeholder="$t('Contactme.phone')" class="input-box" type="text" name="phone">
      </div>
      <div class="container-flex">
        <input v-model="note" :placeholder="$t('Contactme.note')" class="input-box" type="text" name="subject">        
      </div>
            <div class="container-flex">
      <button class="btn" @click="sendEmail">{{ $t("Contactme.send") }}</button>
      </div>
  </div>
</template>

<script>
import { prototype } from 'events';
export default {
  name: "TheContactUsForm",
  data:function(){
    return{
      email:'',
      name:'',
      phone:'',
      note:''
    }
  },
  methods:{
    sendEmail: function(){
      var parameters = {email:this.email, name:this.name, phone:this.phone, note:this.note};
      $.get('/contactme',parameters, function(){
      });
    }
  }
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