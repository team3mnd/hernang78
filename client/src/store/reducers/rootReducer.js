import { combineReducers } from "redux";
import cityReducer from "./cityReducer";

const rootReducer = combineReducers(
    { 
        cityReducer:cityReducer 
    });

export default rootReducer;
