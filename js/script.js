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
  $('.video-add').click(function(e) {
    e.preventDefault();
    if ($('.modal__iframe').length > 0) {
      $('.modal')
        .addClass('active')
        .hide()
        .fadeIn(300, function() {
          $('.modal__iframe').each(function() {
            $(this)[0].contentWindow.postMessage(
              '{"event":"command","func":"playVideo","args":""}',
              '*'
            );
          });
        });
    } else {
      $('.modal')
        .addClass('active')
        .hide()
        .fadeIn(300);
      $('.modal__body').html(
        '<iframe class="modal__iframe" src="https://www.youtube.com/embed/egjzHb9Wsh4?enablejsapi=1&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen"></iframe>'
      );
    }
  });

  $('.modal__close').click(function() {
    $('.modal__iframe').each(function() {
      $(this)[0].contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      );
    });
    $('.modal').fadeOut(300, function() {
      $('.modal').removeClass('active');
    });
  });
  $(document).mouseup(function(e) {
    // событие клика по веб-документу
    var div = $('.modal__inner'); // тут указываем элемента
    if (
      !div.is(e.target) &&
      div.has(e.target).length === 0 &&
      div.is(':visible')
    ) {
      // и не по его дочерним элементам
      $('.modal__iframe').each(function() {
        $(this)[0].contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          '*'
        );
      });
      $('.modal').fadeOut(300, function() {
        $('.modal').removeClass('active');
      });
    }
  });
});
