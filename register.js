document.addEventListener("DOMContentLoaded", function () {
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("passwordConfirm");
    const submitButton = document.getElementById("submit");
    const formErrorsDiv = document.getElementById("formErrors");
    const errorList = document.getElementById("errorList");

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

    submitButton.addEventListener("click", function () {
        errorList.innerHTML = '';
        formErrorsDiv.style.display = 'none';
        let hasErrors = false;

        if (fullNameInput.value.trim().length < 1) {
            hasErrors = true;
            const errorMessage = document.createElement("li");
            errorMessage.textContent = "Missing full name.";
            errorList.appendChild(errorMessage);
            fullNameInput.style.border = "2px solid red";
        } else {
            fullNameInput.style.border = "1px solid #aaa";
        }

        if (!emailRegex.test(emailInput.value.trim())) {
            hasErrors = true;
            const errorMessage = document.createElement("li");
            errorMessage.textContent = "Invalid or missing email address.";
            errorList.appendChild(errorMessage);
            emailInput.style.border = "2px solid red";
        } else {
            emailInput.style.border = "1px solid #aaa";
        }

        const passwordValue = passwordInput.value.trim();
        if (passwordValue.length < 10 || passwordValue.length > 20) {
            hasErrors = true;
            const errorMessage = document.createElement("li");
            errorMessage.textContent = "Password must be between 10 and 20 characters.";
            errorList.appendChild(errorMessage);
            passwordInput.style.border = "2px solid red";
        } else {
            passwordInput.style.border = "1px solid #aaa";
        }

        if (!/[a-z]/.test(passwordValue)) {
            hasErrors = true;
            const errorMessage = document.createElement("li");
            errorMessage.textContent = "Password must contain at least one lowercase character.";
            errorList.appendChild(errorMessage);
        }

        if (!/[A-Z]/.test(passwordValue)) {
            hasErrors = true;
            const errorMessage = document.createElement("li");
            errorMessage.textContent = "Password must contain at least one uppercase character.";
            errorList.appendChild(errorMessage);
        }

        if (!/\d/.test(passwordValue)) {
            hasErrors = true;
            const errorMessage = document.createElement("li");
            errorMessage.textContent = "Password must contain at least one digit.";
            errorList.appendChild(errorMessage);
        }

        if (passwordValue !== confirmPasswordInput.value.trim()) {
            hasErrors = true;
            const errorMessage = document.createElement("li");
            errorMessage.textContent = "Password and confirmation password don't match.";
            errorList.appendChild(errorMessage);
            confirmPasswordInput.style.border = "2px solid red";
        } else {
            confirmPasswordInput.style.border = "1px solid #aaa";
        }

        if (hasErrors) {
            formErrorsDiv.style.display = 'block';
        } else {
            formErrorsDiv.style.display = 'none';
        }
    });
});
