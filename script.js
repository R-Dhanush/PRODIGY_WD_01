var sidenav = document.querySelector(".side-navbar");
function showsidenav() {
  sidenav.style.right = "0px";
}

function closesidenav() {
  sidenav.style.right = "-800px";
}

window.addEventListener("scroll", function () {
  var nav_bar = document.querySelector(".navbar");

  if (window.scrollY > 2200) {
    nav_bar.style.backgroundColor = "#7d7d7d";
  } else if (window.scrollY > 1100) {
    nav_bar.style.backgroundColor = "#5d5d5d";
  } else if (window.scrollY > 50) {
    nav_bar.style.backgroundColor = "#3d3d3d";
  } else {
    nav_bar.style.backgroundColor = "#1d1d1d";
  }
});
