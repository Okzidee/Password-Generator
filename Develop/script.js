// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to generate the password based on user criteria
function generatePassword() {
  // Define character sets for different criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+";

  // Prompt for password length and validate it
  var passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");
  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return ""; // Return an empty string to exit the function
  }

  // Prompt for character types to include
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("You must select at least one character type to include in the password.");
    return ""; // Return an empty string to exit the function
  }

  // Build the character set based on selected criteria
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

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
