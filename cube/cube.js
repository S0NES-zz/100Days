cube = document.getElementById("cube");

preview = document.querySelector("body");

preview.addEventListener("mousemove", (e) => {
  var val1 = e.pageX;
  var rotateX = "rotateX(" + Math.floor(val1 / 5) + "deg)";
  var val2 = e.pageY;
  var rotateY = "rotateY(" + Math.floor(val2 / 5) + "deg)";
  cube.style = "transform: " + rotateX + " " + rotateY + " ;";
});
