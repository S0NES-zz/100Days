let p = document.querySelector("div p");
let i = 0;
let audio = document.querySelector("audio");
let load = document.querySelector(".load");
let svg = document.querySelector(".load svg");

setInterval(() => {
  i++;
  verify();
}, 1000);

function verify() {
  switch (i) {
    case 10:
      audio.play();
      audio.volume = 0.25;
      break;
    case 100:
      p.innerText = "Patience is a virtue";
      p.parentElement.style.width = "280px";
      break;
    case 1000:
      p.innerText = "Patience is bitter but its fruit is sweet";
      p.parentElement.style.width = "490px";
      break;
    case 10000:
      p.innerText = "WTF go do something else man";
      p.parentElement.style.width = "430px";
      break;
    case 100000:
      p.innerText = "OK! you win";
      p.parentElement.style.width = "190px";
      svg.style.display = "none";
      load.style.backgroundImage = "url(src/tetris.png)";
      load.style.height = "400px";
      break;
  }
}
