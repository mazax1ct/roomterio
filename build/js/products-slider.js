$(document).ready(function(){
  if($('.js-products-slider').length) {
    $('.js-products-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    });
  }
});
