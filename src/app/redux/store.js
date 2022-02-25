import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { addOrRemovePokeFavs, initialPokemons } from "./reducers";

const reducers = combineReducers({
  addOrRemovePokeFavs,
  initialPokemons,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
