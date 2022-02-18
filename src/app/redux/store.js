import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { addOrRemovePokeFavs, initialPokemons } from "./reducers";

const reducers = combineReducers({
  addOrRemovePokeFavs,
  initialPokemons,
});

const store = createStore(reducers, composeWithDevTools());

export { store };
