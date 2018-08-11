$(function() {
  // переход с кнопок

  $('.js-button').click(function() {
    var scrollToElement = $(this).attr('data-href');
    $('html,body').animate(
      { scrollTop: $(scrollToElement).offset().top + 'px' },
      { duration: 1e3 }
    );
  });

  // загрузка видео с ютуба
  $('.video__inner').click(function() {
    $(this).append(
      '<iframe width="642" height="401" src="https://www.youtube.com/embed/yrXRTCMGkZw?enablejsapi=1&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="display:none"></iframe>'
    );
    $('.video__inner iframe').fadeIn(500, function() {
      $('.video__overlay').fadeOut();
    });
  });
});
