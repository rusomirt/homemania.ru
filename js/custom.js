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


  $('.upload__fileloader').change(function () {
    $('.upload__fileloader-caption').text("Выбрано файлов: " + this.files.length);
  });

});
