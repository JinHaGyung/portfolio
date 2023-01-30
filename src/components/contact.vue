<template>
  <section id="contact">
    <h1>Contect</h1>
    <p>안녕하세요. 다양한 회사에서 쌓은 많은 경험으로 소통하는 진하경입니다. </p>
    <div class="contact-wrap">
      <div class="call"><span class="icon callicon"></span>010-3911-5934</div>
      <div class="email"><span class="icon emailicon"></span>wlsgkrud96@gmail.com</div>
      <div class="kakao"><span class="icon kakaoicon"></span>@pjisry14</div>
      <div class="github"><span class="icon githubicon"></span>https://github.com/JinHaGyung</div>
    </div>
  </section>
</template>

<style scoped>
section{
  max-width: 1440px;
  margin: 0 auto;
  padding: 270px 0 40px; 
}
h1{
  color: #fff;
  font-size: 30px;
}
p{ 
  padding-top: 50px;
  color: #fff;
  font-size: 20px;
}
.contact-wrap{
  display: block;
  width: 100%;
  height: auto;
}
.contact-wrap>div{
  display: flex;
  align-items: center;
  margin: 40px 0;
  font-size: 20px;
  padding-left: 30px;
}
.icon{
  display: inline-block;
  width: 35px;
  height: 35px;
  background-size: contain;
  background-repeat: no-repeat;
  padding-right: 20px;
}
.callicon{
  background-image: url(../../public/img/phone.png);
}
.emailicon{
  background-image: url(../../public/img/mail.png);
}
.kakaoicon{
  background-image: url(../../public/img/kakaotalk.png);
}
.githubicon{
  background-image: url(../../public/img/git.png);
}
</style>