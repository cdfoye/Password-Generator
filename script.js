// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // character arrays for all possible characters available to be used to create a new password
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // empty array for placeholder and calculations
  var emptyArray = [];

  //another empty array that will serve as the final array containing the password
  var passwordArray = [];

  // Prompts and confirmations collecting user input and data
  var length = prompt("Choose the length of the password between 8 and 128 characters.");
  var lowerConfirm = confirm("Would you like to use lowercase letters?");
  var upperConfirm = confirm("Would you like to use uppercase letters?");
  var numConfirm = confirm("Would you like to use numbers?");
  var specialConfirm = confirm("Would you like to use special characters?");

  // Confirms the users choices. If they do not confirm, then the prompts start over
  var validate = confirm("Your choices:\n\n" + "Length: " + length + "\n" + "Lowercase letters: " + lowerConfirm + "\n" + "Uppercase letters: " + upperConfirm + "\n" + "Numbers: " + numConfirm + "\n" + "Special characters: " + specialConfirm + "\n" + "\n" + "Is this correct?");

  // Conditional statements alerting the user if they have either invalidated their choices, or entered an incorrect length or did not make any selections
  if (validate === false) {
    alert("Please click the button to start over.");
    return;
  }

  if (length < 8 || length > 128 || (lowerConfirm === false && upperConfirm === false && numConfirm === false && specialConfirm === false)) {
    alert("Please enter valid settings. Click the button to start over.");
    return;
  }

  // Conditional statemets that add the character arrays into the empty array based on the user's settings. "concat()" joins two or more arrays
  // In this case, if each condition is true, then each of the character arrays will be combined with the empty array, potentially creating an array with a length of 70
  if (validate && lowerConfirm) {
    emptyArray = emptyArray.concat(lowerCase);
  }

  if (validate && upperConfirm) {
    emptyArray = emptyArray.concat(upperCase);
  }

  if (validate && specialConfirm) {
    emptyArray = emptyArray.concat(special);
  }

  if (validate && numConfirm) {
    emptyArray = emptyArray.concat(numbers);
  }

  // "push()" adds items to an array. In this case, random values are taken from the empty array, which contains all of the characters selected by the user, and are added into the password array.
  // Items are added one at a time at random until the length of the array reaches the length specified by the user
  for (var i = 0; i < length; i++) {
    passwordArray.push(emptyArray[Math.floor(Math.random()*emptyArray.length)]);
  }

  // "join()" returns the array as a string. The quotes specificy the separtor, which is no separator"
  return passwordArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
