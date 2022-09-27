
(function ($){
    "use strict";



    // Slider_area
    $('.slider-area').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,
    nav: true,
    navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})





})(jQuery)

