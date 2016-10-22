(function(){
    
    function showMenu(mainElement, menu, act, start, end ) {
    var el = document.getElementById(mainElement);
    var goal = document.getElementById(menu);
    el.addEventListener("mouseover", function(){
        velocity(goal, {act : end}, 1000);
    });
    el.addEventListener("mouseout", function(){
        velocity(goal, {act : start}, 1000);
    });
    };
    
    showMenu("catalog", "goodsCatalog", 'opacity', 0, 1);

})();
