document.querySelector("#button1").addEventListener('click', loadUser);
document.querySelector("#button2").addEventListener('click', loadUsers);

function loadUser(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './otherFiles/user.json', true);

    xhr.onload = function(){
        if (this.status == 200){
            var user = JSON.parse(this.responseText);
            let output = createUserList(user);
            document.querySelector("#user").appendChild(output);
        }
    }
    xhr.send();
}

function loadUsers(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './otherFiles/users.json', true);

    xhr.onload = function(){
        if (this.status == 200){
            var users = JSON.parse(this.responseText);
            for(let i in users){
                let output = createUserList(users[i]);
                document.querySelector("#users").appendChild(output);
            }
        }
    }
    xhr.send();
}

function createUserList(userObject){
    const entries = Object.entries(userObject);
    let output = document.createElement('ul');
    for (let i=0; i<entries.length; i++){
        // add the JSON object as a list item
        let li = document.createElement("li");
        li.innerHTML = `${entries[i][0]}: ${entries[i][1]}`;
        output.appendChild(li);
    }
    return output;
}