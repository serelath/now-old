$(document).ready(function(){
   $('ul li').hover(function() {
      $(this).find(".underline").css({'width':($(this).width()+'px')}).addClass('underline');
   }, function(){
    $(".underline").css('width', '0px');
   });
    
    var distance = $('div').offset().top,
    $window = $(window);

//    $window.scroll(function() {
//    if ( $window.scrollTop() >= 92 && $window.width() > 768) {
//            $('header').addClass('logo-scroll');
//            $('#navbar').addClass('position-fixed');
//            $('#logo-sm img').addClass('logo-sm-scroll');
//            $('nav').addClass('nav-scroll');
//            $('#blue-nav').addClass('blue-nav');
//        } else {
//            $('header').removeClass('logo-scroll');
//            $('#navbar').removeClass('position-fixed').addClass('position-absolute');
//            $('#logo-sm img').removeClass('logo-sm-scroll');
//            $('nav').removeClass('nav-scroll');
//            $('#blue-nav').removeClass('blue-nav');
//        }
//    });
    
    $(".nav .nav-link").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});

}); //document end

//Javascript