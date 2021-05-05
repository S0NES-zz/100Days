let audio = new Audio("https://assets.codepen.io/308367/coolsaber.mp3");

let btn = document.getElementById("on-off");
btn.addEventListener("click", () => {
  if (btn.checked == true) {
    let random = Math.floor(Math.random() * 400) + 1;
    document.documentElement.style.setProperty("--blade-hue", random * 10);
    audio.play();
  }
});
$(function () {
  $(".lightsaber").draggable();
});
