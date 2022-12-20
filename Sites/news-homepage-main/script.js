let checkboxToggle = document.querySelector("#nav__toggle"); // hidden checkbox
let navMenu = document.querySelector(".nav__menu"); // Expandable menu
let hamburgerIcon = document.querySelector("#hamburgerIcon"); // hambureger icon
let bodyTag = document.querySelector("body"); // body tag for overflow styling
let closingClass = document.querySelector(".closing__class");
let checkboxState = 0;

checkboxToggle.addEventListener("click", function () {
  checkboxState = !checkboxState;
  menuFunction();
});

closingClass.addEventListener("click", function () {
  checkboxState = !checkboxState;
  menuFunction();
});

function menuFunction() {
  if (checkboxState == true) {
    bodyTag.style.overflow = "hidden";
    hamburgerIcon.src = "./assets/icon-menu-close.svg";
    navMenu.classList.toggle("nav__animation");
    closingClass.classList.toggle("show");
  } else {
    bodyTag.style.overflow = "visible";
    hamburgerIcon.src = "./assets/icon-menu.svg";
    navMenu.classList.toggle("nav__animation");
    closingClass.classList.toggle("show");
  }
}
