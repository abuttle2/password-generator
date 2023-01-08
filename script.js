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

  const minPwLength = 10;
  const maxPwLength = 64;
  var isValidInput = false;

  function getCharLength() {
    let totalChars = prompt("How many characters for the password length?");

    if (totalChars >= minPwLength && totalChars <= maxPwLength) {
      return totalChars;
    }
    else {
      //Alert user and call the function to enter input again
      alert("Please enter a character within the limit " + minPwLength + "-" + maxPwLength + " (inclusive)!")
      return getCharLength();
    }
  }

  function getNumConf() {
    let numPrompt = confirm("Would you like to include numbers?");
    return numPrompt;
  }

  function specialCharConf() {
    let charConfirm = confirm("Would you like special characters?");
    return charConfirm;
  }

  function uppercaseConf() {
    let uppercaseConfirm = confirm("Would you like to include uppercase characters?")
    return uppercaseConfirm;
  }
  function lowercaseConf() {
    let lowercaseConfirm = confirm("Would you like to include lowercase characters?")
    return lowercaseConfirm;
  }

  //Call each prompt/confirm option and return input
  let totalChars = getCharLength();
  let hasNums = getNumConf();
  let hasSpecialChars = specialCharConf();
  let isUppercase = uppercaseConf();
  let isLowercase = lowercaseConf();

  if (!hasNums && !hasSpecialChars && !isUppercase && !isLowercase) {
    alert("Please enter at least one character type!")
  }

  return {
    totalChars,
    hasNums,
    hasSpecialChars,
    isUppercase,
    isLowercase,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  const rand = Math.floor(Math.random() * arr.length)
  return rand;
}

// Function to generate password with user input
function generatePassword() {
  //Calls the parent function to execute all prompt/confirm functions when button is clicked.
  let options = getPasswordOptions();
  let combinedArray = [];
  let outputStr = '';
  var isStringValid = options.hasNums || options.hasSpecialChars || options.isLowercase || options.isUppercase;

  if (options.hasNums) {
    combinedArray = combinedArray.concat(numericCharacters);
  }
  if (options.hasSpecialChars) {
    combinedArray = combinedArray.concat(specialCharacters);
  }
  if (options.isUppercase) {
    combinedArray = combinedArray.concat(upperCasedCharacters);
  }
  if (options.isLowercase) {
    combinedArray = combinedArray.concat(lowerCasedCharacters);
  }
  if (!isStringValid) {
    return outputStr = 'Error';
  }
  //Need to loop for the amount of characters returned from user input
  for (var i = 0; i < options.totalChars; i++) {
    // Get a random index of the array we pass in and call for each for-loop iteration
    var filteredResult = combinedArray[getRandom(combinedArray)];
    outputStr += filteredResult;
  }
  console.log(outputStr);
  return outputStr;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  //Gets the returned output from the generated password
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);