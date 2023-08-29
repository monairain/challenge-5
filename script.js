// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  //variable to store length of pw from user input
  let length = parseInt(
    prompt("How many characters would you like your password to contain?")
  )

  // Check if password length is valid
  if (isNaN(length) || length < 10 || length >= 64) {
    alert("Password length must be between 10 and 63 characters.");
    return;
  }

// Ask user about character types to include
let hasSpecialCharacters = confirm(
  "Include special characters"
)

let hasNumericCharacters = confirm(
  "Include numeric characters"
)

let hasLowerCasedCharacters = confirm(
  "Include lowercase characters"
)

let hasUpperCasedCharacters = confirm(
  "Include uppercase characters"
)

// Check if at least one character type is selected
if (hasLowerCasedCharacters === false &&
   hasUpperCasedCharacters === false &&
   hasSpecialCharacters === false &&
   hasNumericCharacters === false) {
     alert(`Must select at least one character type`);
     return;
  }

// Create options object
let passwordOptions = {
  length: length,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters
}

return passwordOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  // Get user's password options
  let options = getPasswordOptions();
  console.log(options);
  
  // Initialize variables
  let result = []
  let possibleCharacter = []
  let guaranteedCharacter = []

  // Concatenate character arrays based on user's options
  if (options.hasSpecialCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters))
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
    guaranteedCharacter.push(getRandom(lowerCasedCharacters))
  }

  if (options.hasUpperCasedCharacters) {
    possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
    guaranteedCharacter.push(getRandom(upperCasedCharacters))
  }

  if (options.hasNumericCharacters) {
    possibleCharacter = possibleCharacter.concat(numericCharacters);
    guaranteedCharacter.push(getRandom(numericCharacters))
  }

  console.log(possibleCharacter);
  
  // Generate the password
  for(let index = 0; index < options.length; index++){
  var generated = getRandom(possibleCharacter);
  console.log(generated);
  result.push(generated);
  }

console.log(result);

return result.join("")
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);