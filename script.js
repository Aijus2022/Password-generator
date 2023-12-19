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
