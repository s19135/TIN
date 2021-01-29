function add() {
    let table = document.getElementById('pw-table');
    let prevNum = table.rows[table.rows.length - 1].cells[0].innerHTML;
    let lastRow = table.insertRow(table.rows.length);
    let firstCell = lastRow.insertCell(0);
    let secondCell = lastRow.insertCell(1);
    firstCell.innerHTML = '' + (Number(prevNum) + 1);
    secondCell.innerHTML = power(Number(prevNum) + 1);
}
function power(i) {
    return Math.pow(2, i);
}