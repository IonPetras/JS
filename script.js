let charSelector = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let generatedPassword = "";

function passwordGenerator(passwordlenght){
    for(let i = 0; i <= passwordlenght; i++){
        generatedPassword += charSelector.charAt(Math.floor(Math.random() * charSelector.length));
    }
    return generatedPassword;
}
console.log(passwordGenerator(12));