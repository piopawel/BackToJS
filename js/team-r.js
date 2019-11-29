function teamRStart(){
    var teamRContainer = document.getElementById("team-r-container")
    if (teamRContainer.childElementCount == 0) {
        var jessie = createImage("../img/jessie.jpg", "jessie");
        var james = createImage("../img/james.png", "james");
        var meowth = createImage("../img/meowth.jpg", "meowth");
        teamRContainer.append(jessie, meowth, james);
    }
}

async function teamRSpeaks(){
    speakingContainer = document.getElementById("speaking-container");
    createSpeech(speakingContainer, "Te dwie niecnoty", 1, 1);
    await sleep(1000);
    createSpeech(speakingContainer, "To kłopoty", 2, 3);
    await sleep(1000);
    createSpeech(speakingContainer, "By uchronić świat od dewastacji!", 3, 1);
    await sleep(1000);
    createSpeech(speakingContainer, "By zjednoczyć wszystkie ludy naszej nacji!", 4, 3);
    await sleep(1000);
    createSpeech(speakingContainer, "Miłości i prawdzie nie przyznać racji!", 5, 1);
    await sleep(1000);
    createSpeech(speakingContainer, "By gwiazd dosięgnąć będziemy walczyć!", 6, 3);
    await sleep(1000);
    createSpeech(speakingContainer, "JESSIE", 7, 1);
    await sleep(1000);
    createSpeech(speakingContainer, "JAMES", 8, 3);
    await sleep(1000);
    createSpeech(speakingContainer, "Zespół R walczy w służbie zła!", 9, 1);
    await sleep(1000);
    createSpeech(speakingContainer, "Więc poddaj się lub do walki stań!", 10, 3);
    await sleep(1000);
    createSpeech(speakingContainer, "Meowth to fakt!", 11, 2);
}

function teamREnd(){
    var teamRContainer = document.getElementById("team-r-container")
    for (i=0; i<teamRContainer.childElementCount; i++){
        teamRContainer.childNodes[i].classList.add("img-team-r-shrinked")
        if (teamRContainer.childNodes[i].id == "jessie"){
            teamRContainer.childNodes[i].style.left = "30%";
        } 
        if (teamRContainer.childNodes[i].id == "james"){
            teamRContainer.childNodes[i].style.left = "-30%";
        } 
    }
    teamRContainer.classList.add("shrinked-container")

    //TODO: dekete the elements
}

function createImage(path, name){
    var img = document.createElement("img");
    img.src = path;
    img.classList.add("img-team-r");
    img.setAttribute("id", name);
    return img;
}

function createSpeech(parent, text, row, col){
    paragraph = document.createElement("p");
    paragraph.appendChild(document.createTextNode(text));
    paragraph.setAttribute("style", "grid-column: " + col + " / span 1; \n grid-row: " + row + " / span 1;" );
    // paragraph.style.grid-column = col + " / span 1; \n grid-row: " + row + " / span 1"; Not possible with a dash??
    paragraph.classList.add("team-r-speech");
    // paragraph.style.bottom = "-500px";
    // paragraph.classList.add("position-0");
    parent.appendChild(paragraph);
    // paragraph.style.transition = "bottom 2s linear"
    // paragraph.style.bottom = "0px";
    // paragraph.classList.remove("position-0");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}