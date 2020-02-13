$( document ).ready(function() {
  // hamburger-menu
  $('#hamburger').on('click',function() {
    $(this).toggleClass('open');
    $('.mobile-menu').toggleClass('is-open')
  });

  // header-mobile-search
  $('#btn-search-mobile').click(function() {
    $('#search-mobile').toggleClass('is-open');
    $('#header-mobile').toggleClass('is-open');
  });
});