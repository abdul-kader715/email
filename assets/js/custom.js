$(document).ready(function () {
    //here css for mixitup filter
//    var mixer = mixitup('.mixitup-glary');
    $('.pojicet').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
      }
      ]
    });
//    pagetwo slider
     $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 100,
        loop: true,
    });

});
