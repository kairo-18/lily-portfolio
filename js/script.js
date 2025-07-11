(function($) {

    "use strict";

    $(document).ready(function() {
      
      // masonoary //

      initIsotope();

      // lightbox

      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'fitImagesInViewport': true
      })
      
      /* swiper */
      

      var testimonialSwiper = new Swiper(".testimonial-swiper", {
        spaceBetween: 20,
        pagination: {
            el: ".testimonial-swiper-pagination",
            clickable: true,
          },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          }
        },
      });

    }); // End of a document ready

    // Video modal logic
    $(document).on('click', '.video-thumb', function(e) {
      e.preventDefault();
      var videoSrc = $(this).data('video');
      var videoTitle = $(this).data('title') || 'Video';
      var $modal = $('#videoModal');
      var $video = $('#portfolioVideo');
      var $source = $video.find('source');
      // Set correct MIME type
      var type = 'video/mp4';
      if (videoSrc.toLowerCase().endsWith('.mov')) {
        type = 'video/quicktime';
      }
      $source.attr('src', videoSrc);
      $source.attr('type', type);
      $video[0].load();
      $modal.find('.modal-title').text(videoTitle);
      $modal.modal('show');
    });

    $('#videoModal').on('hidden.bs.modal', function () {
      var $video = $('#portfolioVideo');
      $video[0].pause();
      $video.find('source').attr('src', '');
      $video[0].load();
    });

  // init Isotope
  var initIsotope = function() {
    
    $('.grid').each(function(){

      // $('.grid').imagesLoaded( function() {
        // images have loaded
        var $buttonGroup = $( '.button-group' );
        var $checked = $buttonGroup.find('.is-checked');
        var filterValue = $checked.attr('data-filter');
  
        var $grid = $('.grid').isotope({
          itemSelector: '.portfolio-item',
          // layoutMode: 'fitRows',
          filter: filterValue
        });
    
        // bind filter button click
        $('.button-group').on( 'click', 'a', function(e) {
          e.preventDefault();
          filterValue = $( this ).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
    
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
          $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
          });
        });
      // });

    });
  }




})(jQuery);