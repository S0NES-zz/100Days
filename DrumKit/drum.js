let drums = document.querySelectorAll(".drum");
const folder = "sounds"

drums.forEach((drum) => {
  drum.addEventListener("click", ()=>{
      handleAudio(drum, folder);
  });
});
function handleAudio(drum, folder) {
  let audio;
  switch (drum.innerText) {
    case "w":
      audio = new Audio(folder + "/tom-1.mp3").play();
      break;
    case "a":
      audio = new Audio(folder +"/tom-2.mp3").play();
      break;
    case "s":
      audio = new Audio(folder + "/tom-3.mp3").play();
      break;
    case "d":
      audio = new Audio(folder +"/tom-4.mp3").play();
      break;
    case "j":
      audio = new Audio(folder +"/kick-bass.mp3").play();
      break;
    case "k":
      audio = new Audio(folder +"/snare.mp3").play();
      break;
    case "l":
      audio = new Audio(folder +"/crash.mp3").play();
      break;
    default:
      return;
  }
}
/*
let drums = document.querySelectorAll(".drum");

drums.forEach((drum) => {
  drum.addEventListener("click", () => {
    let audio;
    switch (drum.innerText) {
      case "w":
        audio = new Audio("sounds/tom-1.mp3").play();
        break;
      case "a":
        audio = new Audio("sounds/tom-2.mp3").play();
        break;
      case "s":
        audio = new Audio("sounds/tom-3.mp3").play();
        break;
      case "d":
        audio = new Audio("sounds/tom-4.mp3").play();
        break;
      case "j":
        audio = new Audio("sounds/kick-bass.mp3").play();
        break;
      case "k":
        audio = new Audio("sounds/snare.mp3").play();
        break;
      case "l":
        audio = new Audio("sounds/crash.mp3").play();
        break;
      default:
        return;
    }
  });
});*/