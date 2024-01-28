

var swiper = new Swiper(".continer-portofolio", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    grabCursor : 'true',
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets : true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        626: {
            slidesPerView: 2,
        },
        921: {
            slidesPerView: 3,
        },
    },
});
