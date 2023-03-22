let passwordField = document.getElementById('show-warning');
let password1 = document.getElementById('password').value;
let password2 = document.getElementById('confirm-password').value;

function validatePasswords() {
    console.log(passwordField);
    console.log(password1);
    console.log(password2);

    if (password1 !== password1) {
        console.log("dsad");
        const span = document.createElement("span");
        passwordField.appendChild(span.innerHTML ="Passwords do not match");
        event.preventDefault();
    }
}