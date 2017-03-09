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

  carouselInspirationOnResize();

  $(window).resize( function() {
    carouselInspirationOnResize();
  });

});