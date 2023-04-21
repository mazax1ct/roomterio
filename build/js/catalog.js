function formatResultState (state) {
  if (!state.id) {
    return state.text;
  }

  var new_state = $('<span class="sorting-text"><svg class="sorting-text__icon" aria-hidden="true"><use xlink:href="#'+ state.element.className +'" /></svg><span class="sorting-text__text">'+ state.text +'</span></span>');

  return new_state;
};

$(document).ready(function() {
  //кастомный селект
  $('.js-select').each(function() {
    var $p = $(this).closest('.select-wrapper');
    $(this).select2({
      minimumResultsForSearch: Infinity,
      dropdownPosition: 'below',
      dropdownParent: $p,
      templateResult: formatResultState,
    });
	}).on("select2:open", function (e) {
    var $p = $(this).closest('.select-wrapper');
    $p.addClass('open');
	}).on("select2:close", function (e) {
    var $p = $(this).closest('.select-wrapper');
    $p.removeClass('open');
	});

  //слайдер цены
  if ($('.js-price-slider').length) {
    var min = 4900;
    var max = 28000;
    $(".js-price-slider").ionRangeSlider({
      skin: "round",
      type: "double",
      min: min,
      max: max,
      from: min,
      to: max,
      grid: false,
      hide_min_max: true,
      hide_from_to: true,
      onChange: function (data) {
        $('#min').val(data.from);
        $('#max').val(data.to);
      }
    });

    var price_range = $(".js-price-slider").data("ionRangeSlider");

    $('#min, #max').on('change', function() {
      price_range.update({
        from: $('#min').val(),
          to: $('#max').val()
      });

      if($('#min').val() < min ) {
        price_range.update({
          from: $('#min').val(min)
        });
      }

      if($('#max').val() < min ) {
        price_range.update({
          from: $('#max').val(min)
        });
      }

      if($('#max').val() > max ) {
        price_range.update({
          from: $('#max').val(max)
        });
      }
    });
  }
});

//открытие/закрытие секции фильтра
$(document).on('click', '.js-filter-section-opener', function () {
  $(this).toggleClass('is-open');
  $(this).next('.filter__section-inner').slideToggle(300, function() {
    $(this).toggleClass('is-open');
  });
  return false;
});

//открытие фильтра
$(document).on('click', '.js-filter-opener', function () {
  $('body').addClass('overflow');
  $('.catalog__filter').addClass('is-open');
  setTimeout(function() {
    $('.filter').addClass('is-open');
  }, 100);
  return false;
});

//зарытие фильтра
$(document).on('click', '.js-filter-closer', function () {
  $('.filter').removeClass('is-open');
  setTimeout(function() {
    $('body').removeClass('overflow');
    $('.catalog__filter').removeClass('is-open');
  }, 400);
  return false;
});

$(document).on('click', '.catalog__filter.is-open', function (evt) {
  if (!$('.filter').is(evt.target) && $('.filter').has(evt.target).length === 0) {
    $('.filter').removeClass('is-open');
    setTimeout(function() {
      $('body').removeClass('overflow');
      $('.catalog__filter').removeClass('is-open');
    }, 400);
  }
});

//открытие/закрытие ката в секции фильтра
$(document).on('click', '.js-filter-section-cut', function () {
  var oldText = $(this).text();
  $(this).text($(this).attr('data-text'));
  $(this).attr('data-text', oldText);
  $(this).prev('.filter__section-cut').slideToggle();
  return false;
});
