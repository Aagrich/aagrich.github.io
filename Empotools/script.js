(function(){
    var goalStatus = false;   
    var el = document.getElementById('catalog');
    var goal = document.getElementById('goodsCatalog');
    function showMenu() {
        if (goalStatus === true) {
            goalStatus = false;
            Velocity( goal, {height : 0}, 1000);
            return;
        };
        if (goalStatus === false) {
            goalStatus = true;
            Velocity( goal, {height : '520px'}, 1000);
        };

    };
    
    el.addEventListener('click', showMenu);

})();
    
