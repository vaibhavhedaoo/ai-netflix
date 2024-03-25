import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {addPopular} from "../utils/movieSlice";

const usePopular = () =>{
      // Fetch data from API and update store
  const dispatch = useDispatch();
  const getPopularMovie = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
      // .then(response => response.json())
      // .then(response => console.log(response))
      // .catch(err => console.error(err));
      const json = await data.json();
      dispatch(addPopular(json.results));
      
  } 
  useEffect(()=>{
    getPopularMovie();
  },[])
};

export default usePopular;