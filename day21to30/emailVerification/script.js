let btn = document.getElementById("button");
let form = document.getElementById("input-group");

btn.addEventListener("click", () => {
  let email = document.getElementById("input").value;
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (
    email === "" ||
    email === null ||
    email === undefined ||
    !email.match(pattern)
  ) {
    form.classList.add("invalid");
  }
  if (email.match(pattern)) {
    form.classList.remove("invalid");
  }
});
