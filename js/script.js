$(document).ready(function(){
  //aos
  AOS.init();
  
  //swiper
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 1500,
      
      
    },
    breakpoints: {
      //반응형 사이즈로 적용해주기
      1920: {
        slidesPerView: 5,
        spaceBetween: 10,
        slidesPerGroup: 1,

    },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 1,

    },
      1200: {
          slidesPerView: 4,
          spaceBetween: 10,
          slidesPerGroup: 1,

      },
      960: {
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 2,
          
      },
      760: {
          slidesPerView: 2,
          spaceBetween: 0,
          slidesPerGroup: 1,
      },
  }
    
    
  });
  var ww = $(window).width();
  if(ww>=960){
  $(window).scroll(function(){
    // 윈도우에 스크롤하면
    const sct = $(window).scrollTop();
    console.log(sct);
    var con1 = $('#wrap').height();
    var wh = $(window).height();
    const sec4h = $('.sec-4').height();
    const sec4 = $('.sec-4').offset().top;
    const sec6 = $('.sec-6').offset().top;
    const sec3 = $('.sec-3').offset().top;
    const sec2img = $('.sec4.img-box').height();
    
    // scrolltop 단축키 sct
    // if(sct > sec4 ){
    //   $('.sec4.img-box').css({
    //         position:'fixed',
    //         left:100,
    //         top:100,
    //       })
    //     }else if(sct < sec6){
    //       $('.sec4.img-box').css({
    //         position:'relative',
    //         left:100,
    //         top:100,
    //       })
    //     }if(sct > parseInt(con1 - wh - sec4h -500)){
    //         $('.sec4.img-box').css({
    //           position:'relative',
              
    //         })
    // }
    // if(sct > sec4 ){
    //   $('.sec4.txt').css({
    //         position:'fixed',
    //         left: 240,
    //         top: 600,
    //       })
    //     }else if(sct < sec6){
    //       $('.sec4.txt').css({
    //         position:'relative',
    //         left: 240,
    //         top: 600,
    //       })
    //     }if(sct > parseInt(con1 - wh - sec4h - 500)){
    //         $('.sec4.txt').css({
    //           position:'relative',
              
    //         })
    // }
    
    if(sct >= sec4){
      $('.sec4.img-box').css({
            position:'fixed',
            left:100,
            top:100,
          })
        }else if(sct < sec4){
          $('.sec4.img-box').css({
            position:'relative',
            left:100,
          })
        }
        if(sct >= sec4){
          $('.sec4.txt').css({
                position:'fixed',
                left: 240,
                top: 600,
              })
            }else if(sct < sec4){
              $('.sec4.txt').css({
                position:'relative',
                
              })
            }
});

    }else{
    }


    $('.m-menu-btn').click(function(){
      $(this).toggleClass('on');
      // $('.sidebar').toggleClass('on');
      $('.menu-bar-box').toggleClass('on');
  });
});
