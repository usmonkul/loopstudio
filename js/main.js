"use strict";

const elnavOpen = document.body;
const elOverflow = document.querySelector(".js-overflow");
const elHamburger = document.querySelector(".hamburger");
const elNavList = document.querySelector(".header__nav-list");

const openFunction = () => {
  elnavOpen.classList.toggle("nav-open");
  elOverflow.classList.toggle("overflow");
  elHamburger.classList.toggle("hamburger-active");
  elNavList.classList.toggle("js-nav-list-open");
};

elHamburger.addEventListener("click", openFunction);
