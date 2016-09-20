(function($){
  $.fn.cCarusel = function(prevArrow,nextArrow,caruselWidth,elementWidth) {
    var prev = $(prevArrow);
    var next = $(nextArrow);
    var list = $('ul');
    var picsPosition = 0;
    var picsNumber = list.find('li').length - caruselWidth/elementWidth - 1;
    console.log(picsNumber);
    console.log(list.find('li'));
    var maxOffset = 0;
    var minOffset = -(picsNumber*elementWidth);
    console.log(maxOffset + ' i ' + minOffset);

    list.css(
      'position', 'relative'
    );

    next.click(function(){
      if (minOffset < picsPosition) {
      picsPosition -=elementWidth;
      list.animate({
        left: picsPosition + "px"
      }, 500);
      console.log(picsPosition);
    }
    });
    prev.click(function(){
      if (maxOffset != picsPosition){
      picsPosition +=elementWidth;
      list.animate({
        left: picsPosition + "px"
      }, 500);
      console.log(picsPosition);
    }
    });

    return this;
  };
})(jQuery);
