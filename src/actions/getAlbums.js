import * as types from "../types";

const getAlbums = (data)=>{
    return {
        type: types.GET_ALBUMS,
        data: data
    }
};

export const getAlbumsAsync = () => async (dispatch)=>{
    try {
        let res = await fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json");
        let data = await res.json();
        dispatch(getAlbums(data.feed.entry));
    } catch (error) {
        console.log(error);
    }
} 