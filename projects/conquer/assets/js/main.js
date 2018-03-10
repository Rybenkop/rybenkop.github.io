'use strict';

$(function () {
    // jQuery Scroll Up
    $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 1000,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',           // Fade, slide, none
        animationSpeed: 300,         // Animation speed (ms)		        
        scrollText: '', // Text for element, can contain HTML		        
        scrollImg: false            // Set true to use image		        
    });

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        if($(window).width() > 768) {
            var id  = $(this).attr("href"), top = $(id).offset().top - 71;
        } else {
            var id  = $(this).attr("href"), top = $(id).offset().top;
        }
       $("body,html").animate({scrollTop: top}, 1800);
    });
    
    $("#open-link").on("click", function() {
        $("#menu").toggleClass("showed");
    });

    
    $("#menu").on("click","a", function () {
        if($(window).width() < 768) {
            $("#menu").removeClass("showed");
        };
        
    });
   
    
    

});