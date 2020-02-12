import './../../styles/main.sass';

// libs
import './rateit.js';

$( document ).ready(function() {
  // hamburger-menu
  $('#hamburger').on('click',function() {
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('is-open')
  });
});