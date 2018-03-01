'use strict';

$(function() {
      $(".search-form__drop-down-menu").on("click", function() {
        $(".search-form__drop-down-menu-content").toggleClass("display-none");
      });

      $(".search-form__menu-item").on("click", function() {
        $(".search-form__drop-down-menu-content").toggleClass("display-none");
      });

      $(".search-form__drop-down-menu").on("focusout", function() {
        $(".search-form__drop-down-menu-content").addClass("display-none");
      });

      $(".faq-accordion__question").on("click", function() {
        var answer = $(this).next();
        
        $(".faq-accordion__answer").not(answer).slideUp(300).prev().removeClass("opened");
        answer.slideDown(300).prev().addClass("opened");
      });


      $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1
      });
});
