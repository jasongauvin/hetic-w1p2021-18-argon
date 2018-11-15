

var open_logo = document.getElementById('logo-nav');
var menu = document.getElementById('menu')
var open_menu = document.getElementById('menu-burger')
open_menu.addEventListener('click', function () {
  nav.classList.toggle('is-open-nav');
  menu.classList.toggle('is-open-menu');
  open_menu.classList.toggle('is-open-menu-burger');
  open_logo.classList.toggle('is-open-logo-nav');

});




