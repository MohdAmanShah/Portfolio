export function makeHamburgerEvent() {
  var navbutton = document.getElementsByClassName("nav-toggle")[0];
  navbutton.addEventListener("click", HandleTogglerEvent);
}
export function rendorActiveLink() {
  var navLinks = document.getElementsByClassName("nav-link");
  var linkArray = Array.from(navLinks);
  linkArray.forEach((e, i, arr) => {
    e.addEventListener("click", HandleLinkSelectEvent);
  });
}
function HandleTogglerEvent(e) {
  document.getElementsByClassName("hamburger")[0].classList.toggle("pressed");
  document.getElementsByClassName("navigation")[0].classList.toggle("hide");
  document.getElementById("content").classList.toggle("blur");
  var cvbutton = document.getElementsByClassName("cvbutton")[0];
  cvbutton.classList.toggle("blur");
  cvbutton.classList.toggle("disabled");
}

function HandleLinkSelectEvent(e) {
  var ActiveLink = document.getElementsByClassName("activeLink")[0];
  ActiveLink.classList.toggle("activeLink");
  e.target.ClassList.toggle("activeLink");
}
