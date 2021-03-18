let cube = document.querySelector(".cube");
let inpX = document.getElementById("inputX");
let inpY = document.getElementById("inputY");
let inpZ = document.getElementById("inputZ");

cube.style.transform = "";

inpX.addEventListener("input", () => {
  cube.style = "transform: rotateX( " + inpX.value + "deg);";
});

inpY.addEventListener("input", () => {
  cube.style = "transform: rotateY( " + inpY.value + "deg);";
});

inpZ.addEventListener("input", () => {
  cube.style = "transform: rotateZ( " + inpZ.value + "deg);";
});
