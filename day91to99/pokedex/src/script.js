const poke_container = document.getElementById("poke_container");
const search = document.getElementById("searchValue");
const btn = document.querySelector(".find")

const colors = {
  grass: "#3E9709",
  fire: "#F67F0B",
  water: "#0A7ABC",
  normal: "#CCC9AA",
  flying: "#5EB9B2",
  bug: "#BDDD6E",
  poison: "#A819D7",
  electric: "#FFFA24",
  ground: "#E1D158",
  fighting: "#E81319",
  psychic: "#EC0E63",
  rock: "#776A3E",
  ice: "#1995A1",
  ghost: "#8E55A4",
  dragon: "#8A55FD",
  dark: "#5F4632",
  steel: "#7B8E8A",
  fairy: "#FFA0C2",
};
const main_types = Object.keys(colors);

btn.addEventListener("click", () => {
  getPokemon(search.value.toLowerCase());
});

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${
              pokemon.id
            }.png" alt="${name}" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id
              .toString()
              .padStart(3, "0")}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

  pokemonEl.innerHTML = pokeInnerHTML;

  poke_container.appendChild(pokemonEl);
}