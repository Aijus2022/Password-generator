function generatePassword() {
  // Get the elements
  var passwordLengthInput = document.getElementById("password-length");
  var lowercaseCheckbox = document.getElementById("lowercase");
  var uppercaseCheckbox = document.getElementById("uppercase");
  var numericCheckbox = document.getElementById("numeric");
  var specialCheckbox = document.getElementById("special");
  var passwordDisplay = document.getElementById("password-display");

  // Get user input values
  var passwordLength = parseInt(passwordLengthInput.value);
  var includeLowercase = lowercaseCheckbox.checked;
  var includeUppercase = uppercaseCheckbox.checked;
  var includeNumeric = numericCheckbox.checked;
  var includeSpecial = specialCheckbox.checked;

  // Validate user input
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordDisplay.innerHTML = "<p>Please enter a valid password length (between 8 and 128).</p>";
    return;
  }

  if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    passwordDisplay.innerHTML = "<p>Please select at least one character type.</p>";
    return;
  }

  // Generate the password
  var password = generateRandomPassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

  // Display the password on the page
  passwordDisplay.innerHTML = "<p>Generated Password:</p><p>" + password + "</p>";
}

function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  // Function to generate a random password based on criteria
  // Implementation logic goes here...

  // For demonstration purposes, a simple implementation is used.
  var charset = "";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "$@%&*";

  if (includeLowercase) {
    charset += lowercaseChars;
  }

  if (includeUppercase) {
    charset += uppercaseChars;
  }

  if (includeNumeric) {
    charset += numericChars;
  }

  if (includeSpecial) {
    charset += specialChars;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

