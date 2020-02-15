import './../base';
import './../app';

$(document).ready(function() {

  const $btnScroll = $('#howInstall');

  // Scroll to discussion
  $btnScroll.on('click',function() {
    var margin = 10;
    $('body,html').animate({
      scrollTop: $('#howToGet').offset().top - margin
    }, 1000);
  });

});