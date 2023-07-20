const uppercaseset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "0123456789";
const symbolset = "~!@#$%^&*()_/";

const passwordBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols")

const getRandomData = (e) => {

    return e[Math.floor(Math.random() * e.length)]

};



const getRandomPassword = (password = "") => {

    if (upperCase.checked) {
        password += getRandomData(uppercaseset)
    }

    if (lowerCase.checked) {
        password += getRandomData(lowercaseset)
    }
    if (numberInput.checked) {
        password += getRandomData(numberset)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolset)
    }

    if (password.length < totalChar.value){
       return getRandomPassword(password)
    }

    passwordBox.innerHTML=  password.slice(0, totalChar.value)

};

getRandomPassword();

document.getElementById("btn").addEventListener(
    "click",
    function () {
        getRandomPassword();
    }
)
