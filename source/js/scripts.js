var mobileMenu = document.querySelector(".header__nav-menu"),
  btnMenu = document.querySelector(".header-menu__button"),
  btnMenuClose = document.querySelector(".header-menu__button--close"),
  btnMenuOpen = document.querySelector(".header-menu__button--open"),
  mapPicture = document.querySelector(".map"),
  form = document.querySelector(".form"),
  catNameField = document.querySelector(".cat-data__field--name"),
  catWeightField = document.querySelector(".cat-data__field--weight"),
  catOwnerEmail = document.querySelector(".line-item__owner-field--email"),
  catOwnerPhone = document.querySelector(".line-item__owner-field--phone");

mobileMenu.classList.add("header__nav-menu--hidden");
btnMenuOpen.classList.add("header-menu__button--show");
mapPicture.style.display = "none";

btnMenuOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileMenu.classList.remove("header__nav-menu--hidden");
  btnMenuOpen.classList.remove("header-menu__button--show");
  btnMenuClose.classList.add("header-menu__button--show");

});

btnMenuClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileMenu.classList.add("header__nav-menu--hidden");
  btnMenuOpen.classList.add("header-menu__button--show");
  btnMenuClose.classList.remove("header-menu__button--show");
});

