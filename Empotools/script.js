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
            setTimeout(function(){funcStatus = false;}, 1200);
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
        setTimeout(function(){funcStatus = false;}, 1200);
    };

    
    el.addEventListener('click', showMenu);

})();
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

         