function validate() {
    var emailValidationResult = checkEmail();
    var phoneValidationResult = checkPhoneNumber();
    var birthDateValidationResult = checkBirthDate();
    var passwordValidationResult = checkPassword();
    var confirmPasswordValidationResult = checkConfirmPassword();

    if(!checkName()) {
        document.getElementById('name-field').style.borderColor = 'red';
        setErrorMessage(true, "*Name cannot be empty.");
    } else if(emailValidationResult != 0) {
        resetAllBorder();
        document.getElementById('email-field').style.borderColor = 'red';

        switch(emailValidationResult) {
            case 1:
                setErrorMessage(true, "*Email cannot be empty.");
                break;
            case 2:
                setErrorMessage(true, "*Email must end with '.com'.");
                break;
            case 3:
                setErrorMessage(true, "*Email must include at least 1 '@'.");
                break;
            case 4:
                setErrorMessage(true, "*Email must include at least 1 '.'.");
                break;
            case 5:
                setErrorMessage(true, "*Email must not start with '@'.");
                break;
            case 6:
                setErrorMessage(true, "*Email must not start with '.'.");
                break;
            case 7:
                setErrorMessage(true, "*'.' must not be after '@'.");
                break;
        }
    } else if(phoneValidationResult != 0) {
        resetAllBorder();
        document.getElementById('phone-number-field').style.borderColor = 'red';

        switch(phoneValidationResult) {
            case 1:
                setErrorMessage(true, "*Phone number must not be empty.");
                break;
            case 2:
                setErrorMessage(true, "*Phone number must be at least 7 numbers long.");
                break;
            case 3:
                setErrorMessage(true, "*Phone number must only contain numbers.");
                break;
            case 4:
                setErrorMessage(true, "*Phone number must start with '0'.");
                break;
        }
    } else if(!checkGender()) {
        resetAllBorder();
        setErrorMessage(true, "*Please select your gender.");
    } else if(birthDateValidationResult != 0) {
        resetAllBorder();
        document.getElementById('date-field').style.borderColor = 'red';
        switch(birthDateValidationResult) {
            case 1:
                setErrorMessage(true, "*Please fill your birth date.");
                break;
            case 2:
                setErrorMessage(true, "*You must be at least 12 year(s) old to play Frawlsalla.");
                break;
        }
    } else if(passwordValidationResult != 0) {
        resetAllBorder()
        document.getElementById('password-field').style.borderColor = 'red';
        switch(passwordValidationResult) {
            case 1:
                setErrorMessage(true, "*Password cannot be empty.");
                break;
            case 2:
                setErrorMessage(true, "*Password must be at least 6 characters.");
                break;
        }
    } else if(confirmPasswordValidationResult != 0) {
        resetAllBorder()
        document.getElementById('confirm-password-field').style.borderColor = 'red';
        switch(confirmPasswordValidationResult) {
            case 1:
                setErrorMessage(true, "*Confirm Password cannot be empty.");
                break;
            case 2:
                setErrorMessage(true, "*Confirm Password must be same with password.");
                break;
        }
    } else if(!checkAgree()) {
        resetAllBorder()
        document.getElementById('agree-label').style.color = 'red';
        setErrorMessage(true, "*You must agree to the user agreement.");
    } else {
        setErrorMessage(false, "");
    }
}

function checkName() {
    var nameField = document.getElementById('name-field');
    var name = nameField.value.trim();

    return (name == "") ? false : true;
}

function checkEmail() {
    var emailField = document.getElementById('email-field');
    var emailValue = emailField.value.trim();

    if(emailValue == "") {
        return 1;
    } else if(!emailValue.endsWith(".com")) {
        return 2;
    } else if(!emailValue.includes("@")) {
        return 3;
    } else if(!emailValue.includes(".")) {
        return 4;
    } else if(emailValue.startsWith("@")) {
        return 5;
    } else if(emailValue.startsWith(".")) {
        return 6;
    }

    for(var i=0;i<emailValue.length;i++){
        if(emailValue[i] == '@') {
            if(emailValue[i+1] == '.'){
                return 7;
            }
        }
    }

    return 0;
}

function checkPhoneNumber() {
    var phoneNumberField = document.getElementById('phone-number-field');
    var phoneNumber = phoneNumberField.value.trim();

    if(phoneNumber == "") {
        return 1;
    } else if(phoneNumber.length < 7) {
        return 2;
    }

    for(var i=0;i<phoneNumber.length;i++){
        if(phoneNumber[i] < '0' || phoneNumber[i] > '9'){
            return 3;
        }
    }

    if(phoneNumber[0] != '0') {
        return 4;
    }
    return 0;
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

function checkBirthDate() {
    var birthDateField = document.getElementById('date-field');
    var birthDate = birthDateField.value.trim();
    
    if(birthDate == "") {
        return 1;
    }

    var dateSplit = birthDate.split("-");
    var dateNow = new Date()

    var selectedYear = parseInt(dateSplit[0]);
    var selectedMonth = parseInt(dateSplit[1]);
    var selectedDay = parseInt(dateSplit[2]);

    var currentYear = dateNow.getFullYear();
    var currentMonth = dateNow.getMonth()+1;
    var currentDay = dateNow.getDate();

    if((currentYear - selectedYear) == 12 && currentMonth == selectedMonth && selectedDay > currentDay) {
        return 2;
    } else if((currentYear - selectedYear) == 12 && currentMonth < selectedMonth) {
        return 2;
    } else if((currentYear - selectedYear) < 12) {
        return 2;
    }
    return 0;
}

function checkPassword() {
    var passwordField = document.getElementById('password-field');
    var password = passwordField.value.trim();

    if(password == "") {
        return 1;
    } else if(password.length < 6) {
        return 2;
    }

    return 0;
}

function checkConfirmPassword() {
    var confirmPasswordField = document.getElementById('confirm-password-field');
    var confirmPassword = confirmPasswordField.value.trim();

    var passwordField = document.getElementById('password-field');
    var password = passwordField.value.trim();

    if(confirmPassword == "") {
        return 1;
    } else if(confirmPassword != password) {
        return 2;
    }
    return 0;
}

function checkAgree() {
    var userAgreementCheckBox = document.getElementById("agree")
    return userAgreementCheckBox.checked == true ? true : false;
}

function setErrorMessage(error, msg) {
    var errorMessageField = document.getElementById('error-msg');
    
    errorMessageField.style.color = (error) ? 'red' : 'green';
    errorMessageField.innerText = (error) ? msg : "Successfully created account.";
    errorMessageField.style.visibility = 'visible';

    document.getElementById('play-button').style.marginTop  = '20px';
}

function resetAllBorder() {
    document.getElementById('name-field').style.borderColor = 'black';
    document.getElementById('email-field').style.borderColor = 'black';
    document.getElementById('phone-number-field').style.borderColor = 'black';
    document.getElementById('password-field').style.borderColor = 'black';
    document.getElementById('confirm-password-field').style.borderColor = 'black';
    document.getElementById('date-field').style.borderColor = 'black';
    document.getElementById('agree-label').style.borderColor = 'black';
}