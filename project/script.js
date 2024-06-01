function LoginButton(event){
  event.preventDefault();
  window.location.href = "quiz.html";
}
function open_page() {
  window.location = "log-in.html";
}
function open_register() {
  window.location = "register_page.html";
}
function getUserData() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}

function loginUser(email, password) {
  const users = getUserData();
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    window.location.href = "quiz.html"; 
  } else {
    // window.location.href = "quiz.html";
     alert("Invalid email or password.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login form");

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;
      loginUser(email, password);
    });
  }
});
