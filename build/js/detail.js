var detailSliderParams = {
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  asNavFor: '.js-detail-thumbs',
  swipe: false,
  touchMove: false,
  accessibility: false
}

var detailThumbsParams = {
  mobileFirst: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.js-detail-slider',
  dots: false,
  focusOnSelect: true,
  prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
  nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>'
}

$(document).ready(function() {
  if($('.js-detail-slider').length) {
    $('.js-detail-slider').slick(detailSliderParams);
  }

  if($('.js-detail-thumbs').length) {
    $('.js-detail-thumbs').slick(detailThumbsParams);
  }
});

$(document).on('afterClose.fb', function(e, instance, slide) {
  setTimeout(function() {
    if($('.js-detail-slider').length) {
      $('.js-detail-slider').slick('unslick');
      $('.js-detail-slider').slick(detailSliderParams);
    }

    if($('.js-detail-thumbs').length) {
      $('.js-detail-thumbs').slick('unslick');
      $('.js-detail-thumbs').slick(detailThumbsParams);
    }
  }, 300);
});
