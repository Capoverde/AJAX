// ZMIENNE GLOBALNE
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btnGH = document.getElementById('btn4');
const btn4 = document.getElementById('btn5');
const btn5 = document.getElementById('btn3');
const btnClear = document.getElementById('clear');
const btnClear2 = document.getElementById('clear2');
let container1 = document.getElementById('cont1');
let container2 = document.getElementById('cont2');
let container3 = document.getElementById('cont3');
let user = document.getElementById('user');
let users = document.getElementById('users');

// Event Listeners
// btn1.addEventListener('click', loadText);
// btn2.addEventListener('click', loadUser);
// btn3.addEventListener('click', loadUsers);
btnGH.addEventListener('click', loadGHusers);
btnClear.addEventListener('click', clearContnent);
// btnClear2.addEventListener('click', clearContent3);


// function loadText() {
//     //Create XHR Object
//     var xhr = new XMLHttpRequest();
//     // OPEN - type, url/text, async
//     xhr.open('GET', './root/sample.txt', true);
//     console.log('READYSTATE: ', xhr.readyState);


//     // optional - used for loaders

//     // xhr.onprogress = function () {
//     //     console.log('READYSTATE: ', xhr.readyState);
//     // }

//     xhr.onload = function () {
//         console.log('READYSTATE: ', xhr.readyState);
//         if (this.status == 200) {
//             // console.log(this.responseText);

//             container1.innerHTML = this.responseText;
//         } else
//         if (this.status = 404) {
//             container.innerHTML = 'not found... :(';
//             container.style.color = 'red';
//             container.style.fontSize = '2em';
//         }
//     }

//     // xhr.onerror = function () {
//     //     console.log('request error...');

//     // }

//     // xhr.onreadystatechange = function () {
//     //     console.log('READYSTATE: ', xhr.readyState);
//     //     if (this.readyState == 4 && this.status == 200) {
//     //         console.log(this.responseText);
//     //     }
//     // }
//     // sends request
//     xhr.send();
// }


// function loadUser() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', './root/scripts/user.json', true)

//     xhr.onload = function () {
//         if (this.status == 200) {
//             var user = JSON.parse(this.responseText);
//             var output = '';
//             output += '<ul>' + '<li>ID: ' + user.id + '</li>' +
//                 '<li>name: ' + user.name + '</li>' +
//                 '<li>email: ' + user.email + '</li>' +
//                 '</ul>';
//             document.getElementById('cont2').innerHTML = output;
//         }

//     }
//     xhr.send();
// }


// function loadUsers() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', './root/scripts/users.json', true);

//     xhr.onload = function () {
//         if (this.status == 200) {
//             var users = JSON.parse(this.responseText);
//             var output = '';
//             // Ponieaż jest to tablica, to musimy zrobić pętlę i iterować
//             for (var i in users) {
//                 output += '<ul>' +
//                     '<li>ID: ' + users[i].id + '</li>' +
//                     '<li>name: ' + users[i].name + '</li>' +
//                     '<li>email: ' + users[i].mail + '</li>' + '<br>' +
//                     '</ul>';
//             }
//             document.getElementById('cont2').innerHTML = output;
//         }

//     }
//     xhr.send();
// }

// Clears content in contaier 

function clearContnent(e) {
    e.preventDefault();
    container2.innerHTML = '';
}

function clearContnent(e) {
    e.preventDefault();
    container3.innerHTML = '';
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


//  ----------------- EXTERNAL API ------------------ //



function loadGHusers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);
    xhr.onload = function () {
        if (this.status == 200) {
            var users = JSON.parse(this.responseText);

            var output = '';
            for (var i in users) {
                output +=
                    '<div class ="GHusers">' +
                    '<img src="' +
                    users[i].avatar_url + '" width="70" height="70">' +
                    '<ul>' +
                    '<li>ID: ' + users[i].id + '</li>' +
                    '<li>ID: ' + users[i].login + '</li>' +
                    '</ul>' +
                    '</div>';
            }
            document.getElementById('cont3').innerHTML = output;
        }
    }

    xhr.send();
}