function keepMenuOnTop(){
    let scrollY;
    if (document.all)
    {
        if (!document.documentElement.scrollTop)
            scrollY = document.body.scrollTop;
        else
            scrollY = document.documentElement.scrollTop;
    }
    else
        scrollY = window.pageYOffset;
    console.log(scrollY);
    if(scrollY > 350)
        document.getElementById("menu").className = "row order-2 navbar navbar-dark bg-dark navbar-expand-lg menu2";
    else
        document.getElementById("menu").className = "row order-2 navbar navbar-dark bg-dark navbar-expand-lg menu";
}