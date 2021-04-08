const cardArray = [
  {
    name: "controller",
    img: "img/controller.svg",
  },
  {
    name: "controller",
    img: "img/controller.svg",
  },
  {
    name: "gift",
    img: "img/gift.svg",
  },
  {
    name: "gift",
    img: "img/gift.svg",
  },
  {
    name: "key",
    img: "img/key.svg",
  },
  {
    name: "key",
    img: "img/key.svg",
  },
  {
    name: "location",
    img: "img/location.svg",
  },
  {
    name: "location",
    img: "img/location.svg",
  },
  {
    name: "magnet",
    img: "img/magnet.svg",
  },
  {
    name: "magnet",
    img: "img/magnet.svg",
  },
  {
    name: "seat",
    img: "img/seat.svg",
  },
  {
    name: "seat",
    img: "img/seat.svg",
  },
  {
    name: "sun",
    img: "img/sun.svg",
  },
  {
    name: "sun",
    img: "img/sun.svg",
  },
  {
    name: "wifi",
    img: "img/wifi.svg",
  },
  {
    name: "wifi",
    img: "img/wifi.svg",
  },
  {
    name: "heart",
    img: "img/heart.svg",
  },
  {
    name: "heart",
    img: "img/heart.svg",
  },
  {
    name: "phone",
    img: "img/phone.svg",
  },
  {
    name: "phone",
    img: "img/phone.svg",
  },
];

let radios = document.querySelectorAll('input[type="radio"]');
let mode;
let arrayMode = [];
let time;
radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    mode = radio.value;
    switch (mode) {
      case "ease":
        const easeMode = cardArray.length - 12;
        for (let i = 0; i < easeMode; i++) {
          arrayMode.push(cardArray[i]);
        }
        time = 400;
        break;
      case "normal":
        const normalMode = cardArray.length - 8;
        for (let i = 0; i < normalMode; i++) {
          arrayMode.push(cardArray[i]);
        }
        time = 300;
        break;
      case "hard":
        const hardMode = cardArray.length - 4;
        for (let i = 0; i < hardMode; i++) {
          arrayMode.push(cardArray[i]);
        }
        time = 200;
        break;
      case "extreme":
        const extremeMode = cardArray.length;
        for (let i = 0; i < extremeMode; i++) {
          arrayMode.push(cardArray[i]);
        }
        time = 100;
        break;
      default:
        return;
    }

    createBoard();
    radio.parentNode.parentNode.style.display = "none";
  });
});

const grid = document.querySelector(".memory-game");
const resultDisplay = document.getElementById("result");
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

arrayMode = arrayMode.sort(() => (0.5 - Math.random()));

function createBoard() {
  console.log(arrayMode);
  for (let i = 0; i < arrayMode.length; i++) {
    let card = document.createElement("div");
    let img = document.createElement("img");

    card.setAttribute("class", "card");
    img.setAttribute("src", "img/blank.svg");
    img.setAttribute("data-id", i);

    card.appendChild(img);

    card.addEventListener("click", (e) => {
      flipCard(e);
    });

    grid.appendChild(card);
  }
}
function checkForMatch() {
  let cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    cards[optionOneId].setAttribute("src", "img/done.svg");
    cards[optionTwoId].setAttribute("src", "img/done.svg");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  }
  if (cardsChosen[0] !== cardsChosen[1]) {
    cards[optionOneId].setAttribute("src", "img/blank.svg");
    cards[optionTwoId].setAttribute("src", "img/blank.svg");
    cards[optionOneId].parentNode.style.background = "var(--linearBack)";
    cards[optionTwoId].parentNode.style.background = "var(--linearBack)";
  }
  cardsChosen = [];
  cardsChosenId = [];

  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === arrayMode.length / 2) {
    resultDisplay.parentNode.textContent =
      "Congratulations! You found them All";
  }
}

function flipCard(e) {
  let cardId = e.target.getAttribute("data-id");
  cardsChosen.push(arrayMode[cardId].name);
  cardsChosenId.push(cardId);
  e.target.setAttribute("src", arrayMode[cardId].img);
  e.target.parentNode.style.background = "var(--linearFront)";
  if (cardsChosen.length === 2) {
    setTimeout(() => {
      checkForMatch(e);
    }, time);
  }
}
