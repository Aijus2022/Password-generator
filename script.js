     function generatePassword() {
      // Prompt for password length
      let passwordLength = prompt("Enter password length (8-128 characters):");
      passwordLength = parseInt(passwordLength);

      // Validate password length
      if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Invalid password length. Please enter a number between 8 and 128.");
        return;
      }

      // Prompt for character types
      let lowercase = confirm("Include lowercase characters?");
      let uppercase = confirm("Include uppercase characters?");
      let numeric = confirm("Include numeric characters?");
      let special = confirm("Include special characters?");

      // Validate at least one character type is selected
      if (!lowercase && !uppercase && !numeric && !special) {
        alert("At least one character type must be selected.");
        return;
      }

      // Define character sets based on user choices
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numericChars = "0123456789";
      const specialChars = "$@%&*";

      // Build character set for password
      let characters = "";
      if (lowercase) characters += lowercaseChars;
      if (uppercase) characters += uppercaseChars;
      if (numeric) characters += numericChars;
      if (special) characters += specialChars;

      // Generate password
      let password = "";
      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
      }

      // Display password
      alert("Generated Password:\n" + password);
    }
// Creating a style element
var style = document.createElement('style');

// Adding CSS rules
style.textContent = `
  body {
    background-color: #001f3f; /* Dark blue background */
    color: #ffffff; /* White text */
    font-family: 'Arial', sans-serif;
  }

  h1, form {
    text-align: center;
    margin-top: 20px;
  }

  /* Box styling */
  form {
    background-color: #ffffff; /* White background */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.2); /* Light blue box shadow */
    width: 300px;
    margin: 0 auto;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }

  input[type="checkbox"] {
    margin-right: 5px;
  }

  button {
    background-color: #0074cc; /* Darker light blue */
    color: #ffffff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #005a99; /* Light blue on hover */
  }


// Appending the style element to the document head
document.head.appendChild(style)
