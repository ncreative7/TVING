$(document).ready(function () {

  //대댓글 토글 view_material---------------------------------------------
  $('.reply_btn').click(function(){
    $('#reply_wrap').toggle();
  })
  
  //상단 올라가는 버튼
  $('#top_btn').click(function () {
    $('html , body').animate({
      'scrollTop': 0,
    }, 1500)
  })

  //메인 배너 슬릭 슬라이드
  $('.main_ban_slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  })

  /*swiper*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 7, //한 슬라이드에 보여줄 갯수
  spaceBetween: 30, //슬라이드 사이 여백
  loop: true, //슬라이드 반복
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


})