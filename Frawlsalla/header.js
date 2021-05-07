var isToggled = false;

function toggleMenu() {
  var navbar = document.getElementById("header-navbar-menu-list");
  if(!isToggled) {
    navbar.style.opacity = '1';
    navbar.style.height = 'auto';
  } else {
    navbar.style.opacity = '0';
    navbar.style.height = '0';
  }
  isToggled = !isToggled;
}