$(document).ready(function () {
  $('.reviews-list').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    waitForAnimate: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 375,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
    ],
  });
});
