<template>
  <nav>
    <ul>
      <li v-on:click="goSection" data-target="intro" class="gotosec cursor">Main</li>
      <li v-on:click="goSection" data-target="about" class="gotosec cursor">About</li>
      <li v-on:click="goSection" data-target="project" class="gotosec cursor">Project</li>
      <li v-on:click="goSection" data-target="clone" class="gotosec cursor">Clone</li>
      <li v-on:click="goSection" data-target="contact" class="gotosec cursor">Contact</li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods:{
    goSection(e){
      if(!e.target.matches(".gotosec"))return;
      e.preventDefault();

      const sec = document.querySelector("#" + e.target.dataset.target);
      if(sec){
        sec.scrollIntoView({behavior : "smooth"});
      }
    }
  }
}
</script>

<style scoped>
nav{
  position: fixed;
  width: 1440px;
  left: 50%;
  transform: translate(-50% );
  z-index: 1000;
}
nav>ul{
  display: flex;
  justify-content: flex-end;
}
li{
  margin:20px 0 0 20px;
  font-weight: 500;
  font-size: 20px;
  color: #fff;
}
.cursor{
  cursor: pointer;
}
</style>