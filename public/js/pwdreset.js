const resetButton = document.getElementById("reset-pwd-button");

resetButton.onclick = () => {
    // Query login credentials
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    console.log(`Email: ${email.value};`);
    console.log(`Username: ${username.value}.`);

    // Validate login credentials
    var valid = 0; // 0: valid; 1: username; 2: email;

    // Send email to reset password
    if (valid == 0) {
    window.location.href = "resetdone.html";
    } else if (valid == 1) {
    alert("Error: invalid username");
    } else {
    alert("Error: invalid email");
    }
};
