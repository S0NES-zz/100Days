const container = document.querySelector(".container");
const btn = document.querySelector(".generate");
const result = document.createElement("div");

btn.addEventListener("click", () => {
  btn.classList.add("click");
  getDog();
  setTimeout(() => {
    btn.classList.remove("click");
  }, 200);
});
const getDog = async () => {
  const url = `https://api.thedogapi.com/v1/images/search`;
  const res = await fetch(url);
  const dog = await res.json();
  createDog(dog);
};
function createDog(dog) {
  if (result.innerHTML !== "") {
    result.innerHTML == "";
  }

  result.classList.add("result");
  const breed = dog[0].breeds;
  const { name, temperament, life_span } = breed[0];
  replaced = temperament.replaceAll(',', ' - ');

  const img = dog[0].url;

  const doggyInnerHtml = `<img src=${img} alt=${name} />;
           <div class="info">
             <h2 class="name">Name: <span>${name}</span></h2>
             <p class="lifespan">Lives: <span>Around ${life_span}</span></p>
             <p class="temperament">It's: <span>${replaced}</span></p>
           </div>`;

  result.innerHTML = doggyInnerHtml;

  container.appendChild(result);
}
