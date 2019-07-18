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
        <input v-model="phone" :placeholder="$t('Contactme.phone')" required class="input-box" type="text" name="phone">
      </div>
      <div class="container-flex-row position-flex-center" >
        <input v-model="note" :placeholder="$t('Contactme.note')" class="input-box" type="text" name="subject">        
      </div>
      <div class="container-flex-row position-flex-center">
      <h2 class="required-fields" >{{ $t("Contactme.requiredFields") }}</h2>
      </div>      
            <div class="container-flex-row position-flex-center ">
      <button class="btn" @click="sendEmail">{{ $t("Contactme.send") }}</button>
      </div>
      <div class="modal">
        <div class="modal-content">
          <h1>{{ $t("Contactme.messageSent") }}</h1>
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
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);   
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

</style>