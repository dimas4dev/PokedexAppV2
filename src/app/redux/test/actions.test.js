import {
  ADD_POKEMONS,
  REMOVE_POKEMONS,
  OBTAIN_POKEMONS,
} from "../actionsTypes";
import { initPokemons, addPokemons, removePokemons } from "../actions";

describe("Actions Unit Test", () => {
  test("initPokemons Action", () => {
    const payload = {
      pokemons: [{ pokemonData: [], nextPage: "url", prevPage: "url" }],
    };
    const expected = {
      type: OBTAIN_POKEMONS,
      payload,
    };
    expect(initPokemons(payload)).toEqual(expected);
  });
  test("addPokemons Action", () => {
    const payload = {
      pokemons: [
        {
          array: [
            {
              id: 0,
              name: "NombrePokemon",
              types: [],
              height: 1,
              weight: 10,
              sprites: {},
              cantPoke: 5,
            },
          ],
        },
      ],
    };
    const expected = {
      type: ADD_POKEMONS,
      payload,
    };
    expect(addPokemons(payload)).toEqual(expected);
  });
  test("removePokemons Action", () => {
    const payload = {
      pokemons: [
        {
          array: [
            {
              id: 0,
              name: "NombrePokemon",
              types: [],
              height: 1,
              weight: 10,
              sprites: {},
              cantPoke: 5,
            },
          ],
        },
      ],
    };
    const expected = {
      type: REMOVE_POKEMONS,
      payload,
    };
    expect(removePokemons(payload)).toEqual(expected);
  });
});
