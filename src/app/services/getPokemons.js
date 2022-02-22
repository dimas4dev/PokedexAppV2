import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=0&offset=0";

export const getPokemons = async () => {
  /**
   * @description
   * Hacer una peticion a la API de pokeapi para obtener todos los pokemons con su informacion realizandolo con Axios
   */

  const request = await axios.get(URL); //Bro este es un cambio chido para mostrar si funciona git flow
  const data = request.data.results;
  const links = data.map((elements) => elements.url);
  const getPromisePokemon = links.map((link) => axios.get(link));
  const getInformationPokemon = await Promise.all(getPromisePokemon);
  const pokemonData = getInformationPokemon.map(
    (information) => information.data
  );
  console.log(pokemonData);
  return pokemonData;
};
