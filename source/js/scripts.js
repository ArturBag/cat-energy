var mobileMenu = document.querySelector(".header__nav-menu"),
  btnMenu = document.querySelector(".header__menu-button"),
  mapPicture = document.querySelector(".map"),
  form = document.querySelector(".form"),
  textfields = document.querySelectorAll(".form-field--required"),
  btnTitle = document.querySelector(".header__menu-button-title"),
  header = document.querySelector(".header");

mobileMenu.classList.add("header__nav-menu--hidden");
btnMenu.classList.add("header__menu-button--open");
mapPicture.style.display = "none";

btnMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  btnMenu.classList.toggle("header__menu-button--close");
  if (mobileMenu.classList.contains("header__nav-menu--hidden")) {
    mobileMenu.classList.remove("header__nav-menu--hidden");
    btnTitle.innerText = "Закрыть меню";
    header.style = "border-bottom:none";
  }
  else {
    mobileMenu.classList.add("header__nav-menu--hidden");
    btnTitle.innerText = "Открыть меню";

  }
});
