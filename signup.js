function showPage(page) {
    if (page === 'login') {
        document.getElementById('signup-box').style.display = 'none';
        document.getElementById('login-box').style.display = 'block';
    } else {
        document.getElementById('signup-box').style.display = 'block';
        document.getElementById('login-box').style.display = 'none';
    }
}

function validateSignup() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^(?:\d{10}|\d{3}[-.]\d{3}[-.]\d{4}|\d{3} \d{3} \d{4})$/;

    if (!emailPattern.test(email)) {
        alert('Invalid email format');
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert('Invalid phone number format');
        return false;
    }

    return true;
}

function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Add any additional validation if necessary
    if (!email || !password) {
        alert('Email and password are required');
        return false;
    }

    return true;
}

function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthIndicator = document.getElementById('password-strength');
    let strength = 'Poor';
    let color = 'red';

    const lengthCriteria = password.length >= 8;
    const upperCaseCriteria = /[A-Z]/.test(password);
    const lowerCaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /\d/.test(password);

    if (lengthCriteria && upperCaseCriteria && lowerCaseCriteria && numberCriteria) {
        strength = 'Strong';
        color = 'green';
    } else if (lengthCriteria && (upperCaseCriteria || lowerCaseCriteria)) {
        strength = 'Medium';
        color = 'orange';
    }

    strengthIndicator.style.backgroundColor = color;
    strengthIndicator.textContent = strength;
}
