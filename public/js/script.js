const loginButton = document.getElementById("login-button");
var loginAttempts = 0;

loginButton.onclick = () => {
  // Query login credentials
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  console.log(`Username: ${username.value};`);
  console.log(`Password: ${password.value}.`);

  var valid = 2;
  // Validate login credentials

  // Login to user account if credentials correct
  if (valid == 0) {
    window.location.href = "storage.html";
  } else if (loginAttempts >= 3) {
    alert("Error: too many attemps");
  } else if (valid == 1) {
    loginAttempts++;
    alert("Error: invalid username or email");
  } else {
    loginAttempts++;
    alert("Error: invalid password");
  }
};
