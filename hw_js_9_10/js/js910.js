'use strict'

$(function() {
    $('.jcarousel')
        .jcarousel({
              rtl: true
        })
        .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        })
    ;
    $('.jcarousel-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
});

$('.jcarousel-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
});
});
