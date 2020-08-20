import { combineReducers } from "redux";
import search from "./search";
import movies from './movies'
import favourites from './favourites'

const rootReducer = combineReducers({
  search,
  movies,
  favourites,
});

export default rootReducer;
