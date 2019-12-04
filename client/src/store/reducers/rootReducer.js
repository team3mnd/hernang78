import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import sesionReducer from "./sesionReducer";
import commentReducer from "./commentReducer";
 
const rootReducer = combineReducers({
  cityReducer,
  itineraryReducer,
  sesionReducer,
  commentReducer
   });
 
export default rootReducer;
