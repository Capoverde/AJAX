const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', loadText);

function loadText() {
    //Create XHR Object
    var xhr = new XMLHttpRequest();
    // OPEN - type, url/text, async
    xhr.open('GET', './root/sample.txt', true);

    xhr.onload = function () {
        if (this.status == 200) {
            console.log(this.responseText);

        }
    }
    // sends request
    xhr.send();




}