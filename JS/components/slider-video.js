const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    spaceBetween: 40,

    
    
    pagination: {
        el: '.swiper-pagination',

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        400: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        915: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        1390: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }


});