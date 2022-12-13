let scrollToggle = document.querySelector("#nav__toggle");
let navMenu = document.querySelector(".nav__menu");
let hamburgerIcon = document.querySelector("#hamburgerIcon");
let bodyTag = document.querySelector("body");
let menuFlag = false;
/*
function scrollFunction() {
  if (scrollToggle.checked == true) {
    document.querySelector("#wrapper").classList.add("scrollDisable");
  }
  document.querySelector("#wrapper").classList.remove("scrollDisable");
}

//document.querySelector("#nav__toggle").addEventListener("click", disable);
//document.querySelector("#nav__toggle").addEventListener("click", enable);
*/

scrollToggle.addEventListener("click", function () {
  menuFunction("by label");
});

window.onclick = function (event) {
  console.log("window.onclick");
  if (!event.target.classList.contains("closing__class")) {
    console.log("nie zawiera");
    if ((navMenu.style.display = "block")) {
      navMenu.style.display = "none";
    }
    if ((scrollToggle.checked = true)) {
      scrollToggle.checked = false;
    }
    menuFunction("by windows on click");
  } else {
    console.log("zawiera");
  }
};

function menuFunction(x) {
  console.log(`menuFunction call ${x}`);
  if (scrollToggle.checked == true) {
    bodyTag.style.overflow = "hidden";
    hamburgerIcon.src = "./assets/icon-menu-close.svg";
  } else {
    bodyTag.style.overflow = "visible";
    hamburgerIcon.src = "./assets/icon-menu.svg";
  }
}
