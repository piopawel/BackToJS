var allButtons = document.getElementsByClassName("button");
var buttonsClasses = [];
for (let i=0; i<allButtons.length; i++){
    buttonsClasses.push(allButtons[i].classList[1]);
}

function buttonColorChange(colorChoice){
    if (colorChoice.value == "Red"){
        turnButtonsRed();
    }
    if (colorChoice.value == "Blue"){
        turnButtonsBlue();
    }
    if (colorChoice.value == "Random"){
        turnButtonsRandom();
    }
    if (colorChoice.value == "Reset"){
        turnButtonsBack();
    }
}

function turnButtonsRed(){
    for (let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("alert");
    }
}
function turnButtonsBlue(){
    for (let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("run-fn");
    }
}

function turnButtonsRandom(){
    let classChoices = ['alert', 'run-fn', 'btn-success', 'btn-warn'];
    for (let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(classChoices[Math.floor(Math.random() * classChoices.length)]);
    }
}
function turnButtonsBack(){
    for (let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(buttonsClasses[i]);
    }
}