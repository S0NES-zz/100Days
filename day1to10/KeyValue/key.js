reset = document.getElementById("reset");
title = document.getElementById("title");
textArea = document.getElementById("textArea");

window.addEventListener("keydown", (e) => {
  e.preventDefault();
  handleTxt(e);
  titleChange(e);
});

function handleTxt(e) {
  textArea.innerHTML +=
    e.type +
    " | keyCode: " +
    e.which +
    " | AltKey: " +
    e.altKey +
    " | CtrlKey: " +
    e.ctrlKey +
    " | ShiftKey: " +
    e.shiftKey +
    " ; " +
    "<br>";
  audio = new Audio("click.mp3").play();
  textArea.scrollTop = textArea.scrollHeight;
}
function titleChange(e) {
  if (e.key == " ") {
    title.innerText = "SPACE";
  } else {
    title.innerText = e.key;
  }
}
reset.addEventListener("click", () => {
  textArea.style = "animation: disappear 0.35s;";
  title.style = "animation: disappear 0.35s;";
  setTimeout(() => {
    title.innerText = "Keyboard Event";
    title.style = "aniamtion: none";
    textArea.innerText = "";
    textArea.style = "animation: none";
  }, 500);
});
