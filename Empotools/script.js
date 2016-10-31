/*   C A T A L O G        A N I M A T I O N */

(function(){
    var el = document.getElementById('catalog');
    var goal = document.getElementById('goodsCatalog');
    var topSlider = document.getElementById('topSlider');
    var arrow = document.getElementById('catalogArrow');
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
                setTimeout(function(){arrow.style.marginTop = "0"; arrow.style.transform = "rotate(0)";}, 650);
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
                arrow.style.marginTop = "-5px";
            };
        };
        setTimeout(function(){funcStatus = false;}, 800);
    };

    
    el.addEventListener('click', showMenu);

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
            Velocity( parent, {height : (parent.offsetHeight - 120)+'px'}, 700);
            setTimeout(function(){funcStatus = false;}, 1200);
          return;
        };
        if (goalStatus === false) {
            goalStatus = true;
            Velocity( goal, { height : "180px" }, 1000);
            Velocity( parent, { height : (parent.offsetHeight + 80)+'px' }, 1000);
        };
        setTimeout(function(){funcStatus = false;}, 1200);
    };
    el.addEventListener('click', showCitys);
})();

/* T O P    S L I D E R  */

(function(){
    // var viewer = document.getElementById('topSlider');
    var slider = document.getElementById('slider');
    var slides = slider.getElementsByTagName('section');
    var roundsBox = document.getElementById('navRounds');
    var n = 0;
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
    };

    roundsBox.addEventListener('click', showSlide);
    demonstration(1000);
    
})();

(function(){
    var slider = document.getElementById('brandSlider');
    var slides = slider.getElementsByTagName('li');
    var lt = document.getElementById('brandLt');
    var gt = document.getElementById('brandGt');
    var step = slides[0].offsetWidth;
    var length = slides.length;
    var status = 0;
    var counter = 4;
    console.log(length);
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
        console.log(counter);
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
        console.log(counter);
    };
    lt.addEventListener('click', scrollLeft);
    gt.addEventListener('click', scrollRight);
    
    
})();