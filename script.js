document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#hamburger-menu");
  const nav = document.querySelector(".navbar-nav");

  if (menu && nav) {
    menu.addEventListener("click", function (event) {
      event.preventDefault();
      nav.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
      });
    });
  }
});
