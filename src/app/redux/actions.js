import { ADD_POKEMONS, REMOVE_POKEMONS, POKE_INIT } from "./actionsTypes";

const addPokemons = (payload) => {
  return {
    type: ADD_POKEMONS,
    payload,
  };
};

const removePokemons = (payload) => {
  return {
    type: REMOVE_POKEMONS,
    payload: payload,
  };
};

const initPokemons = (payload) => {
  return {
    type: POKE_INIT,
    payload: payload,
  };
};
export { addPokemons, removePokemons, initPokemons };
