/*   C A T A L O G        A N I M A T I O N */

(function(){
    var el = document.getElementById('catalog');
    var goal = document.getElementById('goodsCatalog');
    var topSlider = document.getElementById('topSlider');
    var arrow = document.getElementById('catalogArrow');
    var arrowWrapper = document.getElementById('catArrowWrapper');
    var goalStatus = false;   
    var funcStatus = false;
    function showMenu() {
        if (funcStatus) return;
        funcStatus = true;
        if (goalStatus === true) {
            goalStatus = false;
            Velocity( goal, {height : '0'}, 700);
            if (topSlider) {
                Velocity( topSlider, {'margin-left' : '125px'}, 1150);
                setTimeout(function(){ arrow.style.transform = "rotate(0)";}, 650);
                arrowWrapper.style.height = '10px';
            };
            setTimeout(function(){funcStatus = false;}, 800);
          return;
        };
        if (goalStatus === false) {
            goalStatus = true;
            Velocity( goal, {height : '510px'}, 1000);
            if (topSlider) {
                Velocity( topSlider, {'margin-left' : '250px'}, 600);
                arrow.style.transform = "rotate(180deg)";
                arrowWrapper.style.height = 0;
            };
        };
        setTimeout(function(){funcStatus = false;}, 800);
    };

    el.addEventListener('click', showMenu);

})();

/* T O P    S L I D E R  */

(function(){
    var slider = document.getElementById('slider');
    var slides = slider.getElementsByTagName('section');
    var roundsBox = document.getElementById('navRounds');
    var n = 0;
    var funcStatus = false;
    for (var i = 0; i < slides.length; i++ ) {
        var round = document.createElement('li');
        round.value = i;
        roundsBox.appendChild(round);
    };
    var rounds = roundsBox.getElementsByTagName('li');
    function showSlide() {
        if (event.target === roundsBox) return;
        for (var i = 0; i < rounds.length; i++) {
            rounds[i].style.backgroundColor = 'rgba( 0, 0, 0, 0.5)';
        }
        var goal = event.target;
        n = goal.value;
        goal.style.backgroundColor = 'red';
        var roundValue = -(goal.value * 720)+'px';
        Velocity( slider, {'margin-left': roundValue}, 1000);
    } ;
    function demonstration(time) {
        if(funcStatus) return;
        funcStatus = true;
        var rounds = roundsBox.getElementsByTagName('li');
        if (n === slides.length) {
            n= 0;
        };
        var el = rounds[n];
            for (var i =0; i < rounds.length;i ++) {
            rounds[i].style.backgroundColor = 'rgba( 0, 0, 0, 0.5)';
        };
            el.style.backgroundColor = 'red';
            var value = -(el.value * 720)+'px';
            Velocity( slider, {'margin-left': value}, time);
        n++;
        
        setTimeout(function() {demonstration(time)}, 5000);
        funcStatus = false;
    };

    roundsBox.addEventListener('click', showSlide);
    demonstration(1000);
    
})();

/*      B R A N D    S L I D E R     */

(function(){
    var slider = document.getElementById('brandSlider');
    var slides = slider.getElementsByTagName('li');
    var lt = document.getElementById('brandLt');
    var gt = document.getElementById('brandGt');
    var step = slides[0].offsetWidth;
    var length = slides.length;
    var status = 0;
    var counter = 4;
    function scrollLeft() {
        var edge = slides.length*step - 4*step;
        if (counter <= 4) {
            counter = length;
            Velocity( slider, {"margin-left": -edge}, 2000);
            status = -edge;
            return;
        };
        Velocity( slider, {'margin-left': status + step}, 600);
        counter--;
        status = status + step;
    };
    function scrollRight() {
        var edge = slides.length*step;
        if (counter >= length) {
            counter = 4;
            Velocity( slider, {"margin-left": 0}, 2000);
            status = 0;
            return;
        };
        Velocity( slider, {'margin-left': status - step}, 600);
        counter++;
        status = status - step;
    };
    lt.addEventListener('click', scrollLeft);
    gt.addEventListener('click', scrollRight);
    
    
})();

/*  M A I N    S L I D E R S    */

(function(){
    function makeSlider(sliderViewer,sliderName, scrollTime, visibleElements ) {
        var viewer = document.getElementById(sliderViewer);
        var slider = document.getElementById(sliderName);
        var slides = slider.getElementsByTagName('li');
        var lt = viewer.getElementsByClassName('goods_button_left')[0];
        var gt = viewer.getElementsByClassName('goods_button_right')[0];
        var step = slides[0].offsetWidth;
        var status = 0;
        var counter = visibleElements;
        var correction = visibleElements;
        
        function scrollLeft() {
            var edge = slides.length*step - correction*step;
            if (counter <= correction) {
                counter = slides.length;
                Velocity( slider, {"margin-left": -edge}, scrollTime*3);
                status = -edge;
                return;
            };
            Velocity( slider, {'margin-left': status + step}, scrollTime);
            counter--;
            status = status + step;
        };
        
        function scrollRight() {
            var edge = slides.length*step;
            if (counter >= slides.length) {
                counter = correction;
                Velocity( slider, {"margin-left": 0}, scrollTime*3);
                status = 0;
                return;
            };
            Velocity( slider, {'margin-left': status - step}, scrollTime);
            counter++;
            status = status - step;
        };
        
    lt.addEventListener('click', scrollLeft);
    gt.addEventListener('click', scrollRight);
    
    };
    makeSlider('liderViewer','sailsLider', 600, 4 );
    makeSlider('electroViewer','electroGoods', 600, 4 );
    makeSlider('gardenViewer','gardenGoods', 600, 4 );
})();

/* C I T Y S   A N I M A T I O N */

(function(){
    var el = document.getElementById('shopsListButton');
    var goal = document.getElementById('shopsCitysList');
    var parent = document.getElementById('aboutUs');
    var goalStatus = false;
    var funcStatus = false;
    function showCitys() {
         if (funcStatus) return;
        funcStatus = true;
        if (goalStatus === true) {
            goalStatus = false;
            Velocity( goal, {height : '100px'}, 700);
            Velocity( parent, {height : (parent.offsetHeight - 140)+'px'}, 700);
            setTimeout(function(){funcStatus = false;}, 1200);
          return;
        };
        if (goalStatus === false) {
            goalStatus = true;
            Velocity( goal, { height : "220px" }, 1000);
            Velocity( parent, { height : (parent.offsetHeight + 100)+'px' }, 1000);
        };
        setTimeout(function(){funcStatus = false;}, 1200);
    };
    el.addEventListener('click', showCitys);
})();


/*   S H O W    V I D E O  */

(function(){
    var firstVideo = document.getElementsByClassName('video_button')[0];
    var secondVideo = document.getElementsByClassName('video_button')[1];
    var viewCounter = document.createElement('button'); 
    var videoWrapper;
    var videoViewer;
    
    var stopVideo = function ( element ) {
    var iframe = element.querySelector( 'iframe');
    var video = element.querySelector( 'video' );
    if ( iframe !== null ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if ( video !== null ) {
        video.pause();
    }
    };
    
    
    function hideVideo() {
        event.stopPropagation();
        videoWrapper.style.display = 'none';
        stopVideo( videoViewer );
        return;
    }; 
    function showVideo() {
        var goal = event.target;
        var video = goal.querySelectorAll('.video_wrapper')[0];
        var viewer = goal.querySelectorAll('.video_viewer')[0];
        video.style.display = 'block';
        videoWrapper = video;
        videoViewer = viewer;
        video.addEventListener('click', hideVideo);
   };
    
    
    firstVideo.addEventListener('click', showVideo);
    secondVideo.addEventListener('click', showVideo);
    
 
    
})();

/*      V I E W E R    C O U N T E R        */
function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}
   function countViews(postID) {
       var req = getXmlHttp();
       req.open('GET' , 'wp-admin/admin-ajax.php?action=setPostViews&id=' + postID, true);
       req.send(null);
   };
