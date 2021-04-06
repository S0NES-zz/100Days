let check = document.getElementById("shareCheck");
let share = document.querySelector(".shareDiv");

check.addEventListener("click", () => {
  if (check.checked == 1) {
    share.style.display = "flex";
  }
  if (check.checked == 0) {
    share.style.display = "none";
  }
});
