<template>
  <section class="container">
  <div class="center">
  <div class="center-tittle">
  <h1 class="tittle tittle-custom">{{$t("Contactme.tittle")}}</h1>
  </div>
  <div>
    <form v-on:keyup.enter="sendEmail">
      <div class="row">
      <h2>{{$t("Contactme.name")}} </h2>
      <input type="text" name="name" v-model="name" require>
      </div>
      <div class="row">
      <h2>{{$t("Contactme.phone")}} </h2>
      <input type="phone" name="phone" v-model="phone"> 
      </div>
      <div class="row">
        <h2>{{$t("Contactme.email")}}</h2>
      <input type="email" name="email" v-model="email" require>           
      </div>
      <div class="row">
        <h2>{{$t("Contactme.note")}}</h2>
      <input type="text" name="note" v-model="note">      
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
      axios.get('/contactme',parameters, function(){
      }).catch(function(){
      });
      // this.showOptionalFieldMessage(this.email, this.name, this.phone)
    },
  }
};
</script>
<style scoped>
.container{
  height:90vh;
  width: 100vw;  
}
h1{
  color:#305d8a;
}
h2{
  color:#305d8a;
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