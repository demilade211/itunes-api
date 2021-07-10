import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducers"

const middleware = [thunk, logger];
const initialReduxState = {};
const reduxStore = createStore(rootReducer,initialReduxState,applyMiddleware(...middleware))

export default reduxStore;