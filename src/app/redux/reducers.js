import { ADD_POKEMONS, REMOVE_POKEMONS, OBTAIN_POKEMONS } from "./actionsTypes";
const initialState = { pokemons: [] };

const addOrRemovePokeFavs = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMONS: {
      const isExistPokemon = state.pokemons.some(
        (pokemon) => pokemon.id === action.payload.id && pokemon.cantPoke > 0
      );

      if (isExistPokemon) {
        return {
          ...state,
          pokemons: state.pokemons.map((pokemon) =>
            pokemon.id === action.payload.id
              ? { ...pokemon, cantPoke: pokemon.cantPoke + 1 }
              : pokemon
          ),
        };
      }
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    }
    case REMOVE_POKEMONS: {
      const isExistPokemon = state.pokemons.some(
        (pokemon) => pokemon.id === action.payload.id && pokemon.cantPoke === 1
      );
      const isMoreThanOnePokemon = state.pokemons.some(
        (pokemon) => pokemon.id === action.payload.id && pokemon.cantPoke > 1
      );
      if (isMoreThanOnePokemon) {
        return {
          ...state,
          pokemons: state.pokemons.map((pokemon) =>
            pokemon.id === action.payload.id
              ? { ...pokemon, cantPoke: pokemon.cantPoke - 1 }
              : pokemon
          ),
        };
      }

      if (isExistPokemon) {
      }
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
