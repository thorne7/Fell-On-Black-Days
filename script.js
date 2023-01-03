
var generateBtn = document.querySelector("#generate");

// Characters available to password
var charlowercase = "abcdefghijklmnopqrstuvwxyz";
var charuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charnumeric = "0123456789";
var charspecial = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

// Writable variables


  // Prompt for password criteria and generate a password'
function generatePassword() {
  
  var password = "";
  var passwordLength = "";
  var passwordCharacters = "";
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

  // Loop for length of password, adding a random character to the new password from the character set each time
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
