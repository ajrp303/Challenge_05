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

PassArray = [];

randomArray = [];

var passlength = prompt('Please enter the password length between 10 and 60 characters'); {
  while (passlength < 10 || passlength > 60) {
  alert('Wrong Input');
  var passlength = prompt('Please enter the password length between 10 and 60 characters');
}}

var specialCharBool = confirm('Do you want special characters?');
  if (specialCharBool === true) {
    PassArray.push([specialCharacters]);
  }

console.log(specialCharBool);

var numberBool = confirm('Do you want numerical characters?');
  if (numberBool === true) {
    PassArray.push([numericCharacters]);
  }

console.log(numberBool);

var lowerCaseBool = confirm('Do you want lower case characters?');
  if (lowerCaseBool === true) {
    PassArray.push([lowerCasedCharacters]);
  }

console.log(lowerCaseBool);

var upperCaseBool = confirm('Do you want upper case characters?');
  if (upperCaseBool === true) {
    PassArray.push([upperCasedCharacters]);
}

console.log(upperCaseBool);

console.log(PassArray);

for (i = 0; i < passlength; i++) {
  randomArray.push(PassArray[Math.floor(Math.random()*PassArray.length)]);
}

console.log(PassArray);
console.log(randomArray);

var generatedPass = '';

for (let i = 0; i < randomArray.length; i++) {
    var maxLength = Math.floor(Math.random()*randomArray[i][0].length);
    var random = Math.floor(Math.random()*maxLength);
    pString = randomArray[i][0][random].toString();
    generatedPass += pString;

}
console.log(generatedPass)


// Function to prompt user for password options
function getPasswordOptions() {

}


// Function for getting a random element from an array
function getRandom(arr) { 
  
}

// Function to generate password with user input
function generatePassword() {
  // Ask and create variable here
return generatedPass
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  console.log(password);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

