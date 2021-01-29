function check(num, email) {
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]+/;
    if (isNaN(Number(num)) || num === '') {
        document.getElementById('num-box').style.background = "#ffc2c2";
        document.getElementById('result').innerHTML = "Invalid number";
        return false;
    }
    else{
      document.getElementById('num-box').style.background = "#ffffff";
    }
    if (!emailRegex.test(email)) {
        document.getElementById('email-box').style.background = "#ffc2c2";
        document.getElementById('result').innerHTML = "Invalid email";
        return false;
    }
    else{
      document.getElementById('email-box').style.background = "#ffffff";
    }
    return true;
}