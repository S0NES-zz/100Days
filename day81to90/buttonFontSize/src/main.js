let btns = document.querySelectorAll("button");
let text = document.querySelector(".text");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    text.style.fontSize = btn.value + 'rem';
  });
});
