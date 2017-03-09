jQuery(function ($) {

  function carouselOnResize() {
    let carouselImgWidth = 1600;
    let carouselImgHeight = 500;
    let carouselImgRatio = carouselImgWidth/carouselImgHeight;

    let currentScreenWidth = $(".carousel .carousel-item.active").width();

    $(".carousel .carousel-item").each( function(index) {
      $(this).height( currentScreenWidth/carouselImgRatio );
    });
  }

  carouselOnResize();

  $(window).resize( function() {
    carouselOnResize();
  });

});