// Variables defined
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbol = ["!", "$", "#", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];

// Create empty array to put user input into
let passwordOpt = [];

// Stores all prompts to collect user input
function prompts() {
  let lengthPrompt = prompt("How long would you like your password to be?");

  if ((lengthPrompt <= 7) || (lengthPrompt >= 129)) {
    alert("Please enter a number between 8-128.");

    prompts();

  } else {
    let lowPrompt = confirm("Include lowercase?")
    let uppPrompt = confirm("Include upper case?")//gets all values
    let numPrompt = confirm("Include numbers?")
    let symPrompt = confirm("Include symbols?")

    if (lowPrompt === false &&
        uppPrompt === false &&
        numPrompt === false &&
        symPrompt === false) {
          alert("Must select at least one character type!");

          prompts();
        }
  
    if (lowPrompt) {
      passwordOpt.push(...lowerCase)
    };
  
    if (uppPrompt) {
      passwordOpt.push(...upperCase)
    };
  
    if (numPrompt) { //sends all values into an array
      passwordOpt.push(...num)
    };
  
    if (symPrompt) { 
      passwordOpt.push(...symbol)
    };
    
    generatePassword(lengthPrompt); // call 2

  };

 
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

let password = "";

function generatePassword(length) { //generate random password
  let div = document.querySelector("#password");
  let lengthPrompt = parseInt(length);// the prompt number of password length
  
  for (let i = 0; i < lengthPrompt; i++) { // loops however many times prompt returned (lengthPrompt)
    let randomIndex = Math.floor(Math.random() * passwordOpt.length)
    password += passwordOpt[randomIndex];
  }

  div.innerHTML = password;
};

// Write password to the #password input
//function writePassword() {
//let password = generatePassword();
//let passwordText = document.querySelector("#password"); 

// console.log(password)
// passwordText.value = password; //this links the created password to the page 

//return password;
//};

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);  //add event listener with call back to prompt function(button calls prompt > prompt function calls generatePassword)
generateBtn.addEventListener("click", prompts);  //add event listener with call back to prompt function(button calls prompt > prompt function calls generatePassword)
