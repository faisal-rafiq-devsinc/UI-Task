$('.services-active').owlCarousel({
  dots: false,
  autoplay: true,
  smartSpeed: 400,
  arrows: true,
  items: 3,
  loop: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  margin: 10,
  nav: true,

  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],

  responsive: {
    1024: {
      items: 3,
      dots: false,
    },
    992: {
      items: 2,
      dots: false,
    },
    768: {
      items: 2,
      arrows: false,
      nav: false,
    },
    0: {
      items: 1,
      arrows: false,
      nav: false,
    }
  }
});


$('.instagram-active').owlCarousel({
  slidesToShow: 5,
  slidesToScroll: 1,
  loop: true,
  autoplay: true,
  speed: 3000,
  smartSpeed: 2000,
  nav: false,
  dots: false,
  margin: 0,
  autoplayHoverPause: true,

  responsive: {
    0: {
      nav: false,
      items: 2,
    },
    768: {
      nav: false,
      items: 5,
    }
  }
});
