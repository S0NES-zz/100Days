const planetInput = document.querySelectorAll(".planetInput");
const planetLabel = document.querySelectorAll(".planetLabel");
const planetBg = document.getElementById("planet");
const planetName = document.getElementById("text");

shadow();
for (let i = 0; i < planetInput.length; i++) {
  planetLabel[i].addEventListener("click", () => {
    let currentPlanet = planetInput[i];

    document.documentElement.style.setProperty(
      "--colorBoxShadow",
      currentPlanet.value
    );
    var urlString = `url(src/img/${currentPlanet.id}.jpg)`;

    planetBg.style.setProperty("background-image", urlString);
    // planetBg.style.backgroundImage = urlString;
    planetName.innerText = currentPlanet.id;

    shadow();
  });
}

function shadow() {
  planetName.innerHTML = planetName.textContent.replace(
    /\S/g,
    "<span>$&</span>"
  );

  const letters = document.querySelectorAll("span");
  letters.forEach((letter) => {
    letter.addEventListener("mouseenter", () => {
      letter.classList.remove("desactive");
      letter.classList.add("active");
      setTimeout(() => {
        letter.classList.remove("active");
        letter.classList.add("desactive");
      }, 1000);
    });
  });
}
