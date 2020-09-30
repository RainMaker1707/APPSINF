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

function keepMenuOnTop(){
    let posMenu = elementPosition(document.getElementById("menu"));
    if  (document.getElementById("date").getBoundingClientRect().y > posMenu.height + 1) {
        document.getElementById("menu").className = "row order-2 navbar navbar-dark bg-dark navbar-expand-lg menu";
        document.getElementById("date").className = "datepad";
    }else if (posMenu.viewportY <= 0) {
        document.getElementById("menu").className = "row order-2 navbar navbar-dark bg-dark navbar-expand-lg fixed-top";
        document.getElementById("date").className = "datepad2";
    }
}

function reposNavBar(){
    let mainContainer = document.getElementById("main");
    let heroImg = document.getElementById("hero_img");
    let heroHeight = elementPosition(heroImg).height;
    mainContainer.style.top = heroHeight + "px";
}