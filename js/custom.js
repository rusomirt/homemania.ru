jQuery(function ($) {

  // Adjust the height of carousel controls to height of images in this carousel
  function carouselMakeoversControlsHeight() {
    // Get the height of first visible image
    const $carousel = $("#carousel-makeovers");
    const carouselImgHeight = $carousel.find(".carousel-item.active")
      .filter(":visible").first().height();
    $carousel.find(".carousel-control-prev, .carousel-control-next")
      .height(carouselImgHeight);
  }

  // Adjust the height of carousel controls to height of images in this carousel
  function carouselStylesControlsHeight() {
    // Get the height of first visible image
    const $carousel = $("#carousel-styles");
    const carouselImgHeight = $carousel.find(".picture__img")
      .filter(":visible").first().height();
    $carousel.find(".carousel-control-prev, .carousel-control-next")
      .height(carouselImgHeight);
  }

  carouselMakeoversControlsHeight();
  carouselStylesControlsHeight();
  customSelectsAdjust();

  $(window).resize( function() {
    carouselMakeoversControlsHeight();
    carouselStylesControlsHeight();
  });

  //
  $("#carousel-styles").find(".carousel-item").each(function(){
    let next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length>0) {

      next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');

    }
    else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));

    }
  });

  //
  $('.upload__fileloader').change(function () {
    $('.upload__fileloader-caption').text("Выбрано файлов: " + this.files.length);
  });

  // Custom select expand and collapse
  $('.sel').click(function () {
    event.stopPropagation();  // prevent $('.sel__opts').hide() in $(window).click()
    $(this).find('.sel__opts').toggle();
  });
  // Custom select options select
  $('.sel__opt').click(function () {
    let value = ($(this).find('.sel__opt-val').length > 0)  // if .sel__opt-val exists
              ? $(this).find('.sel__opt-val').text()
              : $(this).text();
    $(this).parents('.sel').find('.sel__rslt').text(value);
  });
  // Custom select initial selected option & width control
  function customSelectsAdjust() {
    $('.sel').each(function () {
      let value = ($(this).find('.sel__opt-val').length > 0)  // if .sel__opt-val exists
        ? $(this).find('.sel__opt-val').first().text()
        : $(this).find('.sel__opt').first().text();
      $(this).find('.sel__rslt').text(value);
      
      $(this).width($(this).find('.sel__opts').width());
    })
  }
  // Custom select collapse when click outside
  $(window).click(function() {
    $('.sel__opts').hide();
  });
});

