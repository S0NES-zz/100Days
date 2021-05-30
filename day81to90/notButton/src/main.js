let btn = document.querySelector(".button");
let counter = 0;
let container = document.querySelector(".container");
let body = document.querySelector("body");
let element = document.querySelector("p");
let h1 = document.querySelector("h1");
let click = new Audio("src/audio/click.mp3");

let red = new Audio("src/audio/don.mp3");
let stop = new Audio("src/audio/stop.mp3");
let warn = new Audio("src/audio/warn.mp3");
let why = new Audio("src/audio/why.mp3");
let goat = new Audio("src/audio/scream.mp3");
let scream = new Audio("src/audio/scream2.mp3");

let momo = document.createElement("div");
momo.classList.add("momo");
let jeff = document.createElement("div");
jeff.classList.add("jeff");

btn.addEventListener("click", (e) => {
  btn.classList.add("active");
  e.preventDefault();
  element.innerText = `You clicked: ${counter + 1} times`;
  counter++;
  click.play();
  setTimeout(() => {
    btn.classList.remove("active");
  }, 100);
  verify();
});

function verify() {
  switch (counter) {
    case 5:
      h1.innerText = "Stop!";
      break;
    case 10:
      h1.innerText = "Why??";
      break;
    case 20:
      h1.innerText = "DON'T CLICK THE RED BUTTON";
      red.play();
      break;
    case 30:
      h1.innerText = "STOP!";
      stop.play();
      break;
    case 40:
      h1.innerText = "WHY ARE YOU DOING THIS?";
      why.play();
      break;
    case 50:
      h1.innerText = "I WARNED YOU!";
      warn.play();
      break;
    case 70:
      goat.play();
      body.appendChild(momo);
      setTimeout(() => {
        momo.classList.remove("momo");
      }, 1000);
      break;
    case 90:
      scream.play();
      body.appendChild(jeff);
      setTimeout(() => {
        momo.classList.remove("momo");
      }, 1000);
      break;
    case 100:
      location.reload();
      break;
  }
}
