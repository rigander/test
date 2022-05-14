const ajaxGet = document.querySelector("#get");
const ajaxPost = document.querySelector("#post");

ajaxGet.addEventListener('click', sendRequestGET);
ajaxPost.addEventListener('click', sendRequestPOST);

function renderTable(data){
    let table = '<table class="dataS">';
    table += '<tr><th>Name</th><th>Model</th><th>Year</th><th>Color</th></tr>';

    data.forEach((obj) => {
        table+= '<tr>';
        table+=`<td>${obj.name}</td> 
                <td>${obj.model}</td>
                <td>${obj.year}</td>
                <td>${obj.color}</td>`;
        table += '</tr>';
    });
    table+='</table>';

    document.querySelector('.mainContent').innerHTML = table;
}

function sendRequestGET(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://test.local/request.php?name=andrew&age=34', true);

    xhr.onreadystatechange = function() {//Вызывает функцию при смене состояния.
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            renderTable(JSON.parse(this.response).data);
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
            renderTable(JSON.parse(this.response).data);
        }
    }
    xhr.send("Jack=dog&dog=pet");
}