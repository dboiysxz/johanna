jQuery(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        threshold: 4,
        navigation: {
            nextEl: '.carousel-button-right',
            prevEl: '.carousel-button-left',
        },
        loop: true,
        // autoplay: {
        //     delay: 5000,
        //     pauseOnMouseEnter: true,
        // },
    });
})
