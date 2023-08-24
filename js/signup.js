const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const nameInput = document.getElementById("names");
const submitButton = document.getElementById("amazon");
document.addEventListener("DOMContentLoaded", function () {
  passwordInput.addEventListener("input", function () {
    const passwordError = document.getElementById("passwordError");
    passwordError.textContent = "";

    if (passwordInput.value.length <= 6) {
      passwordError.textContent = "Password must be longer than 6 characters";
      passwordError.style.color = "red";
      passwordError.style.fontSize = "12px";
    } else if (passwordInput.value.length >= 20) {
      passwordError.textContent = "Password must be less than 20 characters";
    } else {
      passwordError.textContent = "";
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

  phoneInput.addEventListener("input", function () {
		const phoneError = document.getElementById("phoneError");
		const phonePattern = /^(010|011|012|015)\d{8}$/;
    if (!phonePattern.test(phoneInput.value)&&phoneInput.value !== "") {
      phoneError.textContent = "Invalid number";
      phoneError.style.color = "red";
      phoneError.style.fontSize = "12px";
      phoneInput.classList.add("is-invalid")
    } else {
      phoneError.textContent = "";
      phoneInput.classList.remove("is-invalid")
    }
    updateSubmitButtonState();
  });
  nameInput.addEventListener("input", function () {
		const nameError = document.getElementById("nameError");
		const namePattern = /[a-z][0-9]/g;
    if (!namePattern.test(nameInput.value)&&nameInput.value !== "") {
      nameError.textContent = "Invalid username";
      nameError.style.color = "red";
      nameError.style.fontSize = "12px";
      nameInput.classList.add("is-invalid")
    } else {
      nameError.textContent = "";
      nameInput.classList.remove("is-invalid")
    }
    updateSubmitButtonState();
  });
	
  function updateSubmitButtonState() {
    if (
      passwordInput.value.length > 5 &&
      passwordInput.value.length < 20 &&
      /^[\w-\.]+@([\w-]+\.)+(com|net)$/g.test(emailInput.value )
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
