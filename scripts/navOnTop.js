function elementPosition(a) {
    let b = a.getBoundingClientRect();
    return {
        clientX: a.offsetLeft,
        clientY: a.offsetTop,
        viewportX: (b.x || b.left),
        viewportY: (b.y || b.top)
    }
}

function keepMenuOnTop(){
    let posMenu = elementPosition(document.getElementById("menu"));
    if  (document.getElementById("date").getBoundingClientRect().y >
            document.getElementById("menu").getBoundingClientRect().height) {
        document.getElementById("menu").className = "row order-2 navbar navbar-dark bg-dark navbar-expand-lg menu";
    }
    else if (posMenu.viewportY < 0 || posMenu.viewportY === 0){
        document.getElementById("menu").className = "row order-2 navbar navbar-dark bg-dark navbar-expand-lg menu2";
    }
}