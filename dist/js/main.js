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
            // slidesPerView: 3,
            spaceBetween: 10,
            // freeMode: true,
            slidesPerView: 'auto',
            pagination: {
                clickable: true,
            },
            breakpoints: {
                // 640: {
                //     slidesPerView: 2,
                //     spaceBetween: 20,
                // },
                767: {
                    // slidesPerView: 4,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 6,
                    // spaceBetween: 50,
                },
            },
        });


    });
})(jQuery);



/* eslint-disable linebreak-style */
(function () {
  'use strict';
  // Your custom JavaScript goes here



  const getHamburger = document.querySelector('.hamburger-menu');
  const getBody = document.querySelector('body');
  const getSideBar = document.querySelector('.sidebar');
  const getShadow = document.querySelector('.overlay-opacity');
  const getUl = document.querySelectorAll('.header-left > ul > li');




  const addClassHamburger = () => {
    getHamburger.addEventListener('click', () => {
      getBody.classList.toggle('over');
      getHamburger.classList.toggle('clicked');
      getSideBar.classList.toggle('show-sidebar')
    })
  }
  addClassHamburger();



  // const showBackgroundShadow = () => {
  //   getUl.addEventListener('mouseenter', () => {
  //     getShadow.classList.toggle('show')
  //   })
  // }
  // showBackgroundShadow();



  // ceva.forEach(getUl => {
  //   getUl.addEventListener('click', () => {
  //     getShadow.classList.toggle('show');
  //   })
  // });
  // ceva();




  function addClass() {
    getUl.forEach(zxc => {
      zxc.addEventListener('mouseenter', () => {
        getShadow.classList.add('show');
      });
    });
    getUl.forEach(zxc => {
      zxc.addEventListener('mouseleave', () => {
        getShadow.classList.remove('show');
      });
    });
  }
  addClass();






})();


