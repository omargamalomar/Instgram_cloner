const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("amazon");
document.addEventListener("DOMContentLoaded", function () {
  passwordInput.addEventListener("input", function () {
    const passwordError = document.getElementById("passwordError");
    passwordError.textContent = "";

    if (passwordInput.value.length <= 6) {
      passwordError.textContent = "Password must be longer than 6 characters";
      passwordError.style.color = "red";
      passwordError.style.fontSize = "12px";
      passwordInput.classList.add("is-invalid")
    } else if (passwordInput.value.length >= 20) {
      passwordError.textContent = "Password must be less than 20 characters";
    } else {
      passwordError.textContent = "";
      passwordInput.classList.remove("is-invalid")
    }

    updateSubmitButtonState();
  });

  emailInput.addEventListener("input", function () {
    const emailError = document.getElementById("emailError");
    emailError.textContent = "";

    const emailPattern = /^[\w-\.]+@([\w-]+\.)+(com|net)$/g;
    if (!emailPattern.test(emailInput.value)&&emailInput.value !== "") {
      emailError.textContent = "Invalid email";
      emailError.style.color = "red";
      emailError.style.fontSize = "12px";
      emailInput.classList.add("is-invalid")
    } else {
      emailError.textContent = "";
      emailInput.classList.remove("is-invalid")
    }

    updateSubmitButtonState();
  });

  function updateSubmitButtonState() {
    if (
      passwordInput.value.length > 5 &&
      passwordInput.value.length < 20 &&
      /^[\w-\.]+@([\w-]+\.)+(com|net)$/g.test(emailInput.value)
    ) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }
});
let eyeIcon = document.getElementById("eyea");
eyeIcon.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});


const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (isValidLogin(email, password)) {
        localStorage.setItem("username", email);
        localStorage.setItem("password", password);
        window.location.href = 'home.html';
    } else {
    }
});

function isValidLogin(email, password) {

    return true; 
}