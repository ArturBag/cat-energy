var mobileMenu = document.querySelector(".header__nav-menu"),
    btnMenu = document.querySelector(".header-menu__button"),
    btnMenuClose = document.querySelector(".header-menu__button--close"),
    btnMenuOpen = document.querySelector(".header-menu__button--open");

mobileMenu.classList.add("header__nav-menu--hidden");
btnMenu.classList.remove("header-menu__button--close");
btnMenu.classList.add("header-menu__button--open");

btnMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  btnMenu
});

// btnMenuOpen.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   mobileMenu.classList.toggle("header__nav-menu--shown");
//   if (mobileMenu.classList.contains("header__nav-menu--shown")) {
//     mobileMenu.classList.remove("header__nav-menu--hidden");
//     btnMenuClose.style = "display:block";
//     btnMenuOpen.style = "display:none";
//   }
//   else {
//     btnMenuClose.style = "display:none";
//     btnMenuOpen.style = "display:block";
//   }

// }
