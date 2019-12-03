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
    console.log("Readystate: ", xhr.readyState);

    // OPTIONAL (before onload) -> used for loaders (those rotating circles or whatever when page is loading)
    xhr.onprogress = function(){
        console.log("Readystate: ", xhr.readyState); // == 3
    }
    xhr.onload = function(){
        console.log("Readystate: ", xhr.readyState); // the readyState is already 4
        if(this.status == 200){ // check if it is ok before you do anything else
            // console.log(this.responseText);
            document.querySelector("#text").innerHTML = this.responseText;
        } else if (this.status == 404){
            document.querySelector("#text").innerHTML = "Not found"
        }
    }

    xhr.onerror = function(){
        console.log("Request error :(");
    }


    // an old way instead of the onload function, requires checking of the readyState
    // xhr.onreadystatechange = function(){
    //     console.log("Readystate: ", xhr.readyState);
    //     // so in this old way, it goes through all the checks of readyState: (1. 2. 3. 4)
    //     // 0: request not initialized 
    //     // 1: server connection established
    //     // 2: request received 
    //     // 3: processing request 
    //     // 4: request finished and response is ready
    //     if(this.readyState == 4 && this.status == 200){ // readyState is a property of xhr
    //         // perform your function
    //     }
    // }
    xhr.send();
}