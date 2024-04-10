   $('select').material_select();
   $('.slider').slick({
     autoplay:true,
     autoplaySpeed: 5000,
    pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      infinite:false,
      speed : 666,
     fade: true,
     dots: true,
     cssEase: 'ease-in',
     lazyLoad: 'ondemand',
   });

setTimeout(function(){
  $('body').addClass('loaded');
}, 1500);

   $('.js-show-formular').click(function(){
     $('body').addClass('formular');
     $('body').removeClass('index_slider');
   });
   $('.js-back-to-inicio').click(function(){

       $('body').removeClass('formular');
       $('body').addClass('index_slider');
   });
