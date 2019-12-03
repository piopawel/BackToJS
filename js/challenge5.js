document.querySelector('#bj-hit-btn').addEventListener('click', bjHit);
document.querySelector('#bj-stand-btn').addEventListener('click', bjStand);
document.querySelector('#bj-deal-btn').addEventListener('click', bjDeal);

let bjGame = {
    "player":{"scoreSpan": "bj-player-result", "div": "player-box", "score": 0},
    "bot":{"scoreSpan": "bj-bot-result", "div": "bot-box", "score": 0},
    "cards": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    "cardsMap": {"2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10":10, "J": 10, "Q": 10, "K": 10, "A": [1, 11]},
    "wins": 0,
    "draws": 0,
    "losses": 0,
}
const hitSound = new Audio("../sounds/swish.m4a");
const winSound = new Audio("../sounds/cash.mp3");
const lossSound = new Audio("../sounds/aww.mp3");
hitSound.volume = 0.1;
winSound.volume = 0.1;
lossSound.volume = 0.1;

function bjHit(){
    if(bjGame['bot']['score'] == 0){ // only play when the Bot has not started yet
        let card = randomCard();
        showCard("player", card);
        updateScore("player", card);
        if (bjGame['player']['score'] > 21) {
            // showResult("bot");
            computeWinner();
        }
    }
}

function bjStand(){
    if (bjGame['player']['score'] > 0){ // do anything only if the player has already played
        if (bjGame['player']['score'] <= 21){
            // bot plays if it has a lower score than the player
            while (bjGame['bot']['score'] <= bjGame['player']['score']){
                let card = randomCard();
                showCard("bot", card);
                updateScore("bot", card);
            }
        }
        computeWinner();
    }
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
    if (bjGame[activePlayer]['score'] < 21 ){
        let cardImage = document.createElement("img");
        cardImage.src = `../img/blackjack/${card}.png`;
        document.querySelector("#" + bjGame[activePlayer]['div']).appendChild(cardImage);
        hitSound.play();
    }
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
    if (bjGame[activePlayer]['score'] > 21){
        document.querySelector(`#${bjGame[activePlayer]['scoreSpan']}`).textContent = 
            `${activePlayer.charAt(0).toUpperCase() + activePlayer.slice(1)}: BUSTED!`;
        document.querySelector(`#${bjGame[activePlayer]['scoreSpan']}`).style.color = "red";
    } else {
        document.querySelector(`#${bjGame[activePlayer]['scoreSpan']}`).innerHTML = 
            `${activePlayer.charAt(0).toUpperCase() + activePlayer.slice(1)}: ${bjGame[activePlayer]['score']}`;
            document.querySelector(`#${bjGame[activePlayer]['scoreSpan']}`).style.color = "white";
    }
}

function computeWinner(){
    let winner;
    if (bjGame['player']['score'] <= 21){
        if (bjGame['player']['score'] > bjGame['bot']['score'] || bjGame['bot']['score'] > 21){
            // Player win
            winner = 'player';
            bjGame['wins']++;
        } else if (bjGame['player']['score'] < bjGame['bot']['score']){
            // Player lose
            winner = 'bot'
            bjGame['losses']++;
        } else {
            // TIE
            winner = null;
            bjGame['draws']++;
        }
    } else {
        // You bust, does the computer too?
        if (bjGame['bot']['score'] <= 21){
            // Player lose
            winner = "bot";
            bjGame['losses']++;
        } else {
            // TIE
            winner = null;
            bjGame['draws']++;
        }
    }
    showResult(winner);
}

function showResult(winner){
    let message, messageColor;
    if (winner == 'player') {
        message = "You won!";
        messageColor = "green";
        winSound.play();
    } else if (winner=="bot") {
        message = "You lost!";
        messageColor = "red";
        lossSound.play();
    } else {
        message = "You drew";
        messageColor = "black";
    }
    document.querySelector("#bj-result").textContent = message;
    document.querySelector("#bj-result").style.color = messageColor;
    updateTable();
}

function updateTable(){
    document.querySelector("#wins").textContent = bjGame['wins'];
    document.querySelector("#losses").textContent = bjGame['losses'];
    document.querySelector("#draws").textContent = bjGame['draws'];
}