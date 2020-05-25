// <template>
//   <section class="container">
//   <div class="center">
//   <h1 class="tittle tittle-custom">{{$t("Contactme.tittle")}}</h1>
//   <div style="padding:50px;">
//     <form v-on:keyup.enter="sendEmail">
//       <div class="row">
//       <label for="name">{{$t("Contactme.name")}}<input type="text" id="name" name="name" v-model="name" require></label>
//       </div>
//       <div class="row">
//       <label for="phone">{{$t("Contactme.phone")}}<input type="phone" id="phone" name="phone" v-model="phone"></label>
//       </div>
//       <div class="row">
//         <label for="email">{{$t("Contactme.email")}}<input id="phone" type="email" name="email" v-model="email" require></label>
//       </div>
//       <div class="row">
//         <label for="note">{{$t("Contactme.note")}}<input type="text" id="note" name="note" v-model="note"></label>      
//       </div>
//     </form>
//     <button class="btn" v-on:click="sendEmail">{{$t("Contactme.send")}}</button>
//     </div>
//     </div>
//     <TheSnackBar v-if="showToast"  v-bind:show="showToast" :message="$t('Toast.emailSent')"/>
//     <TheFooterContainer/>
//   </section>
// </template>

// <script>
// const axios = require('axios');

// import { prototype } from 'events';

// import TheSnackBar from './TheSnackBar';
// import TheFooterContainer from "./TheFooterContainer";

// export default {
//   name: "TheContactUsForm",
//   components:{
//     TheSnackBar,
//     TheFooterContainer
//   },
//   data:function(){
//     return{
//       email:'',
//       name:'',
//       phone:'',
//       note:'',
//       showToast:false
//     }
//   },
//   methods:{
//     sendEmail: function(){
//       var self = this;
//       // const config = {
//       //    headers: {'Access-Control-Allow-Origin': '*'}
//       // };
//       var parameters = {
//         name:this.name,
//         email:this.email,
//         phone:this.email,
//         note:this.note
//       }
//       axios.post('/api/contactme', parameters)
//       .then(function (response) {
//         if(response.status === 200)
//           self.showToast = true;
//         else
//           self.showToast = false;
//       });
//       // this.showOptionalFieldMessage(this.email, this.name, this.phone);
//       self.showToast = false;
//     },
//   }
// };
// </script>
// <style scoped>
// .container{
//   position: absolute;
//   width: 100vw;  
// }
// h1{
//   color:#305d8a;
// }
// label{
//   font-size:2rem;
//   color:#305d8a;
//   width:100%;
// }
// input{
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   box-sizing: border-box;
//   border-radius:20px;
//   border-color: #03a734;
//   }
// .center{
//   text-align: center;
//   width: 50%;
//   margin: 0 auto;    
// }
// .btn{
//   background-color:   #305d8a; 
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   border-radius:20px;
//   cursor:pointer;
// }
// .tittle-custom{
//   margin-bottom:60px;
// }
// @media screen and ( max-width: 768px )
// {
// .center{
//   text-align: center;
//   width: 100%;
//   margin: 0 auto;    
// }
// }
// </style>