function validate() {
    var emailField = document.getElementById('email-field');
    var phoneNumberField = document.getElementById('phone-number-field');
    var passwordField = document.getElementById('email-field');
    var confirmPasswordField = document.getElementById('email-field');

    if(!checkName()) {
        console.log("nama kosong");
    } else if(!checkGender()) {
        console.log("gender kosong");
    }
}

function checkName() {
    var nameField = document.getElementById('name-field');
    var name = nameField.value.trim();

    return (name == "") ? false : true;
}

function checkGender() {
    var radioField = document.getElementsByName('gender');
    for (var i = 0; i < radioField.length; i++) {
        if (radioField[i].checked) {
            return true;
        }
    }

    return false;
}