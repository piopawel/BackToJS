document.querySelector('#bj-hit-btn').addEventListener('click', bjHit);
document.querySelector('#bj-deal-btn').addEventListener('click', bjDeal);

let bjGame = {
    "player":{"scoreSpan": "bj-player-result", "div": "player-box", "score": 0},
    "bot":{"scoreSpan": "bj-bot-result", "div": "bot-box", "score": 0},
    "cards": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    "cardsMap": {"2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10":10, "J": 10, "Q": 10, "K": 10, "A": [1, 11]},
}
const hitSound = new Audio("../sounds/swish.m4a");

function bjHit(){
    let card = randomCard();
    showCard("player", card);
    updateScore("player", card);
}

function bjDeal(){
    let playerImages = document.querySelector("#player-box").querySelectorAll("img");
    let botImages = document.querySelector("#bot-box").querySelectorAll("img");
    for (let i=0; i<playerImages.length; i++){
        playerImages[i].remove();
    }
    for (let i=0; i<botImages.length; i++){
        botImages[i].remove();
    }
    bjGame['player']['score'] = 0;
    bjGame['bot']['score'] = 0;
    showScore('player');
    showScore('bot');
}

function showCard(activePlayer, card){
    let cardImage = document.createElement("img");
    cardImage.src = `../img/blackjack/${card}.png`;
    document.querySelector("#" + bjGame[activePlayer]['div']).appendChild(cardImage);
    hitSound.play();
}

function randomCard(){
    return bjGame["cards"][Math.floor(Math.random() * 13)];
}

function updateScore(activePlayer, card){
    // if adding 11 keeps the score below 21 add 11, otherwise add 1
    if (card == "A"){
        if (bjGame[activePlayer]['score'] + bjGame["cardsMap"][card][1] <= 21){
            bjGame[activePlayer]['score'] += bjGame["cardsMap"][card][1];
        } else {
            bjGame[activePlayer]['score'] += bjGame["cardsMap"][card][0];
        }

    } else {
        bjGame[activePlayer]['score'] += bjGame['cardsMap'][card];
    }
    showScore(activePlayer);
}

function showScore(activePlayer){
    document.querySelector(`#${bjGame[activePlayer]['scoreSpan']}`).innerHTML = `${activePlayer.charAt(0).toUpperCase() + activePlayer.slice(1)}: ${bjGame[activePlayer]['score']}`;
}