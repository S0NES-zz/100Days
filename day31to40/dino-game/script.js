const dino = document.querySelector(".dino");
let tiles = [
  { x: 1, y: 10 },
  { x: 2, y: 10 },
  { x: 3, y: 10 },
  { x: 4, y: 10 },
  { x: 5, y: 10 },
  { x: 6, y: 10 },
  { x: 7, y: 10 },
  { x: 8, y: 10 },
  { x: 9, y: 10 },
  { x: 10, y: 10 },
  { x: 11, y: 10 },
  { x: 12, y: 10 },
  { x: 13, y: 10 },
  { x: 14, y: 10 },
  { x: 15, y: 10 },
  { x: 16, y: 10 },
  { x: 17, y: 10 },
  { x: 18, y: 10 },
];
const gameBoard = document.querySelector(".grid");
let posiX = tiles.length;
let enemyElement = 0;
let random = Math.floor(Math.random() * 3) + 1;
let position = 10;
let life = 10;
let score = 0;
let gameOver;
function control(e) {
  switch (e.keyCode) {
    case 32:
      jump();
      break;
    case 38:
      jump();
      break;
    case 87:
      jump();
      break;
  }
}
function jump() {
  if (position === 10) {
    position += 15;
    dino.style.bottom = `${position}%`;
    dino.style.animation = "none";
    setTimeout(() => {
      dino.style.bottom = "10%";
      dino.style.animation = "walk 1s linear infinite";
      position -= 15;
    }, 200);
  }
}
function drawTile(gameBoard) {
  for (let i = 0; i < tiles.length; i++) {
    const tileElement = document.createElement("div");
    tileElement.style.gridRowStart = tiles[i].y;
    tileElement.style.gridColumnStart = tiles[i].x;
    if (i === 0) {
      tileElement.style.background = "url(img/1.png)";
      tileElement.style.backgroundSize = "cover";
    }
    if (i === tiles.length - 1) {
      tileElement.style.background = "url(img/3.png)";
      tileElement.style.backgroundSize = "cover";
    }
    tileElement.classList.add("tile");
    gameBoard.appendChild(tileElement);
  }
}
function drawEnemy() {
  let randomImage = Math.floor(Math.random() * 3) + 1;
  let randomTime = 2000;
  let enemyPosition = 1000;

  const enemy = document.createElement("div");
  const dino = document.querySelector(".dino");

  let dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );

  enemy.classList.add("enemy");
  enemy.style.backgroundImage = `url(img/enemy${randomImage}.png)`;
  gameBoard.appendChild(enemy);
  enemy.style.left = `${enemyPosition}px`;

  let timerId = setInterval(() => {
    if (enemy.style.left === 0) {
      clearInterval(timerId);
      enemy = 0;
    }
    enemyPosition -= 10;
    if (enemyPosition < 61 && enemyPosition > 31 && dinoBottom <= 29) {
      life -= 0.25;
      checkDeath();
    } else if (enemyPosition == 0) {
      score += 10;
    }
    enemy.style.left = `${enemyPosition}px`;
  }, 25);

  document.getElementById("life-value").innerText = Math.floor(life);
  document.getElementById("score-value").innerText = Math.floor(score);
  checkDeath();
  setTimeout(drawEnemy, randomTime);
}
function checkDeath() {
  if (life === 0) {
    document.querySelector(".lost-page").style.display = "flex";
  }
}

document.querySelector("button").addEventListener("click", () => {
  window.location.reload();
});
document.addEventListener("keyup", control);
drawTile(gameBoard);
drawEnemy();