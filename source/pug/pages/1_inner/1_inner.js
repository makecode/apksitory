import './../base';

$(document).ready(function() {
  const $moreButton = $('.showmore-trigger');


  $moreButton.click(function(){
    $(this).toggleClass('is-active');
  });


});