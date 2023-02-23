$(document).on('click', '.tabs__button', function () {
  $(this).closest('.tabs').find('.tabs__button').removeClass('is-active');
  $(this).addClass('is-active');

  $(this).closest('.tabs').find('.tab').removeClass('is-active');
  $(this).closest('.tabs').find('.tab[data-target="'+$(this).attr('data-target')+'"]').addClass('is-active');

  $(this).closest('.tabs').find('.tab[data-target="'+$(this).attr('data-target')+'"]').find('.js-products-slider').slick('setPosition');;

  return false;
});
