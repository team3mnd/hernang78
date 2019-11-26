import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
 
const rootReducer = combineReducers({
  cityReducer,
  itineraryReducer
   });
 
export default rootReducer;
