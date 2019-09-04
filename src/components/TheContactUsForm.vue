<template>
  <section class="container">
    <form v-on:keyup.enter="sendEmail">
      <div class="row">
      <h2>{{$t("Contactme.name")}} </h2>
      <input type="text" name="name" v-model="name">
      </div>
      <div class="row">
      <h2>{{$t("Contactme.phone")}} </h2>        
      <input type="phone" name="phone" v-model="phone"> 
      </div>
      <div class="row">
        <h2>{{$t("Contactme.email")}}</h2>
      <input type="email" name="email" v-model="email">           
      </div>
      <div class="row">
        <h2>{{$t("Contactme.note")}}</h2>
      <input type="text" name="note" v-model="note">      
      </div>
    </form>
    <button class="btn">{{$t("Contactme.send")}}</button>
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
  height:120vh;
  width: 100vw;
}
h2{
  color:#305d8a;
}
.row{
  display: flex;
  flex-direction: row;

}
input{
  flex-grow: 1;

}
</style>