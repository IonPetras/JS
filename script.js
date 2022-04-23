let charSelector = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let generatedPassword = "";
let passwordlenght = 12;

function passwordGenerator(passwordlenght){
    for(let i = 0; i <= passwordlenght; i++){
        var randomChar = Math.floor(Math.random() * charSelector.length);
        
        generatedPassword =+ randomChar;
    }
    return generatedPassword;
}
passwordGenerator();