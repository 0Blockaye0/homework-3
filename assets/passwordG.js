/////// DECLARE FUNCTIONS AT THE TOP//////


// Assignment Code
var generateBtn = document.querySelector("#generate");

function passwordLength() {
    var length = window.prompt("Please enter the length of your password in a numeric value 8-128 characters.");
    if (length < 8 || length > 128) {
        alert("Please enter a valid response.");
    } else {
        return length;
    }
};

//var options=("");
//return "password";
//}




// Write password to the #password input
function writePassword() {
    var password = generatePassword();



    //var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








//3 or so functions////////////////////////////////////////////////////////////

var options = {
    uppercase: "",
    special: "",
    numeric: ""
};

function passwordOptions() {
    var optionQuestion = window.confirm("Would you like uppercase, numeric, and or special characters in your password? select 'ok' for yes or 'cancel' for no.")
    if (optionQuestion === true) {
        if (window.confirm("Would you like your password to include uppercase characters?") === true) {
            options.uppercase = "yes";
            console.log(options.uppercase);
        }
        if (window.confirm("Would you like your password to include special characters?") === true) {
            options.special = "yes";
            console.log(options.special);
        }
        if (window.confirm("Would you like your password to include numeric characters?") === true) {
            options.numeric = "yes";
            console.log(options.numeric);
        }
        console.log(options);
    } else {
        
        //generatePassword()
    }
};


passwordOptions();
debugger;


///////////////////////////////////////////////////////////////////





//function generatePassword() {
    //return password
//}


///////////////////////////////////////////////////////////////


