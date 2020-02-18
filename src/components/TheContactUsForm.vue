<template>
  <section class="container">
  <div class="center">
  <div class="center-tittle">
  <h1 class="tittle tittle-custom">{{$t("Contactme.tittle")}}</h1>
  </div>
  <div>
    <form v-on:keyup.enter="sendEmail">
      <div class="row">
      <label for="name">{{$t("Contactme.name")}}<input type="text" id="name" name="name" v-model="name" require></label>
      </div>
      <div class="row">
      <label for="phone">{{$t("Contactme.phone")}}<input type="phone" id="phone" name="phone" v-model="phone"></label>
      </div>
      <div class="row">
        <label for="email">{{$t("Contactme.email")}}<input id="phone" type="email" name="email" v-model="email" require></label>
      </div>
      <div class="row">
        <label for="note">{{$t("Contactme.note")}}<input type="text" id="note" name="note" v-model="note"></label>      
      </div>
    </form>
    <button class="btn" v-on:click="sendEmail">{{$t("Contactme.send")}}</button>
    </div>
    </div>
  </section>
</template>

<script>
const axios = require('axios');
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
      var parameters = 
      {
        email:this.email, 
        name:this.name, 
        phone:this.phone, 
        note:this.note
      };
      axios.get('/api/contactme',parameters, function(){
      }).catch(function(){
      });
      //this.showOptionalFieldMessage(this.email, this.name, this.phone)
    },
  }
};
</script>
<style scoped>
.container{
  height:110vh;
  width: 100vw;  
}
h1{
  color:#305d8a;
}
label{
  font-size:2rem;
  color:#305d8a;
  width:100%;
}
input{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius:20px;
  border-color: #03a734;
  }
.center{
  text-align: center;
  width: 50%;
  margin: 0 auto;    
}
.btn{
  background-color:   #305d8a; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius:20px;
  cursor:pointer;
}
.tittle-custom{
  margin-bottom:60px;
}
</style>