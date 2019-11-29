// CHallenge 1: Your age in days.
function ageInDays(){
    // var birthYear = prompt("What year were you born in?");
    var currentTime = Date.now();
    var bDay = new Date(document.getElementById("input-bday").value);
    var dayDifference = Math.floor(((currentTime - bDay.getTime()) / 1000 /3600/24));
    if (dayDifference > 0 && dayDifference < 70000){
        returnText = "You are: " + dayDifference + " days old"
    } else {
        returnText = "Please input a valid date of birth."
    }
    if (document.getElementById("dayDifference")){
        document.getElementById("dayDifference").innerHTML = returnText; 
    } else {
        var h1 = document.createElement('h1');
        h1.setAttribute("id", "dayDifference");
        h1.appendChild(document.createTextNode(returnText));
        document.getElementById('flex-box-result').appendChild(h1);
    }
}

function resetDays(){
    document.getElementById("dayDifference").remove();
    document.getElementById("input-bday").value = "2000-01-01"
}