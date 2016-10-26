(function(){
    var el = document.getElementById('catalog');
    var goal = document.getElementById('goodsCatalog');
    var topSlider = document.getElementById('topSlider');
    var brandSlider = document.getElementById('brandSlider');
    var goalStatus = false;   
    var funcStatus = false;
    function showMenu() {
        if (funcStatus) return;
        funcStatus = true;
        if (goalStatus === true) {
            goalStatus = false;
            Velocity( goal, {height : 0}, 700);
            if (topSlider) {
                Velocity( topSlider, {'margin-left' : '125px'}, 1150);
            };
            if (brandSlider) {
                Velocity( brandSlider, {width : (brandSlider.offsetWidth + 250)+"px"}, 800);
                Velocity( brandSlider, {'margin-bottom' : '5px'}, 1000)
            }
            setTimeout(function(){funcStatus = false;}, 1200);
          return;
        };
        if (goalStatus === false) {
            goalStatus = true;
            Velocity( goal, {height : '520px'}, 1000);
            if (topSlider) {
                Velocity( topSlider, {'margin-left' : '250px'}, 600);
            };
             if (brandSlider) {
                Velocity( brandSlider, {width : (brandSlider.offsetWidth - 270)+"px"}, 700);
                Velocity( brandSlider, {'margin-bottom' : '25px'}, 1000)
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
    
