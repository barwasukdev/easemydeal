$(document).ready(function() {	
        
    
    $('.top-slider-offer.owl-carousel').owlCarousel({
        autoplay: false,
        loop: false,
        nav: true,
        navText: "",
        dots: true,
        margin: 0,
        touchDrag: true,
        mouseDrag: false,
        smartSpeed: 1000,
        items: 1,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
      $('.ham-icon').click(function () {
        $('.my-sidenav').css('max-width', '380px');
      });
      $('.cross-btn1').click(function () {
        $('.my-sidenav').css('max-width', '0px');
      });
      $(".my-sidenav").accordion();
      
      
      
});

