$(document).ready(function() {
    $('.slider__inner').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 1246,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
              slidesToShow: 1,
                 arrows: false,
              }
            },
        ],
    });
});