let email = document.getElementById("email");
let pass = document.getElementById("pass");
let login = document.getElementById("login");

let form = document.getElementById("form");
let image = document.getElementById("result");
const root = document.documentElement;

console.log("email: dia13@gmail.com");
console.log("senha: 123456");

login.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value == "dia13@gmail.com" && pass.value == "123456") {
    sucess();
  } else {
    fail();
  }
  
    email.textContent = null;
    pass.textContent = null;
});
image.addEventListener("click", (e) => {
  e.preventDefault();
  normal();
});

function sucess() {
  root.style.setProperty("--animate", "up");
  root.style.setProperty("--loop", "1");
  root.style.setProperty("--color", "#06D6A0");
  setTimeout(() => {
    root.style.setProperty("--animate", "wave");
    root.style.setProperty("--loop", "infinite");
    root.style.setProperty("--high", "-95%");
  }, 10000);

  form.style.display = "none";

  result.src = "done.png";
  result.style.display = "block";
}

function fail() {
  root.style.setProperty("--animate", "down");
  root.style.setProperty("--loop", "1");
  root.style.setProperty("--color", "#F8333C");
  setTimeout(() => {
    root.style.setProperty("--animate", "wave");
    root.style.setProperty("--loop", "infinite");
    root.style.setProperty("--high", "-40%");
  }, 10000);

  form.style.display = "none";

  result.src = "fail.png";
  result.style.zIndex = 200;
  result.style.display = "block";
}

function normal() {
  root.style.setProperty("--animate", "wave");
  root.style.setProperty("--loop", "infinite");
  root.style.setProperty("--high", "-65%");
  root.style.setProperty("--color", "#1520a6");

  form.style.display = "flex";

  result.style.display = "none";
}
