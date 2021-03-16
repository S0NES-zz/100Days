let drums = document.querySelectorAll(".drum");
const folder = "sounds";

drums.forEach((drum) => {
  drum.addEventListener("click", () => {
    handleAudioClick(drum, folder);
  });

  document.addEventListener("keydown", function (event) {
    makeSound(event.key, folder);
  });
});

function handleAudioClick(drum, folder) {
  switch (drum.innerText) {
    case "w":
      audio = new Audio(folder + "/tom-1.mp3").play();
      break;
    case "a":
      audio = new Audio(folder + "/tom-2.mp3").play();
      break;
    case "s":
      audio = new Audio(folder + "/tom-3.mp3").play();
      break;
    case "d":
      audio = new Audio(folder + "/tom-4.mp3").play();
      break;
    case "j":
      audio = new Audio(folder + "/kick-bass.mp3").play();
      break;
    case "k":
      audio = new Audio(folder + "/snare.mp3").play();
      break;
    case "L":
      audio = new Audio(folder + "/crash.mp3").play();
      break;
    default:
      return;
  }
}
function makeSound(key, folder) {
  switch (key) {
    case "w":
      audio = new Audio(folder + "/tom-1.mp3").play();
      break;
    case "a":
      audio = new Audio(folder + "/tom-2.mp3").play();
      break;
    case "s":
      audio = new Audio(folder + "/tom-3.mp3").play();
      break;
    case "d":
      audio = new Audio(folder + "/tom-4.mp3").play();
      break;
    case "j":
      audio = new Audio(folder + "/kick-bass.mp3").play();
      break;
    case "k":
      audio = new Audio(folder + "/snare.mp3").play();
      break;
    case "l":
      audio = new Audio(folder + "/crash.mp3").play();
      break;
    default:
      return;
  }
}
