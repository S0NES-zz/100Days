// Generate random password - https://net-comber.com/charset.html
let generate = document.getElementById("generate");
let resultElement = document.getElementById("result");
let clipboard = document.getElementById("clipboard");

clipboard.addEventListener("click", () => {
  copy();
});

generate.addEventListener("click", () => {
  let result = "";
  for (let i = 0; i < 20; i++) {
    result += getRandomSymbol();
  }
  resultElement.innerText = result;
});

function getRandomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * 126) + 33);
}

function copy() {
  
    var textToCopy = result.innerText;

    var myTemporaryInputElement = document.createElement("input");
    myTemporaryInputElement.type = "text";
    myTemporaryInputElement.value = textToCopy;

    document.body.appendChild(myTemporaryInputElement);

    myTemporaryInputElement.select();
    document.execCommand("Copy");

    document.body.removeChild(myTemporaryInputElement);
}
