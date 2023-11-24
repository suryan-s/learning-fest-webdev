function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
    var errorMessage = document.getElementById('error-message');
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.innerHTML = 'All fields are required.';
    } 
    else if (password !== confirmPassword) {
        errorMessage.innerHTML = 'Passwords do not match.';
    }
    else if(email.indexOf('@') === -1) {
        errorMessage.innerHTML = 'Invalid email address.';
    }
    else {
        errorMessage.innerHTML = '';
        alert('Form submitted successfully!');
    }
}