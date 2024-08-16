var sidenav = document.querySelector(".side-navbar");
function showsidenav() {
  sidenav.style.right = "0%";
}

function closesidenav() {
  sidenav.style.right = "-100%";
}

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector('.navbar');
  const homeSection = document.querySelector('#home');
  const para1 = document.querySelector('#para1');
  const para2 = document.querySelector('#para2');

  const changeNavbarColor = () => {
    const scrollPosition = window.scrollY;
    const para1Offset = para1.offsetTop;
    const para2Offset = para2.offsetTop;

    if (scrollPosition >= para2Offset) {
      navbar.style.backgroundColor = "#7d7d7d";
    } else if (scrollPosition >= para1Offset) {
      navbar.style.backgroundColor = "#5d5d5d";
    } else if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#3d3d3d";
    } else {
      navbar.style.backgroundColor = "#1d1d1d";
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
});


