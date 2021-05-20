let change = document.getElementById("change");
let value = document.getElementById("value");

change.addEventListener("click", () => {
  let value1 = randomColor();
  let value2 = randomColor();
  let value3 = randomColor();
  console.log(value1, value2, value3);
  document.documentElement.style.setProperty(
    "--bgColor",
    `rgb(${value1},${value2},${value3})`
  );

  value.innerText = `RGB(${value1},${value2},${value3})`;
});
value.addEventListener("click", () => {
  let textToCopy = value.innerText;
  let temporaryElement = document.createElement("input");
  temporaryElement.type = "text";
  temporaryElement.value = textToCopy;

  document.body.appendChild(temporaryElement);

  temporaryElement.select();
  document.execCommand("Copy");

  document.body.removeChild(temporaryElement);
  value.innerText = "COPIED";
  setTimeout(() => {
    value.innerText = textToCopy;
  }, 500);
});
function randomColor() {
  const random = Math.floor(Math.random() * 255) + 1;
  return random;
}
