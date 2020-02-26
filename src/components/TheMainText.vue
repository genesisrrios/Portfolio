<template>
    <section>
      <div class="container">
        <div class="main-content">
            <h1 class="main-text">{{ $t("MainText.introduction") }}</h1>
            <img class="image" alt="SVG Image of a laptop with a cactus and a lamp" src="../assets/main-text-laptop.svg" />
          </div>
        </div>
      </section>
</template>

<script>
export default {
  name: "TheMainText"
};
</script>
<style scoped>

@media screen and ( min-width: 300px )
{
  .container{
    height:80vh;
    width: 100vw;
  }
  div .main-content{
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .main-text{
  width:100%;
  padding: 150px 0px 40px 0px;
  color:#305d8a;
  text-align: center;
  font-size: 1.5em;  
}
.image{
  height: 150px;
  width:300px;
}
}
@media screen and ( min-width: 480px )
{
  .container{
    height:130vh;
    width: 100vw;
  }
div .main-content{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-text{
  width:100%;
  padding: 150px 0px 40px 0px;
  color:#305d8a;
  text-align: center;
  font-size: 2em;  
}
.image{
  height: 100%;
}
}
@media screen and ( min-width: 768px )
{
     .container{
    height:100vh;
    width: 100vw;
  }
div .main-content{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-text{
  width:90%;
  padding: 150px 0px 40px 0px;
  color:#305d8a;
  text-align: center;
  font-size: 2em;  
}
.image{
  height: 100%;
}
}
@media screen and ( min-width: 992px )
{
        .container{
    height:100vh;
    width: 100vw;
  }
div .main-content{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-text{
  width:90%;
  padding: 150px 0px 40px 0px;
  color:#305d8a;
  text-align: center;
  font-size: 2em;  
}
.image{
  height: 100%;
}
}
@media screen and ( min-width: 1200px )
{
.container{
    height:100vh;
    width: 100vw;
  }
div .main-content{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-text{
  width:55%;
  padding: 150px 0px 40px 0px;
  color:#305d8a;
  text-align: center;
  font-size: 2em;  
}
.image{
  height: 150px;
}
}
</style>