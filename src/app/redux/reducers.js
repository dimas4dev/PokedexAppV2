import { ADD_POKEMONS, REMOVE_POKEMONS, OBTAIN_POKEMONS } from "./actionsTypes";
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

const initialPokemons = (state = initialState, action) => {
  switch (action.type) {
    case OBTAIN_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};

export { addOrRemovePokeFavs, initialPokemons };
