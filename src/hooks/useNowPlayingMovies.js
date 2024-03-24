import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addNowPlayingMovies} from "../utils/movieSlice";

const useNowPlayingMovies = () =>{
      // Fetch data from API and update store
  const dispatch = useDispatch();
  const getNowPlayingMovie = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      // .then(response => response.json())
      // .then(response => console.log(response))
      // .catch(err => console.error(err));
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
      //console.log(json.results);
  } 
  useEffect(()=>{
       getNowPlayingMovie();
  },[])
};

export default useNowPlayingMovies;