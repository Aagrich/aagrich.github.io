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
    var slide = slides[2];
    var roundsBox = document.getElementById('navRounds');
    for (var i = 0; i < slides.length; i++ ) {
        var round = document.createElement('li');
        round.classList.add("slide"+ i);
        roundsBox.appendChild(round);
    };
    var rounds = roundsBox.getElementsByTagName('li');
    function showSlide() {
        if (event.target === roundsBox) return;
        for (var i =0; i < rounds.length;i ++) {
            rounds[i].style.backgroundColor = 'rgba( 0, 0, 0, 0.5)';
        }

        var goal = event.target;
        console.log(goal);
        goal.style.backgroundColor = 'red';
    } ;

    roundsBox.addEventListener('click', showSlide);
    
    
    
})();
         