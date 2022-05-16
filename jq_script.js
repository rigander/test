$(function() {

    $('.block').slideDown(5000, ()=> console.log('Alright, alright, alright...'));

    $('#get').on('click', function () {
        $.get('http://test.local/request.php?name=andrew&age=34', function (response){
            console.log(response);
            renderTable(response.data);
        });
    })


    $('#post').on('click', function () {
            $.post('http://test.local/request.php', {Jack:"dog", dog:"pet"},
                function (response){
                    console.log(response);
                    renderTable(response.data);
                });
        })

    function renderTable(data){
        let table = '<table><tr><th>Name</th><th>Model</th><th>Year</th><th>Color</th></tr>';
        data.forEach((obj) => {
            table+= '<tr>';
            table+=`<td>${obj.name}</td> 
                <td>${obj.model}</td>
                <td>${obj.year}</td>
                <td>${obj.color}</td>
                <td><button class="carData" data-model="${obj.model}" id="${obj.name}">Car Data</button></td>`;
            table += '</tr>';
        });

        table+='</table>';

        $('.mainContent').html(table);

        $('.carData').click ( function (event) {
            event.preventDefault();
            alert(event.target.id);
            }
        );

    }

})









