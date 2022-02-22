import { ADD_POKEMONS, REMOVE_POKEMONS, OBTAIN_POKEMONS } from "./actionsTypes";
import { getPokemons } from "../services/getPokemons";

const obtainPokemons = (url) => {
  return async (dispatch) => {
    const pokemons = await getPokemons(url);
    dispatch(initPokemons(pokemons));
  };
};

const initPokemons = (payload) => {
  return {
    type: OBTAIN_POKEMONS,
    payload: payload,
  };
};
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

export { obtainPokemons, addPokemons, removePokemons, initPokemons };
