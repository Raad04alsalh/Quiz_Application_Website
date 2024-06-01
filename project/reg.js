function getUserData() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}

function saveUserData(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function registerUser(fullName, email, password) {
  const users = getUserData();
  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    alert("User already exists with this email.");
    return false;
  }
  users.push({ fullName, email, password });
  saveUserData(users);
  alert("Registration successful!");
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registrationForm");

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (registerUser(fullName, email, password)) {
      window.location.href = "log-in.html";
    }
  });
});
