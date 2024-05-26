const passwordBox=document.querySelector(".input-box > [purpose='password']");
let pass = document.querySelector("#num");

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!”#$%&'()*+, -./:;<=>?@[]^_`{|}~";

let checkUpperCase = document.querySelector("#Upper");
let checkLowerCase = document.querySelector("#Lower");
let checkNumber = document.querySelector("#Number");
let checkSymbol = document.querySelector("#Symbol");


function createPassword(){
    let password = "";
    let newPassLength = parseInt(pass.value)
    let characterSet = "";

        if(checkUpperCase.checked){
            characterSet += uppercase;
        }
        if(checkLowerCase.checked){
            characterSet += lowercase;
        }
        if(checkNumber.checked){
            characterSet += number;
        }
        if(checkSymbol.checked){
            characterSet += symbol;
        }

        if(characterSet === ""){
            alert("please select any one field in checkbox !!");
            return;
        }
      
        for(let i = 0; i < newPassLength; i++){
            password += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
    passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    passwordBox.value="";
}

document.querySelector(".btn").addEventListener("click",createPassword);