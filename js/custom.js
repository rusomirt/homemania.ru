$(document).ready(function () {

  function carouselOnResize() {
    let carouselImgWidth = 1600;
    let carouselImgHeight = 500;
    let carouselImgRatio = carouselImgWidth/carouselImgHeight;

    let currentScreenWidth = $(".carousel .carousel-item.active").width();

    console.log("---------- RESIZE ----------");
    console.log("currentScreenWidth = " + currentScreenWidth);

    $(".carousel .carousel-item").each( function(index) {
      $(this).height( currentScreenWidth/carouselImgRatio );
      console.log("height(" + index + ") = " + $(this).height());
    });

    // $(".carousel").css("min-height", current.height);
    // $(".carousel-inner").css("height", current.height);
  }

  carouselOnResize();

  $(window).resize( function() {
    carouselOnResize();
  });

});