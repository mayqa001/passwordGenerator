// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthOfPassword;
var isUpcase = false, isLowerCase = false, isNumeric = false, isSpecicalChar = false;
var functions = [];

function LengthInput() {
  //prompt return a string type data
  lengthOfPassword = prompt("Length of password");
  //parsInt give a int value data
  lengthOfPassword = parseInt(lengthOfPassword);
  console.log(lengthOfPassword);
  //check all conditions
  while (isNaN(lengthOfPassword) === true || lengthOfPassword < 8 || lengthOfPassword > 128) {
    alert("input has to be number and can't less than 8 or more than 128");
    lengthOfPassword = prompt("Length of password");
  }
}

function passwordRequirement() {
  //check user choice
  while (isUpcase === false && isLowerCase == false && isNumeric == false && isSpecicalChar === false) {
    isUpcase = confirm("do you want include upcase in password");
    isLowerCase = confirm("do you want include lowercase in password");
    isNumeric = confirm("do you want include numbers in password");
    isSpecicalChar = confirm("do you want include special characters in password");
  }
}

function randomUpperCase() {
  //Basic Latin up case start at 65 and end at 90
  var upCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

  return upCase;
}

function randomLowerCase() {
  //Basic Latin lower case start at 97 and end at 123
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomNumber() {
  return Math.floor(Math.random() * 100);
}

function randSpecialChar() {
  var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

//if condtion equal true than add radom fucntion to array
function checkUserRequirement() {
  if (isUpcase === true) {
    functions.push(randomUpperCase);
  } if (isLowerCase === true) {
    functions.push(randomLowerCase);
  } if (isSpecicalChar === true) {
    functions.push(randSpecialChar);
  } if (isNumeric === true) {
    functions.push(randomNumber);
  }
}

function randomIndex() {
  return Math.floor(Math.random() * functions.length);
}

function resetUserRequirement(){
  isUpcase = false;
  isLowerCase = false;
  isNumeric = false;
  isSpecicalChar = false;

}

function generatePassword() {
  LengthInput();
  passwordRequirement();
  checkUserRequirement();
  console.log("function array length:" + functions.length);

  var password = [];
  console.log("length: " + lengthOfPassword.length);
  for (var i = 0; i < lengthOfPassword; i++) {
    var index = randomIndex();
    //run funtion with ()
    var temp = functions[index]();
    password.push(temp);
  }

  return password.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  resetUserRequirement();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
