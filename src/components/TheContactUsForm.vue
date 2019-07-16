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
      <div class="container-flex required-fields">
      <h2>{{ $t("Contactme.requiredFields") }}</h2>
      </div>      
            <div class="container-flex">
      <button class="btn" @click="sendEmail">{{ $t("Contactme.send") }}</button>
      </div>
      <div class="modal">
        <div class="modal-content">
          <h2>{{ $t("Contactme.messageSent") }}</h2>
          <a class="close btn" @click="closeModal">
            {{ $t("Contactme.great") }}
          </a>
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
      $('.close').click(function(){
        $('.modal').css('display','none');
      });      
    },
    showOptionalFieldMessage: function(email, name, phone){
      if(email !== '' && name !== '' && phone !== ''  )
      {
        this.email = '';
        this.name = '';
        this.phone = '';
        this.note = '';
      $('.required-fields').css('display', 'none');
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
  width: 80%; 
}
/* The Close Button */
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
.required-fields{
  display: none;
}
.required-fields{
  display:hidden;
  color:red;
}
</style>