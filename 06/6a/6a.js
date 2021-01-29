function convert(value, f, c) {
    if (c.checked)
        document.getElementById('result').innerHTML = value + 'C = ' + toCelsius(value).toFixed(2) + "F";
    else if (f.checked)
        document.getElementById('result').innerHTML = value + 'F = ' + toFarenheit(value).toFixed(2) + "C";
    else
        document.getElementById('result').innerHTML = 'Choose the type to which you want to convert'
}
function toCelsius(value) {
    return value * 9/5 + 32;
}
function toFarenheit(value) {
    return (value - 32) * 5/9;
}