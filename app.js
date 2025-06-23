// - Receive an error message when the `form` is submitted if:
// 	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
// 	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

let button = document.getElementById("button");
let emailInput = document.getElementById("emailInput");
let errorMessage = document.getElementById("errorMessage");

button.addEventListener("click", function(){
    let email = emailInput.value;
    console.log(email);
    checkEmail(email);
})

function checkEmail(email) {
    if (email == "") {
        errorMessage.innerText = "Whoops! It looks like you forgot to add your email";
    }

    else if ("@" in email) {
        errorMessage.innerText = "Please provide a valid email address";
    }
}