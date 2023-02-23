$(document).on('click', '.js-list-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).next('.footer__list').slideToggle();
  return false;
});
