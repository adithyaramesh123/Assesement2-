function closeOverlay() {
    document.getElementById('loginOverlay').style.display = 'none';
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('exampleInputEmail1').value;
    const phone = document.getElementById('exampleInputPhone').value;
    const password = document.getElementById('exampleInputPassword1').value;

    // Validate Email
    if (!validateEmail(email)) {
        alert('Invalid email format.');
        return;
    }

    // Validate Phone Number
    if (!validatePhoneNumber(phone)) {
        alert('Invalid phone number format.');
        return;
    }

    // Validate Password
    const strength = validatePassword(password);
    document.getElementById('passwordStrength').textContent = strength;
    document.getElementById('passwordStrength').className = strength;

    if (strength === 'poor') {
        alert('Password is too weak.');
        return;
    }

    // If all validations pass, you can submit the form or perform your desired action
    alert('Form submitted successfully!');
    closeOverlay(); // Optional: close overlay on successful submission
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validatePhoneNumber(phone) {
    const regex = /^(?:\d{10}|\d{3}[-.\s]?\d{3}[-.\s]?\d{4})$/;
    return regex.test(phone);
}

function validatePassword(password) {
    const lengthCheck = password.length >= 8;
    const upperCaseCheck = /[A-Z]/.test(password);
    const lowerCaseCheck = /[a-z]/.test(password);
    const numberCheck = /\d/.test(password);
    
    if (lengthCheck && upperCaseCheck && lowerCaseCheck && numberCheck) {
        return 'strong';
    } else if (lengthCheck) {
        return 'medium';
    } else {
        return 'poor';
    }
}