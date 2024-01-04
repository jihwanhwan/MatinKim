$(document).ready(function(){
      $('#hamburger').click(function(){
        $(this).toggleClass('active');
        // $('.header-menu').toggleClass('active');
        $(this).siblings('.sidebar').toggleClass('on');
        $(".dimmed").toggleClass('on');
      });    




    $(window).scroll(function(){
      const sct = $(window).scrollTop();

      console.log(sct);
      if(sct >=100){
        $('.header-area').addClass('active');
        $('#hamburger').addClass('on');
      }else{
        $('.header-area').removeClass('active');
        $('#hamburger').removeClass('on');
      }
    });
    
    // aos
    AOS.init();
    // var swiper = new Swiper(".firstSwiper", {
    //     pagination: {
    //       el: ".swiper-pagination",
    //       type: "fraction",
    //     },
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //   });

    // prom-swiper
    var swiper = new Swiper(".promSwiper", {
        direction: 'vertical',
        loop : true,
        speed :1500,
        autoplay :{
          delay:1500,
          disableOnInteraction: false,
        }
    });

    media();
    function media(){
      const ww = $(window).width();

      if(ww >= 960){
            // banner swiper
    const progressLine = document.querySelector('.autoplay-progress svg');
    const mainSwiper = new Swiper(".firstSwiper", {
        // 무한 슬라이드
        loop: true,

        //자동 재생
        autoplay: {
            delay: 25000,
            disableOnInteraction: false,
        },

        // bullet
        pagination: {
            el: ".firstSwiper .swiper-pagination",
            clickable: false,
            type: "custom",
            renderCustom: function(swiper, current, total) {
                return (
                    '<span class="current">' + 0 + (current) + '</span>' + '<span class="total">' + 0 + (total) + '</span>'
                );
            }
        },

        //arrow
        navigation: {
            nextEl: ".firstSwiper .swiper-button-next",
            prevEl: ".firstSwiper .swiper-button-prev",
        },

        on: {
            autoplayTimeLeft(s, time, progress) {
                progressLine.style.setProperty("--progress", 1 - progress)
            }
        }
    });
      }
    }


                
    // sec-4 swiper
    var swiper = new Swiper(".secondSwiper", {
        // slidesPerView: 4,
        // spaceBetween: 20,
        // slidesPerGroup:1,

        loop:true,
        speed : 1500,
        autoplay :{
          delay:2000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints:{
          1200:{
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup:1,
          },
          960:{
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup:1,
          },
          760:{
            slidesPerView: 2,
            spaceBetween: 16,
            slidesPerGroup:1,
          },
        }
      });
      

      const btn = $('.top-btn');
      $(window).scroll(function(){
        if($(window).scrollTop() > 300){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });
    btn.on('click',function(e){
      e.preventDefault();
      $('html,body').animate({
          scrollTop:0
      },100);
  });
});






