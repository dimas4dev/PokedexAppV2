import { ADD_POKEMONS, REMOVE_POKEMONS, POKE_INIT } from "./actionsTypes";
import { getPokemons } from "../services/getPokemons";

const obtainPokemons = () => {
  return async (dispatch) => {
    const pokemons = await getPokemons();
    dispatch(initPokemons(pokemons));
  };
};

const initPokemons = (payload) => {
  return {
    type: POKE_INIT,
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
