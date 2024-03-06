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
            spaceBetween: 30,
            centeredSlides: true,
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false
            // },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            on: {
                autoplayTimeLeft(s, time, progress) {
                    progressCircle.style.setProperty("--progress", 1 - progress);
                    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
                }
            }
        });





    });
})(jQuery);


/* eslint-disable linebreak-style */
(function () {
  'use strict';
  // Your custom JavaScript goes here



  const getHamburger = document.querySelector('.hamburger-menu');
  const getSideBar = document.querySelector('.sidebar');
  const getShadow = document.querySelector('.overlay-opacity');
  const getUl = document.querySelectorAll('.header-left > ul > li');
  const addClassHamburger = () => {
    getHamburger.addEventListener('click', () => {
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


