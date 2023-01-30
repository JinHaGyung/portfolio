<template>
  <section id="intro">
    <div class="ment">
      <p class="more">MORE THEN</p>
      <span></span>
      <p class="more color">생각하는</p>
    </div>
  <video  src="img/home-background.mp4" autoplay loop muted></video>
  </section>

</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  setup(){
    onMounted(() => {
      const mentarray = ["생각하는","찾아보는","실천하는","부딪치는","소통하는","발전하는"]
      let colorment = document.querySelector(".color");
      mentarray[Math.floor(Math.random()*mentarray.length)]
      setInterval(() => {
        colorment.innerHTML = `${mentarray[Math.floor(Math.random()*mentarray.length)]}`
      }, 2500);
    })
  } 
}
</script>

<style scoped>
#intro{
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.ment{
  width: 100%;
  height: 100%;
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.more{
  font-size: 26px;
  font-weight: 500;
  color: #fff;
  margin-right: 15px;
}
.ment>span{
  width: 0;
  height: 0;
  border-bottom: 7px solid transparent;
  border-top: 7px solid transparent;
  border-left: 10px solid #1CE1B1;
  border-right: 15px solid transparent;
}
.color{
  color: #1CE1B1;
}
video{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
</style>