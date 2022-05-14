const ajaxGet = document.querySelector("#get");
const ajaxPost = document.querySelector("#post");

let myArrayData = null;

ajaxGet.addEventListener('click', eventsGet);
ajaxPost.addEventListener('click', eventsPost);

function eventsGet() {
    sendRequestGET();
    setTimeout(createTable, 50);
}
function eventsPost() {
    sendRequestPOST();
    setTimeout(createTable, 50);
}
function createTable () {
    document.querySelector('.mainContent').innerHTML = `<table class="dataS"></table>`;
    let row = document.createElement('tr')
    row.innerHTML = `<td colspan="4">${'data - Pimp My Ride'}</td>`
    document.querySelector('.dataS').appendChild(row)

    for(let i=0; i<myArrayData['data'].length; i++) {
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${myArrayData.data[i].name}</td> 
        <td>${myArrayData.data[i].model}</td>
        <td>${myArrayData.data[i].year}</td>
        <td>${myArrayData.data[i].color}</td>       
        `
        document.querySelector('.dataS').appendChild(row)
    }
}

function sendRequestGET(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://test.local/request.php?name=andrew&age=34', true);

    xhr.onreadystatechange = function() {//Вызывает функцию при смене состояния.
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
           myArrayData = JSON.parse(this.response);
        }

    }
    xhr.send();
}


function sendRequestPOST(){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://test.local/request.php', true);

    //Передаёт правильный заголовок в запросе
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {//Вызывает функцию при смене состояния.
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            myArrayData = JSON.parse(this.response);
        }
    }
    xhr.send("Jack=dog&dog=pet");
}
