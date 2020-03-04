import './../../styles/main.sass';

// libs
import './rateit.js';
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
  const visibleText = 'Show More';
  const hiddenText = 'Show Less';
  const $btnScroll = $('#howInstall');

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

  // Scroll to discussion
  $btnScroll.on('click',function() {
    var margin = 10;
    $('body,html').animate({
      scrollTop: $('#howToGet').offset().top - margin
    }, 1000);
  });

  // describe-button
  let contentVisible = false;

  const $moreButton = $('#describe-button');
  const $content = $('#describe .describe__content');
  const contentHeight = $($content).height();

  $($moreButton).click(function() {
    $('#describe').toggleClass('is-visible');
    setContentHeight();
    $(this).text(contentVisible ? hiddenText : visibleText);
  });

  function setContentHeight() {
    if (contentVisible) {
      $($content).height(200);
    } else {
      $($content).height(contentHeight);
    }

    contentVisible = !contentVisible;
  }

  // init content height with 200px
  $($content).height(200);

});