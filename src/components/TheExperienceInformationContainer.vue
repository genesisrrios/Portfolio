<template>
    <section class="container">    
      <div class="center-tittle ">
      <h1 class="tittle">{{$t("Experience.tittle")}}</h1>
      </div>
        <div class="timeline">
          <ul>
            <li class="row-left">
                <div class="card">
                <h2 class="rounded-borders center">2019</h2>
                <p>{{$t("Experience.first")}}</p>
                </div>
            </li>
            <li class="row-right">
                  <div class="card">
                <h2 class="rounded-borders center" >2018</h2>
                <p>
                  {{$t("Experience.second")}}
                </p>
                <br/>
                <p>
                  {{$t("Experience.third")}}     
                </p>
                <p>
                  <br/>
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
              </li>
              <li class="row-left">
                <div class="card">
                <h2 class="rounded-borders center">2015</h2>
                <p>{{$t("Experience.eight")}}</p>
              </div>
              </li>
          </ul>
      </div>  
      </section>
</template>

<script>
export default {
  name: "TheExperienceInformationContainer"
};
</script>

<style scoped>
p{
  font-size: 25px;
  color:#305d8a;
}
h2{
  display:inline-block;
  color:white;
}

.tool-tip{
  cursor: pointer;
  color: #0000EE ;
}
.tool-tip-text{
  display:none;
  background-color:#305d8a;
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

@media screen and ( max-width: 1199px )
{
.rounded-borders{
  border-radius: 15px;
  border: 2px solid #305d8a;
  background: #305d8a;
  padding: 3px 10px 3px 10px;   
}
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
 display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
}
.row-left{
 display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
}
.center{
 display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
          justify-content: center;
}
}
@media screen and ( min-width: 1200px )
{
  .rounded-borders{
  border-radius: 15px;
  border: 2px solid #305d8a;
  background: #305d8a;
  padding: 3px 10px 3px 10px;   
  
}

.row-left{
  display:-webkit-box;  
  display:-ms-flexbox;  
  flex-wrap: wrap;
  }
.row-right{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
          flex-flow: row wrap;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
          justify-content: flex-end;
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
  text-align:center;
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
}
@media screen and ( min-width: 300px )
{
/* .container{
  height:200vh;
  width: 100vw;
} */
p{
  text-align: center;
}
}
@media screen and ( min-width: 480px )
{
/* .container{
  height:150vh;
  width: 100vw;
} */
p{
  text-align: center;
}
}
@media screen and ( min-width: 768px )
{
/* .container{
  height:115vh;
  width: 100vw;
} */
p{
  text-align: center;
}
}
@media screen and ( min-width: 992px )
{
/* .container{
  height:115vh;
  width: 300vw;
} */
p{
  text-align: center;
}
}
</style>