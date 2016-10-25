(function(){
    var goalStatus = false;   
    var el = document.getElementById('catalog');
    var goal = document.getElementById('goodsCatalog');
    var topSlider = document.getElementById('topSlider');
    function showMenu() {
        if (goalStatus === true) {
            goalStatus = false;
            Velocity( goal, {height : 0}, 700);
            if (topSlider) {Velocity( topSlider, {'margin-left' : '125px'}, 1150);
                            }
            return;
        };
        if (goalStatus === false) {
            goalStatus = true;
            Velocity( goal, {height : '520px'}, 1000);
            if (topSlider) Velocity( topSlider, {'margin-left' : '250px'}, 600);
        };

    };
    
    el.addEventListener('click', showMenu);

})();
    
