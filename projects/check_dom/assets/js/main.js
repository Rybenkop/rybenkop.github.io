'use strict';

$(function() {
    $(".drop-down-menu").on("click", function() {
        $(this).toggleClass("visible");
    });
});

$(".subscribers__room-list span").on("click", function() {
    $(".subscribers__room-list span").removeClass("active");
    $(this).addClass("active");
});
