document.querySelector("#button").addEventListener('click', loadText);
// const fs = require('fs') 
// fs.readFile('./sample.txt', (err, data) => { 
//     if (err) throw err; 
//     console.log(data.toString()); 
// }) 

function loadText(){
    // Create XHR object
    let xhr = new XMLHttpRequest();
    // OPEN(type, url/file, async)
    xhr.open('GET', "./otherFiles/sample.txt", true);
    //  it is considering the home directory as the directory of the HTML!
    xhr.onload = function(){
        if(this.status == 200){ // check if it is ok before you do anything else
            console.log(this.responseText);
        }
    }
    xhr.send();
}