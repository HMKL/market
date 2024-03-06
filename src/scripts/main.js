

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


