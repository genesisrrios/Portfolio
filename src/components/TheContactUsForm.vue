<template>
  <div class="container">
<div class="container-flex-row spacing"></div>
<div class="container-flex-row">
  <div class="container-flew-row" style="padding:60px;">
    <h1>{{$t('Contactme.talkToMe1')}}</h1>
    <h1>{{$t('Contactme.talkToMe2')}}</h1>
    <h1>{{$t('Contactme.talkToMe3')}}</h1>
    </div>
    <div class="container-flex-column position-flex-center">
      <div class="container-flex-row position-flex-center" >
        <input v-model="email" :placeholder="$t('Contactme.email')" required class="input-box" type="email" name="email">
      </div>
      <div class="container-flex-row position-flex-center">
        <input v-model="name" :placeholder="$t('Contactme.name')" required class="input-box" type="text" name="name">
      </div>	  
      <div class="container-flex-row position-flex-center">
        <input v-model="phone"  v-on:keyup.enter="sendEmail" :placeholder="$t('Contactme.phone')" required class="input-box" type="text" name="phone">
      </div>
      <div class="container-flex-row position-flex-center" >
        <input v-model="note" v-on:keyup.enter="sendEmail" :placeholder="$t('Contactme.note')" class="input-box" type="text" name="subject">        
      </div>
      <div class="container-flex-row position-flex-center">
      <h2 class="required-fields" >{{ $t("Contactme.requiredFields") }}</h2>
      </div>      
            <div class="container-flex-row position-flex-center ">
      <button class="btn" @click="sendEmail">{{ $t("Contactme.send") }}</button>
      </div>
      <div class="modal">
        <div class="modal-content">
          <h1 class="modal-header">{{ $t("Contactme.messageSent") }}</h1>
          <h2>{{ $t("Contactme.aboutQuestions") }}</h2>
          <h3>{{ $t("Contactme.question1") }}</h3>
          <h3>{{ $t("Contactme.question2") }}</h3>          
          <h3>{{ $t("Contactme.question3") }}</h3>    
          <div cla>
          <a  class="btn container-flex-row position-flex-center " @click="closeModal">
            {{ $t("Contactme.great") }}!
          </a>
          </div>
        </div>
      </div>
    </div>
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
      var parameters = 
      {
        email:this.email, 
        name:this.name, 
        phone:this.phone, 
        note:this.note
      };
      $.get('/contactme',parameters, function(){
      }).fail(function(){
      });
      this.showOptionalFieldMessage(this.email, this.name, this.phone)
    },
    closeModal: function(){
      $('.modal').css('display','none');
    },
    showOptionalFieldMessage: function(email, name, phone){
      if(email !== '' && name !== '' && phone !== ''  )
      {
        this.email = '';
        this.name = '';
        this.phone = '';
        this.note = '';
      $('.required-fields').css('display', 'hidden');
      $('.modal').css('display','inline');
      }else{
        $('.required-fields').css('display', 'inline');
      }
    }
  }
};
</script>

<style scoped>

.container {
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  /* background-color: #cc5577;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23cc5577' width='11' height='11'/%3E%3Crect fill='%23cd5776' x='10' width='11' height='11'/%3E%3Crect fill='%23ce5975' y='10' width='11' height='11'/%3E%3Crect fill='%23cf5b74' x='20' width='11' height='11'/%3E%3Crect fill='%23d05d72' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23d15f71' y='20' width='11' height='11'/%3E%3Crect fill='%23d26170' x='30' width='11' height='11'/%3E%3Crect fill='%23d36370' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23d4666f' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23d4686e' y='30' width='11' height='11'/%3E%3Crect fill='%23d56a6d' x='40' width='11' height='11'/%3E%3Crect fill='%23d56c6c' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23d66e6c' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23d6716b' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23d7736b' y='40' width='11' height='11'/%3E%3Crect fill='%23d7756a' x='50' width='11' height='11'/%3E%3Crect fill='%23d7776a' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23d8796a' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23d87c6a' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23d87e6a' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23d8806a' y='50' width='11' height='11'/%3E%3Crect fill='%23d8826a' x='60' width='11' height='11'/%3E%3Crect fill='%23d8856a' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23d8876a' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23d8896a' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23d88b6a' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23d88d6b' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23d8906b' x='70' width='11' height='11'/%3E%3Crect fill='%23d7926c' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23d7946d' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23d7966d' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23d7986e' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23d69a6f' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23d69d70' x='80' width='11' height='11'/%3E%3Crect fill='%23d69f71' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23d6a172' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23d5a374' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23d5a575' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23d5a776' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23d4a978' x='90' width='11' height='11'/%3E%3Crect fill='%23d4ab79' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23d3ad7b' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23d3af7d' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23d3b17e' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23d2b380' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23d2b582' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23d2b784' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23d1b986' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23d1bb88' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23d1bd8a' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23d1bf8c' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23d0c18f' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23d0c291' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23d0c493' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23d0c696' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23cfc898' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23cfca9a' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23cfcc9d' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23cfcd9f' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23cfcfa2' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;   */
}
.container-flex-row{
  display: flex;
  flex-direction: row;
}
.required-fields{
  font-size: 90%;
  color:red;
  display: none;
}
.container-flex-column{
  display: flex;
  flex-direction: column;	  
}
.position-flex-left{
  align-items: left;
  justify-content: left;
  width:30%;
}
.position-flex-center{
  align-items: center;
  justify-content: center;
}
.input-box{
    width: 300px;
    background-color: white;
    border-radius: 25px;
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
  background-color: white;
}
.btn:hover{
  cursor: pointer;
}
.modal{
  display:none;
  position:fixed;
  z-index:1;
  left:0;
  top:0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);   
  border-color:black;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border-radius: 10px;  
  border: 1px solid #888;
  text-align: center;
  width: 80%; 
}
.close {
  margin-left: 50%;
  color: #aaa;
  font-size: 15px;
  font-weight: bold;
}
h2{
  text-align: center;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.modal-header{
    color:#ddb48d;
}
h1{
  font-weight:bold;
  color: #fff;
  text-shadow: #343a40 2px 2px;
}
</style>