
var generateBtn = document.querySelector("#generate");

// Characters available to password
var charlowercase = "abcdefghijklmnopqrstuvwxyz";
var charuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charnumeric = "0123456789";
var charspecial = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

// Writable variables
  var password = "";
  var passwordLength = "";
  var passwordCharacters = "";

  // This function collects characters into 'passwordCharaters'
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

  // for loop producing length of password
  for (var i = 0; i < passwordLength; i++) {
    password = password + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]

  }
  console.log(password) 
  return password;

}
// function to show password
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
return passwordText
}
generateBtn.addEventListener("click", writePassword);
