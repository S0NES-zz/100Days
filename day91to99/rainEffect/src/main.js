let container = document.getElementById("rain-container");

function renderRain() {
  for (var i = 0; i < 1000; i++) {
    console.log(i)
    let rain = document.createElement("div");
    rain.classList.add("rain");
    let random = Math.floor(Math.random() * 9000);
    rain.style.animationDelay = random + 'ms';
    container.appendChild(rain);
  }
}
renderRain();
