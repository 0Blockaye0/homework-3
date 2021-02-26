/////// DECLARE VARIABLES //////
var password = [""]
var length
var passwordArray
// Assignment Code
var generateBtn = document.querySelector("#generate");
// options arrays
var uppercaseLettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseLettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharactersArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@'];
// options object
var options = {
    uppercase: "",
    special: "",
    numeric: ""
};

/////// DECLARE FUNCTIONS /////////
// returns options
function passwordOptions() {
    var optionQuestion = window.confirm("Would you like uppercase, numeric, and or special characters in your password? select 'ok' for yes or 'cancel' for no.")
    if (optionQuestion === true) {
        options.uppercase = (window.confirm("Would you like your password to include uppercase characters?")),
        options.special = (window.confirm("Would you like your password to include special characters?")),
        options.numeric = (window.confirm("Would you like your password to include numeric characters?"))
    }
    console.log(options)
    return options
};

// returns length
function passwordLength() {
    length = window.prompt("Please enter the length of your password in a numeric value 8-128 characters.");
    if (length < 8 || length > 128) {
        alert("Please enter a valid response.");
        passwordLength();
    } else {
        console.log(length)
        return length;
    }
};

// returns passwordArray
function getPasswordArray() {
    if (options.uppercase === true) {
        lowercaseLettersArray.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
    } if (options.special === true) {
        lowercaseLettersArray.push('!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@')
    } if (options.numeric === true) {
        lowercaseLettersArray.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9','0', '1', '2', '3', '4', '5', '6', '7', '8', '9')
    } 
     passwordArray = lowercaseLettersArray;
     
     console.log(passwordArray);
     return passwordArray;
};

function generatePassword() {
    debugger;
    for (var i = 0; i < length; i++) {
       var x = passwordArray[Math.floor(Math.random() * passwordArray.length)];
       password = password + x;
       }
       var verificationArray = Array.from(password);
       console.log(verificationArray);
       var validateArray = []
    ///////////
    if (options.special === true) {
        validateArray.push(verificationArray.includes('!' , '#' , '$' , '%' , '&' , '(' , ')' , '*' , '+' , '-' , '.' , '/' , ':' , ';' , '<' , '=' , '>' , '?' , '@'));
    } else validateArray.push(true);
    if (options.numeric === true) {
        validateArray.push(verificationArray.includes('0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9'));
    } else validateArray.push(true);
    if (options.uppercase === true) {
        validateArray.push(verificationArray.includes('A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z'));
    } else validateArray.push(true);

    if (validateArray === [true, true, true]) {
     var confirmPW = window.confirm(password + " is your password. would you like a different password?") 
        if (confirmPW) {
            password = "";
            generatePassword();
        }
        } else { 
            window.alert("Select ok to start over.")
            password = ""
            start();
        }
};
   
function start() {
passwordLength();
passwordOptions();
getPasswordArray();
generatePassword();
//debugger;
};

///////// CALL START FUNCTION /////////
start()


////////////////////////////////////////////////

/*var validateArray = [] 
        debugger;
        if (options.special === true) {
            validateArray.push(password.includes('!' || '#' || '$' || '%' || '&' || '(' || ')' || '*' || '+' || '-' || '.' || '/' || ':' || ';' || '<' || '=' || '>' || '?' || '@'));
        } else validateArray.push(true);
        if (options.numeric === true) {
            validateArray.push(password.includes('0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9'));
        } else validateArray.push(true);
        if (options.uppercase === true) {
            validateArray.push(password.includes('A' || 'B' || 'C' || 'D' || 'E' || 'F' || 'G' || 'H' || 'I' || 'J' || 'K' || 'L' || 'M' || 'N' || 'O' || 'P' || 'Q' || 'R' || 'S' || 'T' || 'U' || 'V' || 'W' || 'X' || 'Y' || 'Z'));
        } else validateArray.push(true);
        if (validateArray === [true, true, true] ) {
            */



//var options=("");
//return "password";
//}

// Write password to the #password input
//function writePassword() {
    //var password = generatePassword();



    //var passwordText = document.querySelector("#password");
    //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click" || writePassword)
