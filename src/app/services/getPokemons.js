import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

export const getPokemons = async () => {
  /**
   * @description
   * Hacer una peticion a la API de pokeapi para obtener todos los pokemons con su informacion realizandolo con Fetch
   * @returns 
   *   const request = await fetch(URL).then((response) => response.json());
  const data = request.results;
  const links = data.map((elements) => elements.url);
  const getPromisePokemon = links.map((link) =>
    fetch(link).then((response) => response.json())
  );
  const getInformationPokemon = await Promise.all(getPromisePokemon);
  const pokemonData = getInformationPokemon.map((information) => ({
    name: information.name,
    id: information.id,
  }));
  return pokemonData;
   */

  /**
   * @description
   * Hacer una peticion a la API de pokeapi para obtener todos los pokemons con su informacion realizandolo con Axios
   */

  const request = await axios.get(URL); //Bro este es un cambio chido para mostrar si funciona git flow
  const data = request.data.results;
  const links = data.map((elements) => elements.url);
  const getPromisePokemon = links.map((link) => axios.get(link));
  const getInformationPokemon = await Promise.all(getPromisePokemon);
  const pokemonData = getInformationPokemon.map((information) => ({
    name: information.data.name,
    id: information.data.id,
  }));
  return pokemonData;
};
