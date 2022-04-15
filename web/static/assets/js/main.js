jQuery(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        threshold: 4,
        centeredSlides: true,
        navigation: {
            nextEl: '.carousel-button-right',
            prevEl: '.carousel-button-left',
        },
        loop: true,
        breakpoints: {
            992: {
              slidesPerView: 1,
              spaceBetween: 0
            }
        }
        // autoplay: {
        //     delay: 5000,
        //     pauseOnMouseEnter: true,
        // },
    });
})
