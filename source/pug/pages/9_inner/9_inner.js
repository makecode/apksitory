import './../base';
import './../app';

$(document).ready(function() {

  const $btnScroll = $('#how-install');

  // Scroll to discussion
  $btnScroll.on('click',function() {
    var margin = 10;
    $('body,html').animate({
      scrollTop: $('#description').offset().top - margin
    }, 1000);
  });

});