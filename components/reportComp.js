function makeFile(author, description, image, localisation, date){
    let div = document.createElement("div");
    div.className = "report-container row justify-content-left align-items-center";

    let img = document.createElement("img");
    img.className = "image";
    img.src = "images/lln_esplanade.jpg";

    let lst = document.createElement("ul");
    lst.className = "container-right";
    let elemAuth = document.createElement("li");
    let elemDesc = document.createElement("li");
    let elemLoc = document.createElement("li");

    let aut = document.createElement("p");
    aut.className = "author";
    aut.innerHTML = author;

    let desc = document.createElement("p");
    desc.className = "description";
    desc.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
        "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut " +
        "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum " +
        "dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" +
        " deserunt mollit anim id est laborum.";

    elemAuth.appendChild(aut);
    elemDesc.appendChild(desc);
    lst.appendChild(elemAuth);
    lst.appendChild(elemDesc);
    div.appendChild(img);
    div.appendChild(lst);

    let master = document.getElementById("reports");
    master.appendChild(div);
}