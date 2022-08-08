$(document).ready(function () {

  //메인 배너 슬릭 슬라이드
  $('.main_ban_slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    infinite: true,
    pauseOnHover:false, //마우스 올려도 계속 넘ㅋ김
  })

  //메인 배너 슬릭 슬라이드 재생/정지 버튼
  $('.btn_pause').click(function(){
    $('.main_ban_slider').slick('slickPause');
    $('.btn_pause').removeClass('active');
    $('.btn_play').addClass('active');
  })

  $('.btn_play').click(function(){
	  $('.main_ban_slider').slick('slickPlay');
    $('.btn_play').removeClass('active');
    $('.btn_pause').addClass('active');
  });


  //swiper : 영상 컨텐츠 슬라이드
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7, //한 슬라이드에 보여줄 갯수
    spaceBetween: 30, //슬라이드 사이 여백
    loop: true, //슬라이드 반복
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


   $('.mypage').mouseover(function() {
   $("#mypage_wrap").css("display", "block");
  });
  $('.mypage').mouseout(function() {
   $("#mypage_wrap").cimage.pngss("display", "none");
  });

  $('#mypage_wrap').mouseover(function() {
   $("#mypage_wrap").css("display", "block");
  });
  $('#mypage_wrap').mouseout(function() {
   $("#mypage_wrap").css("display", "none");
  });


  //검색창 토글 --------------------------------------------
  $('.search_bt').click(function(){
    $('#search_wrap').toggle();
  })
  
  //상단 올라가는 버튼
  $('#top_btn').click(function () {
    $('html , body').animate({
      'scrollTop': 0,
    }, 1500)
  })

})