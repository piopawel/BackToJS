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