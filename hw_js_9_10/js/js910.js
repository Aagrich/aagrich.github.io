'use strict'

$(function() {
    $('.jcarousel').jcarousel();
    $('.jcarousel-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
});

$('.jcarousel-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
});
});