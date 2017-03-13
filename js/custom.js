jQuery(function ($) {

  // Calculation of bootstrap carousel height: #carousel-inspiration.
  // All slides are 1600x500.
  function carouselInspirationOnResize() {
    const carouselImgWidth = 1600;
    const carouselImgHeight = 500;
    const carouselImgRatio = carouselImgWidth/carouselImgHeight;

    const $carouselItems = $("#carousel-inspiration").find(".carousel-item");
    let currentScreenWidth = $carouselItems.first().width();

    $carouselItems.each( function() {
      $(this).height( currentScreenWidth/carouselImgRatio );
    });
  }

  // Calculation of bootstrap carousel height: #carousel-makeovers.
  // All slides consist of square images (horizontally stacked).
  function carouselMakeoversOnResize() {
    const carouselImgRatio = 2; // 2 square images

    const $carouselItems = $("#carousel-makeovers").find(".carousel-item");
    let currentScreenWidth = $carouselItems.first().width();

    $carouselItems.each( function() {
      $(this).height( currentScreenWidth/carouselImgRatio );
    });
  }

  carouselInspirationOnResize();
  carouselMakeoversOnResize();

  $(window).resize( function() {
    carouselInspirationOnResize();
    carouselMakeoversOnResize();
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

});