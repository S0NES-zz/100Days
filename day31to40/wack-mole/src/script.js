const score = document.querySelector(".score span");
const holes = document.querySelectorAll(".hole");
const playBtn = document.querySelector(".buttons .play");
const stopBtn = document.querySelector(".buttons .stop");
const cursor = document.querySelector(".cursor svg");

window.addEventListener("mousemove", (e) => {
  let coorX = e.pageX;
  let coorY = e.pageY;
  cursor.style.top = coorY - 40 + "px";
  cursor.style.left = coorX - 10 + "px";

  window.addEventListener("click", () => {
    cursor.style.animation = "hit 0.1s ease";
    setTimeout(() => {
      cursor.style.removeProperty("animation");
    }, 100);
  });
});
playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  stopBtn.style.display = "inline-block";

  let hole;
  let points = 0;
  let time = 1000;
  const startGame = setInterval(() => {
    let arrayNo = Math.floor(Math.random() * 9);
    hole = holes[arrayNo];
    let random = Math.floor(Math.random() * 15);
    let image = document.createElement("img");
    image.setAttribute("src", `src/img/enemy${random}.png`);
    image.setAttribute("class", "mole");
    hole.appendChild(image);

    setTimeout(() => {
      hole.removeChild(image);
    }, time);
  }, time + 100);

  window.addEventListener("click", (e) => {
    if (e.target === hole) {
      score.innerText = ++points;
      if(time >= 100){
        time -= 20;
      }
    }
  });

  stopBtn.addEventListener("click", () => {
    clearInterval(startGame);
    stopBtn.style.display = "none";
    playBtn.style.display = "inline-block";
    score.innerText = 0;
  });
});
