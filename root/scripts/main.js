const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', loadText);

function loadText() {
    //Create XHR Object
    var xhr = new XMLHttpRequest();
    // OPEN - type, url/text, async
    xhr.open('GET', './root/sample.txt', true);

    // xhr.onload = function () {
    //     if (this.status == 200) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }
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