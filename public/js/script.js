const loginButton = document.getElementById("login-button");
var loginAttempts = 0;
import "firebase/firestore";
const db = firebase.firestore();

loginButton.onclick = () => {
  // Query login credentials
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  console.log(`Username: ${username.value};`);
  console.log(`Password: ${password.value}.`);

  var valid = 2;
  db.collection("users")
    .where("username", "==", username.value)
    .where("password", "==", password.value)
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log("No matching documents.");
        db.collection("users")
          .where("username", "==", username.value)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.empty) {
              console.log("No matching users were found.");
            } else {
              console.log("Matching users, not passwords.");
              valid = 1;
            }
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else {
        console.log("Matching documents.");
        valid = 0;
      }
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
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
