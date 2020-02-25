import LazyLoad from 'vanilla-lazyload';

let timeout = null;
let progress = 0;
const interval = 2000;

const ll = new LazyLoad({
  elements_selector: ".lazy",
});

$( document ).ready(function() {
  const $preLoader = $('#preloader');
  const $preLoaderText = $('#preloaderText');

  runPreLoader();

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

  // Pre-loader
  function runPreLoader() {
    if (progress < 101) {
      timeout = setInterval(updateProgress, interval / 100);
    }
  }

  function updateProgress() {
    if (progress === 100) {
      clearInterval(timeout);
      $($preLoader).fadeOut(200);
      return;
    }

    progress += 4;
    setPreLoaderText(progress);
  }

  function setPreLoaderText(progress) {
    $($preLoaderText).text(`${progress}%`);
  }
});