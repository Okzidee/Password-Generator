// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+";

  var passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");
  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  }
}

var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("You must select at least one character type to include in the password.");
    return "";
  }

    var characters = "";
    if (includeLowercase) {
      characters += lowercaseChars;
    }
    if (includeUppercase) {
      characters += uppercaseChars;
    }
    if (includeNumeric) {
      characters += numericChars;
    }
    if (includeSpecial) {
      characters += specialChars;
    }
  

    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
