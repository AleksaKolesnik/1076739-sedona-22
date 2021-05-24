var mainNav = document.querySelector(".main-nav");
var mainNavBurger = mainNav.querySelector(".main-nav__burger");

mainNav.classList.remove("main-nav--nojs");

mainNavBurger.addEventListener("click", function() {
    if(mainNav.classList.contains("main-nav--close")){
        mainNav.classList.remove("main-nav--close");
        mainNav.classList.add("main-nav--active");
    } else {
        mainNav.classList.remove("main-nav--active");
        mainNav.classList.add("main-nav--close");
    }
});
