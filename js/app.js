
var video = document.getElementById('background-video');
var ids = ['anchor' ];

ids.forEach(function (id) {
  var element = document.getElementById(id);
  var nav = document.getElementById('nav');

  var waypoint = new Waypoint({
    element: element,
    handler: function () {
      nav.classList.toggle('is-reached-nav')
      video.classList.toggle('is-reached-background-video');

    },
    offset: "36%"
  });
});
var open_logo = document.getElementById('logo-nav');
var menu = document.getElementById('menu')
var open_menu = document.getElementById('menu-burger')
open_menu.addEventListener('click', function () {
  nav.classList.toggle('is-open-nav');
  menu.classList.toggle('is-open-menu');
  open_menu.classList.toggle('is-open-menu-burger');
  open_logo.classList.toggle('is-open-logo-nav');

});

var open_products = document.getElementById('products');
var open_articles = document.getElementById('articles');

var open_history = document.getElementById('history');
var open_story = document.getElementById('title-story');
open_history.addEventListener('click', function () {
  anchor.classList.toggle('is-open-story');
  open_history.classList.toggle('is-open-history');
  open_products.classList.toggle('is-open-products');
  open_articles.classList.toggle('is-open-products');


});

var open_values = document.getElementById('values');
var values_para = document.getElementById('values-para');
open_values.addEventListener('click', function () {
  values_para.classList.toggle('is-open-para');
  open_values.classList.toggle('is-open-values');
  open_products.classList.toggle('is-open-products');
  open_articles.classList.toggle('is-open-products');

});