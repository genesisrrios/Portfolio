<template>
    <div class="container">
      <div class="box box-text">
           <div class="box-content">
           </div>          
      </div>
        <div class="box box-text">
           <div class="box-content">
           </div>          
      </div>
            <div class="box box-text">
           <div class="box-content">
           </div>          
      </div>    
    </div> 
</template>

<script>

export default {
  name: "TheProjectsContainer"
};
</script>

<style scoped>
.container {
    width: 75%;
    display: flex;
    flex-direction: row;
    height:100vh;   
}
.box-content{
    padding:10px;
}
h1{
    font-family: 'Baskerville';
    font-size: 45px;
    color: #383030;    
}
.box{
    width: 55%;
    background-color: white;
    border-radius: 25px;
    justify-content: center;
    margin:45px;
}
h2{
    font-family: 'Baskerville';
    color: #383030;
}

</style>