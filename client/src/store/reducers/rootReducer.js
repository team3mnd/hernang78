import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import sesionReducer from "./sesionReducer";
 
const rootReducer = combineReducers({
  cityReducer,
  itineraryReducer,
  sesionReducer
   });
 
export default rootReducer;
