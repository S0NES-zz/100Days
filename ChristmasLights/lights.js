let red,
  orange,
  yellow,
  blue,
  darkBlue,
  green,
  title,
  on,
  off,
  inputSpeed,
  bolinhas,
  duration = 0,
  isLight = false;

/* Cores */
red = document.getElementById("red");
orange = document.getElementById("orange");
yellow = document.getElementById("yellow");
blue = document.getElementById("blue");
darkBlue = document.getElementById("darkBlue");
green = document.getElementById("green");

title = document.getElementById("title");
on = document.getElementById("on");
off = document.getElementById("off");
circle = document.getElementsByClassName("circle");

inputSpeed = document.getElementById("inputSpeed");

function changeColor() {
  if (isLight == true) {
    red.style.background = "#F50400";
    orange.style.background = "#FF5714";
    yellow.style.background = "#F7BF26";
    green.style.background = "#6FCD3C";
    blue.style.background = "#2AA3F4";
    darkBlue.style.background = "#0634DB";
    title.style.color = "#83058A";
    title.style.textShadow = "2px 2px 20px #83058A";
  } else {
    red.style.background = "#737574";
    orange.style.background = "#737574";
    yellow.style.background = "#737574";
    green.style.background = "#737574";
    blue.style.background = "#737574";
    darkBlue.style.background = "#737574";
    title.style.color = "#737574";
    title.style.textShadow = "none";
  }
}

function animacao() {
  if(isLight == true){
    red.style.animation = "glow-red " + (1 + duration) + "s infinite";
    orange.style.animation = "glow-orange " + (1 + duration) + "s infinite";
    yellow.style.animation = "glow-yellow " + (1 + duration) + "s infinite";
    green.style.animation = "glow-green " + (1 + duration) + "s infinite";
    blue.style.animation = "glow-blue " + (1 + duration) + "s infinite";
    darkBlue.style.animation = "glow-darkBlue " + (1 + duration) + "s infinite";
  }else{
    red.style.animation = "none";
    orange.style.animation = "none";
    yellow.style.animation = "none";
    green.style.animation = "none";
    blue.style.animation = "none";
    darkBlue.style.animation = "none";
    
  }
}

on.addEventListener("click", () => {
    isLight = true;
    changeColor();
});
off.addEventListener("click", () => {
    isLight = false;
    changeColor();
    animacao();
});
inputSpeed.addEventListener("input", () => {
  duration = inputSpeed.value;
  duration = duration / 10;
  animacao();
});
