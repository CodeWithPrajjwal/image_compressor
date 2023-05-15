Array.prototype.random = function (length) {
    return this[Math.floor((Math.random()*length))];
}

var characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*'/*'(',')','_','-','+','=','[','{',']','}',';',':',`'`,'~','"',',','<','.','>','/','?','|'*/]

let string = "";

function stringzero(){
    string = "";
}

function addX(){
    value_input = document.getElementById('input').value;
    console.log(value_input);

    while (value_input--) {
        var chosen_character = characters.random(characters.length);
        string  = string + chosen_character;
    }

    password.innerHTML = string;

    stringzero();
}

function reload(){
    location.href = "http://127.0.0.1:5500/";
}


