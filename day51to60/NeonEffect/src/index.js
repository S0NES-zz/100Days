let colorsInput = document.querySelectorAll(".colors");
let colorsLabel = document.querySelectorAll(".colorsLabel");

for (let i = 0; i < colorsInput.length; i++) {
  colorsLabel[i].style.background = colorsInput[i].value;
  colorsLabel[i].addEventListener("click", () => {
    document.documentElement.style.setProperty("--neon", colorsInput[i].value);
  });
}
