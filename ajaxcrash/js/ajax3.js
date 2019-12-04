document.querySelector("#button").addEventListener("click", loadUsers);

function loadUsers(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users");

    xhr.onload = function(){
        if (this.status == 200){
            let users = JSON.parse(this.responseText);
            let output='';
            for (let i in users){
                output += 
                    '<div class="user">' +
                        `<img src="${users[i].avatar_url}" width=40 height=40` +
                        '<ul>' +
                            `<li>id: ${users[i].id}</li>` + 
                            `<li>Login: ${users[i].login}</li>` +
                        '</ul>' +
                    '</div>'
            }
            document.querySelector('#users').innerHTML = output
        }
    }

    xhr.send();
}