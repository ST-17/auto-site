$(function (){
  var mix = mixitup('.blog__list')

  $(".blog__filter-btn").on('click', function (){
    $(".blog__filter-btn").removeClass("blog__filter-btn--active")
    $(this).addClass("blog__filter-btn--active");
  })

  $('.customers__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    dots: true,
    appendDots: $('.customers__slider-dots')
  })

  $('.customers__slide-prev').on('click', function (e) {
    e.preventDefault();
    $('.customers__slider').slick('slickPrev')
  })
  $('.customers__slide-next').on('click', function (e) {
    e.preventDefault();
    $('.customers__slider').slick('slickNext')
  })


  $('.faq__acc-link').on('click', function (e) {
    e.preventDefault()
    if($(this).hasClass('faq__acc-link--active')){
      $(this).removeClass('faq__acc-link--active')
      $(this).children('.faq__acc-text').slideUp()
    } else {
      $('.faq__acc-link').removeClass('faq__acc-link--active')
      $('.faq__acc-text').slideUp()
      $(this).addClass('faq__acc-link--active')
      $(this).children('.faq__acc-text').slideDown()
    }
  })
})