
(function ($){
    "use strict";

    // mobile_menu
    jQuery('#mobile_menu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile_menu',
        meanMenuOpen: "☰"
    });



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
            items:2,
            nav:false
        },
        450:{
            items:2,
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

//   blog_carousel
$('.blog_carousel_angle').owlCarousel({
    loop:true,
    // autoplay:true,
    dots:false,
    autoplayTimeout: 3000,
    nav: true,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


//   brand_carousel
$('.brand_carousel').owlCarousel({
    loop:true,
    autoplay:true,
    dots:false,
    autoplayTimeout:2000,
    margin:20,
    nav: false,
    navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})




// magnific_popup
$('.popup_video').magnificPopup({
    type: 'image'
    // other options
  })


})(jQuery)

