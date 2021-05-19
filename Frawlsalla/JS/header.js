var isToggled = false;

function toggleMenu() {
  var navbar = document.getElementById("header-navbar-menu-list");
  if(!isToggled) {
    navbar.style.visibility = 'visible';
    navbar.style.height = 'auto';
  } else {
    navbar.style.visibility = 'hidden';
    navbar.style.height = '0';
  }
  isToggled = !isToggled;
}