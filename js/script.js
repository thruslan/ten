$(".slider__max").slick({
    slidesToShow: 3,
    autoplay: true,
    responsive: [
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 2,
                arrows: false,

            }

        }
    ]
})
$(".home__blocks").slick({
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 3,
                arrows: false,

            }


        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 2,
                arrows: false,

            }
        }
    ]
})
