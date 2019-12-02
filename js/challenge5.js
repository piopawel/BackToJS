document.querySelector('#bj-hit-btn').addEventListener('click', bjHit);
document.querySelector('#bj-deal-btn').addEventListener('click', bjDeal);

let bjGame = {
    "player":{"scoreSpan": "bj-player-result", "div": "player-box", "score": 0},
    "bot":{"scoreSpan": "bj-bot-result", "div": "bot-box", "score": 0}
}
const hitSound = new Audio("../sounds/swish.m4a");

function bjHit(){
    showCard("player");
}

function bjDeal(){
    let playerImages = document.querySelector("#player-box").querySelector("img");
    let botImages = document.querySelector("#bot-box").querySelector("img");
    for (let i=0; i<playerImages.length; i++){
        playerImages[i].remove();
    }
    for (let i=0; i<botImages.length; i++){
        botImages[i].remove();
    }
}

function showCard(activePlayer){
    let cardImage = document.createElement("img");
    cardImage.src = "../img/blackjack/2.png";
    document.querySelector("#" + bjGame[activePlayer]['div']).appendChild(cardImage);
    hitSound.play();
}