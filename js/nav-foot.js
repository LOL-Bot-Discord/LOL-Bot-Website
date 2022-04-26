export const setNav = function () {
  const navBar = document.querySelector(".nav-bar");
  const navLines = document.querySelector(".nav-lines");
  const overlay = document.querySelector(".overlay");
  const showNav = function () {
    navBar.classList.add("nav-bar-active");
    overlay.classList.add("overlay-shown");
    navLines.classList.add("nav-lines-active");
  };
  const unshowNav = function () {
    navBar.classList.remove("nav-bar-active");
    overlay.classList.remove("overlay-shown");
    navLines.classList.remove("nav-lines-active");
  };
  const toggleNav = function () {
    if (navBar.classList.contains("nav-bar-active")) {
      unshowNav();
    } else {
      showNav();
    }
  };
  navLines.addEventListener("click", toggleNav);
  window.addEventListener("resize", function () {
    if (window.innerWidth > 754) {
      overlay.classList.remove("overlay-shown");
      navBar.classList.remove("nav-bar-active");
      navLines.classList.remove("nav-lines-active");
    }
  });
};
