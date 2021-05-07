const valueA = document.getElementById("sideValueA");
const valueB = document.getElementById("sideValueB");
const valueC = document.getElementById("sideValueC");
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const audio = document.querySelector("audio");
const btn = document.querySelector(".calculate");
const result = document.getElementById("textResult");

inputA.addEventListener("input", () => {
  valueA.innerText = inputA.value;
});
inputB.addEventListener("input", () => {
  valueB.innerText = inputB.value;
});

btn.addEventListener("click", () => {
  let a = inputA.value;
  let b = inputB.value;
  let c = calculate(a, b);
  showResult(a, b, c);
});
function showResult(a, b, c) {
  let sqrtA = Math.pow(a, 2);
  let sqrtB = Math.pow(b, 2);
  setTimeout(() => {
    result.innerHTML = `c² = ${a}² + ${b}² <br/>`;
    valueC.innerText = 'C';
    audio.play();
  }, 500);
  setTimeout(() => {
    result.innerHTML += `c² = ${sqrtA} + ${sqrtB} <br/>`;
    audio.play();
  }, 1000);
  setTimeout(() => {
    result.innerHTML += `c² = ${sqrtA + sqrtB} <br/>`;
    audio.play();
  }, 1500);
  setTimeout(() => {
    result.innerHTML += `c = &radic;${c}<br/>`;
    audio.play();
  }, 2000);
  setTimeout(() => {
    result.innerHTML += `c = ${c}`;
    audio.play();
    valueC.innerText = c;
  }, 2500);
}
function calculate(a, b) {
  let c;
  c = Math.floor(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
  return c;
}
