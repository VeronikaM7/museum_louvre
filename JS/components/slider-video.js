const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    spaceBetween: 40,

    breakpoints: {
        1361:{
            slidesPerView:3,
            spaceBetween: 40
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});