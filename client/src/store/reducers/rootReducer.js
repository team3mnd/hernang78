import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import sesionReducer from "./sesionReducer";
import favouriteReducer from "./favouriteReducer";

const rootReducer = combineReducers({
  cityReducer,
  itineraryReducer,
  sesionReducer,
  favouriteReducer
});

export default rootReducer;
