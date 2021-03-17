section = document.querySelector("section");

section.addEventListener("mousemove", (e) => {
  var val1 = e.pageX;
  var val2 = e.pageY;
  var rgbColor = "rgba(" + val1 + "," + val2 + ", 00" + ", 0.8)";
  section.style.backgroundColor = rgbColor;
});

VanillaTilt.init(document.querySelector("section"), {
  max: 15,
  speed: 200,
});
