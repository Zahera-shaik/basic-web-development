document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === '') {
            displayError(nameError, 'Name is required');
            isValid = false;
        } else {
            clearError(nameError);
        }

        // Validate Email
        if (emailInput.value.trim() === '') {
            displayError(emailError, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            displayError(emailError, 'Invalid email format');
            isValid = false;
        } else {
            clearError(emailError);
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            displayError(messageError, 'Message is required');
            isValid = false;
        } else {
            clearError(messageError);
        }

        if (isValid) {
            // If all validations pass, you can proceed with form submission
            alert('Form submitted successfully!'); // Replace with your actual submission logic
            form.reset(); // Optionally reset the form
        }
    });

    function displayError(element, message) {
        element.textContent = message;
    }

    function clearError(element) {
        element.textContent = '';
    }

    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});