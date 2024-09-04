let layoutHandler;

(function ($) {
    'use strict';
    let LayoutHandler = function () {
        let self = this;

        this.ready = function () {
            this.handleDOM();
            this.handleEvents();
        };

        this.handleDOM = function () {

        };

        this.handleEvents = function () {

        };
    };

    layoutHandler = new LayoutHandler();

    $(document).ready(function () {
        layoutHandler.ready();






        const progressCircle = document.querySelector(".autoplay-progress svg");
        const progressContent = document.querySelector(".autoplay-progress span");
        var swiper = new Swiper(".mySwiper", {
            centeredSlides: true,
            loop: true,
            speed: 1500,
            reverseDirection: true,
            slidesPerView: 1,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },




        });


        var swiperMedia = new Swiper(".mediaSwiper", {
            slidesPerView: 3,
            loop: false,
            // freeMode: true,
            // centeredSlides: true,
            slidesPerView: 'auto',
            breakpoints: {

                767: {
                    slidesPerView: 6,
                    centeredSlides: false,
                },

            },
        });


    });
})(jQuery);