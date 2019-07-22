<template>
  <div class="container" >
<div class="side-padding">
   <div>
    <h1>{{$t('Contactme.talkToMe1')}}</h1>
    <h1>{{$t('Contactme.talkToMe2')}}</h1>
    <h1>{{$t('Contactme.talkToMe3')}}</h1>
    </div>
    </div>
    <div >
      <div class="flex">
      <div  >
        <input v-model="email" :placeholder="$t('Contactme.email')" required class="input-box" type="email" name="email">
      </div>
      <div>
        <input v-model="name" :placeholder="$t('Contactme.name')" required class="input-box" type="text" name="name">
      </div>	  
      <div>
        <input v-model="phone"  v-on:keyup.enter="sendEmail" :placeholder="$t('Contactme.phone')" required class="input-box" type="text" name="phone">
      </div>
      <div>
        <input v-model="note" v-on:keyup.enter="sendEmail" :placeholder="$t('Contactme.note')" class="input-box" type="text" name="subject">        
      </div>
      <div>
      <h2 class="required-fields" >{{ $t("Contactme.requiredFields") }}</h2>
      </div>      
            <div class="btn-padding">
      <button class="btn" @click="sendEmail">{{ $t("Contactme.send") }}</button>
      </div>
      </div>
      <div class="modal">
        <div class="modal-content">
          <h1 class="modal-header">{{ $t("Contactme.messageSent") }}</h1>
          <h2>{{ $t("Contactme.aboutQuestions") }}</h2>
          <h3>{{ $t("Contactme.question1") }}</h3>
          <h3>{{ $t("Contactme.question2") }}</h3>          
          <h3>{{ $t("Contactme.question3") }}</h3>    
          <div cla>
          <a  class="btn " @click="closeModal">
            {{ $t("Contactme.great") }}!
          </a>
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
  height: 70vh;
  padding-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;  
}
.required-fields{
  font-size: 90%;
  color:red;
  display: none;
}
.side-padding{
  padding-left: 200px;
}
.flex{
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
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
.btn-padding{
  padding-left: 140px;
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