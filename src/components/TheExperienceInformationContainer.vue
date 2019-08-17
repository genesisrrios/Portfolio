<template>
    <div class="container">
      <div class="timeline">
        <ul>
          <li>
            <div class="row-left ">
              <div class="card">
              <h2 class="rounder-borders center">2019</h2>
              <p>{{$t("Experience.first")}}</p>
              </div>
            </div>
            <div class="row-right">
              <div class="card">
              <h2 class="rounder-borders center" >2018</h2>
              <p>
                {{$t("Experience.second")}}
              </p>
              <p>
                {{$t("Experience.third")}}     
              </p>
              <p>
                {{$t("Experience.fourth")}}
                <span class="tool-tip">
                  {{$t("Experience.fifth")}}
                <span class="tool-tip-text">
                {{$t("Experience.sixth")}}
                </span>
                </span>
                {{$t("Experience.seventh")}}
              </p>
                </div>
            </div>
            <div class="row-left">
            <div class="card">
              <h2 class="rounder-borders center">2015</h2>
              <p>{{$t("Experience.eight")}}</p>
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
.tool-tip{
  cursor: pointer;
  color: #0000EE ;
}
.tool-tip-text{
  display:none;
  background-color: #afddb5;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  margin-left: -60px;  
}
.tool-tip:hover .tool-tip-text{
  display: block;
}
@media only screen and (max-width: 1280px) {
ul li{
  list-style: none;
  
}
.card{
  width: 100%;
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
}
.timeline {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
}
.timeline::after {
  content: '';
  display: none;
}
.row-right{
  display: flex;
  justify-content: center;
}
.row-left{
  display: flex;
  justify-content: center;
}
.center{
  display: flex;
  justify-content: center;
}
}
</style>