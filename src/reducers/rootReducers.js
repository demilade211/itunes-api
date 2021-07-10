import { combineReducers } from "redux";
import songReducer from "./songReducer"
import albumReducer from "./albumReducer";

export default combineReducers({
    songReducer,
    albumReducer
})