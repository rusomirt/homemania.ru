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

  // Adjust the height of carousel controls to height of images in this carousel
  function carouselStylesControlsHeight() {
    // Get the height of first visible image
    const $carousel = $("#carousel-styles");
    const carouselImgHeight = $carousel.find(".picture__img")
      .filter(":visible").first().height();
    $carousel.find(".carousel-control-prev, .carousel-control-next")
      .height(carouselImgHeight);
  }

  carouselInspirationOnResize();
  carouselMakeoversOnResize();
  carouselStylesControlsHeight();

  $(window).resize( function() {
    carouselInspirationOnResize();
    carouselMakeoversOnResize();
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


  // // "myAwesomeDropzone" is the camelized version of the HTML element's ID
  // Dropzone.options.myAwesomeDropzone = {
  //   paramName: "file", // The name that will be used to transfer the file
  //   maxFilesize: 2, // MB
  //   accept: function(file, done) {
  //     if (file.name == "+.png") {
  //       done("Naha, you don't.");
  //     }
  //     else { done(); }
  //   }
  // };
  //
  //
  // var isAdvancedUpload = function() {
  //   var div = document.createElement('div');
  //   return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
  // }();
  //
  // var $form = $('.box');
  //
  // if (isAdvancedUpload) {
  //   $form.addClass('has-advanced-upload');
  // }


  $('.form input').change(function () {
    $('.form p').text(this.files.length + " file(s) selected");
  });

});

//DropzoneJS snippet - js

// $.getScript('http://cdnjs.cloudflare.com/ajax/libs/dropzone/3.8.4/dropzone.min.js',function(){
//   // instantiate the uploader
//   $('#file-dropzone').dropzone({
//     url: "/upload",
//     maxFilesize: 100,
//     paramName: "uploadfile",
//     maxThumbnailFilesize: 5,
//     init: function() {
//
//       this.on('success', function(file, json) {
//       });
//
//       this.on('addedfile', function(file) {
//
//       });
//
//       this.on('drop', function(file) {
//         alert('file');
//       });
//     }
//   });
// });
