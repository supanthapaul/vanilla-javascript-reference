document.getElementById('button').addEventListener('click', loadData);


function loadData() {

    // create an XHR object
    const xhr = new XMLHttpRequest();

    // OPEN
    // method, url, isAsync
    xhr.open('GET', 'data.txt', true);

    console.log(xhr.readyState);

    // OPTIONAL - Used for spinner/loaders
    xhr.onprogress = function () {
        console.log(this.readyState);
    }

    // do whatever we want with the data
    xhr.onload = function () {
        if (this.status === 200) {
            document.querySelector('.result').textContent = this.responseText;
        }
        console.log(this.readyState);
    }

    // error handling
    xhr.onerror = function () {
        console.log("Error occured");
    }

    xhr.send();

    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200 - OK
    // 403 - Forbidden
    // 404 - Not Found
}