var elBtn = document.querySelector(".header__burger");
var elContainer = document.querySelector(".header__container");


elBtn.addEventListener("click", function (params) {
    elContainer.classList.toggle("header__container--active")
})