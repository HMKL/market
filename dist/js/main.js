let layoutHandler;

(function($) {
    'use strict';
    let LayoutHandler = function() {
        let self = this;

        this.ready = function() {
            this.handleDOM();
            this.handleEvents();
        };

        this.handleDOM = function() {

        };

        this.handleEvents = function() {

        };
    };

    layoutHandler = new LayoutHandler();

    $(document).ready(function() {
        layoutHandler.ready();


    });
})(jQuery);

/* eslint-disable linebreak-style */
(function () {
  'use strict';
  // Your custom JavaScript goes here



  const getHamburger = document.querySelector('.hamburger-menu');
  const getSideBar = document.querySelector('.sidebar');
  const addClassHamburger = () => {
    getHamburger.addEventListener('click', () => {
      getHamburger.classList.toggle('clicked');
      getSideBar.classList.toggle('show-sidebar')
    })
  }
  addClassHamburger();
  console.log(getSideBar)
})();


