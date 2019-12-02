document.querySelector('#bj-hit-btn').addEventListener('click', bjHit);

let bjGame = {
    "player":{"scoreSpan": "bj-player-result", "div": "player-box", "score": 0},
    "bot":{"scoreSpan": "bj-bot-result", "div": "bot-box", "score": 0}
}
const hitSound = new Audio("../sounds/swish.m4a");

function bjHit(){
    showCard("player");
}



function showCard(activePlayer){
    let cardImage = document.createElement("img");
    cardImage.src = "../img/blackjack/2.png";
    document.querySelector("#" + bjGame[activePlayer]['div']).appendChild(cardImage);
    hitSound.play();
}