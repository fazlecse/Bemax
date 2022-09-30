
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

// project_carousel_area
$('.project_carousel_area').owlCarousel({
    loop:true,
    autoplay:true,
    dots:false,
    autoplayTimeout: 3000,
    nav: true,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
})

// magnific_popup
$('.popup_video').magnificPopup({
    type: 'image'
    // other options
  })

//   blog_carousel
$('.blog_carousel_left').owlCarousel({
    loop:true,
    autoplay:true,
    dots:false,
    autoplayTimeout: 3000,
    nav: true,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
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

