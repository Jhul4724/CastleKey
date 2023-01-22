const signupButton = document.getElementById("signup-button");
var valid = 1; // 0: valid; 1: username; 2: email;

signupButton.onclick = () =>
{
    // Query login credentials
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    console.log(`Email: ${email.value};`);
    console.log(`Username: ${username.value};`);
    console.log(`Password: ${password.value}.`);

    // Validate account credentials
    // Create account if information valid
    if (valid == 0)
    {
        window.location.href = './storage.html';
    }
    else if (valid == 1)
    {
        alert("Error: username already exists");
        valid = 0;
    }
    else
    {
        alert("Error: invalid password");
    }
};
