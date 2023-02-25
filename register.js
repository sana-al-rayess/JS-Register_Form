
function validateForm() {
    const form = document.getElementById('register-form');
    const firstName = form.elements['firstname'].value;
    const lastName = form.elements['lastname'].value;
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;
    const confirmPassword = form.elements['confirm-password'].value;

    

    // validate the form fields
    if (firstName.trim() === '') {
        alert('Please enter your first name.');
        return;
    }

    if (lastName.trim() === '') {
        alert('Please enter your last name.');
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter your email in correct form.');
        return;
    }

    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Please enter your password correctly: 8 characters minimum, one special character minimum, at least one upper case letter');
        return;
    }

    
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

 
}
