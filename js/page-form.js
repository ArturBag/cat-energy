form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < textfields.length; i++) {
    if (!textfields[i].value) {
      textfields[i].classList.add("form-field--error");
    }
    else {
      textfields[i].classList.remove("form-field--error");
    }
  }
});

for (var i = 0; i < textfields.length; i++) {
  textfields[i].onblur = function () {
    if (this.value) {
      this.classList.remove("form-field--error");
    }
    else {
      this.classList.add("form-field--error");
    }
  }
}
