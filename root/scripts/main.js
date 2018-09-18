const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
let container = document.getElementById('cont1');
let user = document.getElementById('user');
let users = document.getElementById('users');
// Event Listeners
btn1.addEventListener('click', loadText);
btn2.addEventListener('click', loadUser);
// btn3.addEventListener('click', loadUsers);


function loadText() {
    //Create XHR Object
    var xhr = new XMLHttpRequest();
    // OPEN - type, url/text, async
    xhr.open('GET', './root/sample.txt', true);
    console.log('READYSTATE: ', xhr.readyState);


    // optional - used for loaders

    // xhr.onprogress = function () {
    //     console.log('READYSTATE: ', xhr.readyState);
    // }

    xhr.onload = function () {
        console.log('READYSTATE: ', xhr.readyState);
        if (this.status == 200) {
            // console.log(this.responseText);

            container.innerHTML = this.responseText;
        } else
        if (this.status = 404) {
            container.innerHTML = 'not found... :(';
            container.style.color = 'red';
            container.style.fontSize = '2em';
        }
    }

    // xhr.onerror = function () {
    //     console.log('request error...');

    // }

    // xhr.onreadystatechange = function () {
    //     console.log('READYSTATE: ', xhr.readyState);
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(this.responseText);
    //     }
    // }
    // sends request
    xhr.send();
}


function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './root/scripts/user.json', true)

    xhr.onload = function () {
        if (this.status == 200) {
            var user = JSON.parse(this.responseText);
            var output = '';
            output += '<ul>' + '<li>ID: ' + user.id + '</li>' +
                '<li>name: ' + user.name + '</li>' +
                '<li>email: ' + user.email + '</li>' +
                '</ul>';
            document.getElementById('cont2').innerHTML = output;
        }

    }
    xhr.send();
}


// readystate values:
//  0 : request not initialized
//  1: server connection established
//  2: request recieved
//  3: processing request
//  4: request finished and response is ready


//  HTTP REQUESTS:
// 200: "OK"
// 403: 'FORBIDDEN'
// 404: "NO FOUND"