const drums = document.querySelectorAll(".drum");
const folder = "sounds";

const AudiosTypes = (type) => {
  const audios = {
    w: () => new Audio(folder + "/tom-1.mp3").play(),
    a: () => new Audio(folder + "/tom-2.mp3").play(),
    s: () => new Audio(folder + "/tom-3.mp3").play(),
    d: () => new Audio(folder + "/tom-4.mp3").play(),
    j: () => new Audio(folder + "/kick-bass.mp3").play(),
    k: () => new Audio(folder + "/snare.mp3").play(),
    l: () => new Audio(folder + "/crash.mp3").play(),
  };

  return audios[type]() || null;
};

for (const drum of drums) {
  drum.addEventListener("click", () => {
    AudiosTypes(drum.textContent);
  });
}