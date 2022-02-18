import { getPokemons } from "../services/getPokemons";
import { ADD_POKEMONS, POKE_INIT, REMOVE_POKEMONS } from "./actionsTypes";
const initialState = { pokemons: [] };

const addOrRemovePokeFavs = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMONS: {
      const isExistPokemon = state.pokemons.some(
        (pokemon) => pokemon.id === action.payload.id
      );
      if (isExistPokemon) {
        break;
      }

      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    }
    case REMOVE_POKEMONS: {
      return {
        ...state,
        pokemons: state.pokemons.filter(
          (pokemon) => pokemon.id !== action.payload.id
        ),
      };
    }
    default:
      return state;
  }
  return state;
};
const initialPokemonsState = { pokemons: [] };

const initialPokemons = (state = initialPokemonsState, action) => {
  switch (action.type) {
    case POKE_INIT:
      getPokemons();
      return {
        ...state,
      };
    default:
      return state;
  }
};

export { addOrRemovePokeFavs, initialPokemons };
