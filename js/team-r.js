function teamRStart(){
    var teamRContainer = document.getElementById("team-r-container")
    var jessie = createImage("../img/jessie.jpg");
    var james = createImage("../img/james.png");
    var meowth = createImage("../img/meowth.jpg");
    teamRContainer.append(jessie, meowth, james);
}

function teamRSpeaks(){
    speakingContainer = document.getElementById("speaking-container");
    createSpeech(speakingContainer, "Te dwie niecnoty", 1, 1);
    createSpeech(speakingContainer, "To kłopoty", 2, 3);
    createSpeech(speakingContainer, "By uchronić świat od dewastacji!", 3, 1);
    createSpeech(speakingContainer, "By zjednoczyć wszystkie ludy naszej nacji!", 4, 3);
    createSpeech(speakingContainer, "Miłości i prawdzie nie przyznać racji!", 5, 1);
    createSpeech(speakingContainer, "By gwiazd dosięgnąć będziemy walczyć!", 6, 3);
    createSpeech(speakingContainer, "JESSIE", 7, 1);
    createSpeech(speakingContainer, "JAMES", 8, 3);
    createSpeech(speakingContainer, "Zespół R walczy w służbie zła!", 9, 1);
    createSpeech(speakingContainer, "Więc poddaj się lub do walki stań!", 10, 3);
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