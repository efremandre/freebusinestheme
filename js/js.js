$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        speed:1000,
        infinite:true,
        autoplay:true,
        autoplaySpeed:2500,
        fade:true
    });

    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu, .slick-slider, .forms__notebook').toggleClass('active');
        $('body').toggleClass('stop');
    });
    $('.header__link').click(function(event){
        $('.header__burger, .header__menu, .slick-slider, .forms__notebook').removeClass('active');
        $('body').removeClass('stop');
    });
});