let food = getRandomFoodPosiion();
const expansion_rate = 1;
import { expandSnake, onSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

export function update() {
  if (onSnake(food)) {
    expandSnake(expansion_rate);
    food = getRandomFoodPosiion();
    audio = new Audio("src/click.mp3").play();
  }
  
}
export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosiion() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
