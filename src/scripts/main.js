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


