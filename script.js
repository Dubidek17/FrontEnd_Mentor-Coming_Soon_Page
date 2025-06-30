let button = document.getElementById("button");
let errorMessage = document.getElementById("errorMessage");
let emailInput = document.getElementById("emailInput");

button.addEventListener("click", function () {
    let isEmailCorrect = false;
    let emailInputValue = emailInput.value;
    if (emailInputValue == "") {
        errorMessage.innerHTML = "Whoops! It looks like you forgot to add your email";
        emailInput.classList.add("wrong");
    }

    else {
        for (i = 0; i < emailInputValue.length; i++) {
            if (emailInputValue[i] == "@") {
                isEmailCorrect = true;
            }
        }
        if (isEmailCorrect == false) {
            errorMessage.innerHTML = "Please provide a valid email address";
            emailInput.classList.add("wrong");
        }
        else {
            errorMessage.innerHTML = "";
            emailInput.classList.remove("wrong");
        }
    }
})