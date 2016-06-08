'use strict'

$(function() {
    $('.jcarousel').jcarousel({
      vertical: true
    });
    $('.jcarousel-next').click(function(){
      $('.jcarousel').jcarousel('scroll', '+=1');
      $('.jcarousel-prev').click(function(){
      $('.jcarousel').jcarousel('scroll', '-=1');
    })
});
