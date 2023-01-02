// Assignment Code

/* 
var generateBtn = document.querySelector("#generate");

Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/

// var generateBtn = document.querySelector("#generate");

var Charset = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt('Choose password length between 8 - 128 characters')

  for (var i = 0; i < passwordLength; i++) {
    password = Charset[Math.floor(math.random() * Charset)]

  }


  passwordText.value = password;

  generateBtn.addEventListener("click", writePassword);

}
