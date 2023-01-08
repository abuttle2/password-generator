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

// passwordCriteria = {
//   specialCharacters: specialCharacters,
//   numericCharacters: numericCharacters,
//   lowerCasedCharacters: lowerCasedCharacters,
//   upperCasedCharacters: upperCasedCharacters
// };

// Function to prompt user for password options
function getPasswordOptions() {

  function getCharLength() {
    let totalChars = prompt("How many characters for the password length?");
    const minPwLength = 10;
    const maxPwLength = 64;

    if (totalChars >= minPwLength && totalChars <= maxPwLength) {
      return totalChars;
    }
    else {
      //Alert user and call the function to enter input again
      alert("Please enter a character within the limit 10-64 (inclusive)!")
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
  let passwordOptions = getPasswordOptions();
  let combinedArray = [];
  let outputStr = '';

  if (passwordOptions.hasNums) {
    combinedArray += [...numericCharacters].join('');
  }
  if (passwordOptions.hasSpecialChars) {
    combinedArray += [...specialCharacters].join('');
  }
  if (passwordOptions.isUppercase) {
    combinedArray += [...upperCasedCharacters].join('');
  }
  if (passwordOptions.isLowercase) {
    combinedArray += [...lowerCasedCharacters].join('');
  }

  //Need to loop for the amount of characters returned from user input
  for (var i = 0; i < passwordOptions.totalChars; i++) {
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



//1. Prompt the user when the button is clicked
//  i. Length must be between 10 and 64 (inclusive)
//2. Confirm for if they would like numbers
//3. Confirm for if they would like uppercase letters
//4. Confirm for if they would like special characters
//5. Validate the input
//6. Display the final generated password