import * as types from "../types";

const initialState = {
    songs: []
};
const songReducer = (state = initialState,action)=>{
    switch (action.type) {
        case types.GET_SONGS:
            return {...state,songs: action.data}
        default:
            return state;
    }
}

export default songReducer;