
var generateBtn = document.querySelector("#generate");

// Characters available to password
var charlowercase = "abcdefghijklmnopqrstuvwxyz";
var charuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charnumeric = "0123456789";
var charspecial = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

// Prompt for password criteria and generate a password'
function generatePassword() {
  var password = "";
  
  var passwordLength = promptLength();
  var passwordCharacters = promptCharacters();

  console.log(passwordCharacters)

  // Loop for length of password, adding a random character to the new password from the character set each time
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]

  }

  console.log(password) 
  return password;
}

function promptLength () {
  while (true) {
    var response = prompt('Choose password length between 8 - 128 characters');
    var length = parseInt(response);

    if (length >= 8 && length <= 128) {
      return length
    } else {
      alert('Password not between 8 - 128 character. Please try again...')
    }
  }
}

function promptCharacters () {
  while (true) {
    var passwordCharacters = "";

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

    if (passwordCharacters.length > 0) {
      return passwordCharacters
    } else {
      alert('You must select at least one character type. Please try again...')
    }
  }
}

// function to show password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);