// $(document).ready(function () {
//     $('.slick').slick({
//         adaptiveHeight: false,
//         infinite: false,
//         slidesToShow: 3.5,
//         slidesToScroll: 1,
//         arrows: true,
//         prevArrow: $(".slider__prev"),
//         nextArrow: $(".slider__next")
//         // prevArrow: $(".slick:before"),
//         // nextArrow: $(".slick:after")
//         //initialSlide: $("#img-1")
//     });
// })

// $('.slick').slick({
//     centerMode: true,
//     centerPadding: '30px',
//     slidesToShow: 3,
//     arrows: true,
//     prevArrow: $(".slider__prev"),
//     nextArrow: $(".slider__next"),
//     // infinite: false,
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 3
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//             }
//         }
//     ]
// });

// $(".slider__img").on("mouseover", function () {
//     $(".slider__img").hide();
//     $(".slider__img-hover").show()
//     $(".slider__img").on("mouseout", function () {
//         $(".slider__img").show();
//         $(".slider__img-hover").hide()
//     })
// })
$('.slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".slider__prev"),
    nextArrow: $(".slider__next"),
    dots: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// $('.slick').slick({
//     lazyLoad: 'ondemand',
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: $(".slider__prev"),
//     nextArrow: $(".slider__next"),
// });
