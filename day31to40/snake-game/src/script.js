import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  start as startSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";
import { resetDirection } from "./input.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");
let resetPage = document.querySelector(".reset-page");

let btn = document.getElementById("header");
let toggle = false;
let root = document.body;
let reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  startSnake();
  resetDirection();
    resetPage.style.display = "none";
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (toggle == false) {
    darkMode();
    toggle = true;
  } else {
    lightMode();
    toggle = false;
  }
});

function lightMode() {
  root.style.setProperty("--bg", "hsl(0, 0%, 100%)");
  root.style.setProperty("--gameBg", "hsl(227, 47%, 96%)");
  root.style.setProperty("--txtColor", "hsl(230, 17%, 14%)");

  root.style.setProperty("--txtColorLight", "hsl(230, 17%, 50%)");
}
function darkMode() {
  root.style.setProperty("--bg", " hsl(230, 17%, 14%)");
  root.style.setProperty("--txtColorLight", "hsl(227, 47%, 96%)");
  root.style.setProperty("--gameBg", "hsl(227, 47%, 96%)");
  root.style.setProperty("--txtColor", "hsl(0, 0%, 100%)");
}

function main(currentTime) {
  if (gameOver) {
    resetPage.style.display = "flex";
  }

  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
