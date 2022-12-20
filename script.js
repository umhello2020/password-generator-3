let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbol = ["!", "$", "#", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"]

let passwordOpt = []

function prompts() {
  let lengthPrompt = prompt("How long would you like your password to be?")
  let lowPrompt = prompt("Do you wish to include lowercase?").toLowerCase()
  let uppPrompt = prompt("Do you wish to include upper case?").toLowerCase()
  let numPrompt = prompt("Do you wish to include numbers?").toLowerCase()
  let symPrompt = prompt("Do you wish to include symbols?").toLowerCase()

  if((lengthPrompt <= 7) || (lengthPrompt >= 129)) {
    alert("Please enter a number between 8-128.")
  }

  if(lowPrompt === "yes") {
    passwordOpt.push(...lowerCase)
  }
  
  if(uppPrompt === "yes") {
    passwordOpt.push(...upperCase)
  }

  if(numPrompt === "yes") {
    passwordOpt.push(...num)
  }
  if(symPrompt === "yes") {
    passwordOpt.push (...symbol)
  }

}

// create option arrays
// create prompts, save to variables
// create empty option array
// send available option to array (need conditional logic)
// look spread/rest operator

// Assignment Code
var generateBtn = document.querySelector("#generate");

let password = ""
function generatePassword(length) {
  // console.log("HEY! YOU CLICKED THE BUTTON!");
  let div = document.querySelector("#header")

  let lengthPrompt = parseInt(length)

  // for (let i = 0; o < lengthPrompt = Math.floor(Math.random())) 

  // 1. Prompt the user for the password criteria
  //    a. Password length 8 < 128
  //    b. Lowercase, uppercase, numbers, special characters
  // 2. Validate the input. (Ensure that at least one character type is being met)
  // 3. Generate password based on criteria.


  // 4. Display password to the page.
  return "Generated password will go here!"; //generated password will be linked here 
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password"); 

  passwordText.value = password; //this links the created password to the page 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
