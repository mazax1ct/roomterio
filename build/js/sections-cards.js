$(document).on('click', '.js-show-hiddens', function () {
  $(this).closest('.sections-cards--hiddens').removeClass('sections-cards--hiddens');
  return false;
});
