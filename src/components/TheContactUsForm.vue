<template>
  <div class="container">

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
  }
};
</script>

<style scoped>
</style>