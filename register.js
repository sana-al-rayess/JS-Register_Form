
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
  
    
}
