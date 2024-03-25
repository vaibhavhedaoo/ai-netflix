import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRated } from '../utils/movieSlice';

const useTopRated = () =>{
      // Fetch data from API and update store
  const dispatch = useDispatch();
  const getTopRatedMovie = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
      // .then(response => response.json())
      // .then(response => console.log(response))
      // .catch(err => console.error(err));
      const json = await data.json();
      dispatch(addTopRated(json.results));
      
  } 
  useEffect(()=>{
    getTopRatedMovie();
  },[])
};

export default useTopRated;