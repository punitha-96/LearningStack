function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "punitha" && password == "user") {
    alert("Logged in successfully");
  } else {
    alert("Login Failed");
  }
}
