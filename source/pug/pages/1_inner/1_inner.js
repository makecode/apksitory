import './../base';
import './../app';

const visibleText = 'Show More';
const hiddenText = 'Show Less';

$(document).ready(function() {
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

