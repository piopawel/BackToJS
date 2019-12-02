imageDb = {
    "rock": "./img/rock.png",
    "paper": "./img/paper.jpg",
    "scissors": "./img/scissors.png"
}

function rpsGame(choiceDiv){
    if (choiceDiv.classList.contains("choice-box")){
        var humanChoice, botChoice;
        humanChoice = choiceDiv.getElementsByTagName("img")[0].id;
        botChoice = getRandomRPS();
        results = decideWinner(humanChoice, botChoice); //<-1, 0, 1> -> Computer, Tie, Human won
        message = finalMessage(results); // object(dict in python) {message: "", color: ""}
        rpsFrontend(humanChoice, botChoice, message);
    } else {
        loadImages();
    }
}

function getRandomRPS(){
    var rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[Math.floor(Math.random()*rpsArray.length)];
}

function decideWinner(humanChoice, botChoice){
    var scoreObj = {
        'rock': {'rock': 0, 'paper': -1, 'scissors': 1},
        'paper': {'rock': 1, 'paper': 0, 'scissors': -1},
        'scissors': {'rock': -1, 'paper': 1, 'scissors': 0}
    };
    // console.log("human: " + humanChoice + " bot: " + botChoice);
    return scoreObj[humanChoice][botChoice];
}

function finalMessage(results){
     switch (results){
         case -1:
             return {"message": "You lost!", "color": "red"};
        case 0:
            return {"message": "Tie!", "color": "yellow"};
        case 1:
            return {"message": "You won!", "color": "green"};
     }
    //  console.log(result);
}

function rpsFrontend(humanChoice, botChoice, message){
     removeElements();
     rpsDiv1 = document.getElementById('rps-div-1');
     rpsDiv2 = document.getElementById('rps-div-2');
     rpsDiv3 = document.getElementById('rps-div-3');
     rpsDiv1.classList.remove("choice-box");
     rpsDiv2.classList.remove("choice-box");
     rpsDiv3.classList.remove("choice-box");
    // add new elements to the divs
    imgDiv1 = document.createElement("img");
    imgDiv1.src = imageDb[humanChoice];
    imgDiv3 = document.createElement("img");
    imgDiv3.src = imageDb[botChoice];

    messageText = document.createElement("h2");
    messageText.innerHTML = message["message"];
    messageText.style.color = message["color"];
    returnButton = document.createElement("p");
    returnButton.innerHTML = "Play once again";
    returnButton.classList.add("button", "run-fn");
    returnButton.id = "rps-return"

    rpsDiv1.appendChild(imgDiv1);
    rpsDiv2.appendChild(messageText);
    rpsDiv2.appendChild(returnButton);
    rpsDiv3.appendChild(imgDiv3);
}

function loadImages(){
    // Run on pagecreate or on refresh of the game
    
    // first remove all the elements from divs (if there are any)
    removeElements();
    rpsDiv1 = document.getElementById('rps-div-1');
    rpsDiv2 = document.getElementById('rps-div-2');
    rpsDiv3 = document.getElementById('rps-div-3');
    
    // create images for the divs
    rock = document.createElement('img');
    rock.src = imageDb['rock']; //"./img/rock.png";
    rock.id = "rock";
    paper = document.createElement('img');
    paper.src = imageDb['paper']; // "./img/paper.jpg";
    paper.id = "paper";
    scissors = document.createElement('img');
    scissors.src = imageDb['scissors']; //"./img/scissors.png";
    scissors.id = "scissors";
    rpsDiv1.appendChild(rock);
    rpsDiv2.appendChild(paper);
    rpsDiv3.appendChild(scissors);
    // add a class distinction for functionalities
    rpsDiv1.classList.add("choice-box");
    rpsDiv2.classList.add("choice-box");
    rpsDiv3.classList.add("choice-box");
}

function removeElements(){
    rpsContainer = document.getElementById("rps-container");
    rpsContainer.childNodes.forEach(removeChildNodes);
}

function removeChildNodes(element){
    while (element.lastChild){
        element.removeChild(element.lastChild);
    }
}

