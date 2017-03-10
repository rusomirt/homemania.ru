jQuery(function ($) {

  function carouselInspirationOnResize() {
    let carouselImgWidth = 1600;
    let carouselImgHeight = 500;
    let carouselImgRatio = carouselImgWidth/carouselImgHeight;

    const $carouselItems = $("#carousel-inspiration").find(".carousel-item");
    let currentScreenWidth = $carouselItems.first().width();

    $carouselItems.each( function() {
      $(this).height( currentScreenWidth/carouselImgRatio );
    });
  }

  function carouselMakeoversOnResize() {
    let carouselImgRatio = 2; // 2 square images

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

});