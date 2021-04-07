var capitalAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var specialCharacters, togglerStatus;

function switched(toggler) {
    if (toggler.target.checked == true) {
        document.getElementById("special-characters").disabled = false
        togglerStatus = true
    } else {
        document.getElementById("special-characters").disabled = true
        togglerStatus = false
    }
}
var passwordArray = [],
    password;

function generate() {

    passwordArray = []
    password = ""
    var numbersStatus = document.getElementById("numbers-check-box").checked
    var lettersStatus = document.getElementById("letters-check-box").checked

    if (document.getElementById("flexSwitchCheckDefault").checked == true) {
        specialCharacters = document.getElementById("special-characters").value.split("");
    }

    if (numbersStatus == true && lettersStatus == true) {
        while (passwordArray.length < document.getElementById("characters-number").value) {
            passwordArray.push(capitalAlphabet[Math.floor(Math.random() * capitalAlphabet.length)])
            if (togglerStatus == true && specialCharacters != "") {
                passwordArray.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)])
            }
            passwordArray.push(lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)])
            passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)])
        }

        passwordArray.forEach((element) => {
            password += element
        })

        document.getElementById("result").hidden = false

        document.getElementById("result").innerHTML = password
    } else if (numbersStatus == true && lettersStatus == false) {
        while (passwordArray.length < document.getElementById("characters-number").value) {
            if (togglerStatus == true && specialCharacters != "") {
                passwordArray.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)])
            }
            passwordArray.push(numbers[Math.floor(Math.random() * numbers.length)])
        }

        passwordArray.forEach((element) => {
            password += element
        })
        document.getElementById("result").hidden = false
        document.getElementById("result").innerHTML = password

    } else if (numbersStatus == false && lettersStatus == true) {
        while (passwordArray.length < document.getElementById("characters-number").value) {
            passwordArray.push(capitalAlphabet[Math.floor(Math.random() * capitalAlphabet.length)])
            if (togglerStatus == true && specialCharacters != "") {
                passwordArray.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)])
            }
            passwordArray.push(lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)])
        }

        passwordArray.forEach((element) => {
            password += element
        })
        document.getElementById("result").hidden = false
        document.getElementById("result").innerHTML = password
    } else if (numbersStatus == false && lettersStatus == false) {
        document.getElementById("result").hidden = false
        document.getElementById("result").innerHTML = "select at least one option to generate a password ( letters, number or both of them )"
    }

}


document.getElementById("result").addEventListener("click", function() {
    if (document.getElementById("result").innerHTML) {
        var r = document.createRange();
        r.selectNode(document.getElementById("result"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert("copied")
    } else {
        alert("generate a password to copy it.")
    }


})

function generatePassword() {

}