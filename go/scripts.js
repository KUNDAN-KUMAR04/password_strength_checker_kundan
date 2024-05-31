document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthText = document.getElementById('password-strength');
    const strongPasswordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");

    if (strongPasswordPattern.test(password)) {
        strengthText.textContent = 'Strong password';
        strengthText.style.color = 'green';
    } else {
        strengthText.textContent = 'Weak password';
        strengthText.style.color = 'red';
    }
});
