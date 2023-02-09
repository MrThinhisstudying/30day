var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()

        if (!input.value) {
            showError(input, 'Khong duoc de trong')
        } else {
            showSuccess(input)
        }
    });

    return isEmptyError
}

function checkEmailError(input) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
    if (regexEmail.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, `Email Invalid`)
    }

    return isEmailError

}

function checkLengthError(input, min, max) {
    input.value = input.value.trim()


    if (input.value.length < min) {
        showError(input, `Phai co it nhat ${min} ky tu`)
        return true
    }

    if (input.value.length > max) {
        showError(input, `Khong duoc qua ${max} ky tu`)
        return true
    }

    showSuccess(input)
    return false
}

function checkMatchPassword(passwordInput, cfPassWordInput) {
    if (passwordInput.value !== cfPassWordInput.value) {
        showError(cfPassWordInput, `Mat khau khong trung khop`)
        return true
    }
    return false
}


form.addEventListener('submit', function(e) {
    e.preventDefault()

    let isEmpltyError = checkEmptyError([username, email, password, confirmPassword])

    let isEmailError = checkEmailError(email)

    let isUsernameLengthError = checkLengthError(username, 3, 10)

    let isPasswordLengthError = checkLengthError(password, 3, 10)

    let isCheckError = checkMatchPassword(password, confirmPassword)

    if (isEmpltyError || isEmailError || isUsernameLengthError || isPasswordLengthError || isCheckError) {
        //do nothing
    } else {
        //call api, ....
    }
})