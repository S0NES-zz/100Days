let btn = document.getElementById("submit");
let username = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  validate();
});

function validate() {
  console.log("oi");
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password, "Passwords does not match");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password confirmation cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }
}
function setErrorFor(input, message) {
  const register = input.parentElement;
  const small = register.querySelector("small");
  register.className = "user-box error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const register = input.parentElement;
  register.className = "user-box success";
}

function isEmail(email) {
  return /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(email);
}
