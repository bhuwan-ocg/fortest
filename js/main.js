
// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})
// timeline scroll
$('ul.navbar-nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

/*--------------------------------------------------------------
    // Video
    --------------------------------------------------------------*/

$(".vpop").on('click', function(e) {
  e.preventDefault();
  $("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();
  
  var srchref='',autoplay='',id=$(this).data('id');
  if($(this).data('type') == 'vimeo') var srchref="//player.vimeo.com/video/";
  else if($(this).data('type') == 'youtube') var srchref="https://www.youtube.com/embed/";
  
  if($(this).data('autoplay') == true) autoplay = '?autoplay=1';
  
  $("#video-popup-iframe").attr('src', srchref+id+autoplay);
  
  $("#video-popup-iframe").on('load', function() {
    $("#video-popup-container").show();
  });
});

$("#video-popup-close, #video-popup-overlay").on('click', function(e) {
  $("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
  $("#video-popup-iframe").attr('src', '');
});


/*--------------------------------------------------------------
  side menu
    --------------------------------------------------------------*/

const pageHeader = document.querySelector(".page-header");
const openMobMenu = document.querySelector(".open-mobile-menu");
const closeMobMenu = document.querySelector(".close-mobile-menu");
const topMenuWrapper = document.querySelector(".top-menu-wrapper");
const isVisible = "is-visible";
const showOffCanvas = "show-offcanvas";
const noTransition = "no-transition";
let resize;

// Opening Mobile Menu
openMobMenu.addEventListener("click", () => {
  topMenuWrapper.classList.add(showOffCanvas);
});

// Closing Mobile Menu
closeMobMenu.addEventListener("click", () => {
  topMenuWrapper.classList.remove(showOffCanvas);
});

// Resizing Screen
window.addEventListener("resize", () => {
  pageHeader.querySelectorAll("*").forEach(function(el) {
    el.classList.add(noTransition);
  });
  clearTimeout(resize);
  resize = setTimeout(resizingComplete, 300);
});

function resizingComplete() {
  pageHeader.querySelectorAll("*").forEach(function(el) {
    el.classList.remove(noTransition);
  });
}



 /*--------------------------------------------------------------
    // counter
    --------------------------------------------------------------*/

  $.fn.jQuerySimpleCounter = function( options ) {
      var settings = $.extend({
          start:  0,
          end:    100,
          easing: 'swing',
          duration: 400,
          complete: ''
      }, options );

      var thisElement = $(this);

      $({count: settings.start}).animate({count: settings.end}, {
      duration: settings.duration,
      easing: settings.easing,
      step: function() {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete
    });
  };


$('#number1').jQuerySimpleCounter({end: 5,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 4,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 3,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});



    /* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });


/*--------------------------------------------------------------
    #Sticky Header
    --------------------------------------------------------------*/
    if ($(window).width() > 1) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1) {
                $('.menu').addClass("sticky-header");
                $('body').addClass('sticky');
            } else {
                $('.menu').removeClass("sticky-header");
                $('body').removeClass('sticky');
            }
        });
    }




/*--------------------------------------------------------------
    // service-slider
    --------------------------------------------------------------*/


    $(".owl-lazy").owlCarousel({
    items: 1,
    loop: false,
    margin:0,
    nav: false,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: false,
    autoplayTimeout: 20000,
    responsive: {
      1400: {
        items: 1,
      },
      1200: {
        items: 1,
      },
      767: {
        items: 1,
      },
      0: {
        items: 1,
      }
    }
  });

     /*--------------------------------------------------------------
    // owl-service
    --------------------------------------------------------------*/
    $(".owl-services ").owlCarousel({
    items: 3,
    loop: true,
    margin:20,
    nav: true,
    responsiveClass: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
      1400: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1024: {
        items: 2,
      },
       991: {
        items: 1,
      },
      767: {
        items: 1,
      },
      0: {
        items: 1,
      }
    }
  });

    /*--------------------------------------------------------------
    // owl-work
    --------------------------------------------------------------*/
    $(".owl-offer ").owlCarousel({
    items: 3,
    loop: false,
    margin:30,
    nav: false,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      1400: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      767: {
        items: 2,
      },
      0: {
        items: 1,
      }
    }
  });

    /*--------------------------------------------------------------
    // team
    --------------------------------------------------------------*/
    $(".owl-team ").owlCarousel({
    items: 3,
    loop: false,
    margin:30,
    nav: true,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      1400: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      767: {
        items: 2,
      },
      0: {
        items: 1,
      }
    }
  });
    /*--------------------------------------------------------------
    // team
    --------------------------------------------------------------*/
    $(".owl-project ").owlCarousel({
    items: 3,
    loop: false,
    margin:30,
    nav: false,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      1400: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      767: {
        items: 2,
      },
      0: {
        items: 1,
      }
    }
  });

    /*--------------------------------------------------------------
    // team
    --------------------------------------------------------------*/

    $(".owl-test").owlCarousel({
    items: 1,
    loop: false,
    margin:0,
    nav: true,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      1400: {
        items: 1,
      },
      1200: {
        items: 1,
      },
      767: {
        items: 1,
      },
      0: {
        items: 1,
      }
    }
  });

/*--------------------------------------------------------------
    progress
    --------------------------------------------------------------*/

 // (function($){
 
  // $(document).ready( function () {
  //   $('.testing').progressBar({
  //     value: "70",
  //     height: "35",
  //   });
  // });
  