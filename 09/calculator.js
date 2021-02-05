calculate = function() {
    let x = document.getElementById('x').value;
    let y = document.getElementById('y').value;
    let operation = document.getElementById('operations').value;
    let req = new XMLHttpRequest();

    req.open('POST', 'http://localhost:3000/calculate');
    req.responseType = 'json';
    req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    req.send(JSON.stringify({
        'x': x,
        'y': y,
        'operation': operation
    }));

    req.onload = function() {
        if (req.status !== 200)
            console.error('Access denied!');
        else{
            if (req.response === null)
                document.getElementById('result').innerText = 'Error!';
            else
                document.getElementById('result').innerText = req.response.result;
        }
    }
}
