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

var generateBtn = document.querySelector("#generate");

var charlowercase = "abcdefghijklmnopqrstuvwxyz";
var charuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charnumeric = "0123456789";
var charspecial = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  var password = "";
  var passwordLength = "";
  var passwordCharacters = "";

function generatePassword() {


  var passwordLength = prompt('Choose password length between 8 - 128 characters');
  passwordLength = parseInt(passwordLength);

  var charLowercaseconfirm = confirm('Include Lowercase?');
  if (charLowercaseconfirm) {
    passwordCharacters += charlowercase;
  }

  var charUppercase = confirm('Include Uppercase?');
  if (charUppercase) {
    passwordCharacters += charuppercase;
  }

  var charNumber = confirm('Include Numbers?');
  if (charNumber) {
    passwordCharacters += charnumeric;
  }

  var charSpecial = confirm('Include Special Characters?');
  if (charSpecial) {
    passwordCharacters += charspecial;
  }

  console.log(passwordCharacters)

  for (var i = 0; i < passwordLength; i++) {
    password = password + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]

  }
  console.log(password) 
  return password;
}
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);



// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page