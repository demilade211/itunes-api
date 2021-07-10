import * as types from "../types";

const initialState = {
    albums: []
};
const albumReducer = (state = initialState,action)=>{
    switch (action.type) {
        case types.GET_ALBUMS:
            return {...state,albums: action.data}
        default:
            return state;
    }
}

export default albumReducer;