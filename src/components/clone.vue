<template>
  <section  id="clone">
    <div class="clon-wrap">
      <h1 class="title">클론코딩 / 코딩연습</h1>
      <div class="clone-img-wrap">
        <div class="clone-site">
          <a href="https://homeclone.netlify.app/" target='_blank'>
            <img src="img/homeclone.jpg" alt="">
            <h2>싱그러운 집 클론코딩</h2>
            <p>HTML,CSS,JavaScript</p>
          </a>
        </div>
        <div class="clone-site">
          <a href="https://richmondclone.netlify.app/" target='_blank'>
            <img src="img/rici.jpg" alt="">
            <h2>리치몬드 클론코딩</h2>
            <p>HTML,CSS,JavaScript</p>
          </a>
        </div>
        <div class="clone-site">
          <a href="https://threejs-study-gamma.vercel.app/" target='_blank'>
            <img src="img/mordenthreejs.jpg" alt="">
            <h2>morden three.js 연습 </h2>
            <p>HTML,CSS,JavaScript,Three.js</p>
          </a>
        </div>
        <div class="clone-site">
            <a href="https://vuetodo-beta.vercel.app/" target='_blank'>
            <img src="img/todo.jpg" alt="">
            <h2>Vue.js를 활용한 TodoList </h2>
            <p>HTML,CSS,JavaScript,Vue</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
section{
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 0;
}
.clon-wrap{
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
}
h1{
  color: #fff;
  font-size: 30px;
}
.clone-img-wrap{
  width: 75%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.clone-site{
  width: 50%;
}
.clone-site img{
  width: 400px;
}
h2{
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  padding-top: 15px;
}
.clone-site p{
  padding-top: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #B4B4B4;
}
.clone-site:nth-child(3),:nth-child(4){
  margin-top: 50px;
}
</style>
