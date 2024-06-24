function validation() {
    let password = document.getElementById("password").value;
    let cnfrpassword = document.getElementById("cnfrpassword").value;
    let message = document.getElementById("message");

    if (password.length >= 5) {
        if (password == cnfrpassword) {
            message.textContent = "Passwords match!";
            message.style.backgroundColor = "#3ae374";
        } else {
            message.textContent = "Wrong password";
            message.style.backgroundColor = "#ff4d4d";
        }
    } 
    else {
        alert(message.textContent = "Password must be above 5");
    }
}