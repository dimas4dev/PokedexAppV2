import { getPokemons } from "../getPokemons";
import _ from "lodash";

describe("Fetching Data from PokeAPI", () => {
  test("Retrieves the data", async () => {
    const { pokemonData } = await getPokemons(
      "https://pokeapi.co/api/v2/pokemon?limit=1&offset=0"
    );
    expect(_.isArray(pokemonData)).toBe(true);
  });
  test("Object data", async () => {
    const { pokemonData } = await getPokemons(
      "https://pokeapi.co/api/v2/pokemon?limit=1&offset=0"
    );
    expect(_.isObject(pokemonData[0])).toBe(true);
  });
  test("Extract Data from Pokemon with ID", async () => {
    const { pokemonData } = await getPokemons(
      "https://pokeapi.co/api/v2/pokemon?limit=1&offset=0"
    );
    expect(pokemonData[0].id).toBeDefined();
  });
  test("Return undefined when data doesnt exist", async () => {
    const { pokemonData } = await getPokemons(
      "https://pokeapi.co/api/v2/pokemon?limit=1&offset=0"
    );
    expect(pokemonData[0].digimon).toBeUndefined();
  });
});
