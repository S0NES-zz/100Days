for (let i = 0; i <= 99; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  document.querySelector(".container").appendChild(box);
}
const btn = document.querySelector(".btn");
const colorBoxes = document.querySelectorAll(".box");

btn.addEventListener("click", addColor);

function randomHexCode() {
  let chars = "0123456789abcdef";
  let colorLength = 6;
  let color = "";

  for (let i = 0; i < colorLength; i++) {
    let randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }

  return `${color}`;
}

function addColor() {
  colorBoxes.forEach((e) => {
    let newColor = randomHexCode();
    e.style.backgroundColor = `#${newColor}`;
    e.style.borderColor = `#${newColor}66`;
    e.style.boxShadow = "5px 5px 10px 1px #222";
    e.innerText = `#${newColor}`;

    e.addEventListener("click", () => {
      let textToCopy = newColor;
      let temporaryElement = document.createElement("input");
      temporaryElement.type = "text";
      temporaryElement.value = textToCopy;

      document.body.appendChild(temporaryElement);

      temporaryElement.select();
      document.execCommand("Copy");

      document.body.removeChild(temporaryElement);
      e.innerText = "COPIED";

      setTimeout(() => {
        e.innerText = `#${newColor}`;
      }, 500);
    });
  });
}
