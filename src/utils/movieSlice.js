import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayignMovies :null,
        trailerVideo : null,
        popular : null,
        topRated : null,
        upcoming : null
    },
    reducers : {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayignMovies = action.payload;
        },
        addTrailerVideo : (state, action) =>{
            state.trailerVideo = action.payload
        },
        addPopular : (state, action) => {
            state.popular = action.payload 
        },
        addTopRated : (state,action) =>{
            state.topRated =  action.payload 
        },
        addUpComing : (state,action) => {
            state.upcoming  = action.payload
        }
    }

});

export const {addNowPlayingMovies,addTrailerVideo,addPopular, addTopRated,addUpComing}  = movieSlice.actions;

export default movieSlice.reducer;