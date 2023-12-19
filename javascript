    function generatePassword() {
      const passwordLength = document.getElementById("passwordLength").value;
      const lowercase = document.getElementById("lowercase").checked;
      const uppercase = document.getElementById("uppercase").checked;
      const numeric = document.getElementById("numeric").checked;
      const special = document.getElementById("special").checked;

      // Validation and password generation logic here

      // Display password
      alert("Generated Password:\n" + generatedPassword);
    }
 
