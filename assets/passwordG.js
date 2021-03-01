/////// DECLARE VARIABLES //////
var password = ""
var length
var passwordArray = []
var hasLowercase = null
var hasSpecial = null
var hasUppercase = null
var hasNumbers = null
// options arrays
var uppercaseLettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseLettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharactersArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@'];
// options object
var options = {
    uppercase: "",
    special: "",
    numeric: "",
    lowercase: ""
};

/////// DECLARE FUNCTIONS ////////
// returns options
function passwordOptions() {
    options.lowercase = (window.confirm("Would you like your password to include lowercase characters?"))
    options.uppercase = (window.confirm("Would you like your password to include uppercase characters?")),
        options.special = (window.confirm("Would you like your password to include special characters?")),
        options.numeric = (window.confirm("Would you like your password to include numeric characters?"))
    if (options.lowercase === false && options.numeric === false && options.special === false && options.uppercase === false) {
        window.alert("Please select at least one option.")
        passwordOptions()
    } else {
        console.log(options)
        return options
    }
};

// returns length
function passwordLength() {
    length = window.prompt("Please enter the length of your password in a numeric value 8-128 characters.");
    if (length < 8 || length > 128) {
        alert("Please enter a valid response.");
        passwordLength();
    } else {
        console.log(length);
        return length;
    }
};

// returns passwordArray
function getPasswordArray() {
    if (options.lowercase === true) {
        passwordArray.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
    };
    if (options.uppercase === true) {
        passwordArray.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
    };
    if (options.special === true) {
        passwordArray.push('!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@')
    };
    if (options.numeric === true) {
        passwordArray.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9')
    };

    console.log(passwordArray);
    return passwordArray;
};

function resetValues() {
    password = "";
    passwordArray = [];
    options.lowercase = "";
    options.numeric = "";
    options.special = "";
    options.uppercase = "";
    hasLowercase = null;
    hasSpecial = null;
    hasUppercase = null;
    hasNumbers = null;
};

// validates password contains user critera
function validation(arr, str) {
    for (var i = 0; i < arr.length; i++) {
        if (str.includes(arr[i])) {
            console.log(str, arr)
            return true
        }
    }
};

// generates the password and calls validation()
function generatePassword() {
    for (var i = 0; i < length; i++) {
        var x = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        password = password + x;
    }
    //debugger;
    console.log(password);
    // Validate //
    if (options.lowercase === true) {
        hasLowercase = validation(lowercaseLettersArray, password)
    }
    if (options.special === true) {
        hasSpecial = validation(specialCharactersArray, password)
    }
    if (options.uppercase === true) {
        hasUppercase = validation(uppercaseLettersArray, password)
    }
    if (options.numeric === true) {
        hasNumbers = validation(numbersArray, password)
    }
    console.log(hasNumbers, hasSpecial, hasUppercase, hasLowercase);
    //debugger;
    if (hasLowercase === undefined) {
        password = ""
        generatePassword()
    }
    if (hasSpecial === undefined) {
        password = ""
        generatePassword()
    }
    if (hasUppercase === undefined) {
        password = ""
        generatePassword()
    }
    if (hasNumbers === undefined) {
        password = ""
        generatePassword()
    }
    //debugger;
    console.log(options)
    console.log(password + " is the password")
    var passwordText = document.querySelector("#password")
    passwordText.value = password
    window.alert("Your password is " + password + ", click ok to start over.")
    resetValues()
    start()
};

// starts the proccess
function start() {
    resetValues()
    passwordLength()
    passwordOptions()
    getPasswordArray()
    generatePassword()
    //return password
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", start);