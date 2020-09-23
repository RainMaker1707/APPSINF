function elementPosition(a) {
    let b = a.getBoundingClientRect();
    return {
        clientX: a.offsetLeft,
        clientY: a.offsetTop,
        viewportX: (b.x || b.left),
        viewportY: (b.y || b.top),
        height: b.height
    }
}

function navBarPos(){
    let imgSize = elementPosition(document.getElementById("hero_img"));
    console.log(imgSize.height);
    document.getElementById("main").style =
        "    background-color: #4D4D4D; " +
        "    position: absolute; " +
        "    top: "+ imgSize +"px;";
    return 1;
}

function keepMenuOnTop(){
    let posMenu = elementPosition(document.getElementById("menu"));
    if  (document.getElementById("date").getBoundingClientRect().y > posMenu.height + 40) {
        document.getElementById("menu").className = "row order-2 navbar navbar-dark bg-dark navbar-expand-lg menu";
        document.getElementById("date").className = "datepad";
    }else if (posMenu.viewportY <= 0) {
        document.getElementById("menu").className = "row order-2 navbar navbar-dark bg-dark navbar-expand-lg menu2";
        document.getElementById("date").className = "datepad2";
    }
}