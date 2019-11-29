function generateCat(){
    var image = document.createElement('img');
    var catContainer = document.getElementById("cat-container");
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small"
    image.classList.add("img-cat")
    catContainer.appendChild(image);
}

function removeCat(){
    var catContainer = document.getElementById("cat-container");
    // if (catContainer.childElementCount > 0) {
    if (catContainer.lastChild) {
        // catContainer.removeChild(catContainer.lastChild);
        catContainer.lastChild.classList.add("img-cat-remove");
        setTimeout(function(){
            catContainer.removeChild(catContainer.lastChild);
        }, 2000);
        
    }
}


function removeAllCats(){
    var catContainer = document.getElementById("cat-container");
    // another way for removal, no clear way to remove all children
    // you cannot use a while loop with the setTimeout - 
    // set timeout is an async function -> it fill be executed out of Scope then, the while loop enters again and again the async fn on the same object
    // it gets crazy and freezes the browser
    for(i = 0; i < catContainer.childElementCount; i++){
        catContainer.childNodes[i].classList.add("img-cat-remove")
        setTimeout(function(){
            catContainer.remove(catContainer.childNodes[i]);
        }, 2000);
    }
    // while (catContainer.lastChild) {
    //     catContainer.lastChild.classList.add("img-cat-remove");
    //     setTimeout(function(){
    //         catContainer.removeChild(catContainer.lastChild);
    //     }, 2000);
    // }
}


