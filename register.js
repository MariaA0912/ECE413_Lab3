document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const form = document.getElementById("myForm"); // Correct ID
    const formErrorsDiv = document.getElementById("formErrors"); // Correct ID
    const errorList = document.createElement("ul"); // Create a new unordered list for error messages
    formErrorsDiv.appendChild(errorList); // Append the unordered list to formErrorsDiv

    const fullNameInput = document.getElementById("fullName"); // Correct ID
    const emailInput = document.getElementById("email"); // Correct ID
    const passwordInput = document.getElementById("password"); // Correct ID
    const confirmPasswordInput = document.getElementById("passwordConfirm"); // Correct ID

    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

    // Add event listener for the submit event on the form
    form.addEventListener("submit", function (event) {
        // Clear previous errors
        errorList.innerHTML = '';
        formErrorsDiv.style.display = 'none'; // Hide error div initially

        // Validation variables
        let hasErrors = false;

        // Validate full name
        if (fullNameInput.value.trim().length < 1) {
            hasErrors = true;
            const errorMessage = document.createElement("li");
            errorMessage.textContent = "Missing full name.";
            errorList.appendChild(errorMessage);
            fullNameInput.classList.add("error"); // Add error styling
        } else {
            fullNameInput.classList.remove("error"); // Remove error styling if valid
        }

        // Validate email
        if (!emailRegex.test(emailInput.value.trim())) {
            hasErrors = true;
            const errorMessage = document.createElement("li");
            errorMessage.textContent = "Invalid or missing email address.";
            errorList.appendChild(errorMessage);
            emailInput.classList.add("error"); // Add error styling
        } else {
            emailInput.classList.remove("error"); // Remove error styling if valid
        }

        // Validate password length
        const passwordValue = passwordInput.value.trim();
        if (passwordValue.length < 10 || passwordValue.length > 20) {
            hasErrors = true;
            const errorMessage = document.createElement("li");
            errorMessage.textContent = "Password must be between 10 and 20 characters.";
            errorList.appendChild(errorMessage);
            passwordInput.classList.add("error"); // Add error styling
        } else {
            passwordInput.classList.remove("error"); // Remove error styling if valid
        }

        // Validate at least one lowercase character
        if (!/[a-z]/.test(passwordValue)) {
            hasErrors = true;
            const errorMessage = document.createElement("li");
            errorMessage.textContent = "Password must contain at least one lowercase character.";
            errorList.appendChild(errorMessage);
            passwordInput.classList.add("error"); // Add error styling
        }

        // Validate at least one uppercase character
        if (!/[A-Z]/.test(passwordValue)) {
            hasErrors = true;
            const errorMessage = document.createElement("li");
            errorMessage.textContent = "Password must contain at least one uppercase character.";
            errorList.appendChild(errorMessage);
            passwordInput.classList.add("error"); // Add error styling
        }

        // Validate at least one digit
        if (!/\d/.test(passwordValue)) {
            hasErrors = true;
            const errorMessage = document.createElement("li");
            errorMessage.textContent = "Password must contain at least one digit.";
            errorList.appendChild(errorMessage);
            passwordInput.classList.add("error"); // Add error styling
        }

        // Validate password and confirmation password match
        if (passwordValue !== confirmPasswordInput.value.trim()) {
            hasErrors = true;
            const errorMessage = document.createElement("li");
            errorMessage.textContent = "Password and confirmation password don't match.";
            errorList.appendChild(errorMessage);
            confirmPasswordInput.classList.add("error"); // Add error styling
        } else {
            confirmPasswordInput.classList.remove("error"); // Remove error styling if valid
        }

        // Show errors if there are any
        if (hasErrors) {
            formErrorsDiv.style.display = 'block'; // Show error div
            event.preventDefault(); // Prevent form submission
        } else {
            formErrorsDiv.style.display = 'none'; // Hide error div if valid
        }
    });
});
