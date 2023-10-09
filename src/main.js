// import { type } from './dataFunctions.js';
import data from "./data/pokemon/pokemon.js";
import { filterByResistant, filterByType } from "./dataFunctions.js";

// console.log(filterType(data.pokemon, "grass"));

const pokemons = data.pokemon;

const pokemonsContainer = document.getElementById("pokemonsContainer");

pokemonsContainer.innerHTML = "";
pokemons.forEach((pokemon) => {
  const pokemonCard = document.createElement("li");
  pokemonCard.setAttribute("class", "contenedor-imagen-pokemon");
  pokemonCard.innerHTML = `
  <p class="pokename">${pokemon.name}</p>
      <img class="img-pokemon" id="imagePokemon" src="${pokemon.img}"> 
      <p class="poketipo">${pokemon.type}<p>
      `;
  pokemonsContainer.appendChild(pokemonCard);
});
/*const NumberCount = document.querySelector("li[data-testid='number-count']");*/

const filterType = document.querySelector("select[data-testid='filter-type']");

filterType.addEventListener("change", function () {
  const selectValue = filterType.value;
  const pokemonsFiltered = filterByType(pokemons, selectValue);
  pokemonsContainer.innerHTML = "";
  pokemonsFiltered.forEach((pokemon) => {
    const pokemonCard = document.createElement("li");
    pokemonCard.setAttribute("class", "contenedor-imagen-pokemon");
    pokemonCard.innerHTML = `
  <p class="pokename">${pokemon.name}</p>
      <img class="img-pokemon" id="imagePokemon" src="${pokemon.img}"> 
      <p class="poketipo">${pokemon.type}<p>
      `;
    pokemonsContainer.appendChild(pokemonCard);
  });
});

const filterResistant = document.querySelector(
  "select[data-testid='filter-resistant']"
);

filterResistant.addEventListener("change", function () {
  const selectValue = filterResistant.value;
  const pokemonsFiltered = filterByResistant(pokemons, selectValue);
  pokemonsContainer.innerHTML = "";
  pokemonsFiltered.forEach((pokemon) => {
    const pokemonCard = document.createElement("li");
    pokemonCard.setAttribute("class", "contenedor-imagen-pokemon");
    pokemonCard.innerHTML = `
  <p class="pokename">${pokemon.name}</p>
      <img class="img-pokemon" id="imagePokemon" src="${pokemon.img}"> 
      <p class="poketipo">${pokemon.type}<p>
      `;
    pokemonsContainer.appendChild(pokemonCard);
  });
});



const limpiarBusqueda = document.getElementById("limpiarBusqueda");

limpiarBusqueda.addEventListener("click", function () {
  // Restablece los filtros a su estado predeterminado
  const filterType = document.querySelector(
    "select[data-testid='filter-type']"
  );
  filterType.selectedIndex = 0;

  const filterResistant = document.querySelector(
    "select[data-testid='filter-resistant']"
  );
  filterResistant.selectedIndex = 0;

  // Vuelve a mostrar todos los Pokémon sin filtros
  pokemonsContainer.innerHTML = "";
  pokemons.forEach((pokemon) => {
    const pokemonCard = document.createElement("li");
    pokemonCard.setAttribute("class", "contenedor-imagen-pokemon");
    pokemonCard.innerHTML = `
      <p class="pokename">${pokemon.name}</p>
      <img class="img-pokemon" id="imagePokemon" src="${pokemon.img}"> 
      <p class="poketipo">${pokemon.type}<p>
    `;
    pokemonsContainer.appendChild(pokemonCard);
  });
});
