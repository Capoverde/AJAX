const btn1 = document.getElementById('btn1');
let container = document.getElementById('cont1');

btn1.addEventListener('click', loadText);

function loadText() {
    //Create XHR Object
    var xhr = new XMLHttpRequest();
    // OPEN - type, url/text, async
    xhr.open('GET', './root/sample2.txt', true);
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