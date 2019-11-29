function teamRStart(){
    var teamRContainer = document.getElementById("team-r-container")
    var jessie = createImage("../img/jessie.jpg");
    var james = createImage("../img/james.png");
    var meowth = createImage("../img/meowth.jpg");
    teamRContainer.append(jessie, meowth, james);
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

}

function createImage(path){
    var img = document.createElement("img");
    img.src = path;
    img.classList.add("img-team-r")
    return img
}

function createSpeech(parent, text, row, col){
    paragraph = document.createElement("p");
    paragraph.classList.add("team-r-speech");
    paragraph.appendChild(document.createTextNode(text));
    paragraph.setAttribute("style", "grid-column: " + col + " / span 1; \n grid-row: " + row + " / span 1;" );
    parent.appendChild(paragraph);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}