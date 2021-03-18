let input, inpX, inpY, inpZ, cube;

cube = document.querySelector(".cube");
inpX = document.getElementById("inputX");
inpY = document.getElementById("inputY");
inpZ = document.getElementById("inputZ");


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
