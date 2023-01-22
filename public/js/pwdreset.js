const resetButton = document.getElementById("reset-pwd-button");

resetButton.onclick = () => {
    // Query login credentials
    const email = document.getElementById("email");
    console.log(`Email: ${email.value};`);

    // Validate login credentials
    var valid = 0; // 0: valid; 1: email;

    // Send email to reset password
    if (valid == 0) {
    window.location.href = "resetdone.html";
    } else {
    alert("Error: invalid email");
    }
};
