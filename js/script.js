const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  scrollposition = window.scrollY;

  if (scrollposition >= 60) {
    nav.classList.add("navbar-light");
  } else if (scrollposition <= 60) {
    nav.classList.remove("navbar-light");
  }
});
