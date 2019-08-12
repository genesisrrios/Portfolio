<template>
    <div class="container">
      <div class="timeline">
        <ul>
          <li>
            <div class="content content-left">
              <div class="time">
              <h3>-2019</h3>
              </div>
              <p >{{$t("Experience.first")}}</p>
            </div>
          </li>
          <li>
            <div class="content content-right">
              <div class="time">
              <h3>-2016/2018</h3>
              </div>
              <p>{{$t("Experience.second")}}{{$t("Experience.third")}}
                {{$t("Experience.fourth")}}</p>
                <div class="tool-tip"><p>{{$t("Experience.fifth")}}</p></div>
                <div class="tool-tip-text"><p>{{$t("Experience.sixth")}}</p></div>
                {{$t("Experience.seventh")}}
            </div>
            </li>
            <li>
            <div class="content content-left">
              <div class="time">
              <h3>-2015</h3>
              </div>
              <p>{{$t("Experience.eight")}}</p>
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
.container{
  height:100vh;
  width: 100vw;
}
.timeline{
  position:relative;
  margin:50px auto;
  padding: 40px 0;
  width:40%;
  align-content: center;
}
.timeline:before{
  content:'';
  position:absolute;
  left:50%;
  width:2px;
  height:100%;
  background: #9db6c9;
}
.timeline ul li{
  list-style: none;
  position: relative;
  width:90%;
  padding: 20px 40px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
}
.content{
}
.content-right{
  align-content: right;
}
.content-left{
  align-content: left;
    justify-content: flex-end;
}
</style>