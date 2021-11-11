$('.menu__btn').on('click',function(){
  $('.menu__list').toggleClass('menu__list--active')
});


$(function () {
  $('[data-fancybox]').fancybox({
    youtube : {
        controls : 1,
        showinfo : 1
    }
  });

  $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-text',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',

    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    fade: true,
    arrows: false

  });

})