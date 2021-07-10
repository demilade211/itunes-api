import * as types from "../types";

const getSongs = (data)=>{
    return {
        type: types.GET_SONGS,
        data: data
    }
};

export const getSongsAsync = () => async (dispatch)=>{
    try {
        let res = await fetch("https://itunes.apple.com/us/rss/topsongs/limit=100/json");
        let data = await res.json();
        dispatch(getSongs(data.feed.entry));
    } catch (error) {
        console.log(error);
    }
} 