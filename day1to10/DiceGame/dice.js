let btn, img, dice1, dice2;

btn = document.getElementById("jogar");
title = document.getElementById("title");
player1 = document.getElementById("player1");
player2 = document.getElementById("player2");

btn.addEventListener("click", () => {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById("img1").src = "images/dice" + dice1 + ".png";
  document.getElementById("img2").src = "images/dice" + dice2 + ".png";

  if (dice1 === dice2) {
    title.innerText = "DRAW";
  } else if (dice1 > dice2) {
    title.innerText = player1.innerText + " won";
  } else {
    title.innerText = player2.innerText + " won";
  }
});

/* 2 way maybe?

let btn, img;

btn = document.getElementById("jogar");
imgs = document.querySelectorAll("img");

btn.addEventListener("click", () => {
  for (img of imgs) {
    let value = Math.floor(Math.random() * 6) + 1;
    img.src = "images/dice" + value + ".png";
    img.alt = "" + value;
  }
});
*/
