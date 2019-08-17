<template>
    <div class="container">
      <div class="timeline">
        <ul>
          <li>
            <div class="row-left">
              <div class="card">
              <h2 class="rounder-borders">2019</h2>
              <h3>{{$t("Experience.first")}}</h3>
              </div>
            </div>
            <div class="row-right">
              <div class="card">
              <h2 class="rounder-borders" >2018</h2>
              <h3>
                {{$t("Experience.second")}}                
                {{$t("Experience.third")}}                
                {{$t("Experience.fourth")}}    
                {{$t("Experience.fifth")}}
                {{$t("Experience.sixth")}}
                {{$t("Experience.seventh")}}
              </h3>
                </div>
            </div>
            <div class="row-left">
            <div class="card">
              <h2 class="rounder-borders">2015</h2>
              <h3>{{$t("Experience.eight")}}</h3>
            </div>
            </div>
          </li>
        </ul>
      </div>
  </div>       
</template>

<script>

export default {
  name: "TheExperienceInformationContainer"
};
</script>

<style scoped>
h2{
  display:inline-block;
  color:white;
  
}
.container{
  height:100vh;
  width: 100vw;
}
ul li{
  list-style: none;
}
.card{
  width: 40%;
  height: 40%;
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;  
}
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #9db6c9;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}
.row-right{
  display: flex;
  justify-content: right;
}
.row-left{
  display: flex;
  justify-content: left;
}

</style>