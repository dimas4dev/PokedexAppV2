import {
  ADD_POKEMONS,
  REMOVE_POKEMONS,
  OBTAIN_POKEMONS,
} from "../actionsTypes";
import { addOrRemovePokeFavs, initialPokemons } from "../reducers";

describe("Reducers Unit Testing", () => {
  describe("Testing initialStates from reducers", () => {
    test("Should return initialState from initialPokemons", () => {
      expect(initialPokemons({}, "")).toEqual({});
    });
    test("Should return initialState from addOrRemovePokeFavs", () => {
      expect(addOrRemovePokeFavs({}, "")).toEqual({});
    });
  });
  describe("Testing addOrRemovePokeFavs Reducer", () => {
    test("Adding pokemons to the cart", () => {
      const initialState = { pokemons: [] };
      const payload = [];
      const action = {
        type: "ADD_POKEMONS",
        payload,
      };
      const expected = {
        pokemons: [[]],
      };
      expect(addOrRemovePokeFavs(initialState, action)).toEqual(expected);
    });
    test("Removig pokemons from the cart", () => {
      const initialState = { pokemons: [] };
      const payload = [];
      const action = {
        type: "REMOVE_POKEMONS",
        payload,
      };
      const expected = {
        pokemons: [],
      };
      expect(addOrRemovePokeFavs(initialState, action)).toEqual(expected);
    });
  });
});
