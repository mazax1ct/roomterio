//открытие меню на мобильных
$(document).on('click', '.js-nav-opener', function () {
  $('body').addClass('overflow');
  $('.header-nav').addClass('is-open');
  setTimeout(function() {
    $('.header-nav__inner').addClass('is-open');
  }, 100);
  return false;
});

//закрытие меню на мобильных
$(document).on('click', '.js-nav-closer', function () {
  $('.header-nav__inner').removeClass('is-open');
  setTimeout(function() {
    $('body').removeClass('overflow');
    $('.header-nav').removeClass('is-open');
  }, 400);
  return false;
});

//открытие подменю на мобильных
$(document).on('click', '.header-nav__category-link', function () {
  if($('body').width() < 1024) {
    var sub = $(this).closest('.header-nav__category').find('.header-nav__subcategory');
    if(sub.length) {
      sub.slideToggle();
      return false;
    }
  }
});

//отслеживание скролла для шапки
var header = $('.header'),
    scrollPrev = 0;

var resize_scroll = function(e) {
  var scrolled = $(window).scrollTop();

  if (scrolled > $('.header').height() * 2) {
		header.addClass('scrolled');
	} else {
		header.removeClass('scrolled');
	}

	scrollPrev = scrolled;
};

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//поиск в шапке
$(document).on('click', '.js-search-opener', function () {
  $('.search-popup').addClass('is-open');
  return false;
});

$(document).on('click', '.js-search-closer', function () {
  $('.search-popup__input').val('');
  $('.search-popup').removeClass('is-open');
  return false;
});
