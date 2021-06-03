let check = document.getElementById("shareCheck");
let share = document.querySelector(".shareDiv");
let path = document.getElementById("path");
let label = document.getElementById("shareLabel");

check.addEventListener("click", () => {
  if (check.checked == 1) {
    share.style.display = "flex";
    path.style = "fill: var(--lightGrayishBlue);";
    label.style = "background: var(--desaturatedDarkBlue);";
  }
  if (check.checked == 0) {
    share.style.display = "none";
    path.style = "fill: var(--desaturatedDarkBlue);";
    label.style = "background: var(--lightGrayishBlue);";
  }
});
