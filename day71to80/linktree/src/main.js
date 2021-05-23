const open = document.querySelector(".open-btn");
const close = document.querySelector(".close");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
  container.classList.add("open");
});

close.addEventListener("click", () => {
  container.classList.remove("open");
});