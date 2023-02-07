<template>
  <section>
    <div class="black-bg" v-if="sonymodal">
          <div class="white-bg">
            <div class="sonymain modal-main">
              <div class="ment">
              <h1>소니사이트 리뉴얼 프로젝트</h1>
              <p class="subtitle">Sony Renewal Project</p>
              </div>
              <img src="../../public/img/modal/sony/computerview.png" alt="">
            </div>
            <div class="sonyorigin">
              <p class="origin">기존 홈페이지 분석</p>
              <img src="../../public/img/modal/sony/origin1.png" alt="">
              <div class="origin-wrap">
                <img class="graph" src="../../public/img/modal/sony/grape.jpg" alt="">
                <ul>
                  <li>제품의 어필포인트 미약하다</li>
                  <li>접근성 떨어진다</li>
                  <li>통일성이 느껴지지 않는다</li>
                  <li>고객 지원 페이지 편의성 부족하다</li>
                  <li>촌스러운 디자인</li>
                  <li>반응형 지원하지 않는다</li>
                </ul>
             </div>
            </div>
            <div class="sonyorigin renewral-site">
              <p class="origin">리뉴얼 홈페이지 분석</p>
              <img src="../../public/img/modal/sony/renewsite.png" alt="">
              <div class="origin-wrap">
                <img class="graph" src="../../public/img/modal/sony/grape2.jpg" alt="">
                <ul>
                  <li>상품을 종류별로 구분, 정돈하여 깔끔하다</li>
                  <li>다양한 곳에 사람들이 자주 쓰는 서비스를 배치했다.</li>
                  <li>통일감을 주었다</li>
                  <li>이벤트 배너를 위아래로 배치해 다양한 컨텐츠를 보여준다.</li>
                  <li>자사의 상품을 세련되게 보여준다.</li>
                  <li>고객 지원 서비스를 페이지 여러곳에 해서 사용자 편의성을 높였다.</li>
                  <li>반응형이 다양한 사이즈로 존재한다</li>
                </ul>
             </div>
            </div>
            <div class="projectrenew">
              <h1>사이트 리뉴얼</h1>
              <div class="renewral-img-wrap">
                <span class="renew-page"><img src="../../public/img/modal/sony/renew1.png" alt="">
                <ul>
                  <li>Swiper를 활용한 메인 슬라이드를 제작했습니다.</li>
                  <li>소니 주력 제품을 탭별로 분리했습니다.</li>
                  <li>이벤트 페이지를 밖으로 빼내어 접근성을 높였습니다.</li>
                  <li>필요 아이콘을 제작해 통일성 부여하였습니다.</li>
                </ul></span>
                <span class="renew-page"><img src="../../public/img/modal/sony/renew2.png" alt="">
                <ul>
                  <li>스크립트를 활용한 이미지 사이즈를 변경했습니다.</li>
                </ul></span>
                <span class="renew-page"><img src="../../public/img/modal/sony/renew3.png" alt="">
                <ul>
                  <li>Mysql를 활용하여 상품 썸네일 페이지를 제작하였습니다.</li>
                  <li>최신 제품(5개)에는 new 태그를 넣는 스크립트를 만들었습니다.</li>
                </ul></span>
                <span class="renew-page"><img src="../../public/img/modal/sony/renew4.png" alt="">
                <ul>
                  <li>Mysql를 활용한 상세페이지입니다.</li>
                  <li>radio로 구매할 갯수를 선택하면 자동으로 계산이 되는 계산기를 제작하였습니다.</li>
                </ul></span>
                <span class="renew-page"><img src="../../public/img/modal/sony/renew5.png" alt="">
                <ul>
                  <li>Mysql에 저장을 할 수 있는 회원가입 페이지입니다.</li>
                  <li>항목마다 필요한 유효성 검사를 넣었습니다.</li>
                </ul></span>
                <span class="renew-page"><img src="../../public/img/modal/sony/renew6.png" alt="">
                <ul>
                  <li>회원가입 페이지에서 등록한 정보로 로그인하는 페이지입니다.</li>
                  <li>Mysql에 등록한 아이디와 비밀번호가 일치하면 로그인 확인 메세지가 나옵니다.</li>
                </ul>
                </span>
                <span class="renew-page"><img src="../../public/img/modal/sony/renew7.png" alt="">
                <ul>
                  <li>MySql을 사용한 공지사항 작성,수정,조회가 가능한 페이지입니다.</li>
                  <li>역순으로 번호가 나오는 스크립트를 제작하였습니다.</li>
                </ul></span>
              </div>
            </div>
          </div>
          <div class="modalclose" @click="sonymodal = false"></div>
    </div>
    <div class="black-bg" v-if="kbmodal">
          <div class="white-bg">
            <div class="sonymain modal-main">
              <div class="ment">
              <h1>KB저축은행 리뉴얼 팀 프로젝트</h1>
              <p class="subtitle">KB-Bank Renewal Team Project</p>
              </div>
              <img src="../../public/img/modal/kb/kbview.png" alt="">
            </div>
            <div class="sonyorigin">
              <p class="origin">기존 홈페이지 분석</p>
              <img src="../../public/img/modal/kb/kborigin.png" alt="">
              <div class="origin-wrap">
                <img class="graph" src="../../public/img/modal/kb/graph1.jpg" alt="">
                <ul class="kbul">
                  <li>슬라이드,탭을 활용하였으나, <br> 적은 화면에 많은 내용을 넣어 접근성이 떨어진다</li>
                  <li>다양한 폰트 사이즈로 가독성이 떨어진다.</li>
                  <li>반응형을 지원하지 않는다.</li>
                  <li>원하는 페이지로 가기까지 클릭이 많다.</li>
                  <li>다소 촌스러운 디자인</li>
                </ul>
             </div>
            </div>
            <div class="sonyorigin renewral-site">
              <p class="origin">리뉴얼 홈페이지 분석</p>
              <img src="../../public/img/modal/kb/kdbsite.jpg" alt="">
              <div class="origin-wrap">
                <img class="graph" src="../../public/img/modal/kb/graph2.jpg" alt="">
                <ul class="kbul">
                  <li>서비스 설명을 잘 정리해놓았다.</li>
                  <li>각 세션마다 큰 주제를 선정하여 내용을 넣어 보기가 편하다</li>
                  <li>적당한 여백의 사용으로 사용자가 보기 편한 화면을 만들었다.</li>
                  <li>상품페이지로 바로 갈 수 있도록 중요한 페이지는 앞으로 꺼내었다.</li>
                  <li>실물 상품이 없으나 아이콘과 사진을 혼합해 심심하지 않게 만들었다.</li>
                  <li>각 세션별로 스와이퍼와 컬러를 각각 사용해 분리감이 느껴진다.</li>
                  <li>반응형이 되지 않아 별도의 반응형용 디자인 및 사이트 서치 필요</li>
                </ul>
             </div>
              <img src="../../public/img/modal/kb/kyowonsite.png" alt="" class="padding">
              <div class="origin-wrap padding" >
                <img class="graph" src="../../public/img/modal/kb/graph3.jpg" alt="">
                <ul class="kbul">
                  <li>상품 외에도 다양한 컨텐츠를 삽입하여 풍성하게 제작하였다.</li>
                  <li>사진과 글로 이해하기 쉽게 제작하였다.</li>
                  <li>반응형이 된다.</li>
                </ul>
             </div>
            </div>
            <div class="team">
              <h1>팀 활동</h1>
              <p>팀장으로써 팀원들의 원할한 작업을 위해서 팀 작업용 시트를 제작하여 일정, 작업 피드백, 공용 규칙, 공용 코드, 팀 작업 내 주의할 부분등을 정리하고 공유하며,<br>
                작업 파트 분배, 의견 조율등 팀원들이 프로젝트에만 집중할 수 있는 환경을 만드는데 주력했습니다.</p>
              <p>팀원으로써는 팀원들이 제가 하는 작업을 보다 알기 쉽게 정리하고, 분배한 작업 파트에서 서로 다르게 생각하는 부분은 없는지, 팀원들은 어떤 식으로 작업을 할 예정인지<br>
              꾸준하게 소통하면서 의견을 제시하기도 하고, 팀원의 작업물에 제가 맞추기도 하면서 작업에 임했습니다.</p>
              <p><a href="https://docs.google.com/spreadsheets/d/1lYLy6oGqPpNetv9w24IX4-LozwY-Y6YdlBDAEBicW48/edit?usp=sharing">실제 프로젝트에 사용한 구글 스프레드 시트의 사본 바로가기</a></p>
              <div class="team-rule">
                <img src="../../public/img/modal/kb/team1.jpg" alt="">
                <img src="../../public/img/modal/kb/team2.jpg" alt="">
                <img src="../../public/img/modal/kb/team3.jpg" alt="">
                <ul>
                  <li>팀 작업을 하면서 서로의 소통을 원할하게 하기 위해 엑셀 시트의 맡은 일을 정리해서 팀원들이 보기 편하게 했습니다.</li>
                  <li>디자인 하기 앞서 폰트크기, 볼드, 패딩 값들을 서로 상의하여 결정하였고 이후 공용 태그를 잡을 때 참고하도록 정리하였습니다.</li>
                  <li>각자 맡은 파트에서 팀원의 코드와 충돌이 나지 않도록 필수적인 공용 규칙을 정하였습니다.</li>
                </ul>
              </div>
              <div class="team-work">
                <img src="../../public/img/modal/kb/team4.jpg" alt="">
                <img src="../../public/img/modal/kb/team5.jpg" alt="">
                <ul>
                  <li>전체적인 일정과 다른 팀원의 상황을 보며 소통을 원할하게 하기 위해 스프레트 시트를 사용하여 작업 및 공지를 팀끼리 공유하는 시트를 만들었습니다.</li>
                  <li>팀원으로써 타 팀원들이 제 작업을 보다 수월하게 이해하길 바라서 꾸준하게 작업 과정을 공유하고, 팀원의 작업 과정을 바탕으로 소통하였습니다.</li>
                  <li>작업 당시 Mysql의 테이블을 따로 만들면서 코드를 편하게 복사하기 위한 전용 탭을 만들었습니다.</li>
                </ul>
              </div>
            </div>
            <div class="projectrenew">
              <h1>사이트 리뉴얼</h1>
              <div class="renewral-img-wrap">
                <span class="renew-page"><img src="../../public/img/modal/kb/site-main.jpg" alt="">
                <ul>
                  <li>2번째 섹션(솔루션)과 풋터 부분을 담당하였습니다.</li>
                  <li>포토샵과 일러스트레이터를 활용해 메인의 아이콘과 슬라이드 부분의 마우스를 그리고, 인터넷의 픽토그램을 일부 편집하여 공유하였습니다.</li>
                  <li>grid를 활용한 분할을 사용했습니다.</li>
                </ul></span>
                <span class="renew-page"><img src="../../public/img/modal/kb/kb0.png" alt="">
                <ul>
                  <li>은행 상품 페이지로 a태그를 활용하여 상품약관을 다운로드 할 수 있습니다.</li>
                </ul></span>
                <span class="renew-page"><img src="../../public/img/modal/kb/kb1.png" alt="">
                <ul>
                  <li>공지사항 작성 페이지입니다.</li>
                  <li>스크립트의 Date 기능으로 오늘 날짜와 미래(최대 3일)의 날짜를 선택할 수 있고,작성 당일과 예약한 날짜를 Mysql로 보내게 만들었습니다.<br>
                   이후 MySql 구문을 공부해 날짜에 맞춰서 업로드하는 기능을 만들었습니다.</li>
                </ul></span>
                <span class="renew-page"><img src="../../public/img/modal/kb/kb2.png" alt="">
                <ul>
                  <li>공지사항 수정 페이지입니다.</li>
                  <li>기존 공지의 내용을 받아오면서 radio의 value값을 비요하여 체크되는 기능을 만들었습니다.</li>
                </ul></span>
                <span class="renew-page"><img src="../../public/img/modal/kb/kb3.png" alt="">
                <ul>
                  <li>팀원의 카드 상품 페이지와 연계한 카드 신청 폼입니다.</li>
                  <li>공지 작성 페이지를 리뉴얼해 만들어 디자인을 통일하였습니다.</li>
                  <li>카카오 주소 API를 사용하여 주소,우편 번호를 받도록 하였습니다.</li>
                </ul></span>
                <span class="renew-page"><img src="../../public/img/modal/kb/kb4.png" alt="">
                <ul>
                  <li>카드 신청한 회원의 카드 발급을 결정하는 관리자 페이지입니다.</li>
                  <li>카드 발급 승인과 불가 버튼으로 간단하게 결정할 수 있으며, 이후 재 수정또한 가능하게 만들었습니다.</li>
                </ul>
                </span>
                <span class="renew-page"><img src="../../public/img/modal/kb/kb5.png" alt="">
                <ul>
                  <li>카드 신청 조회 페이지입니다.</li>
                  <li>신청된 카드와, 관리자가 승인,불가,미발급을 색으로 한 눈에 확인할 수 있도록 제작하였습니다.</li>
                </ul></span>
              </div>
            </div>
          </div>
          <div class="modalclose" @click="kbmodal = false"></div>
    </div>
  <h1>포트폴리오</h1>
  
  <div id="project">
    <h1 class="proJ">프로젝트</h1>
    <div class="proJreport">
      <div class="sony">
        <h2>소니코리아 사이트 리뉴얼 프로젝트</h2>
        <span>PhotoShop,Illustrator,Figma,HTML,CSS,JavaScript,MySql,Node.js</span>
        <p>HTML, CSS, JAVASCRIPT만을 활용해서 웹 페이지를 리뉴얼 하였습니다. <br>
        기존의 사이트에서 카메라 이외의 상품도 강조하며 보여주었기에, 기획 단계에서부터 카메라, 오디오, 렌즈등 다양한 상품을 보여주는 것을  생각하며 기획하였습니다. <br>
        <br>

        DB 사용으로 게시판과 썸네일 게시판(상품 게시판)을 제작하며 MySql의 기본적인 구문과 사용방법을 공부 후 실제 적용까지 완료한 첫 프로젝트입니다.</p>
        <div class="textimg diary">
          <img src="img/diary.png" alt="">
          <span @click="sonymodal = true">제작일지 보러가기</span>
        </div>
        <a href="https://sony-site.herokuapp.com/" target='_blank'>
          <div class="textimg homelink">
              <img src="img/homeicon.png" alt="">
              <span>홈페이지 보러가기</span>
            </div> 
        </a>
        <div class="siteImg">
          <div class="site-main-img sony-main"></div>
          <div class="site-sub-img sony-sub"></div>
        </div>
      </div>
      <div class="kbbank">
        <h2>KB 저축은행 리뉴얼 팀 프로젝트</h2>
        <span>PhotoShop,Illustrator,Figma,HTML,CSS,JavaScript,MySql,Node.js,Git</span>
        <p>해당 프로젝트에서 팀장을 맡았으며, 팀장으로써 팀원의 의견 조율, 일 분배,  일정 조율 등을 담당하였습니다. <br>
          팀장으로써 말고 함께 협력을 하는 팀원으로써도 타 팀원과 작업 조율을 위해서 기존 회사에서 작업했던 방식과 동일하게 짧은 작업 일지를 공유하며 <br>
          팀 프로젝트를 진행하였습니다. <br> <br>

          은행과 많은 홈페이지에서 사용이 되는 기술을 구현하기 위해서 공부를 하면서 제작하였고 예약 업로드, 다운로드, 조회/현황 구현에 성공하였습니다. <br><br>
          담당 파트: 메인 2번째 솔루션 섹션, 풋터, 공지 페이지 업로드, 수정 페이지, 예ㆍ적금 상품 페이지, 카드 신청 페이지, 카드 조회 관련 페이지 전반 <br>
          그 외의 팀원 페이지 수정 및 보조
          </p>
        <div class="textimg diary">
          <img src="img/diary.png" alt="">
          <span @click="kbmodal = true">제작일지 보러가기</span>
        </div>
        <a href="https://kbbank.herokuapp.com/" target='_blank'>
          <div class="textimg homelink">
              <img src="img/homeicon.png" alt="">
              <span>홈페이지 보러가기</span>
            </div> 
        </a>
        <div class="siteImg">
          <div class="site-main-img kb-main"></div>
          <div class="site-sub-img kb-sub"></div>
        </div>
      </div>
      <div class="dreamroom">
        <h2>Three.js를 활용한 dreamroom</h2>
        <span>HTML,CSS,JavaScript,three.js</span>
        <p>강의를 보며 공부하고, 변형한 three.js를 활용한 자기 소개용 dreamroom 사이트입니다. <br>
          three.js와 관련된 재질, 카메라, 조명 등 다양한 부분을 활용하고 HTML, CSS까지 적용한 사이트로 <br>
          자기소개와 경력을 기술해서 올린 자기소개용 사이트입니다.
          </p>
        <a href="https://dreamroom-boko.vercel.app/" target='_blank'>
          <div class="textimg homelink">
              <img src="img/homeicon.png" alt="">
              <span>홈페이지 보러가기</span>
            </div> 
        </a>
        <div class="siteImg">
          <div class="site-main-img room-main"></div>
          <div class="site-sub-img room-sub"></div>
        </div>
      </div>
      <div class="glassesmatch">
        <h2>Toy프로젝트 안경궁합</h2>
        <span>PhotoShop,Illustrator,HTML,CSS,JavaScript,Three.js,MySql,Node.js</span>
        <p>사용자의 얼굴형 혹은 원하는 분위기에 안경테를 추천해주는 1인 프로젝트로 실제 배포까지 완료한 프로젝트입니다. <br>
          실제 인터넷을 통해 배포한 토이 프로젝트로 30여명의 사용자가 사이트를 이용했으며, three.js를 활용하여 안경의 디자인을 상세하게 확인할 수 있고 <br>
          db 연동을 통해 많은 사람들이 찾는 디자인, 형태 등을 정리한 프로젝트입니다.
          </p>
        <a href="https://glassesmatch.herokuapp.com/" target='_blank'>
          <div class="textimg homelink">
              <img src="img/homeicon.png" alt="">
              <span>홈페이지 보러가기</span>
            </div> 
        </a>
        <div class="siteImg">
          <div class="site-main-img glasses-main"></div>
          <div class="site-sub-img glasses-sub"></div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
  data(){
    return{
      sonymodal: false,
      kbmodal:false,
    }
  }
}
</script>

<style scoped>
section{
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 0;
}
h1{
  color: #fff;
  font-size: 30px;
  /* padding-left: 65px; */
}
h2{
  color: #fff;
  font-size: 26px;
}
#project{
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
}
.pooJ{
  width: 25%;
  height: 100%;
}
.proJreport{
  width: 85%;
  height: 100%;
}
.proJreport>div{
  padding-bottom: 80px;
}
span{
  display: block;
  padding-top: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #B4B4B4;
}
p{
  padding: 20px 0;
  color: #fff;
  font-size: 16px;
  line-height: 25px;
}
.diary{
  cursor: pointer;
}
.textimg>img{
  width: 20px;
  height: auto;
  margin-right: 20px;
}
.textimg{
  display: flex;
  margin-top: 10px;
  align-items: center;
}
.textimg>span{
  padding: 0;
}
.siteImg{
  display: flex;
  padding-top: 15px;
  height: 340px;
}
.site-main-img{
  width: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 50px;
  border-radius: 30px;
}
.site-sub-img{
  width: 25%;
  border-radius: 30px;
  background-size: cover;
  background-repeat: no-repeat;
}
.sony-main{
  background-image: url(../../public/img/sonymain.jpg);
}
.sony-sub{
  background-image: url(../../public/img/sonythum.jpg);
  background-position: center center;
}
.kb-main{
  background-image: url(../../public/img/kbmain.jpg);
  background-position: center center;
}
.kb-sub{
  background-image: url(../../public/img/kbbank.jpg);
  background-position: center center;
}
.room-main{
  background-image: url(../../public/img/dreamrooming1.jpg);
  background-position: center center;
}
.room-sub{
  background-image: url(../../public/img/dreamrooming2.jpg);
  background-position: center center;
}
.glasses-main{
  background-image: url(../../public/img/glassesmain.jpg);
  background-position: center center;
}
.glasses-sub{
  background-image: url(../../public/img/glassessub.jpg);
  background-position: center center;
}

/* modal */
div{
  box-sizing: border-box;
}
.black-bg{
  display: flex;
  margin: 0 auto;
  height: auto;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  padding: 20px;
  z-index: 1000;
}
.white-bg{
  position: relative;
  max-width: 1440px;
  height: 1000px;
  overflow: scroll;
  top: 200px;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  z-index: 100;
}
.subtitle{
  color: #000;
  text-align: center;
  padding-bottom: 30px;
}
/* sony */
.sonymain{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px 0;
  border-bottom: 2px dashed #666;
}
.sonymain>.ment>h1{
  margin-top: 30px;
  color: #000;
  font-weight: 400;
  text-align: center;
}
.sonymain>img{
  display: block;
  width: 25%;
}
.sonyorigin{
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  padding-top: 50px;
  margin: 0 auto;
}
.origin{
  width: 100%;
  text-align:start;
  color: #000;
  font-size: 30px;
  padding: 0 0 50px;
  text-align: center;
}
.sonyorigin>img{
  width: 30%;
  display: block;
}
.sonyorigin>.graph{
  width: 450px;
  height: 400px;
}
.origin-wrap{
  padding-left: 100px;
}
.origin-wrap ul{
  padding-top: 20px;
  list-style-type: square;
}
.origin-wrap li{
  color: rgb(83, 83, 83);
  padding: 10px 0 10px 50px;
  font-size: 20px;
}
.sonyorigin li::before{
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #ccc8e9;
  margin-right: 20px;
}
.projectrenew>h1{
  color: #000;
  text-align: center;
  padding-top: 50px;
}
.renewral-site{
  padding-top: 100px;
}
.renewral-img-wrap{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.renewral-img-wrap span{
  width: 40%;
  padding: 20px 30px;
}
.renewral-img-wrap img{ 
  width: 100%;
}
.renew-page>ul{
  padding-top: 20px;
}
.renew-page>ul>li{
  color: #000;
  padding-top: 10px;
  font-weight: 500;
}
.modalclose{
  width: 50px;
  height: 50px;
  opacity: 0.8;
}
.modalclose:before, .modalclose:after {
  position: fixed;
  content: ' ';
  height: 40px;
  width: 2px;
  top: 150px;
  right: 8%;
  background-color: rgb(255, 255, 255);
}
.modalclose:before {
  transform: rotate(45deg);
}
.modalclose:after {
  transform: rotate(-45deg);
}
/* kb */
.kbul>li::before {
  background-color: #99825d;
}
.padding{
  padding-top: 40px;
}
.team{
  max-width: 90%;
  padding-top: 50px;
  margin: 0 auto;
}
.team p{
  color: #000;
  padding-top: 10px;
}
.team a{
  color: #0000aa;
}
.team>h1{
  color: #000;
  text-align: center;
  padding-top: 50px;
  font-size: 30px;
}
.team-rule>img{
  padding: 20px;
}
.team ul li{
  color: #000;
  padding-top: 20px;
}
.team-work{
  padding: 50px 0;
}
.team-work>img{
  width: 100%;
  padding-bottom: 30px;
}
</style>