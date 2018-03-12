'use strict';

$(function() {
    $(".header__to-projects-link").on("click", function (event) {
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var idLink  = $(this).attr('href');
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        var topValue = $(idLink).offset().top;
        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: topValue}, 800);
    });

    $(".header__down-arrow").on("click", function (event) {
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var idLink  = $(this).attr('href');
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        var topValue = $(idLink).offset().top;
        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: topValue}, 800);
    });

    $(".to-contact-form").on("click", function (event) {
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var idLink  = $(this).attr('href');
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        var topValue = $(idLink).offset().top;
        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: topValue}, 800);
    });
   
    $(".menu__link").on("click", function (event) {
        event.preventDefault();
        //забираем идентификатор блока с атрибута href
        var idLink  = $(this).attr('href');
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        var topValue = $(idLink).offset().top;
        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: topValue}, 800);
    });

    $.scrollify({
        section : ".scroll",
        scrollSpeed: 600
    });

    if($(window).width() < 768) {
        $.scrollify.disable();
    };
    

    $('.scroll').mouseenter(function(){
        for(var i = 0; i < $(".menu__link").length; i++) {
            if($(".menu__link").eq(i).attr("href") == "#" + this.id) {
                $(".menu__link").removeClass("menu__active");
                $(".menu__link").eq(i).addClass("menu__active");
            };
        };
    });         
      

    $(".menu__link").on("click", function() {
        $(".menu__link").removeClass("menu__active");
        $(this).addClass("menu__active");
    });

    $('.scroll').mouseenter();


    $(".projects__item--1").on("click", function() {
        $(".owerlay").removeClass("disabled");
        $(".popup--1").removeClass("disabled");
    });

    $(".owerlay").on("click", function() {
        $(".owerlay").addClass("disabled");
        $(".popup").addClass("disabled"); 
    });
    
    $(".popup__close").on("click", function() {
        $(".owerlay").addClass("disabled");
        $(".popup--1").addClass("disabled"); 
    });

    $(".projects__item--2").on("click", function() {
        $(".owerlay").removeClass("disabled");
        $(".popup--2").removeClass("disabled");
    });

    $(".popup__close").on("click", function() {
        $(".owerlay").addClass("disabled");
        $(".popup--2").addClass("disabled"); 
    });

    $(".projects__item--3").on("click", function() {
        $(".owerlay").removeClass("disabled");
        $(".popup--3").removeClass("disabled");
    });

    $(".popup__close").on("click", function() {
        $(".owerlay").addClass("disabled");
        $(".popup--3").addClass("disabled"); 
    });


    


});